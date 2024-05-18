import { Markdown } from "@/components/markdown";
import { CreateLessonMutation } from "@/graphql/new/customTypes";
import { UPLOAD_URL, localDataProvider, uploadProvider } from "@/providers";
import { LeftOutlined } from "@ant-design/icons";
import { useModalForm } from "@refinedev/antd";
import { HttpError, useApiUrl } from "@refinedev/core";
import { GetFields } from "@refinedev/nestjs-query";
import { DatePicker, Form, Input, Modal, Typography } from "antd";
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
  const [value, setValue] = useState("");
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const apiUrl = useApiUrl("upload");
  const [lessonId, setLessonId] = useState<number | null>(null);
  const { mutationResult, formProps, modalProps, close } = useModalForm<
    GetFields<CreateLessonMutation>,
    HttpError
  >({
    action: "create",
    defaultVisible: true,
    resource: "lessons",
    redirect: false,
    warnWhenUnsavedChanges: true,
    onMutationSuccess(data, variables, context, isAutoSave) {
      console.log("onMutationSuccess", data, variables, context, isAutoSave);
    },
    mutationMode: "pessimistic",
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
    const data = await localDataProvider.create({
      resource: "lessons",
      meta: {
        gqlMutation: LESSON_CREATE_MUTATION,
      },
      variables: {
        ...values,
        classId: classId,
      },
    });

    if (!data) {
      // wait for 10 seconds and try again
      setTimeout(() => {
        handleFinish(values);
      }, 10000);
    }
    const lessonId = data?.data?.data?.lesson?.id;
    console.log("data is", data);
    setLessonId(lessonId);

    message.success("Lesson created successfully!");
  };

  return (
    <Modal
      {...modalProps}
      open={isVisible}
      title={"Add new lesson"}
      width={1024}
      closeIcon={<LeftOutlined />}
      onCancel={() => {
        close();
        onClose();
      }}
    >
      <Form {...formProps} layout="vertical" onFinish={handleFinish}>
        <>
          <Form.Item
            label="Lesson title"
            name="title"
            rules={[{ required: true }]}
          >
            <Input placeholder="Please enter lesson title" />
          </Form.Item>
          <Form.Item label="Description" name="description">
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
        </>
      </Form>
      {!mutationResult.isLoading && (
        <Typography.Title level={4}>{"ID is " + lessonId}</Typography.Title>
      )}
    </Modal>
  );
};
