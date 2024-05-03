import gql from "graphql-tag";

export const CALENDAR_EVENTS_QUERY = gql`
  query CalendarEvents($filter: EventFilter!) {
    events(filter: $filter) {
      totalCount
      nodes {
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
      }
    }
  }
`;
