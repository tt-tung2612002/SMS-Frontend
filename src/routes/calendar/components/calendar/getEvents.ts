import gql from "graphql-tag";

export const NEW_CALENDAR_EVENTS_QUERY = gql`
  query CalendarEvents($filter: EventFilter!) {
    events(filter: $filter) {
      totalCount
      nodes {
        id
        startDate
        title
        endDate
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
            avatarUrl
            dateOfBirth
            firstName
          }
        }
        description
        color
        categories {
          nodes {
            id
            title
          }
        }
      }
    }
  }
`;
