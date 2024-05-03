import gql from "graphql-tag";

export const EVENT_CREATE_MUTATION = gql`
  mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
      clientMutationId
    }
  }
`;
