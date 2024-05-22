import { FC, PropsWithChildren, useState } from "react";

import { List, useTable } from "@refinedev/antd";
import { CanAccess, HttpError, useOne } from "@refinedev/core";
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

import { User } from "@/graphql/new/customSchema";
import useRoleCheck from "@/hooks/useRoleCheck";
import { ClassesCardView, ClassesTableView } from "./components";
import { CLASSES_TABLE_QUERY } from "./queries/getClasses";
import { GET_ACTIVE_STUDENT_FOR_CLASSES } from "./queries/getOneUser";

type View = "card" | "table";

export const CompanyListPage: FC<PropsWithChildren> = ({ children }) => {
  const [view, setView] = useState<View>("table");
  const screens = Grid.useBreakpoint();

  const { isStudent, isTeacher } = useRoleCheck();

  const userId = sessionStorage.getItem("userId");
  const { data } = useOne<User>({
    resource: "user",
    liveMode: "auto",
    meta: {
      gqlQuery: GET_ACTIVE_STUDENT_FOR_CLASSES,
    },
    id: parseInt(userId ?? ""),
  });

  let classesId: number[] = data?.data?.classes.nodes.map((c) => c.id) ?? [];

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
          value: isTeacher
            ? parseInt(sessionStorage.getItem("userId") ?? "")
            : undefined,
        },
        {
          field: "id",
          operator: "in",
          value: isStudent ? classesId : undefined,
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
                    buttonStyle="solid"
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
            marginTop: "40px",
          },
        }}
        title={<ListTitleButton toPath="classes" buttonText="Add new class" />}
      >
        {view === "table" ? (
          <ClassesTableView
            tableProps={tableProps}
            filters={filters}
            sorters={sorters}
          />
        ) : (
          <ClassesCardView
            tableProps={tableProps}
            setPageSize={setPageSize}
            setCurrent={setCurrent}
          />
        )}
      </List>
      {children}
    </div>
  );
};
