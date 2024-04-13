import type * as Types from "./schema.types";

export type ClassesQueryVariables = Types.Exact<{
  filter: Types.ClassFilter;
  paging: Types.PageInfo;
}>;

export type ClassesQuery = {
  allClasses: Pick<Types.ClassesConnection, "totalCount"> & {
    nodes: Array<Pick<Types.Class, "id" | "name" | "logoUrl">>;
  };
};
