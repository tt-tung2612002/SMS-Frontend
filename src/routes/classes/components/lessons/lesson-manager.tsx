import { Text } from "@/components";
import useRoleCheck from "@/hooks/useRoleCheck";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Grid } from "antd";
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
  const { isTeacher, isAdmin } = useRoleCheck();

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

  const screens = Grid.useBreakpoint();

  return (
    <>
      {(isAdmin || isTeacher) && (
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={handleAddLessonClick}
          size={screens.xs ? "middle" : "large"}
          style={{
            marginTop: screens.xs ? "1.6rem" : "0.3rem",
            fontSize: "14px",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            {!screens.xs ? "Add new Lesson" : null}
          </Text>
        </Button>
      )}
      <ClassLessonsTable
        style={{ marginTop: 32 }}
        onLessonClick={handleLessonClick}
        classId={parseInt(params.id ?? "0")}
      />
      {isModalVisible && (
        <LessonAssignmentsModal
          lessonId={lessonId as any as number}
          isVisible={isModalVisible}
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
