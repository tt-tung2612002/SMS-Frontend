import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { LessonCreateModal } from "./create";
import { ClassLessonsTable } from "./lessons-table";
import { LessonAssignmentsModal } from "./show";

const LessonsManager = () => {
  const params = useParams();
  const [lessonId, setLessonId] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

  const handleLessonClick = (id: number) => {
    setLessonId(id);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleAddLessonClick = () => {
    setIsCreateModalVisible(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalVisible(false);
  };

  return (
    <>
      <ClassLessonsTable
        style={{ marginTop: 32 }}
        onLessonClick={handleLessonClick}
        classId={parseInt(params.id ?? "0")}
      />
      <Button
        title="Add new lesson"
        onClick={handleAddLessonClick}
        icon={
          <PlusCircleOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        }
      />
      {isModalVisible && (
        <LessonAssignmentsModal
          lessonId={lessonId as any as number}
          onClose={handleCloseModal}
        />
      )}
      {isCreateModalVisible && (
        <LessonCreateModal
          classId={parseInt(params.id ?? "0")}
          isVisible={isCreateModalVisible}
          onClose={handleCloseCreateModal}
        />
      )}
    </>
  );
};

export default LessonsManager;
