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
import { Form, Input, Modal, Select, Upload } from "antd";
import message from "antd/lib/message";

import { SelectOptionWithAvatar } from "@/components";
import { CreateClassMutation } from "@/graphql/new/types";
import { useUsersSelect } from "@/hooks/useUsersSelect";

import { CustomMarkdown } from "@/components/markdown";
import { UPLOAD_URL, uploadProvider } from "@/providers/data";
import dayjs from "dayjs";
import { CLASS_CREATE_MUTATION } from "./queries/createClass";

type Props = {
  isOverModal?: boolean;
};

export const ClassCreatePage = ({ isOverModal }: Props) => {
  const getToPath = useGetToPath();

  const [searchParams] = useSearchParams();

  const go = useGo();

  const { form, formProps, modalProps, close } = useModalForm<
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
  // const { data: teachers } = useOne<User, HttpError>({
  //   resource: "role",
  //   meta: {
  //     gqlQuery: TEACHER_NEW_LIST_QUERY,
  //   },
  // });
  const users = queryResult?.data?.data ?? [];
  const [value, setValue] = React.useState("");

  const { onChange } = useFileUploadState();
  const apiUrl = useApiUrl("upload");
  const handleRemove = async (file: { name: string }) => {
    try {
      await uploadProvider.custom({
        url: UPLOAD_URL + "/upload",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
        },
        payload: {
          fileName: file.name,
        },
      });

      message.success("File removed successfully");
      return true; // Return true to remove the file from the list in UI
    } catch (error) {
      message.error("Failed to remove the file");
      return false; // Return false to keep the file in the list in UI
    }
  };

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
            base64String = await file2Base64(file);
          }
          return formProps.onFinish?.({
            ...values,
            logoUrl: base64String,
            endDate: dayjs(),
          });
        }}
      >
        <Form.Item label="Class name" name="name" rules={[{ required: true }]}>
          <Input placeholder="Please enter class name" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: false }]}
        >
          <CustomMarkdown
            value={""}
            setValue={(val: string) => form.setFieldValue("description", val)}
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
              <p className="ant-upload-text">
                Choose your avatar & drop in this area
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  );
};
