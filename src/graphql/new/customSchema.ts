import * as Types from "./schema.types";

export type Event = Node & {
  /** Reads and enables pagination through a set of `Category`. */
  categories: Types.EventCategoriesManyToManyConnection;
  color: Types.Scalars["String"]["output"];
  createdAt?: Types.Maybe<Types.Scalars["Datetime"]["output"]>;
  description?: Types.Maybe<Types.Scalars["String"]["output"]>;
  endDate: Types.Scalars["Datetime"]["output"];
  /** Reads and enables pagination through a set of `EventCategory`. */
  eventCategories: Types.EventCategoriesConnection;
  /** Reads and enables pagination through a set of `EventParticipant`. */
  eventParticipants: Types.EventParticipantsConnection;
  id: Types.Scalars["ID"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Types.Scalars["ID"]["output"];
  startDate: Types.Scalars["Datetime"]["output"];
  title: Types.Scalars["String"]["output"];
  updatedAt?: Types.Maybe<Types.Scalars["Datetime"]["output"]>;
  /** Reads and enables pagination through a set of `UserInfo`. */
  userInfos: Types.EventUserInfosManyToManyConnection;
  participants: Types.EventUserInfosManyToManyConnection;
};
