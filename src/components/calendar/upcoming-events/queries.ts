import gql from "graphql-tag";

export const CALENDAR_UPCOMING_EVENTS_QUERY = gql`
  query UpcomingEvents($filter: EventFilter!) {
    events(filter: $filter) {
      nodes {
        id
        title
        color
        startDate
        endDate
      }
      totalCount
    }
  }
`;
