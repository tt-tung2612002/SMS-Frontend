import { useSelect } from "@refinedev/antd";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import gql from "graphql-tag";

import { GetUsersQuery } from "@/graphql/new/types";
import { UsersSelectQuery } from "@/graphql/types";

const USERS_SELECT_QUERY = gql`
  query GetUsers($filter: UserFilter!) {
    users(filter: $filter) {
      nodes {
        id
        username
        info: userInfoById {
          id
          name: firstName
          lastName
          avatarUrl
        }
      }
    }
  }
`;

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

export const useUsersSelect = () => {
  return useSelect<GetFieldsFromList<GetUsersQuery>>({
    resource: "users",
    // optionLabel: (info) => `${info.firstName} ${info.lastName}`,
    optionLabel: "info.name",
    optionValue: "id",
    dataProviderName: "local",
    meta: {
      gqlQuery: USERS_SELECT_QUERY,
    },
  });
};

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
