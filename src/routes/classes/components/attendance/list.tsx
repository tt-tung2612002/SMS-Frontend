import { List, useTable } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { AttendanceTableQuery } from "@/graphql/new/customTypes";
import { AttendanceTableView } from ".";
import { ATTENDANCE_TABLE_QUERY } from "./getAttendancesLesson";

export const AttendanceListPage = () => {
  const { tableProps, filters, sorters } = useTable<
    GetFieldsFromList<AttendanceTableQuery>,
    HttpError,
    { name: string }
  >({
    resource: "attendances",

    sorters: {
      mode: "off",
      initial: [
        {
          field: "name",
          order: "asc",
        },
      ],
    },
    filters: {
      mode: "server",
      initial: [],
    },
    pagination: {
      pageSize: 8,
      mode: "client",
    },
    meta: {
      gqlQuery: ATTENDANCE_TABLE_QUERY,
    },
  });

  return (
    <div className="page-container">
      <List
        breadcrumb={false}
        headerButtons={[]}
        title=""
        contentProps={{
          style: {
            marginTop: "0px",
          },
        }}
      >
        {
          <AttendanceTableView
            tableProps={tableProps}
            filters={filters}
            sorters={sorters}
          />
        }
      </List>
    </div>
  );
};
