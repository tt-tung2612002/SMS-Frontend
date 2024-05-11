import { FC, PropsWithChildren, useState } from "react";

import { List, useTable } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import {
  AppstoreOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Form, Grid, Input, Radio, Space, Spin, Tabs } from "antd";
import { debounce } from "lodash";

import { ListTitleButton } from "@/components";
import { StudentsListQuery } from "@/graphql/new/types";

import { StudentsTableView } from "./components";
import { STUDENTS_LIST_QUERY } from "./queries/studentsList";

type View = "card" | "table";

export const StudentsListPage: FC<PropsWithChildren> = ({ children }) => {
  const [view, setView] = useState<View>("table");
  const screens = Grid.useBreakpoint();

  const {
    tableProps,
    tableQueryResult,
    searchFormProps,
    // filters,
    // sorters,
    setFilters,
  } = useTable<
    GetFieldsFromList<StudentsListQuery>,
    HttpError,
    { name: string }
  >({
    resource: "roles",

    onSearch: (values) => {
      return [
        {
          field: "firstName",
          operator: "contains",
          value: values.name,
        },
      ];
    },
    sorters: {
      mode: "off",
      initial: [
        {
          field: "username",
          order: "asc",
        },
      ],
    },
    filters: {
      mode: "server",
      initial: [
        {
          field: "firstName",
          operator: "contains",
          value: "",
        },
        {
          field: "id",
          operator: "eq",
          value: undefined,
        },
      ],
    },
    pagination: {
      pageSize: 8,
      mode: "off",
    },
    dataProviderName: "local",
    meta: {
      gqlQuery: STUDENTS_LIST_QUERY,
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
  const tabs = [
    {
      key: "1",
      label: "All",
    },
    {
      key: "2",
      label: "Active",
    },
    {
      key: "3",
      label: "Inactive",
      children: <List breadcrumb={false}>{}</List>,
    },
  ];
  return (
    <div className="page-container">
      <Tabs defaultActiveKey="1" items={tabs}></Tabs>
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
                <Form.Item name="firstName" noStyle>
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
            </Space>
          );
        }}
        contentProps={{
          style: {
            marginTop: "28px",
          },
        }}
        title={
          <ListTitleButton toPath="students" buttonText="Add new students" />
        }
      >
        {view === "table" ? (
          <StudentsTableView
            tableProps={tableProps}
            // filters={filters}
            // sorters={sorters}
          />
        ) : (
          <StudentsTableView
            tableProps={tableProps}
            // setPageSize={setPageSize}
            // setCurrent={setCurrent}
            // filters={filters}
            // sorters={sorters}
          />
        )}
      </List>
      {children}
    </div>
  );
};
