import gql from "graphql-tag";

export const STUDENT_SHOW_QUERY = gql`
  query StudentShow($id: Int!) {
    user(id: $id) {
      id
      info: userInfoById {
        firstName
        lastName
        email
        phoneNumber
        avatarUrl
      }
    }
  }
`;
