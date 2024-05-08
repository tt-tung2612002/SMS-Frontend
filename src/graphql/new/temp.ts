import type * as Types from "./schema.types";

export type UpdateCategoryMutationVariables = Types.Exact<{
  input: Types.UpdateCategoryInput;
}>;

export type UpdateCategoryMutation = {
  updateCategory: Types.Maybe<
    Pick<Types.UpdateCategoryPayload, "clientMutationId">
  >;
};

export type CreateCategoryMutationVariables = Types.Exact<{
  input: Types.CreateCategoryInput;
}>;

export type CreateCategoryMutation = {
  createCategory: Types.Maybe<
    Pick<Types.CreateCategoryPayload, "clientMutationId">
  >;
};
