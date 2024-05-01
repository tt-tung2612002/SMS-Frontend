import { FC } from "react";
import { useParams } from "react-router-dom";

import { useTable } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { TeamOutlined } from "@ant-design/icons";
import { Card, Space, Table } from "antd";

import { CustomAvatar, Text } from "@/components";
import { UserInfo } from "@/graphql/new/schema.types";
import { StudentsListQuery } from "@/graphql/new/types";
import { ContactCreateInput } from "@/graphql/schema.types";
import { CompanyContactsTableQuery } from "@/graphql/types";
import { STUDENTS_LIST_QUERY } from "@/routes/contacts/students/queries/studentsList";

type Contact = GetFieldsFromList<CompanyContactsTableQuery>;

export const CompanyContactsTable: FC = () => {
  const { id } = useParams();



  // const showResetFilters = useMemo(() => {
  //   return filters?.filter((filter) => {
  //     if ("field" in filter && filter.field === "company.id") {
  //       return false;
  //     }

  //     if (!filter.value) {
  //       return false;
  //     }

  //     return true;
  //   });
  // }, [filters]);

  return (
    <Card
      // headStyle={{
      //   borderBottom: "1px solid #D9D9D9",
      //   marginBottom: "1px",
      // }}
      // bodyStyle={{ padding: 0 }}
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
          <Text strong>
            {data}
          </Text>
        </>
      }
    >
      {!hasData && (
        <div
          style={{
            padding: 16,
            borderBottom: "1px solid #D9D9D9",
          }}
        >
          <Text>No contacts yet</Text>
        </div>
      )}
      {hasData && (
        <Table
          {...tableProps}
          rowKey="id"
          pagination={{
            ...tableProps.pagination,
            showSizeChanger: false,
          }}
        >
          <Table.Column<UserInfo>
            title="Name"
            dataIndex="firstName"
            render={(_, record) => {
              return (
                <Space>
                  <CustomAvatar
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
          <Table.Column title="Email" dataIndex="email" />
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

// const ContactForm = () => {
//   const { id } = useParams();

//   const { data } = useOne<GetFields<CompanyContactsGetCompanyQuery>>({
//     id,
//     resource: "companies",
//     meta: {
//       gqlQuery: COMPANY_CONTACTS_GET_COMPANY_QUERY,
//     },
//   });

//   const [form] = Form.useForm<ContactFormValues>();
//   const contacts = Form.useWatch("contacts", form);

//   const { mutateAsync } = useCreateMany<
//     Contact,
//     HttpError,
//     ContactCreateInput
//   >();

//   const handleOnFinish = async (args: ContactFormValues) => {
//     form.validateFields();

//     const contacts = args.contacts.map((contact) => ({
//       ...contact,
//       companyId: id,
//       salesOwnerId: data?.data.salesOwner?.id || "",
//     }));

//     await mutateAsync({
//       resource: "students",
//       values: contacts,
//       successNotification: false,
//     });

//     form.resetFields();
//   };

//   const { hasContacts } = useMemo(() => {
//     const hasContacts = contacts?.length > 0;

//     return {
//       hasContacts,
//     };
//   }, [contacts]);

//   return (
//     <Form form={form} onFinish={handleOnFinish}>
//       <Form.List name="contacts">
//         {(fields, { add, remove }) => {
//           return (
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "flex-start ",
//                 flexDirection: "column",
//                 gap: "16px",
//                 padding: "4px 16px",
//               }}
//             >
//               {fields.map(({ key, name, ...restField }) => {
//                 return (
//                   <Row
//                     key={key}
//                     gutter={12}
//                     align="top"
//                     style={{
//                       width: "100%",
//                     }}
//                   >
//                     <Col span={11}>
//                       <Form.Item
//                         {...restField}
//                         style={{
//                           marginBottom: 0,
//                         }}
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please enter contact name",
//                           },
//                         ]}
//                         name={[name, "name"]}
//                       >
//                         <Input
//                           addonBefore={<UserOutlined />}
//                           placeholder="Contact name"
//                         />
//                       </Form.Item>
//                     </Col>
//                     <Col span={11}>
//                       <Form.Item
//                         required
//                         style={{
//                           marginBottom: 0,
//                         }}
//                         rules={[
//                           {
//                             required: true,
//                             message: "Please enter contact e-mail",
//                           },
//                         ]}
//                         name={[name, "email"]}
//                       >
//                         <Input
//                           addonBefore={<MailOutlined />}
//                           placeholder="Contact email"
//                         />
//                       </Form.Item>
//                     </Col>
//                     <Col span={2}>
//                       <Button
//                         icon={<DeleteOutlined />}
//                         onClick={() => remove(name)}
//                       />
//                     </Col>
//                   </Row>
//                 );
//               })}
//               <Button
//                 type="link"
//                 icon={<PlusCircleOutlined />}
//                 onClick={() => add()}
//                 style={{
//                   marginBottom: hasContacts ? 16 : 0,
//                 }}
//               >
//                 Add new contact
//               </Button>
//             </div>
//           );
//         }}
//       </Form.List>
//       {hasContacts && (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             gap: "8px",
//             padding: "16px",
//             borderTop: "1px solid #D9D9D9",
//           }}
//         >
//           <Button
//             size="large"
//             type="default"
//             onClick={() => {
//               form.resetFields();
//             }}
//           >
//             Cancel
//           </Button>
//           <SaveButton
//             size="large"
//             icon={undefined}
//             onClick={() => form.submit()}
//           />
//         </div>
//       )}
//     </Form>
//   );
// };

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
