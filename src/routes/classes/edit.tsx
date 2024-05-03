import { Col, Row } from "antd";

import {
  ClassStudentsTable,
  ClassTitleForm,
  CompanyDealsTable,
  CompanyInfoForm,
  CompanyNotes,
  CompanyQuotesTable,
} from "./components";

export const CompanyEditPage = () => {
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
          <CompanyDealsTable
            style={{
              marginTop: 32,
            }}
          />
          <CompanyQuotesTable
            style={{
              marginTop: 32,
            }}
          />
          <CompanyNotes
            style={{
              marginTop: 32,
            }}
          />
        </Col>
        <Col span={8}>
          <CompanyInfoForm
          />
        </Col>
      </Row>
    </div>
  );
};
