import { HttpError, useOne, useUpdate } from "@refinedev/core";

import {
  CloseOutlined,
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Drawer, Input, Space, Spin, Typography } from "antd";

import { TimezoneEnum } from "@/enums";
import { UserInfo } from "@/graphql/new/schema.types";

import { CustomAvatar } from "../../custom-avatar";
import { SingleElementForm } from "../../single-element-form";
import { Text } from "../../text";
import styles from "./index.module.css";
import {
  ACCOUNT_SETTINGS_GET_USER_QUERY,
  ACCOUNT_SETTINGS_UPDATE_USER_MUTATION,
} from "./queries";

const timezoneOptions = Object.keys(TimezoneEnum).map((key) => ({
  label: TimezoneEnum[key as keyof typeof TimezoneEnum],
  value: TimezoneEnum[key as keyof typeof TimezoneEnum],
}));

type Props = {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  userId: number;
};

export const AccountSettings = ({ opened, setOpened, userId }: Props) => {
  const { data, isLoading, isError } = useOne<UserInfo, HttpError>({
    resource: "userInfo",
    liveMode: "auto",
    id: userId,
    queryOptions: {
      enabled: opened,
    },
    meta: {
      gqlQuery: ACCOUNT_SETTINGS_GET_USER_QUERY,
    },
  });

  const { mutate: updateMutation } = useUpdate<UserInfo>();

  const closeModal = () => {
    setOpened(false);
  };

  if (isError) {
    closeModal();
    return null;
  }

  if (isLoading) {
    return (
      <Drawer
        open={opened}
        width={756}
        style={{
          background: "#1e1e1e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin />
      </Drawer>
    );
  }

  const { id, firstName: name, email, phoneNumber, avatarUrl } = data?.data;

  return (
    <Drawer
      onClose={closeModal}
      open={opened}
      width={756}
      styles={{
        body: {
          background: "#1e1e1e",
          padding: 0,
        },
        header: {
          display: "none !important",
          background: "#1e1e1e",
        },
      }}
    >
      <div className={styles.header}>
        <Text strong>Account Settings</Text>
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={() => closeModal()}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.name}>
          <CustomAvatar
            style={{
              marginRight: "1rem",
              flexShrink: 0,
              fontSize: "30px",
            }}
            size={64}
            src={avatarUrl}
            name={name}
          />
          <Typography.Title
            level={3}
            style={{ padding: 0, margin: 0, width: "100%" }}
            editable={{
              onChange(value) {
                updateMutation({
                  resource: "userInfo",
                  id,
                  values: { firstName: value },
                  mutationMode: "optimistic",
                  invalidates: ["all"],
                  successNotification: false,
                  meta: {
                    gqlMutation: ACCOUNT_SETTINGS_UPDATE_USER_MUTATION,
                  },
                });
              },
              triggerType: ["text", "icon"],
              icon: <EditOutlined className={styles.titleEditIcon} />,
            }}
          >
            {name}
          </Typography.Title>
        </div>
        <Card
          title={
            <Space size={15}>
              <UserOutlined />
              <Text size="sm">User profile</Text>
            </Space>
          }
        >
          <SingleElementForm
            useFormProps={{
              id,
              resource: "users",
              meta: {
                gqlMutation: ACCOUNT_SETTINGS_UPDATE_USER_MUTATION,
              },
            }}
            formProps={{ initialValues: { phoneNumber } }}
            icon={<PhoneOutlined className="tertiary" />}
            itemProps={{
              name: "phone",
              label: "Phone",
            }}
            view={<Text>{phoneNumber}</Text>}
          >
            <Input />
          </SingleElementForm>
        </Card>
        <Card
          title={
            <Space size={15}>
              <SafetyCertificateOutlined />
              <Text size="sm">Security</Text>
            </Space>
          }
          styles={{
            header: {
              padding: "0 12px",
            },
            body: {
              padding: 0,
            },
          }}
        >
          <SingleElementForm
            useFormProps={{
              id,
              resource: "users",
              meta: {
                gqlMutation: ACCOUNT_SETTINGS_UPDATE_USER_MUTATION,
              },
            }}
            formProps={{ initialValues: { email } }}
            icon={<MailOutlined className="tertiary" />}
            itemProps={{
              name: "email",
              label: "Email",
            }}
            view={<Text>{email}</Text>}
          >
            <Input />
          </SingleElementForm>
        </Card>
      </div>
    </Drawer>
  );
};
