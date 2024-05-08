import { GetFields } from "@refinedev/nestjs-query";

import { Space, Typography } from "antd";

import { KanbanGetTaskQuery } from "@/graphql/types";

type Props = {
  users?: GetFields<KanbanGetTaskQuery>["users"];
};

export const UsersHeader = ({ users = [] }: Props) => {
  if (users.length > 0) {
    return (
      <Space size={[0, 8]} wrap>
        {}
      </Space>
    );
  }

  return <Typography.Link>Assign to users</Typography.Link>;
};
