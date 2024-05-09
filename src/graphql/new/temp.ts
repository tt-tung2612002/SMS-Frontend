import type * as Types from "./schema.types";

export type GetLessonQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"]["input"];
}>;

export type GetLessonQuery = {
  lesson: Types.Maybe<
    Pick<Types.Lesson, "id" | "title" | "description"> & {
      assignments: Pick<Types.AssignmentsConnection, "totalCount"> & {
        nodes: Array<
          Pick<Types.Assignment, "id" | "dueDate" | "description" | "title"> & {
            attachments: {
              nodes: Array<
                Pick<Types.Attachment, "id" | "fileName" | "fileDownloadUrl">
              >;
            };
          }
        >;
      };
    }
  >;
};
