import gql from "graphql-tag";

export const CALENDAR_CREATE_EVENT_CATEGORIES_MUTATION = gql`
  mutation CreateEventCategories($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      clientMutationId
    }
  }
`;
