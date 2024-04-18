import { useSelect } from "@refinedev/antd";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import gql from "graphql-tag";

import { UsersSelectQuery } from "@/graphql/types";

const OLD_USERS_SELECT_QUERY = gql`
  query UsersSelect(
    $filter: UserFilter!
    $sorting: [UserSort!]
    $paging: OffsetPaging!
  ) {
    users(filter: $filter, sorting: $sorting, paging: $paging) {
      nodes {
        id
        name
        avatarUrl
      }
    }
  }
`;
export const oldUsersSelect = () => {
  return useSelect<GetFieldsFromList<UsersSelectQuery>>({
    resource: "users",
    // optionLabel: (info) => `${info.firstName} ${info.lastName}`,
    optionValue: "id",
    meta: {
      gqlQuery: OLD_USERS_SELECT_QUERY,
    },
  });
};
