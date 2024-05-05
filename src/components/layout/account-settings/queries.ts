import gql from "graphql-tag";

export const ACCOUNT_SETTINGS_GET_USER_QUERY = gql`
  query AccountSettingsGetUser($id: Int!) {
    userInfo(id: $id) {
      id
      name: firstName
      email
      avatarUrl
      phoneNumber
    }
  }
`;

export const ACCOUNT_SETTINGS_UPDATE_USER_MUTATION = gql`
  mutation AccountSettingsUpdateUser($input: UpdateOneUserInput!) {
    updateUser(input: $input) {
      id
      name
      email
      avatarUrl
      jobTitle
      phone
      timezone
    }
  }
`;
