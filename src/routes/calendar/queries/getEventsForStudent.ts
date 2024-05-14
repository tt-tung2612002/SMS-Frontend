import gql from "graphql-tag";

export const STUDENT_GET_EVENTS = gql`
  query getLesson($id: Int!) {
    userInfo(id: $id) {
      events {
        nodes {
          id
          title
          startDate
          endDate
          color
          description
          lessonById {
            id
            title
            class {
              name
            }
          }
        }
      }
    }
  }
`;
