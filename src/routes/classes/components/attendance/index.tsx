import { FC } from "react";

import { CrudFilters, CrudSorting } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { Select, Space, Table, TableProps } from "antd";

import { Text } from "@/components";
import { AttendanceStatusTag } from "@/components/tags/attendance-tag";
import { Attendance } from "@/graphql/new/customSchema";
import { AttendanceTableQuery } from "@/graphql/new/customTypes";
import { useLessonsSelect } from "@/hooks/useLessonsSelect";
import { FilterDropdown } from "@refinedev/antd";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";

type Props = {
  tableProps: TableProps<GetFieldsFromList<AttendanceTableQuery>>;
  filters: CrudFilters;
  sorters: CrudSorting;
  classId?: number;
};

export const AttendanceTableView: FC<Props> = ({ tableProps, filters }) => {
  const { id } = useParams();

  const lessonFilters: CrudFilters = [
    {
      field: "classId",
      operator: "eq",
      value: parseInt(id ?? ""),
    },
  ];

  const { selectProps: selectLessonsProps } = useLessonsSelect(lessonFilters);

  return (
    <Table
      {...tableProps}
      pagination={{
        defaultPageSize: 30,
        showSizeChanger: false,
        ...tableProps.pagination,
        pageSizeOptions: ["6", "12", "48", "96"],
      }}
      rowKey="id"
      dataSource={tableProps.dataSource}
    >
      <Table.Column<Attendance>
        dataIndex="lessonId"
        width={250}
        title="Lesson"
        filterDropdown={(props) => (
          <FilterDropdown {...props}>
            <Select
              mode="multiple"
              style={{ minWidth: 150 }}
              {...selectLessonsProps}
            />
          </FilterDropdown>
        )}
        render={(_, record) => {
          return (
            <Space>
              <Text
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {record.lesson?.title}
              </Text>
            </Space>
          );
        }}
      />
      <Table.Column<Attendance>
        dataIndex="studentId"
        title="Student Name"
        sorter={(a, b) =>
          a.student?.name?.localeCompare(b.student?.name ?? "") ?? 0
        }
        render={(_, record) => {
          return (
            <Space>
              <Text
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {record.student?.name + " " + record.student?.lastName}
              </Text>
            </Space>
          );
        }}
      />
      <Table.Column<Attendance>
        title="Status"
        render={(_, record) => {
          return <AttendanceStatusTag status={record.status} id={record.id} />;
        }}
      />
      <Table.Column<Attendance>
        dataIndex="createdAt"
        title="Created At"
        render={(_, record) => {
          return (
            <Space>
              <Text
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {dayjs(record.createdAt).format("h:mm:ss A MMMM D, YYYY")}
              </Text>
            </Space>
          );
        }}
      />
      <Table.Column<Attendance>
        dataIndex="updatedAt"
        title="Updated At"
        render={(_, record) => {
          return (
            <Space>
              <Text
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {dayjs(record.updatedAt).format("h:mm:ss A MMMM D, YYYY")}
              </Text>
            </Space>
          );
        }}
      />
    </Table>
  );
};
