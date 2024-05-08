import gql from "graphql-tag";

export const CLASS_LESSONS_TABLE_QUERY = gql`
  query CompanyContactsTable(
    $filter: LessonFilter!
  ) {
    lessons(filter: $filter) {
      nodes {
        id
      }
      totalCount
   }
  }
`;