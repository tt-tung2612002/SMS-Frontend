import { DeleteButton, EditButton } from "@refinedev/antd";
import { useNavigation, useResourceParams, useShow } from "@refinedev/core";

import {
  CalendarOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  EditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Button, Modal, Skeleton, Space, Tag } from "antd";
import dayjs from "dayjs";

import { Text, UserTag } from "@/components";
import { Event } from "@/graphql/new/customSchema";

import { CALENDAR_GET_EVENT_QUERY } from "./queries";

export const CalendarShowPage: React.FC = () => {
  const { id } = useResourceParams();
  const { list } = useNavigation();

  const { queryResult } = useShow<Event>({
    id,
    resource: "event",
    dataProviderName: "local",
    meta: {
      gqlQuery: CALENDAR_GET_EVENT_QUERY,
    },
  });

  const { data, isLoading, isError, error } = queryResult;

  if (isError) {
    console.error("Error fetching event", error);
    return null;
  }

  const { description, startDate, endDate, participants, lesson } =
    data?.data ?? {};
  const teacher = lesson?.class?.teacher;

  const utcStartDate = dayjs(startDate).utc();
  const utcEndDate = dayjs(endDate).utc();

  // if the event is more than one day, don't show the time
  let allDay = false;
  // check if more then 23 hours
  if (utcEndDate.diff(utcStartDate, "hours") >= 23) {
    allDay = true;
  }

  const handleOnClose = () => {
    list("events");
  };

  return (
    <Modal
      title={
        <Space
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          <Space style={{ display: "flex", gap: "8px" }}>
            <Space
              style={{
                backgroundColor: data?.data.color,
                flexShrink: 0,
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                marginTop: "8px",
              }}
            />
            <Text strong size="xxl" style={{ fontSize: "28px" }}>
              {data?.data.title}
            </Text>
          </Space>
          <Space style={{ display: "flex", gap: "4px" }}>
            <DeleteButton
              hideText
              type="text"
              onSubmit={() => {
                list("events");
              }}
              recordItemId={parseInt(id?.toString() ?? "", 10)}
              accessControl={{
                hideIfUnauthorized: true,
              }}
            />
            <EditButton icon={<EditOutlined />} hideText type="text" />
            <Button
              icon={<CloseOutlined />}
              type="text"
              onClick={handleOnClose}
            />
          </Space>
        </Space>
      }
      closeIcon={false}
      open
      onCancel={handleOnClose}
      width={750}
    >
      {isLoading ? (
        <Skeleton
          loading={isLoading}
          active
          avatar
          paragraph={{
            rows: 3,
          }}
          style={{
            padding: 0,
          }}
        />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {allDay ? (
            <div>
              <CalendarOutlined style={{ marginRight: ".5rem" }} />
              <Text>{`${dayjs(utcStartDate).format("MMMM D")} - ${dayjs(
                utcEndDate
              ).format("MMMM D")}`}</Text>
              <Tag style={{ marginLeft: ".5rem" }} color="blue">
                All Day
              </Tag>
            </div>
          ) : (
            <>
              <div>
                <CalendarOutlined style={{ marginRight: ".5rem" }} />
                <Text size="lg">
                  {dayjs(utcStartDate).format("MMMM D, YYYY dddd")}
                </Text>
              </div>
              <div>
                <ClockCircleOutlined style={{ marginRight: ".5rem" }} />
                <Text size="lg">{`${dayjs(utcStartDate).format(
                  "h:mm A"
                )} - ${dayjs(utcEndDate).format("h:mm A")}`}</Text>
              </div>
            </>
          )}

          <div style={{ display: "flex", alignItems: "start" }}>
            <Text size="lg" style={{ display: "list-item" }}>
              Students Attending: {"  "}
            </Text>

            <Space size={10} style={{ marginLeft: "10px" }}>
              {participants?.nodes?.map((participant) => (
                <UserTag key={participant.id} user={participant} />
              ))}
            </Space>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <Text size="lg" style={{ display: "list-item" }}>
              Teacher: {"  "}
            </Text>

            <Space size={10} wrap style={{ marginLeft: "10px" }}>
              <UserTag key={teacher?.id} user={teacher?.userInfoById ?? {}} />
            </Space>
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <InfoCircleOutlined
              style={{
                marginRight: ".5rem",
                marginTop: "0.32rem",
              }}
            />
            <Text>{description}</Text>
          </div>
        </div>
      )}
    </Modal>
  );
};
