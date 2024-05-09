import { FC } from "react";

import { useDelete, useShow, useUpdate } from "@refinedev/core";
import { GetFields } from "@refinedev/nestjs-query";

import { DeleteOutlined, InfoOutlined, LinkOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Input,
  List,
  Modal,
  Popconfirm,
  Spin,
  Typography,
} from "antd";
import dayjs from "dayjs";
import { now } from "lodash";

import { SingleElementForm, Text } from "@/components";
import { GetLessonQuery } from "@/graphql/new/customTypes";
import { Lesson } from "@/graphql/new/schema.types";

import { LESSON_SHOW_QUERY } from "../queries/getOneLesson";
import styles from "./index.module.css";

import Markdown from "marked-react";

type Props = {
  lessonId: number;
  openModal?: any;
  onClose: any;
};

export const LessonAssignmentsModal: FC<Props> = ({ lessonId, onClose }) => {
  const { mutate } = useUpdate<Lesson>();
  const { mutate: deleteMutation } = useDelete<Lesson>();

  const { queryResult } = useShow<GetFields<GetLessonQuery>>({
    resource: "lesson",
    dataProviderName: "local",
    liveMode: "auto",
    meta: {
      gqlQuery: LESSON_SHOW_QUERY,
    },
    id: lessonId,
  });

  // const { selectProps: usersSelectProps, queryResult: usersSelectQueryResult } =
  //   useUsersSelect();

  const { data, isLoading, isError } = queryResult;

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return (
      <Modal
        open
        width={756}
        bodyStyle={{
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin />
      </Modal>
    );
  }

  const lesson = data?.data;

  const { description, assignments: assignmentList, title } = lesson;

  const assignments = assignmentList?.nodes ?? [];

  console.log(assignments);

  return (
    <Modal
      open
      onCancel={onClose}
      onOk={onClose}
      destroyOnClose={true}
      maskClosable={true}
      width={1024}
      // bodyStyle={{ background: "#f5f5f5", padding: 0 }}
      // headerStyle={{ display: "none" }}
    >
      {/* <div className={styles.header}>
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={() => closeModal()}
        />
      </div> */}
      <div className={styles.container}>
        <div className={styles.name}>
          <Typography.Title
            level={3}
            style={{ padding: 0, margin: 0, width: "100%" }}
            className={styles.title}
            editable={{
              onChange(value) {
                mutate({
                  resource: "lesson",
                  id: parseInt(lessonId.toString() ?? "", 10),
                  values: {
                    title: value,
                  },
                  successNotification: false,
                });
                // refresh
              },
              triggerType: ["text"],
              // icon: <EditOutlined className={styles.titleEditIcon} />,
            }}
          >
            {title}
          </Typography.Title>
        </div>

        <div className={styles.form}>
          <SingleElementForm
            icon={<InfoOutlined className="tertiary" />}
            itemProps={{
              name: "description",
              label: "Description",
            }}
            view={<Text>{description}</Text>}
            // onClick={() => setActiveForm("email")}
            // onUpdate={() => setActiveForm(undefined)}
            // onCancel={() => setActiveForm(undefined)}
          >
            <Input defaultValue={description ?? ""} />
          </SingleElementForm>
        </div>

        {
          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={assignments}
            renderItem={(assignment, index) => (
              <List.Item key={index}>
                <Card title={assignment.title} size="small">
                  <Markdown>{assignment.description ?? ""}</Markdown>
                  <List
                    itemLayout="horizontal"
                    size="small"
                    dataSource={assignment.attachments.nodes}
                    style={{
                      display: "flex", // Make the List.Item a flex container
                    }}
                    renderItem={(attachment) => (
                      <List.Item
                        key={attachment.id}
                        onClick={() => {
                          window.open(
                            attachment.fileDownloadUrl ?? "",
                            "_blank"
                          );
                        }}
                      >
                        <LinkOutlined style={{ color: "#1c5ab8" }} />
                        <Button style={{ color: "#1c5ab8" }} type="link">
                          {attachment.fileName}
                        </Button>
                      </List.Item>
                    )}
                  />
                </Card>
              </List.Item>
            )}
          />
        }

        <div className={styles.actions}>
          <Text className="ant-text tertiary">
            Created on: {dayjs(now()).format("MMMM DD, YYYY")}
          </Text>

          <Popconfirm
            title="Delete the lesson?"
            description="Are you sure to delete this lesson?"
            onConfirm={() => {
              deleteMutation(
                {
                  id: parseInt(lessonId.toString() ?? "", 10),
                  resource: "lesson",
                },
                {
                  onSuccess: () => onClose,
                }
              );
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Delete Lesson
            </Button>
          </Popconfirm>
        </div>
      </div>
    </Modal>
  );
};
