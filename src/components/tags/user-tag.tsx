import { FC } from "react";

import { Space, Tag } from "antd";

import { UserInfo } from "@/graphql/new/schema.types";

import { useNavigation } from "@refinedev/core";
import { CustomAvatar } from "../custom-avatar";

type Props = {
  user: Partial<UserInfo>;
};

export const UserTag: FC<Props> = ({ user }) => {
  const { show } = useNavigation();

  return (
    <Tag
      onClick={() => show("students", user.id ?? 1)}
      key={user.id}
      style={{
        fontSize: 15,
        padding: 2,
        paddingRight: 10,
        borderRadius: 24,
        lineHeight: "unset",
        marginRight: "unset",
      }}
    >
      <Space size={4}>
        <CustomAvatar
          src={user.avatarUrl}
          name={user.firstName}
          style={{ display: "inline-flex" }}
        />
        {user.firstName}
      </Space>
    </Tag>
  );
};
