import gql from "graphql-tag";

export const STUDENTS_LIST_QUERY = gql`
  query StudentsList($filter: UserInfoFilter!) {
    roles(condition: { name: "student" }) {
      nodes {
        students: userInfos(filter: $filter) {
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
