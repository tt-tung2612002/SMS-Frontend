import gql from "graphql-tag";

export const ATTENDANCE_TABLE_QUERY = gql`
  query AttendanceTable($filter: AttendanceFilter!) {
    attendances(filter: $filter) {
      nodes {
        id
        status
        createdAt
        updatedAt
        lessonId
        lesson {
          id
          title
        }
        student {
          id
          name: firstName
          lastName
          avatarUrl
        }
      }
      totalCount
    }
  }
`;
