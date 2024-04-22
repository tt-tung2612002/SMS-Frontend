import type * as Types from "./schema.types";

export type StudentShowQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"]["input"];
}>;

export type StudentShowQuery = {
  user: Types.Maybe<
    Pick<Types.User, "id"> & {
      info: Types.Maybe<
        Pick<
          Types.UserInfo,
          "firstName" | "lastName" | "email" | "phoneNumber" | "avatarUrl"
        >
      >;
    }
  >;
};
