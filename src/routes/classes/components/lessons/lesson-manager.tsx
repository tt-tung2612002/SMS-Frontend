import { useState } from "react";
import { useParams } from "react-router-dom";
import { ClassLessonsTable } from "./lessons-table";
import { LessonAssignmentsModal } from "./show";

const LessonsManager = () => {
  const params = useParams();
  const [lessonId, setLessonId] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLessonClick = (id: number) => {
    setLessonId(id);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <ClassLessonsTable
        style={{
          marginTop: 32,
        }}
        onLessonClick={handleLessonClick}
        classId={parseInt(params.id ?? "0", 10)}
      />
      {isModalVisible && (
        <LessonAssignmentsModal
          lessonId={lessonId as any as number}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default LessonsManager;
