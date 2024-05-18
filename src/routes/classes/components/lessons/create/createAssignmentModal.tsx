import { UPLOAD_URL, uploadProvider } from "@/providers/data";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import { useApiUrl, useCreate } from "@refinedev/core";
import { Button, Card, DatePicker, Form, Input, Modal, Upload } from "antd";
import message from "antd/lib/message";
import React, { useState } from "react";

type Assignment = {
  title: string;
  description: string;
  dueDate: any;
  attachments: any[];
};

type Props = {
  lessonId: number;
  isVisible: boolean;
};

export const AssignmentCreateModal: React.FC<Props> = ({
  lessonId,
  isVisible,
}) => {
  const { mutate: createAssignment } = useCreate<Assignment>();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const apiUrl = useApiUrl("upload");

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

  const handleFinish = async () => {
    for (const assignment of assignments) {
      const assignmentData: any = await createAssignment({
        resource: "assignments",
        values: {
          ...assignment,
          lessonId,
        },
      });

      const assignmentId = assignmentData?.data?.id;

      if (assignmentId && assignment.attachments.length > 0) {
        for (const file of assignment.attachments) {
          await uploadProvider.custom({
            url: `${UPLOAD_URL}/upload`,
            method: "post",
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
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
  };

  return (
    <Modal
      open={isVisible}
      title="Add Assignments"
      width={1024}
      onCancel={() => setAssignments([])}
      onOk={handleFinish}
    >
      <Button
        type="dashed"
        onClick={addAssignment}
        block
        icon={<UploadOutlined />}
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
            <Input.TextArea
              value={assignment.description}
              onChange={(e) =>
                handleAssignmentChange(index, "description", e.target.value)
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
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Card>
      ))}
    </Modal>
  );
};
