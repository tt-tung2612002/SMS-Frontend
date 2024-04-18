import gql from "graphql-tag";

export const CLASSES_TABLE_QUERY = gql`
  query ClassesTable($filter: ClassFilter!) {
    classes(filter: $filter) {
      nodes {
        id
        name
        logoUrl
        teacher {
          userInfoById {
            firstName
            lastName
            avatarUrl
          }
        }
        students {
          nodes {
            id
            userInfoById {
              name: firstName
              lastName
              avatarUrl
            }
          }
        }
      }
      totalCount
    }
  }
`;
