import gql from "graphql-tag";

export const LESSON_SHOW_QUERY = gql`
  query getLesson($id: Int!) {
    lesson(id: $id) {
      id
      title
      description
      assignments {
        nodes {
          id
          dueDate
          description
          title
          attachments {
            nodes {
              id
              fileName
              fileDownloadUrl
            }
          }
        }
        totalCount
      }
    }
  }
`;
