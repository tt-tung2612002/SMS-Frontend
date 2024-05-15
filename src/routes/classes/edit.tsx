import { Tabs } from "antd";
import { ClassStudentsTable, ClassTitleForm } from "./components";
import { AttendanceListPage } from "./components/attendance/list";
import LessonsManager from "./components/lessons/lesson-manager";

const tabs = [
  {
    key: "1",
    label: "Class Details",
    children: (
      <div>
        {/* <Row
          gutter={[32, 32]}
          style={{
            marginTop: 32,
          }}
        >
          <Col span={32}> */}
        <ClassStudentsTable />
        <LessonsManager />
        {/* </Col>
        </Row> */}
      </div>
    ),
  },
  {
    key: "2",
    label: "Attendance Management",
    children: <AttendanceListPage />,
  },
];

export const ClassEditPage = () => {
  return (
    <div className="page-container">
      <ClassTitleForm />
      <Tabs defaultActiveKey="1" items={tabs} style={{ marginTop: 16 }}></Tabs>
    </div>
  );
};
