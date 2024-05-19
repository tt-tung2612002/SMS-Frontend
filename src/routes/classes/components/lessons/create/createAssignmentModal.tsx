import { CustomMarkdown } from "@/components/markdown";
import { UPLOAD_URL, uploadProvider } from "@/providers/data";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Form, Input, Upload, message } from "antd";
import React from "react";
import { v4 as uuidv4 } from "uuid";

type Assignment = {
  id?: number;
  UUID: string;
  title: string;
  description: string;
  dueDate: any;
  attachments?: Attachment[];
};

type Attachment = {
  assignmentId: number;
  fileName: string;
};

type Props = {
  lessonId: number | null;
  assignments: Assignment[];
  setAssignments: any;
};

export const AssignmentForm: React.FC<Props> = ({
  lessonId,
  assignments,
  setAssignments,
}) => {
  const addAssignment = () => {
    setAssignments([
      ...assignments,
      {
        UUID: uuidv4(),
        title: "",
        description: "",
        dueDate: null,
        attachments: [],
      },
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

  return (
    <>
      <Button
        type="dashed"
        onClick={addAssignment}
        block
        icon={<PlusOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />}
      >
        Add an assignment
      </Button>
      {assignments.map((assignment, index) => (
        <Card
          key={assignment.UUID}
          title={`New Assignment ${index + 1}`}
          style={{ marginTop: 16 }}
          extra={
            <Button
              type="link"
              danger
              icon={<DeleteOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />}
              onClick={() => handleRemoveAssignment(index)}
            >
              Delete
            </Button>
          }
        >
          <Form layout="vertical">
            <Form.Item label="Assignment title" required>
              <Input
                value={assignment.title}
                onChange={(e) =>
                  handleAssignmentChange(index, "title", e.target.value)
                }
                placeholder="Please enter assignment title"
              />
            </Form.Item>
            <Form.Item label="Description">
              <CustomMarkdown
                value={assignment.description}
                setValue={(value: string) =>
                  handleAssignmentChange(index, "description", value)
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
                listType="picture"
                headers={{
                  Authorization: `Bearer ${sessionStorage.getItem(
                    "access_token"
                  )}`,
                }}
                multiple
                data={{ assignmentId: 1 }}
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
          </Form>
        </Card>
      ))}
    </>
  );
};
