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
