import { FC } from "react";

import { DeleteButton, EditButton, FilterDropdown } from "@refinedev/antd";
import { CrudFilters, CrudSorting, getDefaultFilter, useNavigation } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { EyeOutlined } from "@ant-design/icons";
import { Select, Space, Table, TableProps } from "antd";

import { CustomAvatar, PaginationTotal, Text } from "@/components";
import { ClassesTableQuery } from "@/graphql/new/customTypes";
import { Class } from "@/graphql/new/schema.types";
import { useUsersSelect } from "@/hooks/useUsersSelect";

import { AvatarGroup } from "./avatar-group";

type Props = {
  tableProps: TableProps<GetFieldsFromList<ClassesTableQuery>>;
  filters: CrudFilters;
  sorters: CrudSorting;
};

export const CompaniesTableView: FC<Props> = ({ tableProps, filters }) => {
  const { selectProps: selectPropsUsers } = useUsersSelect();
  const { edit } = useNavigation();
  
  return (
    <Table
      {...tableProps}
      pagination={{
        ...tableProps.pagination,
        pageSizeOptions: ["12", "24", "48", "96"],
        showTotal: (total) => (
          <PaginationTotal total={total} entityName="classes" />
        ),
      }}
      rowKey="id"
    >
      <Table.Column<Class>
        dataIndex="name"
        title="Class Name"
        sorter={(a, b) => a.name.localeCompare(b.name)}
        // defaultFilteredValue={getDefaultFilter("name")}
        // filterIcon={<SearchOutlined />}
        // filterDropdown={(props) => (
        //   <FilterDropdown {...props}>
        //     <Input placeholder="Search Class" />
        //   </FilterDropdown>
        // )}
        render={(_, record) => {
          return (
            <Space>
              <CustomAvatar
                shape="square"
                name={record.name}
                src={record.logoUrl}
              />
              <Text
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {record.name}
              </Text>
            </Space>
          );
        }}
      />
      <Table.Column<Class>
        dataIndex={["teacherId"]}
        defaultFilteredValue={getDefaultFilter("teacherId", filters, "eq")}
        title="Teacher"
        // filters={
        //   teacherNames
        //     ? teacherNames.map((name) => {
        //         console.log(name);
        //         return {
        //           text: name,
        //           value: name,
        //         };
        //       })
        //     : []
        // }
        // onFilter={(value, record) =>
        //   record.teacher?.userInfoById?.name === value
        // }
        // filterDropdown={(props) => (
        //   <FilterDropdown {...props}>
        //     <Select
        //       placeholder="Search Teacher"
        //       style={{ width: 220 }}
        //       {...selectPropsUsers}
        //     />
        //   </FilterDropdown>
        // )}
        sorter={(a, b) => a.name.localeCompare(b.name)}
        render={(_, record) => {
          const teacher = record.teacher;
          return (
            <Space>
              <CustomAvatar
                name={teacher?.userInfoById?.firstName}
                src={teacher?.userInfoById?.avatarUrl}
              />
              <Text
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {teacher?.userInfoById?.firstName}
              </Text>
            </Space>
          );
        }}
      />
      {
        <Table.Column<Class>
          dataIndex={["students", "id"]}
          title="Students"
          defaultFilteredValue={getDefaultFilter("students.id", filters, "in")}
          filterDropdown={(props) => (
            <FilterDropdown
              {...props}
              mapValue={(selectedKeys) =>
                selectedKeys.map((i) => parseInt(i.toString()))
              }
            >
              <Select
                mode="multiple"
                placeholder="Search Students"
                style={{ width: 220 }}
                // {...selectPropsContacts}
              />
            </FilterDropdown>
          )}
          render={(_, record: Class) => {
            const value = record.students;
            const avatars = value?.nodes?.map((student) => {
              return {
                name: student?.userInfoById?.firstName,
                src: student?.userInfoById?.avatarUrl as string | undefined,
              };
            });

            return <AvatarGroup avatars={avatars} size={"small"} />;
          }}
        />
      }
      <Table.Column<Class>
        fixed="right"
        dataIndex="id"
        title="Actions"
        render={(value) => (
          <Space>
            <EditButton
              icon={<EyeOutlined />}
              hideText
              size="small"
              recordItemId={value}
              accessControl={{
                hideIfUnauthorized: true,
              }}
            />
            <DeleteButton
              hideText
              size="small"
              dataProviderName="local"
              recordItemId={value}
              accessControl={{
                hideIfUnauthorized: true,
              }}
            />
          </Space>
        )}
      />
    </Table>
  );
};