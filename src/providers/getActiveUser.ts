import gql from "graphql-tag";

export const ME_QUERY = gql`
  {
    me {
      id
      username
      userInfo {
        firstName
        lastName
        avatarUrl
        phoneNumber
        dateOfBirth
      }
    }
  }
`;
