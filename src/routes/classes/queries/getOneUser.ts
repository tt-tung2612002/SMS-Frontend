import gql from "graphql-tag";

export const GET_ACTIVE_STUDENT_FOR_CLASSES = gql`
  query getLesson($id: Int!) {
    user(id: $id) {
        classes {
            nodes {
                id
            }
        }
    }
  }
`;
export const GET_ACTIVE_STUDENT_FOR_EVENTS = gql`
  query getLesson($id: Int!) {
    user(id: $id) {
        classes {
            nodes {
              lessons {
                nodes {
                  id
                }
              }
            }
        }
    }
  }
`

export const GET_ACTIVE_TEACHER_FOR_EVENTS = gql`
query getTeacherLessons($id: Int!) {
user(id: $id) {
    classesByTeacherId {
      nodes {
        id
        lessons {
          nodes {
            id
          }
        }
      }
    }
  }
}
`;