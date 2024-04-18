import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { useModalForm } from "@refinedev/antd";
import { HttpError, useGetToPath, useGo } from "@refinedev/core";
import { GetFields, GetVariables } from "@refinedev/nestjs-query";

import { LeftOutlined } from "@ant-design/icons";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Modal, Select } from "antd";

import { SelectOptionWithAvatar } from "@/components";
import {
  CreateClassMutation,
  CreateClassMutationVariables,
} from "@/graphql/new/types";
import { oldUsersSelect } from "@/hooks/useOldUsersSelect";

import { CLASS_CREATE_MUTATION } from "./queries/createClass";

type Class = GetFields<CreateClassMutation>;

type Props = {
  isOverModal?: boolean;
};

type FormValues = GetVariables<CreateClassMutationVariables> & {
  class: {
    name: string;
  }[];
};

export const CompanyCreatePage = ({ isOverModal }: Props) => {
  const getToPath = useGetToPath();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const go = useGo();
  const [value, setValue] = React.useState("");
  const { formProps, modalProps, close, onFinish } = useModalForm<
    GetFields<CreateClassMutation>,
    HttpError
    // FormValues
  >({
    action: "create",
    defaultVisible: true,
    resource: "classes",
    redirect: false,
    warnWhenUnsavedChanges: !isOverModal,
    mutationMode: "pessimistic",
    dataProviderName: "local",
    meta: {
      gqlMutation: CLASS_CREATE_MUTATION,
    },
  });

  const { selectProps, queryResult } = oldUsersSelect();

  // const { mutateAsync: createManyMutateAsync } = useCreateMany();
  return (
    <Modal
      {...modalProps}
      mask={!isOverModal}
      onCancel={() => {
        close();
        go({
          to:
            searchParams.get("to") ??
            getToPath({
              action: "list",
            }) ??
            "",
          query: {
            to: undefined,
          },
          options: {
            keepQuery: true,
          },
          type: "replace",
        });
      }}
      title="Add new class"
      width={1024}
      closeIcon={<LeftOutlined />}
    >
      <Form
        {...formProps}
        layout="vertical"
        // onFinish={async (values) => {
        //   try {

        //     // const createdClass = (data as CreateResponse<Class>)?.data;

        //     // if ((values.contacts ?? [])?.length > 0) {
        //     //   await createManyMutateAsync({
        //     //     resource: "contacts",
        //     //     values:
        //     //       values.contacts?.map((contact) => ({
        //     //         ...contact,
        //     //         companyId: createdCompany.id,
        //     //         salesOwnerId: createdCompany.salesOwner.id,
        //     //       })) ?? [],
        //     //     successNotification: false,
        //     //   });
        //     // }

        //     go({
        //       to: searchParams.get("to") ?? pathname,
        //       query: {
        //         // companyId: createdCompany.id,
        //         to: undefined,
        //       },
        //       options: {
        //         keepQuery: true,
        //       },
        //       type: "replace",
        //     });
        //   } catch (error) {
        //     Promise.reject(error);
        //   }
        // }}
      >
        <Form.Item label="Class name" name="name" rules={[{ required: true }]}>
          <Input placeholder="Please enter class name" />
        </Form.Item>
        <MDEditor
          data-color-mode="light"
          value={value ?? ""}
          onChange={(value) => setValue(value ?? "")}
          preview="live"
        />
        <Form.Item
          label="Teacher"
          name="teacherId"
          rules={[{ required: false }]}
        >
          <Select
            placeholder="Please select homeroom teacher"
            {...selectProps}
            options={
              queryResult.data?.data?.map((user) => ({
                value: user.id,
                label: (
                  <SelectOptionWithAvatar
                    name={user.name}
                    avatarUrl={user.avatarUrl ?? undefined}
                  />
                ),
              })) ?? []
            }
          />
        </Form.Item>
        {/* <Form.List name="contacts">
          {(fields, { add, remove }) => (
            <Space direction="vertical">
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} gutter={12} align="middle">
                  <Col span={11}>
                    <Form.Item noStyle {...restField} name={[name, "name"]}>
                      <Input
                        addonBefore={<UserOutlined />}
                        placeholder="Contact name"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={11}>
                    <Form.Item noStyle name={[name, "email"]}>
                      <Input
                        addonBefore={<MailOutlined />}
                        placeholder="Contact email"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={2}>
                    <Button
                      icon={<DeleteOutlined />}
                      onClick={() => remove(name)}
                    />
                  </Col>
                </Row>
              ))}
              <Typography.Link onClick={() => add()}>
                <PlusCircleOutlined /> Add new contacts
              </Typography.Link>
            </Space>
          )}
        </Form.List> */}
      </Form>
    </Modal>
  );
};
