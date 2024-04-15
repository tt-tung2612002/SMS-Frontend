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
        teacher: {
          userInfoById: Pick<
            Types.UserInfo,
            "id" | "firstName" | "lastName" | "avatarUrl"
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
