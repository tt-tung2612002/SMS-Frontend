import gql from "graphql-tag";

export const LESSON_CREATE_MUTATION = gql`
  mutation CreateLesson($input: CreateLessonInput!) {
    createLesson(input: $input) {
      lesson {
        id
      }
    }
  }
`;