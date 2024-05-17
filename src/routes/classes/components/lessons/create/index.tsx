import { Markdown } from "@/components/markdown";
import { CreateLessonMutation } from "@/graphql/new/customTypes";
import { UPLOAD_URL, uploadProvider } from "@/providers/data";
import { DeleteOutlined, LeftOutlined, PlusOutlined } from "@ant-design/icons";
import { useModalForm } from "@refinedev/antd";
import { HttpError, useApiUrl, useCreate } from "@refinedev/core";
import { GetFields } from "@refinedev/nestjs-query";
import { Button, Card, DatePicker, Form, Input, Modal, Upload } from "antd";
import message from "antd/lib/message";
import React, { useState } from "react";
import { LESSON_CREATE_MUTATION } from "./createLesson";

type Assignment = {
  title: string;
  description: string;
  dueDate: any;
  attachments: any[];
};

type Props = {
  isVisible: boolean;
  onClose: () => void;
  classId: number;
};

export const LessonCreateModal: React.FC<Props> = ({
  isVisible,
  onClose,
  classId,
}) => {
  const [value, setValue] = React.useState("Hello");
  const { mutate: createAssignment } = useCreate<Assignment>();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const apiUrl = useApiUrl("upload");

  const { mutationResult, formProps, modalProps, close } = useModalForm<
    GetFields<CreateLessonMutation>,
    HttpError
  >({
    action: "create",
    defaultVisible: true,
    resource: "lessons",
    redirect: false,
    warnWhenUnsavedChanges: true,
    mutationMode: "pessimistic",
    meta: {
      gqlMutation: LESSON_CREATE_MUTATION,
    },
  });

  const addAssignment = () => {
    setAssignments([
      ...assignments,
      { title: "", description: "", dueDate: null, attachments: [] },
    ]);
  };

  const handleAssignmentChange = (index: number, field: string, value: any) => {
    const newAssignments = [...assignments];
    newAssignments[index] = { ...newAssignments[index], [field]: value };
    setAssignments(newAssignments);
  };

  const handleRemoveAssignment = (index: number) => {
    const newAssignments = assignments.filter((_, i) => i !== index);
    setAssignments(newAssignments);
  };

  const handleRemoveFile = async (file: { name: string }) => {
    try {
      await uploadProvider.custom({
        url: `${UPLOAD_URL}/upload`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        payload: {
          fileName: file.name,
        },
      });

      message.success("File removed successfully");
      return true;
    } catch (error) {
      message.error("Failed to remove the file");
      return false;
    }
  };

  const handleFinish = async (values: any) => {
    // const file = values.image?.[0];
    // let base64String = "";
    // if (file && file.originFileObj) {
    //   base64String = await file2Base64(file.originFileObj);
    // }

    await formProps.onFinish?.({
      ...values,
      classId: classId,
    });

    const lessonId = mutationResult?.data?.data?.lesson?.id;

    if (lessonId) {
      assignments.forEach(async (assignment) => {
        const assignmentData: any = await createAssignment({
          resource: "assignments",
          values: {
            ...assignment,
            lessonId,
          },
        });

        const assignmentId = assignmentData?.data?.createAssignment?.id;

        if (assignmentId && assignment.attachments.length > 0) {
          assignment.attachments.forEach(async (file) => {
            await uploadProvider.custom({
              url: `${UPLOAD_URL}/upload`,
              method: "post",
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem(
                  "access_token"
                )}`,
              },
              payload: {
                file,
                assignmentId,
              },
            });
          });
        }
      });
    }
  };

  return (
    <Modal
      {...modalProps}
      open={isVisible}
      title="Add new lesson"
      width={1024}
      closeIcon={<LeftOutlined />}
      onCancel={() => {
        close();
        onClose();
      }}
    >
      <Form {...formProps} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Lesson title"
          name="title"
          rules={[{ required: true }]}
        >
          <Input placeholder="Please enter lesson title" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: false }]}
        >
          <Markdown value={value} setValue={setValue} />
        </Form.Item>
        <Form.Item
          label="Start Date"
          name="startDate"
          rules={[{ required: true }]}
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <DatePicker showTime />
        </Form.Item>
        <Form.Item
          label="End Date"
          name="endDate"
          rules={[{ required: true }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginLeft: "16px",
          }}
        >
          <DatePicker showTime />
        </Form.Item>
        <div>
          <Button
            type="dashed"
            onClick={addAssignment}
            block
            icon={<PlusOutlined />}
          >
            Add Assignment
          </Button>
          {assignments.map((assignment, index) => (
            <Card
              key={index}
              title={`Assignment ${index + 1}`}
              style={{ marginTop: 16 }}
              extra={
                <Button
                  type="link"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => handleRemoveAssignment(index)}
                >
                  Delete
                </Button>
              }
            >
              <Form.Item label="Assignment title" required>
                <Input
                  value={assignment.title}
                  onChange={(e) =>
                    handleAssignmentChange(index, "title", e.target.value)
                  }
                  placeholder="Please enter assignment title"
                />
              </Form.Item>
              <Form.Item label="Description" required>
                <Markdown
                  value={assignment.description}
                  setValue={(val: any) =>
                    handleAssignmentChange(index, "description", val)
                  }
                />
              </Form.Item>
              <Form.Item label="Due Date" required>
                <DatePicker
                  showTime
                  value={assignment.dueDate}
                  onChange={(date) =>
                    handleAssignmentChange(index, "dueDate", date)
                  }
                />
              </Form.Item>
              <Form.Item label="Attachments">
                <Upload.Dragger
                  name="file"
                  action={`${apiUrl}/upload`}
                  listType="picture"
                  headers={{
                    Authorization: `Bearer ${sessionStorage.getItem(
                      "access_token"
                    )}`,
                  }}
                  multiple
                  data={{ assignmentId: index + 1 }}
                  onChange={(info) =>
                    handleAssignmentChange(index, "attachments", info.fileList)
                  }
                  onRemove={handleRemoveFile}
                >
                  <p className="ant-upload-text">
                    Drag & drop a file in this area
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Card>
          ))}
        </div>
      </Form>
    </Modal>
  );
};
