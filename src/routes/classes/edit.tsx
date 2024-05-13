import { Col, Row, Tabs } from "antd";
import { ClassStudentsTable, ClassTitleForm } from "./components";
import LessonsManager from "./components/lessons/lesson-manager";

const tabs = [
  {
    key: "1",
    label: "Class Details",
    children: (
      <div>
        <ClassTitleForm />
        <Row
          gutter={[32, 32]}
          style={{
            marginTop: 32,
          }}
        >
          <Col span={16}>
            <ClassStudentsTable />
            <LessonsManager />
          </Col>
        </Row>
      </div>
    ),
  },
  {
    key: "2",
    label: "Attendance Management",
  },
];

export const ClassEditPage = () => {
  return (
    <div className="page-container">
      <Tabs defaultActiveKey="1" items={tabs}></Tabs>
    </div>
  );
};
