import React from "react";

import { useModal } from "@refinedev/antd";
import { useInvalidate, useList } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { FlagOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Skeleton, theme } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

import { Text } from "@/components";
import { EventCategoriesQuery } from "@/graphql/types";
import { EVENT_CATEGORIES_QUERY } from "@/routes/calendar/components/categories/getCategories";

import styles from "./index.module.css";
import { CalendarManageCategories } from "./manage-categories";

type CalendarCategoriesProps = {
  onChange?: (e: CheckboxChangeEvent) => void;
};

export const CalendarCategories: React.FC<CalendarCategoriesProps> = ({
  onChange,
  ...rest
}) => {
  const { token } = theme.useToken();
  const { modalProps, show, close } = useModal();
  const { data, isLoading } = useList<GetFieldsFromList<EventCategoriesQuery>>({
    resource: "categories",
    dataProviderName: "local",
    meta: {
      gqlQuery: EVENT_CATEGORIES_QUERY,
    },
  });

  const invalidate = useInvalidate();

  const customClose = () => {
    invalidate({
      dataProviderName: "local",
      resource: "categories",
      invalidates: ["list", "many"],
    });
    close();
  };

  return (
    <>
      <Card
        title={
          <span>
            <FlagOutlined style={{ color: token.colorPrimary }} />
            <Text size="sm" style={{ marginLeft: ".5rem" }}>
              Categories
            </Text>
          </span>
        }
        extra={
          <Button
            shape="circle"
            onClick={() => show()}
            icon={<SettingOutlined />}
          />
        }
        bodyStyle={{
          padding: "0.5rem 1rem",
        }}
        {...rest}
      >
        <div className={styles.container}>
          {isLoading && (
            <Skeleton
              loading={isLoading}
              active
              paragraph={{
                rows: 3,
                width: 200,
              }}
            />
          )}
          {data?.data.map((item) => (
            <div key={item.id} className={styles.category}>
              <Checkbox
                className={styles.checkbox}
                value={item.id}
                onChange={onChange}
              >
                <Text>{item.title}</Text>
              </Checkbox>
            </div>
          ))}
        </div>
      </Card>

      <CalendarManageCategories
        {...modalProps}
        saveSuccces={() => customClose()}
      />
    </>
  );
};
