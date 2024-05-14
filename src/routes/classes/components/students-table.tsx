import { FC } from "react";
import { useParams } from "react-router-dom";

import { useTable } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { TeamOutlined } from "@ant-design/icons";
import { Card, Space, Table } from "antd";

import { ContactStatusTag, CustomAvatar, Text } from "@/components";
import { GetStudentsInClass2Query } from "@/graphql/new/customTypes";
import { ClassManagement } from "@/graphql/new/schema.types";
import { ContactCreateInput } from "@/graphql/schema.types";
import { CompanyContactsTableQuery } from "@/graphql/types";

import { CLASS_STUDENTS_QUERY } from "../queries/getOneClass";

type Contact = GetFieldsFromList<CompanyContactsTableQuery>;

export const ClassStudentsTable: FC = () => {
  const { id } = useParams();

  const { tableProps, tableQueryResult } = useTable<
    GetFieldsFromList<GetStudentsInClass2Query>,
    HttpError,
    { name: string }
  >({
    resource: "classManagements",
    filters: {
      mode: "server",
      initial: [
        {
          field: "classId",
          operator: "eq",
          value: parseInt(id ?? ""),
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
    meta: {
      gqlQuery: CLASS_STUDENTS_QUERY,
    },
  });

  const studentCount = tableQueryResult.data?.total;

  const hasData = true;

  return (
    <Card
      styles={{
        header: {
          // borderBottom: "1px solid #D9D9D9",
          marginBottom: "1px",
        },
        body: {
          padding: 0,
        },
      }}
      title={
        <Space size="middle">
          <TeamOutlined />
          <Text>Students</Text>

          {/* {showResetFilters?.length > 0 && (
            <Button size="small" onClick={() => setFilters([], "replace")}>
              Reset filters
            </Button>
          )} */}
        </Space>
      }
      // actions={[<ContactForm key="1" />]}
      extra={
        <>
          <Text className="tertiary">Total students: </Text>
          <Text strong>{studentCount}</Text>
        </>
      }
    >
      {!hasData && (
        <Space
          style={{
            padding: 16,
            borderBottom: "1px solid #D9D9D9",
          }}
        >
          <Text>No contacts yet</Text>
        </Space>
      )}
      {hasData && (
        <Table
          {...tableProps}
          // showHeader={false}
          rowKey="user.id"
          // dataSource={students?.nodes}
          pagination={{
            pageSize: 8,
            showSizeChanger: false,
            pageSizeOptions: ["6", "12", "24", "48"],
            // total: students?.totalCount,
          }}
        >
          <Table.Column<ClassManagement>
            title="Name"
            dataIndex="firstName"
            render={(_, record) => {
              return (
                <Space>
                  <CustomAvatar
                    name={record?.user?.userInfoById?.firstName}
                    src={record?.user?.userInfoById?.avatarUrl}
                  />
                  <Text
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    {record?.user?.userInfoById?.firstName +
                      " " +
                      record?.user?.userInfoById?.lastName}
                  </Text>
                </Space>
              );
            }}
          />

          <Table.Column<ClassManagement>
            title="Phone Number"
            render={(_, record) => {
              return (
                <Space>
                  <Text
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    {record?.user?.userInfoById?.phoneNumber}
                  </Text>
                </Space>
              );
            }}
          />
          <Table.Column<ClassManagement>
            title="Email"
            render={(_, record) => {
              return (
                <Space>
                  <Text
                    style={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    {record?.user?.userInfoById?.email}
                  </Text>
                </Space>
              );
            }}
          />
          <Table.Column
            title="Status"
            dataIndex="status"
            render={(_) => {
              return <ContactStatusTag status="ENROLLED" />;
            }}
          />
          {/* <Table.Column<Contact>
            title="Stage"
            dataIndex="status"
            render={(_, record) => {
              return <ContactStatusTag status={record.status} />;
            }}
            filterDropdown={(props) => (
              <FilterDropdown {...props}>
                <Select
                  style={{ width: "200px" }}
                  mode="multiple"
                  placeholder="Select Stage"
                  options={statusOptions}
                />
              </FilterDropdown>
            )}
          />
          <Table.Column<Contact>
            dataIndex="id"
            width={112}
            render={(value, record) => {
              return (
                <Space>
                  <Button
                    size="small"
                    href={`mailto:${record.email}`}
                    icon={<MailOutlined />}
                  />
                  <Button
                    size="small"
                    href={`tel:${record.phone}`}
                    icon={<PhoneOutlined />}
                  />
                  <ShowButton
                    hideText
                    recordItemId={value}
                    size="small"
                    resource="students"
                    icon={<ExportOutlined />}
                  />
                </Space>
              );
            }}
          /> */}
        </Table>
      )}
    </Card>
  );
};

type ContactFormValues = {
  contacts: ContactCreateInput[];
};

const statusOptions: {
  label: string;
  value: Contact["status"];
}[] = [
  {
    label: "New",
    value: "NEW",
  },
  {
    label: "Qualified",
    value: "QUALIFIED",
  },
  {
    label: "Unqualified",
    value: "UNQUALIFIED",
  },
  {
    label: "Won",
    value: "WON",
  },
  {
    label: "Negotiation",
    value: "NEGOTIATION",
  },
  {
    label: "Lost",
    value: "LOST",
  },
  {
    label: "Interested",
    value: "INTERESTED",
  },
  {
    label: "Contacted",
    value: "CONTACTED",
  },
  {
    label: "Churned",
    value: "CHURNED",
  },
];
