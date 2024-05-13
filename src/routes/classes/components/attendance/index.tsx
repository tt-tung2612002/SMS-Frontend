import { FC } from "react";

import { CrudFilters, CrudSorting } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { Space, Table, TableProps } from "antd";

import { PaginationTotal, Text } from "@/components";
import { ClassesTableQuery } from "@/graphql/new/customTypes";
import { Attendance } from "@/graphql/new/schema.types";

type Props = {
  tableProps: TableProps<GetFieldsFromList<ClassesTableQuery>>;
  filters: CrudFilters;
  sorters: CrudSorting;
};

export const AttendanceTableView: FC<Props> = ({ tableProps, filters }) => {
  return (
    <Table
      {...tableProps}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        // pageSizeOptions: ["10", "20", "30"],
        ...tableProps.pagination,
        pageSizeOptions: ["6", "12", "48", "96"],
        showTotal: (total) => (
          <PaginationTotal total={total} entityName="classes" />
        ),
      }}
      rowKey="id"
      dataSource={tableProps.dataSource}
    >
      <Table.Column<Attendance>
        dataIndex="name"
        title="Class Name"
        // sorter={(a, b) => a.name.localeCompare(b.name)}
        render={(_, record) => {
          return (
            <Space>
              <Text
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {/* {record.name} */}
              </Text>
            </Space>
          );
        }}
      />
      <Table.Column<Attendance>
        dataIndex="startDate"
        title="Start Date"
        render={(_, record) => {
          return (
            <Space>
              <Text
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {/* {dayjs(record.startDate).format("h:mm A MMMM D, YYYY dddd")} */}
              </Text>
            </Space>
          );
        }}
      />
      <Table.Column<Attendance>
        dataIndex="endDate"
        title="End Date"
        render={(_, record) => {
          return (
            <Space>
              <Text
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {/* {dayjs(record.endDate).format("h:mm A MMMM D, YYYY dddd")} */}
              </Text>
            </Space>
          );
        }}
      />
      <Table.Column<Attendance>
        dataIndex={["teacherId"]}
        // defaultFilteredValue={getDefaultFilter("teacherId", filters, "eq")}
        title="Teacher"
        // sorter={(a, b) => a.name.localeCompare(b.name)}
        render={(_, record) => {
          return (
            <Space>
              <Text
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {/* {teacher?.userInfoById?.firstName} */}
              </Text>
            </Space>
          );
        }}
      />
      {
        <Table.Column<Attendance>
          dataIndex={["students", "id"]}
          title="Students"
        />
      }
    </Table>
  );
};
