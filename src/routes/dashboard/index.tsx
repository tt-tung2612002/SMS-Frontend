import React from "react";

import { useCustom } from "@refinedev/core";

import { Col, Row } from "antd";

import { CalendarUpcomingEvents } from "@/components";
import { DashboardTotalCountsQuery } from "@/graphql/new/types";

import { DashboardTotalCountCard } from "./components";
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "./dashboardGetTotalCount";
import { StudentUpcomingEvents } from "./test";

export const DashboardPage: React.FC = () => {
  const { data, isLoading } = useCustom<DashboardTotalCountsQuery>({
    url: "",
    method: "get",
    dataProviderName: "local",
    meta: { gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY },
  });

  return (
    <div className="page-container">
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={48} xl={8}>
          <DashboardTotalCountCard
            resource="classes"
            isLoading={isLoading}
            totalCount={data?.data?.classes?.totalCount}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="students"
            isLoading={isLoading}
            totalCount={data?.data?.students?.totalCount}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="teachers"
            isLoading={isLoading}
            totalCount={data?.data?.teachers?.totalCount}
          />
        </Col>
      </Row>
      <Row
        gutter={[32, 32]}
        style={{
          marginTop: "32px",
        }}
      >
        <Col xs={24} sm={24} xl={10} xxl={8}>
          <CalendarUpcomingEvents showGoToListButton />
        </Col>
      </Row>

      <Row
        style={{
          marginTop: "32px",
        }}
      >
        <Col span={24} xs={24} sm={24}>
          <StudentUpcomingEvents />
        </Col>
      </Row>
    </div>
  );
};
