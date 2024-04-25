import type * as Types from "./schema.types";

export type StudentsListQueryVariables = Types.Exact<{
  filter: Types.UserInfoFilter;
}>;

export type StudentsListQuery = {
  roles: Types.Maybe<{
    nodes: Array<{
      students: Pick<
        Types.RoleUserInfosByUserRoleRoleIdAndUserIdManyToManyConnection,
        "totalCount"
      > & {
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
    }>;
  }>;
};
