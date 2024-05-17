import gql from "graphql-tag";

export const CLASS_LESSONS_TABLE_QUERY = gql`
  query ClassGetLessons($filter: LessonFilter!) {
    lessons(filter: $filter) {
      nodes {
        id
        title
        startDate
        endDate
      }
      totalCount
    }
  }
`;


export const CLASS_GET_LESSON_IDS = gql`
  query ClassGetLessons($id: Int!) {
    class(id: $id) {
      lessons {
        nodes {
          id
        }
      }
    }
  }
`;
