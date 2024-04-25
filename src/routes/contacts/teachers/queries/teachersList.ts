import gql from "graphql-tag";

export const TEACHER_LIST_QUERY = gql`
  query StudentsList($filter: UserInfoFilter!) {
    roles(condition: { name: "teacher" }) {
      nodes {
        teachers: userInfosByUserRoleRoleIdAndUserId(filter: $filter) {
          nodes {
            id
            firstName
            lastName
            avatarUrl
            email
            phoneNumber
            dateOfBirth
          }
          totalCount
        }
      }
    }
  }
`;
