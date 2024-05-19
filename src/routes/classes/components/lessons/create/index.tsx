import { CustomMarkdown } from "@/components/markdown";
import { CreateLessonMutation } from "@/graphql/new/customTypes";
import { UPLOAD_URL, uploadProvider } from "@/providers";
import { LeftOutlined } from "@ant-design/icons";
import { useModalForm } from "@refinedev/antd";
import { HttpError, useCreate } from "@refinedev/core";
import { GetFields } from "@refinedev/nestjs-query";
import { DatePicker, Form, Input, Modal, message } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { ASSIGNMENT_CREATE_MUTATION } from "./createAssignment";
import { AssignmentForm } from "./createAssignmentModal";
import { LESSON_CREATE_MUTATION } from "./createLesson";

type Assignment = {
  id?: number;
  UUID: string;
  title: string;
  description: string;
  dueDate: any;
  attachments?: any;
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
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const { mutate: createAssignment } = useCreate<Assignment>();
  const [lessonId, setLessonId] = useState<number | null>(null);

  const handleAssignmentFinish = async (lessonId: number | null) => {
    if (lessonId !== null) {
      for (const assignment of assignments) {
        assignment.attachments = null;
        const assignmentData: any = createAssignment({
          resource: "assignments",
          meta: {
            gqlQuery: ASSIGNMENT_CREATE_MUTATION,
          },
          values: {
            title: assignment.title,
            description: assignment.description,
            dueDate: assignment.dueDate,
            lessonId,
          },
        });

        const assignmentId = assignmentData?.data?.id;
        assignment.id = assignmentId;

        if (assignmentId && assignment?.attachments?.length) {
          for (const file of assignment?.attachments || []) {
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
          }
        }
      }
      message.success("Assignments created successfully!");
    }
  };

  const { form, formProps, modalProps, close } = useModalForm<
    GetFields<CreateLessonMutation>,
    HttpError
  >({
    action: "create",
    defaultVisible: true,
    dataProviderName: "local",
    resource: "lessons",
    redirect: false,
    warnWhenUnsavedChanges: true,
    meta: {
      gqlQuery: LESSON_CREATE_MUTATION,
    },
    onMutationSuccess(data) {
      setLessonId(data.data.lesson.id);
      handleAssignmentFinish(lessonId);
    },
    mutationMode: "optimistic",
  });

  const handleFinish = async (values: any) => {
    return formProps.onFinish?.({
      ...values,
      classId,
    });
  };

  return (
    <Modal
      {...modalProps}
      open={isVisible}
      title={"Add new lesson"}
      width={1024}
      closeIcon={
        <LeftOutlined
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      }
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
            initialValue={"Test"}
            rules={[{ required: true }]}
          >
            <Input placeholder="Please enter lesson title" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: false }]}
          >
            <CustomMarkdown
              value={formProps.initialValues?.description || ""}
              setValue={(val: string) => form.setFieldValue("description", val)}
            />
          </Form.Item>
          <Form.Item
            label="Start Date"
            name="startDate"
            initialValue={dayjs()}
            rules={[{ required: true }]}
            style={{ display: "inline-block", width: "calc(50% - 8px)" }}
          >
            <DatePicker showTime needConfirm={false} />
          </Form.Item>
          <Form.Item
            label="End Date"
            name="endDate"
            initialValue={dayjs()}
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              marginLeft: "16px",
            }}
          >
            <DatePicker showTime needConfirm={false} />
          </Form.Item>
        </>
      </Form>
      {
        <AssignmentForm
          lessonId={lessonId}
          assignments={assignments}
          setAssignments={setAssignments}
        />
      }
    </Modal>
  );
};
