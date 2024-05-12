import { FC } from "react";

import { Button, Popover, Space, Tag } from "antd";

import { UserInfo } from "@/graphql/new/schema.types";

import { useNavigation } from "@refinedev/core";
import { CustomAvatar } from "../custom-avatar";

type Props = {
  user: Partial<UserInfo>;
  onClick?: any;
  onHover?: any;
};

// const { mutate } = useUpdate<Attendance>();
export const UserTag: FC<Props> = ({ user, onClick, onHover }) => {
  const { show } = useNavigation();

  if (onClick == undefined) {
    onClick = () => show("students", user.id ?? 1);
  }

  const popOverContent = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button type="primary" onClick={() => handleAttendanceUpdate("present")}>
        Present
      </Button>
      <Button type="text" onClick={() => handleAttendanceUpdate("absent")}>
        Absent
      </Button>
      <Button type="text" onClick={() => handleAttendanceUpdate("late")}>
        Late
      </Button>
    </div>
  );

  return (
    <Tag
      onClick={onClick}
      key={user.id}
      style={{
        fontSize: 14,
        padding: 1,
        // paddingRight: 10,
        // paddingTop: 100,
        borderRadius: 24,
        lineHeight: "unset",
        marginRight: "unset",
      }}
    >
      <Space size={10}>
        <Popover content={popOverContent} trigger="hover">
          <CustomAvatar
            src={user.avatarUrl}
            name={user.firstName}
            style={{ display: "inline-flex", cursor: "pointer" }}
          />
        </Popover>
        {user.firstName}
      </Space>
    </Tag>
  );
};
function handleAttendanceUpdate(status: String) {
  // mutate({
  //   resource: "attendance",
  //   id: 1,
  //   values: {
  //     status: status,
  //   },
  // });
}
