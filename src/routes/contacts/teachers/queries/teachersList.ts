import gql from "graphql-tag";

export const TEACHER_LIST_QUERY = gql`
  query TeachersList($filter: UserInfoFilter!) {
    roles(condition: { name: "teacher" }) {
      nodes {
        teachers: userInfos(filter: $filter) {
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

export const TEACHER_NEW_LIST_QUERY = gql`
  query TeachersList{
    role(id: 3) {
      teachers: userInfos {
        nodes {
          firstName
          lastName
          avatarUrl
        } 
      }
    }
  }
`;
