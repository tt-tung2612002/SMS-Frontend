import gql from "graphql-tag";

export const CLASS_CREATE_MUTATION = gql`
  mutation CreateClass($input: CreateClassInput!) {
    createClass(input: $input) {
      class {
        id
        name
      }
    }
  }
`;
