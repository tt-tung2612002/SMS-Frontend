import type * as Types from "./schema.types";

export type ClassesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ClassesQuery = {
  allClasses: Pick<Types.ClassesConnection, "totalCount"> & {
    nodes: Array<Pick<Types.Class, "id" | "name" | "logoUrl">
    >;
  };
};
