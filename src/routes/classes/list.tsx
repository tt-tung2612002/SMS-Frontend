import { FC, PropsWithChildren, useState } from "react";

import { List, useTable } from "@refinedev/antd";
import { CanAccess, CrudFilter, HttpError } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import {
  AppstoreOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Form, Grid, Input, Radio, Space, Spin } from "antd";
import { debounce } from "lodash";

import { ListTitleButton } from "@/components";
import { ClassesTableQuery } from "@/graphql/new/customTypes";

import { CompaniesCardView, CompaniesTableView } from "./components";
import { CLASSES_TABLE_QUERY } from "./queries/getClasses";

type View = "card" | "table";

export const CompanyListPage: FC<PropsWithChildren> = ({ children }) => {
  const [view, setView] = useState<View>("table");
  const screens = Grid.useBreakpoint();

  const role = sessionStorage.getItem("highestRole") ?? "";
  let teacher_restricted_filters: CrudFilter[];
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
      gqlQuery: CLASSES_TABLE_QUERY,
    },
  });

  const onViewChange = (value: View) => {
    setView(value);
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
        headerButtons={() => {
          return (
            <Space
              style={{
                marginTop: screens.xs ? "1.6rem" : undefined,
              }}
            >
              <Form {...searchFormProps} layout="inline">
                <Form.Item name="name" noStyle>
                  <Input
                    size="large"
                    prefix={<SearchOutlined className="anticon tertiary" />}
                    suffix={
                      <Spin
                        size="small"
                        spinning={tableQueryResult.isFetching}
                      />
                    }
                    placeholder="Search by name"
                    onChange={debouncedOnChange}
                  />
                </Form.Item>
              </Form>
              <CanAccess>
                {!screens.xs ? (
                  <Radio.Group
                    size="large"
                    value={view}
                    onChange={(e) => onViewChange(e.target.value)}
                  >
                    <Radio.Button value="table">
                      <UnorderedListOutlined />
                    </Radio.Button>
                    <Radio.Button value="card">
                      <AppstoreOutlined />
                    </Radio.Button>
                  </Radio.Group>
                ) : null}
              </CanAccess>
            </Space>
          );
        }}
        contentProps={{
          style: {
            marginTop: "28px",
          },
        }}
        title={<ListTitleButton toPath="classes" buttonText="Add new class" />}
      >
        {view === "table" ? (
          <CompaniesTableView
            tableProps={tableProps}
            filters={filters}
            sorters={sorters}
          />
        ) : (
          <CompaniesCardView
            tableProps={tableProps}
            setPageSize={setPageSize}
            setCurrent={setCurrent}
            // filters={filters}
            // sorters={sorters}
          />
        )}
      </List>
      {children}
    </div>
  );
};
