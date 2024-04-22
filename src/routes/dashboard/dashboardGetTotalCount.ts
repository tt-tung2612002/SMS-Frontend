import gql from "graphql-tag";

export const DASHBOARD_TOTAL_COUNTS_QUERY = gql`
  query DashboardTotalCounts {
    classes {
      totalCount
    }

    students: userRoles(condition: { roleId: 2 }) {
      totalCount
    }

    teachers: userRoles(condition: { roleId: 3 }) {
      totalCount
    }
  }
`;
