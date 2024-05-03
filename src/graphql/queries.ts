import gql from "graphql-tag";

export const EVENT_CATEGORIES_QUERY = gql`
  query EventCategories($filter: CategoryFilter!) {
    categories(filter: $filter) {
      nodes {
        id
        title
      }
      totalCount
    }
  }
`;
