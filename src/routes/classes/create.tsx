/* eslint-disable simple-import-sort/imports */
import React from "react";
import { useSearchParams } from "react-router-dom";

import {
  getValueFromEvent,
  useFileUploadState,
  useModalForm,
} from "@refinedev/antd";
import {
  HttpError,
  file2Base64,
  useApiUrl,
  useGetToPath,
  useGo,
} from "@refinedev/core";
import { GetFields } from "@refinedev/nestjs-query";

import { LeftOutlined } from "@ant-design/icons";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Modal, Select, Upload } from "antd";
import message from "antd/lib/message";
import axios from "axios";

import { SelectOptionWithAvatar } from "@/components";
import { CreateClassMutation } from "@/graphql/new/types";
import { useUsersSelect } from "@/hooks/useUsersSelect";

import { CLASS_CREATE_MUTATION } from "./queries/createClass";

// type Class = GetFields<CreateClassMutation>;

type Props = {
  isOverModal?: boolean;
};

// type FormValues = GetVariables<CreateClassMutationVariables> & {
//   class: {
//     name: string;
//   }[];
// };

export const ClassCreatePage = ({ isOverModal }: Props) => {
  const getToPath = useGetToPath();
  const [searchParams] = useSearchParams();
  // const { pathname } = useLocation();
  const go = useGo();
  const [value, setValue] = React.useState("");
  const { formProps, modalProps, close } = useModalForm<
    GetFields<CreateClassMutation>,
    HttpError
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

  const { selectProps, queryResult } = useUsersSelect();
  const users = queryResult?.data?.data ?? [];
  const { onChange } = useFileUploadState();
  const apiUrl = useApiUrl("rest");
  const handleRemove = async (file: { name: string }) => {
    try {
      // Make a DELETE request to remove the file on the server
      await axios.delete(`${apiUrl}/files/${file.name}`);
      message.success("File removed successfully");
      return true; // Return true to remove the file from the list in UI
    } catch (error) {
      message.error("Failed to remove the file");
      return false; // Return false to keep the file in the list in UI
    }
  };

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
        onFinish={async (values: any) => {
          const base64Files = [];
          const file = values.logoUrl[0];
          let base64String = "";
          if (file.originFileObj) {
            //             console.log(file);
            base64String = await file2Base64(file);

            //             base64Files.push({
            //               ...file,
            //               base64String,
            //             });
            //           } else {
            //             base64Files.push(file);
          }

          return formProps.onFinish?.({
            ...values,
            logoUrl: base64String,
          });
        }}
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
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: false }]}
        >
          <MDEditor
            data-color-mode="light"
            value={value ?? ""}
            onChange={(value) => setValue(value ?? "")}
            preview="edit"
          />
        </Form.Item>
        <Form.Item
          label="Teacher"
          name="teacherId"
          rules={[{ required: false }]}
        >
          <Select
            placeholder="Please select homeroom teacher"
            {...selectProps}
            options={
              users.map(({ id, info }) => ({
                value: id,
                label: (
                  <SelectOptionWithAvatar
                    name={info?.name}
                    avatarUrl={info?.avatarUrl ?? undefined}
                  />
                ),
              })) ?? []
            }
          />
        </Form.Item>
        <Form.Item label="Logo">
          <Form.Item
            name="logoUrl"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Upload.Dragger
              listType="picture"
              multiple
              beforeUpload={() => false}
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Attachments">
          <Form.Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={getValueFromEvent}
            noStyle
          >
            <Upload.Dragger
              name="file"
              action={`${apiUrl}/upload`}
              listType="picture"
              maxCount={5}
              multiple
              onChange={onChange}
              onRemove={handleRemove}
            >
              <p className="ant-upload-text">Drag & drop a file in this area</p>
            </Upload.Dragger>
          </Form.Item>
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
