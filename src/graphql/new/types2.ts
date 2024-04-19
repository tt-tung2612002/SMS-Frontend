import type * as Types from "./schema.types";

export type GetClassQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"]["input"];
}>;

export type GetClassQuery = {
  class: Types.Maybe<
    Pick<Types.Class, "id" | "name" | "logoUrl"> & {
      teacher: Types.Maybe<
        Pick<Types.User, "id"> & {
          userInfoById: Types.Maybe<
            Pick<Types.UserInfo, "firstName" | "avatarUrl">
          >;
        }
      >;
    }
  >;
};
