import type * as Types from "./schema.types";

export type ClassGetLessonsQueryVariables = Types.Exact<{
  filter: Types.LessonFilter;
}>;

export type ClassGetLessonsQuery = {
  lessons: Pick<Types.LessonsConnection, "totalCount"> & {
    nodes: Array<Pick<Types.Lesson, "id" | "title">>;
  };
};
