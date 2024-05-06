import type * as Types from "./schema.types";

export type EventCategoriesQueryVariables = Types.Exact<{
  filter: Types.CategoryFilter;
}>;

export type EventCategoriesQuery = {
  categories: Pick<Types.CategoriesConnection, "totalCount"> & {
    nodes: Array<Pick<Types.Category, "id" | "title">>;
  };
};
