import { FC } from "react";

import { Button, Popover, Space, Tag } from "antd";

import { UserInfo } from "@/graphql/new/schema.types";
import useRoleCheck from "@/hooks/useRoleCheck";

import { Attendance } from "@/graphql/new/customSchema";
import { PlayCircleFilled } from "@ant-design/icons";
import { useNavigation, useUpdate } from "@refinedev/core";
import dayjs from "dayjs";
import { CustomAvatar } from "../custom-avatar";
import { Text } from "../text";

type Props = {
  user: Partial<UserInfo>;
  onClick?: any;
  onHover?: any;
};

export const UserTag: FC<Props> = ({ user, onClick, onHover }) => {
  const { show } = useNavigation();
  const { isStudent } = useRoleCheck();

  if (onClick == undefined) {
    onClick = () => show("students", user.id ?? 1);
  }

  const { mutate } = useUpdate<Attendance>();

  const handleStatusChange = (newStatus: string, id: number) => {
    mutate({
      resource: "attendance",
      id: id,
      values: {
        status: newStatus,
        updatedAt: dayjs().utc().utcOffset(7).format("YYYY-MM-DD HH:mm:ss"),
      },
      invalidates: ["all", "resourceAll"],
    });
  };

  const content = (
    <div>
      <Button
        type="text"
        onClick={() => handleStatusChange("PRESENT", user.id ?? 0)}
        icon={<PlayCircleFilled />}
        style={{
          color: "#6abe39",
          background: "#162312",
          borderColor: "#274916",
          textTransform: "capitalize",
        }}
      >
        Present
      </Button>
      <Button
        type="text"
        onClick={() => handleStatusChange("ABSENT", user.id ?? 0)}
        icon={<PlayCircleFilled />}
        style={{
          color: "#e84749",
          background: "#29181a",
          borderColor: "#58181c",
          textTransform: "capitalize",
        }}
      >
        Absent
      </Button>
      <Button
        type="text"
        onClick={() => handleStatusChange("LATE", user.id ?? 0)}
        icon={<PlayCircleFilled />}
        style={{
          color: "#f5a623",
          background: "#2a1e12",
          borderColor: "#5a3a1c",
          textTransform: "capitalize",
        }}
      >
        Late
      </Button>
    </div>
  );

  return (
    <Tag
      onClick={onClick}
      key={user.id}
      style={{
        backgroundColor: "#131313bb",
        fontSize: 14,
        borderRadius: 20,
        // lineHeight: "unset",
        marginRight: "unset",
      }}
    >
      <Space size={1} wrap>
        {!isStudent ? (
          <Popover content={content} trigger="hover">
            <CustomAvatar
              src={user.avatarUrl}
              name={user.firstName}
              style={{
                display: "inline-flex",
                cursor: "pointer",
                // marginLeft: 10,
                // marginRight: 50,
              }}
            />
            <Text size="md" style={{ cursor: "pointer", marginRight: 0 }}>
              {user.firstName}
            </Text>
          </Popover>
        ) : (
          <>
            <CustomAvatar
              src={user.avatarUrl}
              name={user.firstName}
              style={{
                display: "inline-flex",
                // marginLeft: 10,
                // marginRight: 50,
              }}
            />
            <Text size="md" style={{ cursor: "pointer", marginRight: 0 }}>
              {user.firstName}
            </Text>
          </>
        )}
      </Space>
    </Tag>
  );
};
