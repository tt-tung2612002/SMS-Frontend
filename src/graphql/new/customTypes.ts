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
      Pick<Types.Class, "id" | "name" | "logoUrl"> & {
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
