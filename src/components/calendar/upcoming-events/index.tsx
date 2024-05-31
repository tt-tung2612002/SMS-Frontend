import React from "react";

import { CrudFilter, useList, useNavigation, useOne } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { CalendarOutlined, RightCircleOutlined } from "@ant-design/icons";
import type { CardProps } from "antd";
import { Skeleton as AntdSkeleton, Button, Card, Space } from "antd";
import dayjs from "dayjs";

import { UpcomingEventsQuery } from "@/graphql/types";

import { User } from "@/graphql/new/customSchema";
import useRoleCheck from "@/hooks/useRoleCheck";
import {
  GET_ACTIVE_STUDENT_FOR_EVENTS,
  GET_ACTIVE_TEACHER_FOR_EVENTS,
} from "@/routes/classes/queries/getOneUser";
import { Text } from "../../text";
import { CalendarUpcomingEvent } from "./event";
import styles from "./index.module.css";
import { CALENDAR_UPCOMING_EVENTS_QUERY } from "./queries";

type CalendarUpcomingEventsProps = {
  limit?: number;
  cardProps?: CardProps;
  showGoToListButton?: boolean;
};

const NoEvent: React.FC = () => (
  <Space
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "220px",
    }}
  >
    No Upcoming Event
  </Space>
);

const Skeleton: React.FC = () => {
  return (
    <div className={styles.item}>
      <Space
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "24px",
          padding: "1px 0",
        }}
      >
        <AntdSkeleton.Button
          active
          style={{
            height: "14px",
          }}
        />
        <AntdSkeleton.Button
          active
          style={{
            width: "90%",
            marginTop: "8px",
            height: "16px",
          }}
        />
      </Space>
    </div>
  );
};

export const CalendarUpcomingEvents: React.FC<CalendarUpcomingEventsProps> = ({
  limit = 5,
  cardProps,
  showGoToListButton,
}) => {
  const { list } = useNavigation();
  const { isStudent, isTeacher } = useRoleCheck();
  const userId = sessionStorage.getItem("userId");
  const filters: CrudFilter[] = [
    {
      field: "startDate",
      operator: "gte",
      value: dayjs().utc().format("YYYY-MM-DD"),
    },
  ];

  const { data: lessonsQueryStudent } = useOne<User>({
    resource: "user",
    liveMode: "auto",
    meta: {
      gqlQuery: GET_ACTIVE_STUDENT_FOR_EVENTS,
    },
    id: parseInt(userId ?? "0"),
  });

  const { data: lessonsQueryTeacher } = useOne<User>({
    resource: "user",
    liveMode: "auto",
    meta: {
      gqlQuery: GET_ACTIVE_TEACHER_FOR_EVENTS,
    },
    id: parseInt(userId ?? "0"),
  });

  const studentLessonIds =
    lessonsQueryStudent?.data?.classes?.nodes
      .flatMap((classNode) => classNode.lessons.nodes)
      .map((lessonNode) => lessonNode.id) ?? [];

  const teacherLessonIds =
    lessonsQueryTeacher?.data?.classesByTeacherId?.nodes
      .flatMap((classNode) => classNode.lessons.nodes)
      .map((lessonNode) => lessonNode.id) ?? [];

  if (isStudent) {
    filters.push({
      field: "id",
      operator: "in",
      value: studentLessonIds,
    });
  } else if (isTeacher) {
    filters.push({
      field: "id",
      operator: "in",
      value: teacherLessonIds,
    });
  }

  const { data, isLoading } = useList<GetFieldsFromList<UpcomingEventsQuery>>({
    resource: "events",
    pagination: {
      pageSize: limit,
    },
    sorters: [
      {
        field: "startDate",
        order: "asc",
      },
    ],
    filters: filters,
    meta: {
      gqlQuery: CALENDAR_UPCOMING_EVENTS_QUERY,
    },
  });

  return (
    <Card
      styles={{
        header: {
          padding: "8px 16px",
        },
        body: {
          padding: "0 1rem",
        },
      }}
      title={
        <Space
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <CalendarOutlined />
          <Text size="md" style={{ marginLeft: ".7rem" }}>
            Upcoming Events
          </Text>
        </Space>
      }
      extra={
        showGoToListButton && (
          <Button onClick={() => list("events")} icon={<RightCircleOutlined />}>
            See calendar
          </Button>
        )
      }
      {...cardProps}
    >
      {isLoading &&
        Array.from({ length: limit }).map((_, index) => <Skeleton key={0} />)}
      {!isLoading &&
        data?.data.map((item) => (
          <CalendarUpcomingEvent key={item.id} item={item} />
        ))}
      {!isLoading && data?.data.length === 0 && <NoEvent />}
    </Card>
  );
};
