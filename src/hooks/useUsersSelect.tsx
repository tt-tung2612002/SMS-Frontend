import { useSelect } from "@refinedev/antd";
import { useOne } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import gql from "graphql-tag";

import { GetUsersQuery, StudentShowQuery } from "@/graphql/new/customTypes";
import { STUDENT_SHOW_QUERY } from "@/routes/contacts/students/show/showStudent";

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
export const useStudentSelect = (id: number) => {
  return useOne<StudentShowQuery>({
    resource: "students",
    dataProviderName: "local",
    meta: {
      gqlQuery: STUDENT_SHOW_QUERY,
    },
    id: id,
  });
};
