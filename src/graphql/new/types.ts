import type * as Types from "./schema.types";

export type CreateClassMutationVariables = Types.Exact<{
  input: Types.CreateClassInput;
}>;

export type CreateClassMutation = {
  createClass: {
    class: Pick<Types.Class, "id" | "name"> & {
      teacher: Types.Maybe<
        Pick<Types.User, "id"> & {
          userInfoById: Types.Maybe<
            Pick<Types.UserInfo, "avatarUrl"> & {
              name: Types.UserInfo["firstName"];
            }
          >;
        }
      >;
    };
  };
};

export type UpdateClassMutationVariables = Types.Exact<{
  input: Types.UpdateClassInput;
}>;

export type UpdateClassMutation = {
  updateClass: {
    class: Pick<Types.Class, "id" | "name" | "logoUrl"> & {
      teacher: Pick<Types.User, "id"> & {
        userInfoById: Types.Maybe<
          Pick<Types.UserInfo, "firstName" | "avatarUrl">
        >;
      };
    };
  };
};

export type DashboardTotalCountsQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type DashboardTotalCountsQuery = {
  classes: Types.Maybe<Pick<Types.ClassesConnection, "totalCount">>;
  students: Types.Maybe<Pick<Types.UserRolesConnection, "totalCount">>;
  teachers: Types.Maybe<Pick<Types.UserRolesConnection, "totalCount">>;
};

export type StudentsListQueryVariables = Types.Exact<{
  filter: Types.UserFilter;
}>;

export type StudentsListQuery = {
  users: Pick<Types.UsersConnection, "totalCount"> & {
    nodes: Array<
      Pick<Types.User, "id"> & {
        info: Pick<
          Types.UserInfo,
          "firstName" | "lastName" | "email" | "phoneNumber" | "avatarUrl"
        >;
      }
    >;
  };
};
