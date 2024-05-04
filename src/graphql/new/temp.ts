import type * as CustomTypes from "./customSchema";
import type * as Types from "./schema.types";

export type CalendarEventsQueryVariables = Types.Exact<{
  filter: Types.EventFilter;
}>;

export type CalendarEventsQuery = {
  events: Pick<Types.EventsConnection, "totalCount"> & {
    nodes: Array<
      Pick<
        CustomTypes.Event,
        "id" | "startDate" | "title" | "endDate" | "description" | "color"
      > & {
        participants: {
          nodes: Array<
            Pick<
              Types.UserInfo,
              "id" | "avatarUrl" | "dateOfBirth" | "firstName"
            >
          >;
        };
        categories: { nodes: Array<Pick<Types.Category, "id" | "title">> };
      }
    >;
  };
};
