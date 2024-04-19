import gql from "graphql-tag";

export const CLASS_TITLE_QUERY = gql`
  query getClass($id: Int!) {
    class(id: $id) {
      id
      name
      logoUrl
      teacher {
        id
        userInfoById {
          firstName
          avatarUrl
        }
      }
    }
  }
`;
