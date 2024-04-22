import gql from "graphql-tag";

export const CONTACTS_LIST_QUERY = gql`
    query ContactsList(
        $filter: ContactFilter!
        $sorting: [ContactSort!]
        $paging: OffsetPaging!
    ) {
        contacts(filter: $filter, sorting: $sorting, paging: $paging) {
            nodes {
                id
                name
                email
                company {
                    id
                    name
                    avatarUrl
                }
                jobTitle
                status
                avatarUrl
            }
            totalCount
        }
    }
`;

export const STUDENTS_LIST_QUERY = gql`
  query StudentsList($filter: UserFilter!) {
    users(filter: $filter) {
      nodes {
        id
        info: userInfoById {
          firstName
          lastName
          email
          phoneNumber
          avatarUrl
        }
      }
      totalCount
    }
  }
`;
