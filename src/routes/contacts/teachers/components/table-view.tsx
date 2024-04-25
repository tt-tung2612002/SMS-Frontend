import { DeleteButton, EditButton } from "@refinedev/antd";

import { EyeOutlined } from "@ant-design/icons";
import { Space, Table, TableProps } from "antd";

import { CustomAvatar, PaginationTotal, Text } from "@/components";
import { UserInfo } from "@/graphql/new/schema.types";

type Props = {
  tableProps: TableProps<any>;
  // filters: CrudFilters;
  // sorters: CrudSorting;
};

export const TeachersTableView: React.FC<Props> = ({
  tableProps,
  // filters,
  // sorters,
}) => {
  const newDataSource = tableProps.dataSource?.[0]?.teachers?.nodes;
  return (
    <Table
      {...tableProps}
      rowKey="id"
      dataSource={newDataSource}
      pagination={{
        pageSize: 8,
        showSizeChanger: false,
        ...tableProps.pagination,
        pageSizeOptions: ["6", "12", "24", "48"],
        total: tableProps.dataSource?.[0]?.students?.totalCount,
        showTotal: (total) => (
          <PaginationTotal total={total} entityName="teachers" />
        ),
      }}
    >
      <Table.Column<UserInfo>
        dataIndex="firstName"
        title="Teacher Name"
        sorter={(a, b) => (a.firstName || "").localeCompare(b.firstName || "")}
        render={(_, record) => {
          return (
            <Space>
              <CustomAvatar
                shape="square"
                name={record.firstName}
                src={record.avatarUrl}
              />
              <Text
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {record.firstName}
              </Text>
            </Space>
          );
        }}
      />
      <Table.Column<UserInfo>
        // dataIndex={["teacherId"]}
        // defaultFilteredValue={getDefaultFilter("teacherId", filters, "eq")}
        title="Email"
        // sorter={(a, b) => a.name.localeCompare(b.name)}
        render={(_, record) => {
          return (
            <Space>
              <Text>{record.email}</Text>
            </Space>
          );
        }}
      />
      <Table.Column<UserInfo>
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
