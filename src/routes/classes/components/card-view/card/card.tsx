import { FC } from "react";

import { useDelete, useNavigation } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { DeleteOutlined, EyeOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Card, Dropdown, Space, Tooltip } from "antd";

import { CustomAvatar, Text } from "@/components";
import { ClassesTableQuery } from "@/graphql/new/customTypes";

import { AvatarGroup } from "../../avatar-group";
import { CompanyCardSkeleton } from "./skeleton";

type Props = {
  classes: GetFieldsFromList<ClassesTableQuery> | null;
};

export const CompanyCard: FC<Props> = ({ classes }) => {
  const { edit } = useNavigation();
  const { mutate } = useDelete();

  if (!classes) return <CompanyCardSkeleton />;

  const studentAvatars = classes?.students?.nodes?.map((student) => {
    return {
      name: student.userInfoById?.name,
      src: student.userInfoById.avatarUrl as string | undefined,
    };
  });

  return (
    <Card
      onClick={() => {
        edit("classes", classes.id);
      }}
      size="small"
      actions={[
        <div
          key="1"
          style={{
            width: "100%",
            height: "60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "0 16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "6px",
            }}
          >
            <Text size="xs">Students</Text>
            <AvatarGroup
              size={"small"}
              overlap
              gap="4px"
              avatars={studentAvatars}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "6px",
            }}
          >
            <Text size="xs">Teacher</Text>
            <Tooltip
              title={classes?.teacher?.userInfoById?.firstName}
              key={classes?.teacher?.id}
            >
              <CustomAvatar
                name={classes?.teacher?.userInfoById?.firstName}
                src={classes?.teacher?.userInfoById?.avatarUrl}
              />
            </Tooltip>
          </div>
        </div>,
      ]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Dropdown
          menu={{
            items: [
              {
                label: "View class",
                key: "1",
                icon: <EyeOutlined />,
                onClick: () => {
                  edit("classes", classes.id);
                },
              },
              {
                danger: true,
                label: "Delete class",
                key: "2",
                icon: <DeleteOutlined />,
                onClick: () => {
                  mutate({
                    resource: "classes",
                    id: classes.id,
                    dataProviderName: "local",
                  });
                },
              },
            ],
          }}
          placement="bottom"
          arrow
        >
          <Button
            type="text"
            shape="circle"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
            icon={
              <MoreOutlined
                style={{
                  transform: "rotate(90deg)",
                }}
              />
            }
          />
        </Dropdown>

        <CustomAvatar
          name={classes.name}
          src={classes.logoUrl}
          shape="square"
          style={{
            width: "48px",
            height: "48px",
          }}
        />
        <Text
          strong
          size="md"
          ellipsis={{ tooltip: classes.name }}
          style={{
            marginTop: "12px",
          }}
        >
          {classes.name}
        </Text>

        <Space
          direction="vertical"
          size={0}
          style={{
            marginTop: "8px",
            alignItems: "center",
          }}
        ></Space>
      </div>
    </Card>
  );
};
