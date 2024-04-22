import gql from "graphql-tag";

// export const CONTACT_SHOW_QUERY = gql`
//   query ContactShow($id: ID!) {
//     contact(id: $id) {
//       id
//       name
//       email
//       company {
//         id
//         name
//         avatarUrl
//       }
//       status
//       jobTitle
//       phone
//       timezone
//       avatarUrl
//       salesOwner {
//         id
//         name
//         avatarUrl
//       }
//       createdAt
//     }
//   }
// `;
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
