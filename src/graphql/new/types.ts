import type * as Types from "./schema.types";

export type ClassesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ClassesQuery = {
  allClasses?: Types.Maybe<
    Pick<Types.ClassesConnection, "totalCount"> & {
      nodes: Array<
        Pick<Types.Class, "id" | "name" | "logoUrl"> & {
          teacher?: Types.Maybe<
            Pick<Types.User, "id" | "username"> & {
              info?: Types.Maybe<
                Pick<Types.UserInfo, "avatarUrl"> & {
                  name: Types.UserInfo["firstName"];
                }
              >;
            }
          >;
          students: {
            nodes: Array<
              Pick<Types.User, "username" | "id"> & {
                info?: Types.Maybe<{ name: Types.UserInfo["firstName"] }>;
              }
            >;
          };
        }
      >;
    }
  >;
};
