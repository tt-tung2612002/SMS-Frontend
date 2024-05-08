import React from "react";

import {
  useCreate,
  useDelete,
  useInvalidate,
  useList,
  useUpdate,
} from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { Text } from "@/components";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, ModalProps, Popconfirm } from "antd";

import { EventCategoriesQuery } from "@/graphql/types";
import { EVENT_CATEGORIES_QUERY } from "@/routes/calendar/components/categories/getCategories";

import { Category } from "@/graphql/new/schema.types";
import styles from "./index.module.css";
import { CREATE_CATEGORY_MUTATION } from "./updateCategory";

type CalendarManageCategoriesProps = {
  saveSuccces?: () => void;
} & ModalProps;

export const CalendarManageCategories: React.FC<
  CalendarManageCategoriesProps
> = ({ saveSuccces, ...rest }) => {
  const [form] = Form.useForm();
  const { mutate: create } = useCreate();
  const invalidate = useInvalidate();
  const { mutate: deleteMutation } = useDelete<Category>();

  const { data } = useList<GetFieldsFromList<EventCategoriesQuery>>({
    resource: "categories",
    liveMode: "auto",
    dataProviderName: "local",
    meta: {
      gqlQuery: EVENT_CATEGORIES_QUERY,
    },
  });

  const { mutate } = useUpdate<Category>();

  return (
    <Modal
      {...rest}
      title="Manage Categories"
      okText="Save"
      destroyOnClose
      bodyStyle={{ paddingTop: "1rem" }}
      okButtonProps={{
        onClick: () => {
          form.submit();
        },
      }}
    >
      <div className={styles.container}>
        {data?.data.map((category) => (
          <div key={category.id} className={styles.category}>
            <Text
              className={styles.title}
              editable={{
                onChange: (value) => {
                  mutate({
                    invalidates: ["list", "many"],
                    resource: "category",
                    id: parseInt(category.id ?? "", 10),
                    values: { title: value },
                    successNotification: () => ({
                      key: "event-category-update",
                      message: "Successfully updated category",
                      description: "Successful",
                      type: "success",
                    }),
                  });
                  invalidate({
                    resource: "categories",
                    dataProviderName: "local",
                    invalidates: ["list", "many"],
                  });
                  // form.submit();
                  close();
                },
              }}
            >
              {category.title}
            </Text>
            <Popconfirm
              title="Delete the category"
              description="Are you sure to delete this category?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                deleteMutation({
                  resource: "category",
                  id: parseInt(category.id ?? "", 10),
                  successNotification: () => ({
                    key: "event-category-delete",
                    message: "Successfully deleted category",
                    description: "Successful",
                    type: "success",
                  }),
                });
                invalidate({
                  dataProviderName: "local",
                  invalidates: ["list", "many", "resourceAll"],
                  resource: "categories",
                });
              }}
            >
              <Button
                type="text"
                icon={<DeleteOutlined className="tertiary" />}
              />
            </Popconfirm>
          </div>
        ))}

        <Form
          form={form}
          onFinish={(formValues: { title: string }) => {
            if (!formValues?.title || formValues.title.length === 0) {
              return saveSuccces?.();
            }

            for (const title of formValues.title) {
              if (title.length === 0) {
                return saveSuccces?.();
              }
              const values = { title };
              create(
                {
                  resource: "category",
                  dataProviderName: "local",
                  meta: {
                    gqlMutation: CREATE_CATEGORY_MUTATION,
                  },
                  values,
                  successNotification: () => ({
                    key: "event-category-create",
                    message: "Successfully created categories",
                    description: "Successful",
                    type: "success",
                  }),
                },
                {
                  onSuccess: () => {
                    saveSuccces?.();
                    form.resetFields();
                  },
                }
              );
            }
          }}
        >
          <Form.List name="title">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <div key={field.key} className={styles.category}>
                    <Form.Item required={false} noStyle>
                      <Form.Item {...field} noStyle>
                        <Input
                          className={styles["new-category-input"]}
                          placeholder="Please enter category title"
                          bordered={false}
                        />
                      </Form.Item>
                    </Form.Item>
                    <Button
                      type="text"
                      onClick={() => {
                        remove(field.name);
                      }}
                      icon={<DeleteOutlined className="tertiary" />}
                    />
                  </div>
                ))}

                <div className={styles.category}>
                  <Button
                    type="link"
                    icon={<PlusOutlined />}
                    onClick={() => {
                      add();
                    }}
                    className={styles["new-category-button"]}
                  >
                    Add category
                  </Button>
                </div>
              </>
            )}
          </Form.List>
        </Form>
      </div>
    </Modal>
  );
};
