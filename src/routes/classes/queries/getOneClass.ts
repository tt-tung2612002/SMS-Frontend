import gql from "graphql-tag";

export const CLASS_STUDENTS_QUERY = gql`
  query getStudentsInClass2($filter: ClassManagementFilter!) {
    classManagements(filter: $filter) {
      nodes {
        user {
          id
          userInfoById {
            firstName
            lastName
            email
            phoneNumber
            avatarUrl
          }
        }
      }
      totalCount
    }
  }
`;
