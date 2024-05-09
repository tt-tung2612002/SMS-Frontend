import { Col, Row } from "antd";

import { ClassStudentsTable, ClassTitleForm } from "./components";
import LessonsManager from "./components/lessons/lesson-manager";

export const ClassEditPage = () => {
  return (
    <div className="page-container">
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
          {/* <CompanyQuotesTable
            style={{
              marginTop: 32,
            }}
          /> */}
          {/* <CompanyNotes
            style={{
              marginTop: 32,
            }}
          /> */}
        </Col>
        {/* <Col span={8}>
          <CompanyInfoForm />
        </Col> */}
      </Row>
    </div>
  );
};
