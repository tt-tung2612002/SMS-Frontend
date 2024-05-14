import type * as CustomTypes from "./customSchema";
import type * as Types from "./schema.types";

export type GetUsersQueryVariables = Types.Exact<{
  filter: Types.UserFilter;
}>;

export type GetUsersQuery = {
  users: {
    nodes: Array<
      Pick<Types.User, "id" | "username"> & {
        info: Pick<
          Types.UserInfo,
          "id" | "firstName" | "lastName" | "avatarUrl"
        > & {
          name: Types.UserInfo["firstName"];
        };
      }
    >;
  };
};

export type ClassesTableQueryVariables = Types.Exact<{
  filter: Types.ClassFilter;
}>;

export type ClassesTableQuery = {
  classes: Pick<Types.ClassesConnection, "totalCount"> & {
    nodes: Array<
      Pick<Types.Class, "id" | "name" | "logoUrl" | "startDate" | "endDate"> & {
        teacher: Pick<Types.User, "id"> & {
          userInfoById: Types.Maybe<
            Pick<Types.UserInfo, "firstName" | "lastName" | "avatarUrl">
          >;
        };
        students: {
          nodes: Array<
            Pick<Types.User, "id"> & {
              userInfoById: Pick<Types.UserInfo, "lastName" | "avatarUrl"> & {
                name: Types.UserInfo["firstName"];
              };
            }
          >;
        };
      }
    >;
  };
};

export type StudentsUpdateListQuery = {
  students: {
    nodes: Array<
      Pick<
        Types.UserInfo,
        | "id"
        | "firstName"
        | "lastName"
        | "avatarUrl"
        | "email"
        | "phoneNumber"
        | "dateOfBirth"
      >
    >;
  };
};
export type StudentShowQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"]["input"];
}>;

export type StudentShowQuery = {
  user: Pick<Types.User, "id"> & {
    info: Pick<
      Types.UserInfo,
      "firstName" | "lastName" | "email" | "phoneNumber" | "avatarUrl"
    >;
  };
};
export type GetStudentsInClass2QueryVariables = Types.Exact<{
  filter: Types.ClassManagementFilter;
}>;

export type GetStudentsInClass2Query = {
  classManagements: Pick<Types.ClassManagementsConnection, "totalCount"> & {
    nodes: Array<{
      user: Types.Maybe<{
        userInfoById: Types.Maybe<
          Pick<
            Types.UserInfo,
            "firstName" | "lastName" | "phoneNumber" | "avatarUrl"
          >
        >;
      }>;
    }>;
  };
};
export type CalendarEventsQueryVariables = Types.Exact<{
  filter: Types.EventFilter;
}>;

export type CalendarEventsQuery = {
  events: Pick<Types.EventsConnection, "totalCount"> & {
    nodes: Array<
      Pick<
        CustomTypes.Event,
        "id" | "startDate" | "title" | "endDate" | "description" | "color"
      > & {
        participants: {
          nodes: Array<
            Pick<
              Types.UserInfo,
              "id" | "avatarUrl" | "dateOfBirth" | "firstName"
            >
          >;
        };
        categories: { nodes: Array<Pick<Types.Category, "id" | "title">> };
      }
    >;
  };
};

export type EventCategoriesQueryVariables = Types.Exact<{
  filter: Types.CategoryFilter;
}>;

export type EventCategoriesQuery = {
  categories: Pick<Types.CategoriesConnection, "totalCount"> & {
    nodes: Array<Pick<Types.Category, "id" | "title">>;
  };
};

export type UpdateCategoryMutationVariables = Types.Exact<{
  input: Types.UpdateCategoryInput;
}>;

export type UpdateCategoryMutation = {
  updateCategory: Pick<Types.UpdateCategoryPayload, "clientMutationId">;
};

export type GetLessonQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"]["input"];
}>;

export type GetLessonQuery = {
  lesson: Pick<Types.Lesson, "id" | "title" | "description"> & {
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
  };
};

export type AttendanceTableQueryVariables = Types.Exact<{
  filter: Types.AttendanceFilter;
}>;

export type AttendanceTableQuery = {
  attendances: Pick<Types.AttendancesConnection, "totalCount"> & {
    nodes: Array<
      Pick<Types.Attendance, "id" | "status" | "createdAt" | "updatedAt"> & {
        student: Types.Maybe<
          Pick<Types.UserInfo, "id" | "lastName" | "avatarUrl"> & {
            name: Types.UserInfo["firstName"];
          }
        >;
      }
    >;
  };
};

export type StudentGetEventsQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"]["input"];
}>;

export type StudentGetEventsQuery = {
  userInfo: {
    events: {
      nodes: Array<
        Pick<
          Types.Event,
          "id" | "title" | "startDate" | "endDate" | "color" | "description"
        > & {
          lessonById: Types.Maybe<
            Pick<Types.Lesson, "id" | "title"> & {
              class: Types.Maybe<Pick<Types.Class, "name">>;
            }
          >;
        }
      >;
    };
  };
};

export type ClassGetLessonsQueryVariables = Types.Exact<{
  filter: Types.LessonFilter;
}>;

export type ClassGetLessonsQuery = {
  lessons: Pick<Types.LessonsConnection, "totalCount"> & {
    nodes: Array<Pick<Types.Lesson, "id" | "title">>;
  };
};
