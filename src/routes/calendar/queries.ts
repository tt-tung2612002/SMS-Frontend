import gql from "graphql-tag";

const EVENT_FRAGMENT = gql`
  fragment EventFragment on Event {
    id
    title
    description
    startDate
    endDate
    color
    createdAt
    categories {
      nodes {
        id
        title
      }
    }
    participants: userInfos {
      nodes {
        id
        name: firstName
        lastName
        avatarUrl
      }
    }
  }
`;

export const CALENDAR_UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEvent($input: UpdateEventInput!) {
    updateEvent(input: $input) {
      clientMutationId
    }
  }
`;

export const CALENDAR_GET_EVENT_QUERY = gql`
  query GetEvent($id: Int!) {
    event(id: $id) {
      id
      title
      description
      startDate
      endDate
      color
      createdAt
      categories {
        nodes {
          id
          title
        }
      }
      lesson: lessonById {
        id
        title
        class {
          teacher {
            id
            userInfoById {
              avatarUrl
              firstName
            }
          }
        }
      }

      participants: userInfos {
        nodes {
          id
          name: firstName
          firstName
          lastName
          avatarUrl
        }
      }
    }
  }
`;
