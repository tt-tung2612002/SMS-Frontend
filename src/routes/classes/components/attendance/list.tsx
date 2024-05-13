import { FC, PropsWithChildren } from "react";

import { List, useTable } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { Grid } from "antd";
import { debounce } from "lodash";

import { ClassesTableQuery } from "@/graphql/new/customTypes";
import { View } from "@react-pdf/renderer";
import { AttendanceTableView } from ".";

export const AttendanceListPage: FC<PropsWithChildren> = ({ children }) => {
  const screens = Grid.useBreakpoint();

  const role = sessionStorage.getItem("highestRole") ?? "";
  let teacherId = undefined;

  if (role === "teacher") {
    teacherId = 1;
  }

  const {
    tableProps,
    tableQueryResult,
    searchFormProps,
    filters,
    sorters,
    setCurrent,
    setPageSize,
    setFilters,
  } = useTable<
    GetFieldsFromList<ClassesTableQuery>,
    HttpError,
    { name: string }
  >({
    resource: "classes",

    onSearch: (values) => {
      return [
        {
          field: "name",
          operator: "contains",
          value: values.name,
        },
      ];
    },
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
      permanent: [
        {
          field: "teacherId",
          operator: "eq",
          value: teacherId,
        },
      ],
      initial: [
        {
          field: "name",
          operator: "contains",
          value: "",
        },
      ],
    },
    pagination: {
      pageSize: 8,
      mode: "client",
    },
    dataProviderName: "local",
    meta: {
      //   gqlQuery: CLASSES_TABLE_QUERY,
    },
  });

  const onViewChange = (value: View) => {
    setFilters([], "replace");
    searchFormProps.form?.resetFields();
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchFormProps?.onFinish?.({
      name: e.target.value ?? "",
    });
  };

  const debouncedOnChange = debounce(onSearch, 500);

  return (
    <div className="page-container">
      <List
        breadcrumb={false}
        contentProps={{
          style: {
            marginTop: "40px",
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
      {children}
    </div>
  );
};
