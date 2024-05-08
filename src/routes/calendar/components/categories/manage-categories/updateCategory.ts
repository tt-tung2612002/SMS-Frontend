import gql from "graphql-tag";

export const UPDATE_CATEGORY_MUTATION = gql`
  mutation updateCategory($input: UpdateCategoryInput!) {
    updateCategory(input: $input) {
      clientMutationId
    }
  }
`;

export const CREATE_CATEGORY_MUTATION = gql`
  mutation CreateCategory($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      clientMutationId
    }
  }
`;