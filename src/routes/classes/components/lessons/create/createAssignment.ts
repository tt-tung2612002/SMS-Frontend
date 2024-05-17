import gql from "graphql-tag";

export const ASSIGNMENT_CREATE_MUTATION = gql`
mutation CreateAssignmentInput($input: CreateAssignmentInput!) {
    createAssignment(input: $input) {
        assignment {
          id
        }
    }
  }
`;