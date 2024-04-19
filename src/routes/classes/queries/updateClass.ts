import gql from "graphql-tag";

export const CLASS_UPDATE_MUTATION = gql`
  mutation updateClass($input: UpdateClassInput!) {
    updateClass(input: $input) {
      class {
        id
        teacher {
          id
          userInfoById {
            firstName
            avatarUrl
          }
        }
        name
        logoUrl
      }
    }
  }
`;
