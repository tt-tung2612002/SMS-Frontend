import * as Types from "./schema.types";

export type Event = Node & {
  /** Reads and enables pagination through a set of `Category`. */
  categories: Types.EventCategoriesManyToManyConnection;
  color: Types.Scalars["String"]["output"];
  createdAt?: Types.Maybe<Types.Scalars["Datetime"]["output"]>;
  description?: Types.Maybe<Types.Scalars["String"]["output"]>;
  endDate: Types.Scalars["Datetime"]["output"];
  /** Reads and enables pagination through a set of `EventCategory`. */
  eventCategories: Types.EventCategoriesConnection;
  lessonById?: Types.Maybe<Types.Lesson>;
  lesson?: Types.Maybe<Types.Lesson>;
  /** Reads and enables pagination through a set of `EventParticipant`. */
  eventParticipants: Types.EventParticipantsConnection;
  id: Types.Scalars["ID"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Types.Scalars["ID"]["output"];
  startDate: Types.Scalars["Datetime"]["output"];
  title: Types.Scalars["String"]["output"];
  updatedAt?: Types.Maybe<Types.Scalars["Datetime"]["output"]>;
  /** Reads and enables pagination through a set of `UserInfo`. */
  userInfos: Types.EventUserInfosManyToManyConnection;
  participants: Types.EventUserInfosManyToManyConnection;
};
export type Class = Node & {
  /** Reads a single `ClassLevel` that is related to this `Class`. */
  classLevel?: Types.Maybe<Types.ClassLevel>;
  classLevelId?: Types.Maybe<Types.Scalars["Int"]["output"]>;
  /** Reads and enables pagination through a set of `ClassManagement`. */
  classManagements: Types.ClassManagementsConnection;
  /** Reads a single `ClassStatus` that is related to this `Class`. */
  classStatus?: Types.Maybe<Types.ClassStatus>;
  classStatusId?: Types.Maybe<Types.Scalars["Int"]["output"]>;
  /** Reads a single `ClassType` that is related to this `Class`. */
  classType?: Types.Maybe<Types.ClassType>;
  classTypeId?: Types.Maybe<Types.Scalars["Int"]["output"]>;
  description?: Types.Maybe<Types.Scalars["String"]["output"]>;
  endDate?: Types.Maybe<Types.Scalars["Datetime"]["output"]>;
  id: Types.Scalars["Int"]["output"];
  logoUrl?: Types.Maybe<Types.Scalars["String"]["output"]>;
  name: Types.Scalars["String"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Types.Scalars["ID"]["output"];
  startDate?: Types.Maybe<Types.Scalars["Datetime"]["output"]>;
  /** Reads a single `User` that is related to this `Class`. */
  teacher?: Types.Maybe<Types.User>;
  teacherId?: Types.Maybe<Types.Scalars["Int"]["output"]>;
  users: Types.ClassUsersManyToManyConnection;
  students: Types.ClassUsersManyToManyConnection;
};

export type Attendance = Node & {
  createdAt?: Types.Maybe<Types.Scalars["Datetime"]["output"]>;
  id: Types.Scalars["Int"]["output"];
  /** Reads a single `Lesson` that is related to this `Attendance`. */
  lesson?: Types.Maybe<Types.Lesson>;
  lessonId?: Types.Maybe<Types.Scalars["Int"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Types.Scalars["ID"]["output"];
  status: Types.Scalars["String"]["output"];
  /** Reads a single `UserInfo` that is related to this `Attendance`. */
  student?: Types.Maybe<UserInfo>;
  studentId?: Types.Maybe<Types.Scalars["Int"]["output"]>;
  updatedAt?: Types.Maybe<Types.Scalars["Datetime"]["output"]>;
};

export type UserInfo = Node & {
  /** Reads and enables pagination through a set of `Attendance`. */
  attendancesByStudentId: Types.AttendancesConnection;
  avatarUrl: Types.Scalars["String"]["output"];
  dateOfBirth?: Types.Maybe<Types.Scalars["Datetime"]["output"]>;
  email: Types.Scalars["String"]["output"];
  /** Reads and enables pagination through a set of `EventParticipant`. */
  eventParticipantsByUserId: Types.EventParticipantsConnection;
  /** Reads and enables pagination through a set of `Event`. */
  events: Types.UserInfoEventsManyToManyConnection;
  name: Types.Scalars["String"]["output"];
  firstName: Types.Scalars["String"]["output"];
  id: Types.Scalars["Int"]["output"];
  lastName: Types.Scalars["String"]["output"];
  /** Reads and enables pagination through a set of `Lesson`. */
  lessons: Types.UserInfoLessonsManyToManyConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Types.Scalars["ID"]["output"];
  phoneNumber: Types.Scalars["String"]["output"];
  /** Reads and enables pagination through a set of `Role`. */
  roles: Types.UserInfoRolesManyToManyConnection;
  /** Reads a single `User` that is related to this `UserInfo`. */
  userById?: Types.Maybe<Types.User>;
  /** Reads and enables pagination through a set of `UserRole`. */
  userRolesByUserId: Types.UserRolesConnection;
};

export type AttendanceStatus = "ABSENT" | "PRESENT" | "LATE";
