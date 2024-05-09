import React from "react";
import { useParams } from "react-router-dom";

import { useDelete, useNavigation, useShow, useUpdate } from "@refinedev/core";
import { GetFields } from "@refinedev/nestjs-query";

import {
  DeleteOutlined,
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Card, Input, Modal, Popconfirm, Spin, Typography } from "antd";
import dayjs from "dayjs";
import { now } from "lodash";

import { CustomAvatar, SingleElementForm, Text, TextIcon } from "@/components";
import { StudentShowQuery } from "@/graphql/new/customTypes";
import { User } from "@/graphql/new/schema.types";

import { ContactComment } from "../components";
import styles from "./index.module.css";
import { STUDENT_SHOW_QUERY } from "./showStudent";

export const ContactShowPage: React.FC = () => {
  // const [activeForm, setActiveForm] = useState<
  //   "email" | "companyId" | "jobTitle" | "phone" | "timezone"
  // >();
  const { list } = useNavigation();
  const { mutate } = useUpdate<User>();
  const { mutate: deleteMutation } = useDelete<User>();
  const { id } = useParams();
  const { queryResult } = useShow<GetFields<StudentShowQuery>>({
    resource: "user",
    dataProviderName: "local",
    liveMode: "auto",
    meta: {
      gqlQuery: STUDENT_SHOW_QUERY,
    },
    id: id,
  });

  // const { selectProps: usersSelectProps, queryResult: usersSelectQueryResult } =
  //   useUsersSelect();

  const closeModal = () => {
    // setActiveForm(undefined);
    list("students");
  };

  const { data, isLoading, isError } = queryResult;

  if (isError) {
    closeModal();
    return null;
  }

  if (isLoading) {
    return (
      <Modal
        open
        width={756}
        bodyStyle={{
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin />
      </Modal>
    );
  }

  const {
    firstName: name,
    email,
    phoneNumber: phone,
    avatarUrl,
  } = data?.data?.info ?? {};

  // let studentName = name;

  return (
    <Modal
      open
      onCancel={() => closeModal()}
      onOk={() => closeModal()}
      width={728}
      // bodyStyle={{ background: "#f5f5f5", padding: 0 }}
      // headerStyle={{ display: "none" }}
    >
      {/* <div className={styles.header}>
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={() => closeModal()}
        />
      </div> */}
      <div className={styles.container}>
        <div className={styles.name}>
          <CustomAvatar
            style={{
              marginRight: "1rem",
              flexShrink: 0,
              fontSize: "40px",
            }}
            size={96}
            src={avatarUrl}
            name={name}
          />

          <Typography.Title
            level={3}
            style={{ padding: 0, margin: 0, width: "100%" }}
            className={styles.title}
            editable={{
              onChange(value) {
                mutate({
                  dataProviderName: "local",
                  resource: "userInfo",
                  id: parseInt(id ?? "", 10),
                  values: {
                    firstName: value,
                  },
                  successNotification: false,
                });
                // refresh
              },
              triggerType: ["text", "icon"],
              icon: <EditOutlined className={styles.titleEditIcon} />,
            }}
          >
            {name}
          </Typography.Title>
        </div>

        <div className={styles.form}>
          <SingleElementForm
            icon={<MailOutlined className="tertiary" />}
            // state={
            //   activeForm && activeForm === "email"
            //     ? "form"
            //     : email
            //     ? "view"
            //     : "empty"
            // }
            itemProps={{
              name: "email",
              label: "Email",
            }}
            view={<Text>{email}</Text>}
            // onClick={() => setActiveForm("email")}
            // onUpdate={() => setActiveForm(undefined)}
            // onCancel={() => setActiveForm(undefined)}
          >
            <Input defaultValue={email} />
          </SingleElementForm>

          <SingleElementForm
            icon={<PhoneOutlined className="tertiary" />}
            // state={
            //   activeForm && activeForm === "phone"
            //     ? "form"
            //     : phone
            //     ? "view"
            //     : "empty"
            // }
            itemProps={{
              name: "phone",
              label: "Phone",
            }}
            view={<Text>{phone}</Text>}
            // onClick={() => setActiveForm("phone")}
            // onUpdate={() => setActiveForm(undefined)}
            // onCancel={() => setActiveForm(undefined)}
          >
            <Input defaultValue={phone || ""} />
          </SingleElementForm>
        </div>

        <Card
          title={
            <>
              <TextIcon />
              <Text style={{ marginLeft: ".8rem" }}>Notes</Text>
            </>
          }
          bodyStyle={{
            padding: 0,
          }}
        >
          <ContactComment />
        </Card>

        <div className={styles.actions}>
          <Text className="ant-text tertiary">
            Created on: {dayjs(now()).format("MMMM DD, YYYY")}
          </Text>

          <Popconfirm
            title="Delete the contact"
            description="Are you sure to delete this contact?"
            onConfirm={() => {
              deleteMutation(
                {
                  id: parseInt(id ?? "", 10),
                  resource: "user",
                },
                {
                  onSuccess: () => closeModal(),
                }
              );
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Delete Contact
            </Button>
          </Popconfirm>
        </div>
      </div>
    </Modal>
  );
};
