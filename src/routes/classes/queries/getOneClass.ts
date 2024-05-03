import gql from "graphql-tag";

export const CLASS_STUDENTS_QUERY = gql`
  query getStudentsInClass($id: Int!) {
    class(id: $id) {
      id
      name
      logoUrl
      students: users {
        nodes {
          userInfoById {
            firstName
            avatarUrl
          }
        }
        totalCount
      }
    }
  }
`;

export const CLASS_STUDENTS_QUERY_2 = gql`
  query getStudentsInClass2($filter: ClassManagementFilter!) {
    classManagements(filter: $filter) {
      nodes {
        user {
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
