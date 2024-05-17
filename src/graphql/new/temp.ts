import type * as Types from "./schema.types";

export type CreateLessonMutationVariables = Types.Exact<{
  input: Types.CreateLessonInput;
}>;

export type CreateLessonMutation = {
  createLesson: Types.Maybe<{ lesson: Types.Maybe<Pick<Types.Lesson, "id">> }>;
};
