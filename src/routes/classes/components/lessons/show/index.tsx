import { FC, useState } from "react";

import { useDelete, useShow, useUpdate } from "@refinedev/core";
import { GetFields } from "@refinedev/nestjs-query";

import {
  DeleteOutlined,
  InfoOutlined,
  LinkOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Input,
  List,
  Modal,
  Popconfirm,
  Space,
  Spin,
  Typography,
} from "antd";

import dayjs from "dayjs";
import { now } from "lodash";

import { SingleElementForm, Text } from "@/components";
import { Lesson } from "@/graphql/new/schema.types";

import { LESSON_SHOW_QUERY } from "../queries/getOneLesson";
import styles from "./index.module.css";

import { CustomMarkdown } from "@/components/markdown";
import { GetLessonQuery } from "@/graphql/new/customTypes";
import useRoleCheck from "@/hooks/useRoleCheck";
import Markdown from "marked-react";

type Props = {
  lessonId: number;
  onClose: any;
};

export const LessonAssignmentsModal: FC<Props> = ({ lessonId, onClose }) => {
  const { mutate } = useUpdate<Lesson>();
  const { mutate: deleteMutation } = useDelete<Lesson>();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState<string>("");
  const [isEditingAssignment, setIsEditingAssignment] = useState<
    Record<string, boolean>
  >({});
  const [editedAssignmentContent, setEditedAssignmentContent] = useState<
    Record<string, string>
  >({});

  const { isTeacher, isAdmin } = useRoleCheck();

  const handleLessonEditClick = (content: string) => {
    setIsEditing(true);
    setEditedContent(content);
  };

  const handleAssignmentEditClick = (assignmentId: number, content: string) => {
    setIsEditingAssignment((prevState) => ({
      ...prevState,
      [assignmentId]: true,
    }));
    setEditedAssignmentContent((prevState) => ({
      ...prevState,
      [assignmentId]: content,
    }));
  };

  const { queryResult } = useShow<GetFields<GetLessonQuery>>({
    resource: "lesson",
    dataProviderName: "local",
    liveMode: "auto",
    meta: {
      gqlQuery: LESSON_SHOW_QUERY,
    },
    id: lessonId,
  });

  const { data, isLoading, isError } = queryResult;
  const [lessonData, setLessonData] = useState(data?.data);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return (
      <Modal
        open
        width={512}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin />
      </Modal>
    );
  }

  const lesson = lessonData ?? data?.data;
  const { description, assignments: assignmentList, title } = lesson;
  const assignments = assignmentList?.nodes ?? [];

  const handleSaveClick = () => {
    if (editedContent !== null) {
      mutate({
        resource: "lesson",
        id: parseInt(lessonId.toString() ?? "", 10),
        values: {
          description: editedContent,
        },
        successNotification: false,
        errorNotification() {
          return {
            key: "error",
            message: "Error",
            type: "error",
            description: "There was an error updating the lesson",
          };
        },
        invalidates: ["detail"],
      });
      setLessonData((prevLesson: any) => ({
        ...prevLesson,
        description: editedContent,
      }));
      setIsEditing(false);
    }
  };

  const handleAssignmentSaveClick = (assignmentId: number) => {
    if (editedAssignmentContent[assignmentId] !== undefined) {
      mutate({
        resource: "assignment",
        id: assignmentId,
        values: {
          description: editedAssignmentContent[assignmentId],
        },
        successNotification: false,
        invalidates: ["detail"],
      });

      setIsEditingAssignment((prevState) => ({
        ...prevState,
        [assignmentId]: false,
      }));

      setEditedAssignmentContent((prevState) => ({
        ...prevState,
        [assignmentId]: editedAssignmentContent[assignmentId],
      }));
    }
  };

  return (
    <Modal
      open
      onCancel={onClose}
      onOk={onClose}
      destroyOnClose={true}
      maskClosable={true}
      width={1024}
    >
      <div className={styles.container}>
        <div className={styles.name}>
          <Typography.Title
            level={1}
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
                setLessonData((prevLesson: any) => ({
                  ...prevLesson,
                  title: value,
                }));
              },
              triggerType: ["text"],
            }}
          >
            {title}
          </Typography.Title>
        </div>

        <div className={styles.form}>
          <SingleElementForm
            icon={<InfoOutlined size={24} />}
            itemProps={{
              name: "description",
              label: "Description",
            }}
            view={
              isEditing ? (
                <>
                  <CustomMarkdown
                    value={editedContent}
                    setValue={(val: string) => setEditedContent(val)}
                  />
                  <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    onClick={handleSaveClick}
                    style={{ marginTop: "10px" }}
                  >
                    Save
                  </Button>
                </>
              ) : isTeacher || isAdmin ? (
                <Space onClick={() => handleLessonEditClick(description ?? "")}>
                  <Text>{description}</Text>
                </Space>
              ) : (
                <Text>{description}</Text>
              )
            }
          >
            <Input defaultValue={description ?? ""} />
          </SingleElementForm>
        </div>

        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={assignments}
          renderItem={(assignment, index) => (
            <List.Item key={index}>
              <Card title={assignment.title} size="small">
                {isEditingAssignment[assignment.id] ? (
                  <>
                    <CustomMarkdown
                      value={editedAssignmentContent[assignment.id]}
                      setValue={(val: string) =>
                        setEditedAssignmentContent((prevState) => ({
                          ...prevState,
                          [assignment.id]: val,
                        }))
                      }
                    />
                    <Button
                      type="primary"
                      icon={<SaveOutlined />}
                      onClick={() => handleAssignmentSaveClick(assignment.id)}
                      style={{ marginTop: "10px" }}
                    >
                      Save
                    </Button>
                  </>
                ) : isTeacher || isAdmin ? (
                  <Space
                    onClick={() =>
                      handleAssignmentEditClick(
                        assignment.id,
                        assignment.description ?? ""
                      )
                    }
                  >
                    <Markdown>{assignment.description ?? ""}</Markdown>
                  </Space>
                ) : (
                  <Markdown>{assignment.description ?? ""}</Markdown>
                )}
                <List
                  itemLayout="vertical"
                  size="small"
                  dataSource={assignment.attachments.nodes}
                  style={{
                    display: "flex",
                    textAlign: "left",
                  }}
                  renderItem={(attachment) => (
                    <List.Item
                      key={attachment.id}
                      onClick={() => {
                        window.open(attachment.fileDownloadUrl ?? "", "_blank");
                      }}
                    >
                      <LinkOutlined style={{ color: "#97cef7" }} />
                      <Button
                        style={{
                          color: "#97cef7",
                          fontWeight: 550,
                          letterSpacing: "0.5px",
                        }}
                        type="link"
                      >
                        {attachment.fileName}
                      </Button>
                    </List.Item>
                  )}
                />
              </Card>
            </List.Item>
          )}
        />

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
