import type * as Types from "./schema.types";

export type GetUsersQueryVariables = Types.Exact<{
  filter: Types.UserFilter;
}>;

export type GetUsersQuery = {
  users: {
    nodes: Array<
      Pick<Types.User, "id" | "username"> & {
        info: Pick<
          Types.UserInfo,
          "id" | "firstName" | "lastName" | "avatarUrl"
        > & {
          name: Types.UserInfo["firstName"];
        };
      }
    >;
  };
};

export type ClassesTableQueryVariables = Types.Exact<{
  filter: Types.ClassFilter;
}>;

export type ClassesTableQuery = {
  classes: Pick<Types.ClassesConnection, "totalCount"> & {
    nodes: Array<
      Pick<Types.Class, "id" | "name" | "logoUrl" | "startDate" | "endDate"> & {
        teacher: Pick<Types.User, "id"> & {
          userInfoById: Types.Maybe<
            Pick<Types.UserInfo, "firstName" | "lastName" | "avatarUrl">
          >;
        };
        students: {
          nodes: Array<
            Pick<Types.User, "id"> & {
              userInfoById: Pick<Types.UserInfo, "lastName" | "avatarUrl"> & {
                name: Types.UserInfo["firstName"];
              };
            }
          >;
        };
      }
    >;
  };
};

export type StudentsUpdateListQuery = {
  students: {
    nodes: Array<
      Pick<
        Types.UserInfo,
        | "id"
        | "firstName"
        | "lastName"
        | "avatarUrl"
        | "email"
        | "phoneNumber"
        | "dateOfBirth"
      >
    >;
  };
};
export type StudentShowQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"]["input"];
}>;

export type StudentShowQuery = {
  user: Pick<Types.User, "id"> & {
    info: Pick<
      Types.UserInfo,
      "firstName" | "lastName" | "email" | "phoneNumber" | "avatarUrl"
    >;
  };
};
export type GetStudentsInClass2QueryVariables = Types.Exact<{
  filter: Types.ClassManagementFilter;
}>;

export type GetStudentsInClass2Query = {
  classManagements: Pick<Types.ClassManagementsConnection, "totalCount"> & {
    nodes: Array<{
      user: Types.Maybe<{
        userInfoById: Types.Maybe<
          Pick<
            Types.UserInfo,
            "firstName" | "lastName" | "phoneNumber" | "avatarUrl"
          >
        >;
      }>;
    }>;
  };
};
export type CalendarEventsQueryVariables = Types.Exact<{
  filter: Types.EventFilter;
}>;

export type CalendarEventsQuery = {
  events: Pick<Types.EventsConnection, "totalCount"> & {
    nodes: Array<
      Pick<
        Types.Event,
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
