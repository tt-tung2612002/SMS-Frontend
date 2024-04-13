import { FC } from "react";

import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { Space, Table, TableProps } from "antd";

import { CustomAvatar, Text } from "@/components";
import { Class } from "@/graphql/new/schema.types";
import { ClassesQuery } from "@/graphql/new/types";

type Props = {
  tableProps: TableProps<GetFieldsFromList<ClassesQuery>>;
  // filters: CrudFilters;
  // sorters: CrudSorting;
};

export const CompaniesTableView: FC<Props> = ({ tableProps }) => {
  // const { selectProps: selectPropsUsers } = useUsersSelect();

  // const { selectProps: selectPropsContacts } = useContactsSelect();

  return (
    <Table
      {...tableProps}
      pagination={false}
      // ={{
      //   ...tableProps.pagination,
      //   pageSizeOptions: ["12", "24", "48", "96"],
      //   showTotal: (total) => (
      //     <PaginationTotal total={total} entityName="classes" />
      //   ),
      // }}
      rowKey="id"
    >
      <Table.Column<Class>
        dataIndex="name"
        title="Class title"
        // defaultFilteredValue={getDefaultFilter("id")}
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
      {/* <Table.Column<Class>
        dataIndex={["teacher", "id"]}
        title="Teacher"
        defaultFilteredValue={getDefaultFilter("teacher.id", filters)}
        filterDropdown={(props) => (
          <FilterDropdown {...props}>
            <Select
              placeholder="Search Teacher"
              style={{ width: 220 }}
              // {...selectPropsUsers}
            />
          </FilterDropdown>
        )}
        render={(_, record) => {
          const teacher = record.teacher;
          return (
            <Space>
              <CustomAvatar
                name={teacher?.info?.name}
                src={teacher?.info?.avatarUrl}
              />
              <Text
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {teacher?.info?.name}
              </Text>
            </Space>
          );
        }}
      /> */}
      {/* <Table.Column<Class>
        dataIndex={["students", "id"]}
        title="Related Contacts"
        defaultFilteredValue={getDefaultFilter("students.id", filters, "in")}
        filterDropdown={(props) => (
          <FilterDropdown {...props}>
            <Select
              mode="multiple"
              placeholder="Search related contacts"
              style={{ width: 220 }}
              // {...selectPropsContacts}
            />
          </FilterDropdown>
        )}
        render={(_, record: Class) => {
          const value = record.students;
          const avatars = value?.nodes?.map((student) => {
            return {
              name: student?.info?.name,
              src: student?.info?.avatarUrl as string | undefined,
            };
          });

          return <AvatarGroup avatars={avatars} size={"small"} />;
        }}
      /> */}
      {/* <Table.Column<Class>
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
            />

            <DeleteButton hideText size="small" recordItemId={value} />
          </Space>
        )} 
      />*/}
    </Table>
  );
};
