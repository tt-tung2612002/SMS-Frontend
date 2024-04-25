import gql from "graphql-tag";

// export const CONTACTS_LIST_QUERY = gql`
//     query ContactsList(
//         $filter: ContactFilter!
//         $sorting: [ContactSort!]
//         $paging: OffsetPaging!
//     ) {
//         contacts(filter: $filter, sorting: $sorting, paging: $paging) {
//             nodes {
//                 id
//                 name
//                 email
//                 company {
//                     id
//                     name
//                     avatarUrl
//                 }
//                 jobTitle
//                 status
//                 avatarUrl
//             }
//             totalCount
//         }
//     }
// `;

export const STUDENTS_LIST_QUERY = gql`
  query StudentsList($filter: UserInfoFilter!) {
    roles(condition: { name: "student" }) {
      nodes {
        students: userInfosByUserRoleRoleIdAndUserId(
          filter: $filter
        ) {
          nodes {
            id
            firstName
            lastName
            avatarUrl
            email
            phoneNumber
            dateOfBirth
          }
          totalCount
        }
      }
    }
  }
`;
