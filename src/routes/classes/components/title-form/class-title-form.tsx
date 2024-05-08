import { useState } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "@refinedev/antd";
import { HttpError, useOne } from "@refinedev/core";
import { GetFields, GetVariables } from "@refinedev/nestjs-query";

import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Select, Skeleton, Space } from "antd";
import type * as Types from "graphql/new/schema.types";

import { CustomAvatar, SelectOptionWithAvatar, Text } from "@/components";
import {
  UpdateClassMutation,
  UpdateClassMutationVariables,
} from "@/graphql/new/types";
import { useUsersSelect } from "@/hooks/useUsersSelect";
import { getNameInitials } from "@/utilities";

import { CLASS_UPDATE_MUTATION } from "../../queries/updateClass";
import { CLASS_TITLE_QUERY } from "./getClassForm";
import styles from "./title-form.module.css";

export const ClassTitleForm = () => {
  const { formProps, onFinish, queryResult } = useForm<
    GetFields<UpdateClassMutation>,
    HttpError,
    GetVariables<UpdateClassMutationVariables>
  >({
    redirect: false,
    meta: {
      gqlMutation: CLASS_UPDATE_MUTATION,
      gqlQuery: CLASS_TITLE_QUERY,
    },
    dataProviderName: "local",
  });

  const { id } = useParams();
  const { data } = useOne<Types.Class, HttpError>({
    resource: "classes",
    dataProviderName: "local",
    meta: {
      gqlQuery: CLASS_TITLE_QUERY,
    },
    id,
  });

  const currentClass = data?.data;
  const loading = queryResult?.isLoading;

  return (
    <Form {...formProps}>
      <Space size={16}>
        <CustomAvatar
          size="large"
          shape="square"
          src={currentClass?.logoUrl}
          name={getNameInitials("Do it Yourself")}
          style={{
            width: 96,
            height: 96,
            fontSize: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
        />
        <Space direction="vertical" size={0}>
          <Form.Item name="name" required noStyle>
            <TitleInput
              loading={loading}
              onChange={(value) => {
                return onFinish?.({
                  name: value,
                });
              }}
            />
          </Form.Item>
          <SalesOwnerInput
            teacher={currentClass?.teacher}
            loading={loading}
            onChange={(value) => {
              onFinish?.({
                teacherId: value,
              });
            }}
          />
        </Space>
      </Space>
    </Form>
  );
};

export const TitleInput = ({
  value,
  onChange,
  loading,
}: {
  // value is set by <Form.Item />
  value?: string;
  onChange?: (value: string) => void;
  loading?: boolean;
}) => {
  return (
    <Text
      className={styles.title}
      size="xl"
      strong
      editable={{
        onChange,
        triggerType: ["text", "icon"],
        icon: <EditOutlined className={styles.titleEditIcon} />,
      }}
    >
      {loading ? (
        <Skeleton.Input size="small" style={{ width: 200 }} active />
      ) : (
        value
      )}
    </Text>
  );
};

const SalesOwnerInput = ({
  teacher,
  onChange,
  loading,
}: // loading,
{
  onChange?: (value: number) => void;
  teacher: any;
  loading?: boolean;
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const { selectProps, queryResult } = useUsersSelect();

  const users = queryResult?.data?.data ?? [];

  return (
    <div
      className={styles.salesOwnerInput}
      role="button"
      onClick={() => {
        setIsEdit(true);
      }}
    >
      <Text
        type="secondary"
        style={{
          marginRight: 12,
        }}
      >
        Teacher:
      </Text>
      {loading && <Skeleton.Input size="small" style={{ width: 120 }} active />}
      {!isEdit && (
        <>
          <CustomAvatar
            size="small"
            src={teacher?.userInfoById?.avatarUrl}
            style={{
              marginRight: 4,
            }}
          />
          <Text>{teacher?.userInfoById?.firstName}</Text>
          <Button
            type="link"
            icon={<EditOutlined className={styles.salesOwnerInputEditIcon} />}
          />
        </>
      )}
      {isEdit && !loading && (
        <Form.Item name={["teacher", "id"]} noStyle>
          <Select
            {...selectProps}
            defaultOpen={true}
            autoFocus
            onDropdownVisibleChange={(open) => {
              if (!open) {
                setIsEdit(false);
              }
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onChange={(value, option) => {
              onChange?.(value as unknown as number);
              selectProps.onChange?.(value, option);
            }}
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
      )}
    </div>
  );
};
