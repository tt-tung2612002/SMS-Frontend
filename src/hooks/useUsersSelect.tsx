import { useSelect } from "@refinedev/antd";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import gql from "graphql-tag";

import { GetUsersQuery } from "@/graphql/new/customTypes";

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
