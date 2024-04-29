export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Cursor: { input: any; output: any };
  Datetime: { input: any; output: any };
};

/** A connection to a list of `Category` values. */
export type CategoriesConnection = {
  /** A list of edges which contains the `Category` and cursor to aid in pagination. */
  edges: Array<CategoriesEdge>;
  /** A list of `Category` objects. */
  nodes: Array<Category>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Category` edge in the connection. */
export type CategoriesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Category` at the end of the edge. */
  node: Category;
};

/** Methods to use when ordering `Category`. */
export type CategoriesOrderBy =
  | "CREATED_AT_ASC"
  | "CREATED_AT_DESC"
  | "ID_ASC"
  | "ID_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC"
  | "TITLE_ASC"
  | "TITLE_DESC"
  | "UPDATED_AT_ASC"
  | "UPDATED_AT_DESC";

export type Category = Node & {
  createdAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** Reads and enables pagination through a set of `EventCategory`. */
  eventCategories: EventCategoriesConnection;
  /** Reads and enables pagination through a set of `Event`. */
  events: CategoryEventsManyToManyConnection;
  id: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Datetime"]["output"]>;
};

export type CategoryEventCategoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventCategoryCondition>;
  filter?: InputMaybe<EventCategoryFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventCategoriesOrderBy>>;
};

export type CategoryEventsArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventCondition>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** A connection to a list of `Event` values, with data from `EventCategory`. */
export type CategoryEventsManyToManyConnection = {
  /** A list of edges which contains the `Event`, info from the `EventCategory`, and the cursor to aid in pagination. */
  edges: Array<CategoryEventsManyToManyEdge>;
  /** A list of `Event` objects. */
  nodes: Array<Event>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Event` edge in the connection, with data from `EventCategory`. */
export type CategoryEventsManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Event` at the end of the edge. */
  node: Event;
};

/** A filter to be used against `Category` object types. All fields are combined with a logical ‘and.’ */
export type CategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CategoryFilter>>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  id: Scalars["Int"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type Class = Node & {
  classLevel?: Maybe<Scalars["Int"]["output"]>;
  classLevelId?: Maybe<Scalars["Int"]["output"]>;
  /** Reads and enables pagination through a set of `ClassManagement`. */
  classManagements: ClassManagementsConnection;
  classStatusId?: Maybe<Scalars["Int"]["output"]>;
  classTypeId?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  endDate?: Maybe<Scalars["Datetime"]["output"]>;
  id: Scalars["Int"]["output"];
  logoUrl?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  startDate?: Maybe<Scalars["Datetime"]["output"]>;
  /** Reads a single `User` that is related to this `Class`. */
  teacher?: Maybe<User>;
  teacherId?: Maybe<Scalars["Int"]["output"]>;
  /** Reads and enables pagination through a set of `User`. */
  users: ClassUsersManyToManyConnection;
};

export type ClassClassManagementsArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassManagementCondition>;
  filter?: InputMaybe<ClassManagementFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

export type ClassUsersArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A condition to be used against `Class` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ClassCondition = {
  /** Checks for equality with the object’s `classLevel` field. */
  classLevel?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `classLevelId` field. */
  classLevelId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `classStatusId` field. */
  classStatusId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `classTypeId` field. */
  classTypeId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `endDate` field. */
  endDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `logoUrl` field. */
  logoUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `startDate` field. */
  startDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `teacherId` field. */
  teacherId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A filter to be used against `Class` object types. All fields are combined with a logical ‘and.’ */
export type ClassFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ClassFilter>>;
  /** Filter by the object’s `classLevel` field. */
  classLevel?: InputMaybe<IntFilter>;
  /** Filter by the object’s `classLevelId` field. */
  classLevelId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `classStatusId` field. */
  classStatusId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `classTypeId` field. */
  classTypeId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `endDate` field. */
  endDate?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `logoUrl` field. */
  logoUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ClassFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ClassFilter>>;
  /** Filter by the object’s `startDate` field. */
  startDate?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `teacherId` field. */
  teacherId?: InputMaybe<IntFilter>;
};

export type ClassInfo = Node & {
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
};

/**
 * A condition to be used against `ClassInfo` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ClassInfoCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** A filter to be used against `ClassInfo` object types. All fields are combined with a logical ‘and.’ */
export type ClassInfoFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ClassInfoFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ClassInfoFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ClassInfoFilter>>;
};

/** An input for mutations affecting `ClassInfo` */
export type ClassInfoInput = {
  id: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
};

/** Represents an update to a `ClassInfo`. Fields that are set will be updated. */
export type ClassInfoPatch = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** A connection to a list of `ClassInfo` values. */
export type ClassInfosConnection = {
  /** A list of edges which contains the `ClassInfo` and cursor to aid in pagination. */
  edges: Array<ClassInfosEdge>;
  /** A list of `ClassInfo` objects. */
  nodes: Array<ClassInfo>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ClassInfo` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `ClassInfo` edge in the connection. */
export type ClassInfosEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `ClassInfo` at the end of the edge. */
  node: ClassInfo;
};

/** Methods to use when ordering `ClassInfo`. */
export type ClassInfosOrderBy =
  | "ID_ASC"
  | "ID_DESC"
  | "NAME_ASC"
  | "NAME_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

/** An input for mutations affecting `Class` */
export type ClassInput = {
  classLevel?: InputMaybe<Scalars["Int"]["input"]>;
  classLevelId?: InputMaybe<Scalars["Int"]["input"]>;
  classStatusId?: InputMaybe<Scalars["Int"]["input"]>;
  classTypeId?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  id: Scalars["Int"]["input"];
  logoUrl?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  startDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  teacherId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClassLevel = Node & {
  id: Scalars["Int"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
};

/**
 * A condition to be used against `ClassLevel` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ClassLevelCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** A filter to be used against `ClassLevel` object types. All fields are combined with a logical ‘and.’ */
export type ClassLevelFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ClassLevelFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ClassLevelFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ClassLevelFilter>>;
};

/** An input for mutations affecting `ClassLevel` */
export type ClassLevelInput = {
  id: Scalars["Int"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents an update to a `ClassLevel`. Fields that are set will be updated. */
export type ClassLevelPatch = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** A connection to a list of `ClassLevel` values. */
export type ClassLevelsConnection = {
  /** A list of edges which contains the `ClassLevel` and cursor to aid in pagination. */
  edges: Array<ClassLevelsEdge>;
  /** A list of `ClassLevel` objects. */
  nodes: Array<ClassLevel>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ClassLevel` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `ClassLevel` edge in the connection. */
export type ClassLevelsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `ClassLevel` at the end of the edge. */
  node: ClassLevel;
};

/** Methods to use when ordering `ClassLevel`. */
export type ClassLevelsOrderBy =
  | "ID_ASC"
  | "ID_DESC"
  | "NAME_ASC"
  | "NAME_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

export type ClassManagement = Node & {
  /** Reads a single `Class` that is related to this `ClassManagement`. */
  class?: Maybe<Class>;
  classId: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads a single `User` that is related to this `ClassManagement`. */
  user?: Maybe<User>;
  userId: Scalars["Int"]["output"];
};

/**
 * A condition to be used against `ClassManagement` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ClassManagementCondition = {
  /** Checks for equality with the object’s `classId` field. */
  classId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A filter to be used against `ClassManagement` object types. All fields are combined with a logical ‘and.’ */
export type ClassManagementFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ClassManagementFilter>>;
  /** Filter by the object’s `classId` field. */
  classId?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ClassManagementFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ClassManagementFilter>>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<IntFilter>;
};

/** An input for mutations affecting `ClassManagement` */
export type ClassManagementInput = {
  classId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

/** Represents an update to a `ClassManagement`. Fields that are set will be updated. */
export type ClassManagementPatch = {
  classId?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A connection to a list of `ClassManagement` values. */
export type ClassManagementsConnection = {
  /** A list of edges which contains the `ClassManagement` and cursor to aid in pagination. */
  edges: Array<ClassManagementsEdge>;
  /** A list of `ClassManagement` objects. */
  nodes: Array<ClassManagement>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ClassManagement` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `ClassManagement` edge in the connection. */
export type ClassManagementsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `ClassManagement` at the end of the edge. */
  node: ClassManagement;
};

/** Methods to use when ordering `ClassManagement`. */
export type ClassManagementsOrderBy =
  | "CLASS_ID_ASC"
  | "CLASS_ID_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC"
  | "USER_ID_ASC"
  | "USER_ID_DESC";

/** Represents an update to a `Class`. Fields that are set will be updated. */
export type ClassPatch = {
  classLevel?: InputMaybe<Scalars["Int"]["input"]>;
  classLevelId?: InputMaybe<Scalars["Int"]["input"]>;
  classStatusId?: InputMaybe<Scalars["Int"]["input"]>;
  classTypeId?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  logoUrl?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  teacherId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClassStatus = Node & {
  id: Scalars["Int"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
};

/**
 * A condition to be used against `ClassStatus` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ClassStatusCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** A filter to be used against `ClassStatus` object types. All fields are combined with a logical ‘and.’ */
export type ClassStatusFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ClassStatusFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ClassStatusFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ClassStatusFilter>>;
};

/** An input for mutations affecting `ClassStatus` */
export type ClassStatusInput = {
  id: Scalars["Int"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents an update to a `ClassStatus`. Fields that are set will be updated. */
export type ClassStatusPatch = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** A connection to a list of `ClassStatus` values. */
export type ClassStatusesConnection = {
  /** A list of edges which contains the `ClassStatus` and cursor to aid in pagination. */
  edges: Array<ClassStatusesEdge>;
  /** A list of `ClassStatus` objects. */
  nodes: Array<ClassStatus>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ClassStatus` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `ClassStatus` edge in the connection. */
export type ClassStatusesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `ClassStatus` at the end of the edge. */
  node: ClassStatus;
};

/** Methods to use when ordering `ClassStatus`. */
export type ClassStatusesOrderBy =
  | "ID_ASC"
  | "ID_DESC"
  | "NAME_ASC"
  | "NAME_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

export type ClassType = Node & {
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
};

/**
 * A condition to be used against `ClassType` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ClassTypeCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** A filter to be used against `ClassType` object types. All fields are combined with a logical ‘and.’ */
export type ClassTypeFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ClassTypeFilter>>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ClassTypeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ClassTypeFilter>>;
};

/** An input for mutations affecting `ClassType` */
export type ClassTypeInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents an update to a `ClassType`. Fields that are set will be updated. */
export type ClassTypePatch = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** A connection to a list of `ClassType` values. */
export type ClassTypesConnection = {
  /** A list of edges which contains the `ClassType` and cursor to aid in pagination. */
  edges: Array<ClassTypesEdge>;
  /** A list of `ClassType` objects. */
  nodes: Array<ClassType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ClassType` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `ClassType` edge in the connection. */
export type ClassTypesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `ClassType` at the end of the edge. */
  node: ClassType;
};

/** Methods to use when ordering `ClassType`. */
export type ClassTypesOrderBy =
  | "DESCRIPTION_ASC"
  | "DESCRIPTION_DESC"
  | "ID_ASC"
  | "ID_DESC"
  | "NAME_ASC"
  | "NAME_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

/** A connection to a list of `User` values, with data from `ClassManagement`. */
export type ClassUsersManyToManyConnection = {
  /** A list of edges which contains the `User`, info from the `ClassManagement`, and the cursor to aid in pagination. */
  edges: Array<ClassUsersManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `User` edge in the connection, with data from `ClassManagement`. */
export type ClassUsersManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** A connection to a list of `Class` values. */
export type ClassesConnection = {
  /** A list of edges which contains the `Class` and cursor to aid in pagination. */
  edges: Array<ClassesEdge>;
  /** A list of `Class` objects. */
  nodes: Array<Class>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Class` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Class` edge in the connection. */
export type ClassesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Class` at the end of the edge. */
  node: Class;
};

/** Methods to use when ordering `Class`. */
export type ClassesOrderBy =
  | "CLASS_LEVEL_ASC"
  | "CLASS_LEVEL_DESC"
  | "CLASS_LEVEL_ID_ASC"
  | "CLASS_LEVEL_ID_DESC"
  | "CLASS_STATUS_ID_ASC"
  | "CLASS_STATUS_ID_DESC"
  | "CLASS_TYPE_ID_ASC"
  | "CLASS_TYPE_ID_DESC"
  | "DESCRIPTION_ASC"
  | "DESCRIPTION_DESC"
  | "END_DATE_ASC"
  | "END_DATE_DESC"
  | "ID_ASC"
  | "ID_DESC"
  | "LOGO_URL_ASC"
  | "LOGO_URL_DESC"
  | "NAME_ASC"
  | "NAME_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC"
  | "START_DATE_ASC"
  | "START_DATE_DESC"
  | "TEACHER_ID_ASC"
  | "TEACHER_ID_DESC";

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /** The `Category` to be created by this mutation. */
  category: CategoryInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayload = {
  /** The `Category` that was created by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Category` mutation. */
export type CreateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the create `ClassInfo` mutation. */
export type CreateClassInfoInput = {
  /** The `ClassInfo` to be created by this mutation. */
  classInfo: ClassInfoInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our create `ClassInfo` mutation. */
export type CreateClassInfoPayload = {
  /** The `ClassInfo` that was created by this mutation. */
  classInfo?: Maybe<ClassInfo>;
  /** An edge for our `ClassInfo`. May be used by Relay 1. */
  classInfoEdge?: Maybe<ClassInfosEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `ClassInfo` mutation. */
export type CreateClassInfoPayloadClassInfoEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassInfosOrderBy>>;
};

/** All input for the create `Class` mutation. */
export type CreateClassInput = {
  /** The `Class` to be created by this mutation. */
  class: ClassInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** All input for the create `ClassLevel` mutation. */
export type CreateClassLevelInput = {
  /** The `ClassLevel` to be created by this mutation. */
  classLevel: ClassLevelInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our create `ClassLevel` mutation. */
export type CreateClassLevelPayload = {
  /** The `ClassLevel` that was created by this mutation. */
  classLevel?: Maybe<ClassLevel>;
  /** An edge for our `ClassLevel`. May be used by Relay 1. */
  classLevelEdge?: Maybe<ClassLevelsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `ClassLevel` mutation. */
export type CreateClassLevelPayloadClassLevelEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassLevelsOrderBy>>;
};

/** All input for the create `ClassManagement` mutation. */
export type CreateClassManagementInput = {
  /** The `ClassManagement` to be created by this mutation. */
  classManagement: ClassManagementInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our create `ClassManagement` mutation. */
export type CreateClassManagementPayload = {
  /** Reads a single `Class` that is related to this `ClassManagement`. */
  class?: Maybe<Class>;
  /** The `ClassManagement` that was created by this mutation. */
  classManagement?: Maybe<ClassManagement>;
  /** An edge for our `ClassManagement`. May be used by Relay 1. */
  classManagementEdge?: Maybe<ClassManagementsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `ClassManagement`. */
  user?: Maybe<User>;
};

/** The output of our create `ClassManagement` mutation. */
export type CreateClassManagementPayloadClassManagementEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

/** The output of our create `Class` mutation. */
export type CreateClassPayload = {
  /** The `Class` that was created by this mutation. */
  class?: Maybe<Class>;
  /** An edge for our `Class`. May be used by Relay 1. */
  classEdge?: Maybe<ClassesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Class`. */
  teacher?: Maybe<User>;
};

/** The output of our create `Class` mutation. */
export type CreateClassPayloadClassEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

/** All input for the create `ClassStatus` mutation. */
export type CreateClassStatusInput = {
  /** The `ClassStatus` to be created by this mutation. */
  classStatus: ClassStatusInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our create `ClassStatus` mutation. */
export type CreateClassStatusPayload = {
  /** The `ClassStatus` that was created by this mutation. */
  classStatus?: Maybe<ClassStatus>;
  /** An edge for our `ClassStatus`. May be used by Relay 1. */
  classStatusEdge?: Maybe<ClassStatusesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `ClassStatus` mutation. */
export type CreateClassStatusPayloadClassStatusEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassStatusesOrderBy>>;
};

/** All input for the create `ClassType` mutation. */
export type CreateClassTypeInput = {
  /** The `ClassType` to be created by this mutation. */
  classType: ClassTypeInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** The output of our create `ClassType` mutation. */
export type CreateClassTypePayload = {
  /** The `ClassType` that was created by this mutation. */
  classType?: Maybe<ClassType>;
  /** An edge for our `ClassType`. May be used by Relay 1. */
  classTypeEdge?: Maybe<ClassTypesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `ClassType` mutation. */
export type CreateClassTypePayloadClassTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassTypesOrderBy>>;
};

/** All input for the create `EventCategory` mutation. */
export type CreateEventCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `EventCategory` to be created by this mutation. */
  eventCategory: EventCategoryInput;
};

/** The output of our create `EventCategory` mutation. */
export type CreateEventCategoryPayload = {
  /** Reads a single `Category` that is related to this `EventCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `EventCategory`. */
  event?: Maybe<Event>;
  /** The `EventCategory` that was created by this mutation. */
  eventCategory?: Maybe<EventCategory>;
  /** An edge for our `EventCategory`. May be used by Relay 1. */
  eventCategoryEdge?: Maybe<EventCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `EventCategory` mutation. */
export type CreateEventCategoryPayloadEventCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<EventCategoriesOrderBy>>;
};

/** All input for the create `Event` mutation. */
export type CreateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `Event` to be created by this mutation. */
  event: EventInput;
};

/** All input for the create `EventParticipant` mutation. */
export type CreateEventParticipantInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `EventParticipant` to be created by this mutation. */
  eventParticipant: EventParticipantInput;
};

/** The output of our create `EventParticipant` mutation. */
export type CreateEventParticipantPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `EventParticipant`. */
  event?: Maybe<Event>;
  /** The `EventParticipant` that was created by this mutation. */
  eventParticipant?: Maybe<EventParticipant>;
  /** An edge for our `EventParticipant`. May be used by Relay 1. */
  eventParticipantEdge?: Maybe<EventParticipantsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `UserInfo` that is related to this `EventParticipant`. */
  user?: Maybe<UserInfo>;
};

/** The output of our create `EventParticipant` mutation. */
export type CreateEventParticipantPayloadEventParticipantEdgeArgs = {
  orderBy?: InputMaybe<Array<EventParticipantsOrderBy>>;
};

/** The output of our create `Event` mutation. */
export type CreateEventPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** The `Event` that was created by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our create `Event` mutation. */
export type CreateEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** All input for the create `Role` mutation. */
export type CreateRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `Role` to be created by this mutation. */
  role: RoleInput;
};

/** The output of our create `Role` mutation. */
export type CreateRolePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Role` that was created by this mutation. */
  role?: Maybe<Role>;
  /** An edge for our `Role`. May be used by Relay 1. */
  roleEdge?: Maybe<RolesEdge>;
};

/** The output of our create `Role` mutation. */
export type CreateRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** All input for the create `UserAttribute` mutation. */
export type CreateUserAttributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `UserAttribute` to be created by this mutation. */
  userAttribute: UserAttributeInput;
};

/** The output of our create `UserAttribute` mutation. */
export type CreateUserAttributePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserAttribute`. */
  user?: Maybe<User>;
  /** The `UserAttribute` that was created by this mutation. */
  userAttribute?: Maybe<UserAttribute>;
  /** An edge for our `UserAttribute`. May be used by Relay 1. */
  userAttributeEdge?: Maybe<UserAttributesEdge>;
};

/** The output of our create `UserAttribute` mutation. */
export type CreateUserAttributePayloadUserAttributeEdgeArgs = {
  orderBy?: InputMaybe<Array<UserAttributesOrderBy>>;
};

/** All input for the create `UserInfo` mutation. */
export type CreateUserInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `UserInfo` to be created by this mutation. */
  userInfo: UserInfoInput;
};

/** The output of our create `UserInfo` mutation. */
export type CreateUserInfoPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserInfo`. */
  userById?: Maybe<User>;
  /** The `UserInfo` that was created by this mutation. */
  userInfo?: Maybe<UserInfo>;
  /** An edge for our `UserInfo`. May be used by Relay 1. */
  userInfoEdge?: Maybe<UserInfosEdge>;
};

/** The output of our create `UserInfo` mutation. */
export type CreateUserInfoPayloadUserInfoEdgeArgs = {
  orderBy?: InputMaybe<Array<UserInfosOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the create `UserRole` mutation. */
export type CreateUserRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The `UserRole` to be created by this mutation. */
  userRole: UserRoleInput;
};

/** The output of our create `UserRole` mutation. */
export type CreateUserRolePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Role` that is related to this `UserRole`. */
  role?: Maybe<Role>;
  /** Reads a single `UserInfo` that is related to this `UserRole`. */
  user?: Maybe<UserInfo>;
  /** The `UserRole` that was created by this mutation. */
  userRole?: Maybe<UserRole>;
  /** An edge for our `UserRole`. May be used by Relay 1. */
  userRoleEdge?: Maybe<UserRolesEdge>;
};

/** The output of our create `UserRole` mutation. */
export type CreateUserRolePayloadUserRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Included in the specified list. */
  eq?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Not equal to the specified value. */
  ne?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
};

/** All input for the `deleteCategoryByNodeId` mutation. */
export type DeleteCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Category` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteCategoryByTitle` mutation. */
export type DeleteCategoryByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  title: Scalars["String"]["input"];
};

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayload = {
  /** The `Category` that was deleted by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedCategoryNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `deleteClassByNodeId` mutation. */
export type DeleteClassByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Class` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteClassInfoByNodeId` mutation. */
export type DeleteClassInfoByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassInfo` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteClassInfo` mutation. */
export type DeleteClassInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** The output of our delete `ClassInfo` mutation. */
export type DeleteClassInfoPayload = {
  /** The `ClassInfo` that was deleted by this mutation. */
  classInfo?: Maybe<ClassInfo>;
  /** An edge for our `ClassInfo`. May be used by Relay 1. */
  classInfoEdge?: Maybe<ClassInfosEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedClassInfoNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `ClassInfo` mutation. */
export type DeleteClassInfoPayloadClassInfoEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassInfosOrderBy>>;
};

/** All input for the `deleteClass` mutation. */
export type DeleteClassInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteClassLevelByName` mutation. */
export type DeleteClassLevelByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

/** All input for the `deleteClassLevelByNodeId` mutation. */
export type DeleteClassLevelByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassLevel` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteClassLevel` mutation. */
export type DeleteClassLevelInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** The output of our delete `ClassLevel` mutation. */
export type DeleteClassLevelPayload = {
  /** The `ClassLevel` that was deleted by this mutation. */
  classLevel?: Maybe<ClassLevel>;
  /** An edge for our `ClassLevel`. May be used by Relay 1. */
  classLevelEdge?: Maybe<ClassLevelsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedClassLevelNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `ClassLevel` mutation. */
export type DeleteClassLevelPayloadClassLevelEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassLevelsOrderBy>>;
};

/** All input for the `deleteClassManagementByNodeId` mutation. */
export type DeleteClassManagementByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassManagement` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteClassManagement` mutation. */
export type DeleteClassManagementInput = {
  classId: Scalars["Int"]["input"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  userId: Scalars["Int"]["input"];
};

/** The output of our delete `ClassManagement` mutation. */
export type DeleteClassManagementPayload = {
  /** Reads a single `Class` that is related to this `ClassManagement`. */
  class?: Maybe<Class>;
  /** The `ClassManagement` that was deleted by this mutation. */
  classManagement?: Maybe<ClassManagement>;
  /** An edge for our `ClassManagement`. May be used by Relay 1. */
  classManagementEdge?: Maybe<ClassManagementsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedClassManagementNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `ClassManagement`. */
  user?: Maybe<User>;
};

/** The output of our delete `ClassManagement` mutation. */
export type DeleteClassManagementPayloadClassManagementEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

/** The output of our delete `Class` mutation. */
export type DeleteClassPayload = {
  /** The `Class` that was deleted by this mutation. */
  class?: Maybe<Class>;
  /** An edge for our `Class`. May be used by Relay 1. */
  classEdge?: Maybe<ClassesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedClassNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Class`. */
  teacher?: Maybe<User>;
};

/** The output of our delete `Class` mutation. */
export type DeleteClassPayloadClassEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

/** All input for the `deleteClassStatusByName` mutation. */
export type DeleteClassStatusByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

/** All input for the `deleteClassStatusByNodeId` mutation. */
export type DeleteClassStatusByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassStatus` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteClassStatus` mutation. */
export type DeleteClassStatusInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** The output of our delete `ClassStatus` mutation. */
export type DeleteClassStatusPayload = {
  /** The `ClassStatus` that was deleted by this mutation. */
  classStatus?: Maybe<ClassStatus>;
  /** An edge for our `ClassStatus`. May be used by Relay 1. */
  classStatusEdge?: Maybe<ClassStatusesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedClassStatusNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `ClassStatus` mutation. */
export type DeleteClassStatusPayloadClassStatusEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassStatusesOrderBy>>;
};

/** All input for the `deleteClassTypeByNodeId` mutation. */
export type DeleteClassTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassType` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteClassType` mutation. */
export type DeleteClassTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** The output of our delete `ClassType` mutation. */
export type DeleteClassTypePayload = {
  /** The `ClassType` that was deleted by this mutation. */
  classType?: Maybe<ClassType>;
  /** An edge for our `ClassType`. May be used by Relay 1. */
  classTypeEdge?: Maybe<ClassTypesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedClassTypeNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `ClassType` mutation. */
export type DeleteClassTypePayloadClassTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassTypesOrderBy>>;
};

/** All input for the `deleteEventByNodeId` mutation. */
export type DeleteEventByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Event` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteEventCategoryByNodeId` mutation. */
export type DeleteEventCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `EventCategory` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteEventCategory` mutation. */
export type DeleteEventCategoryInput = {
  categoryId: Scalars["Int"]["input"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  eventId: Scalars["Int"]["input"];
};

/** The output of our delete `EventCategory` mutation. */
export type DeleteEventCategoryPayload = {
  /** Reads a single `Category` that is related to this `EventCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedEventCategoryNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Reads a single `Event` that is related to this `EventCategory`. */
  event?: Maybe<Event>;
  /** The `EventCategory` that was deleted by this mutation. */
  eventCategory?: Maybe<EventCategory>;
  /** An edge for our `EventCategory`. May be used by Relay 1. */
  eventCategoryEdge?: Maybe<EventCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `EventCategory` mutation. */
export type DeleteEventCategoryPayloadEventCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<EventCategoriesOrderBy>>;
};

/** All input for the `deleteEvent` mutation. */
export type DeleteEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteEventParticipantByNodeId` mutation. */
export type DeleteEventParticipantByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `EventParticipant` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteEventParticipant` mutation. */
export type DeleteEventParticipantInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  eventId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

/** The output of our delete `EventParticipant` mutation. */
export type DeleteEventParticipantPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedEventParticipantNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Reads a single `Event` that is related to this `EventParticipant`. */
  event?: Maybe<Event>;
  /** The `EventParticipant` that was deleted by this mutation. */
  eventParticipant?: Maybe<EventParticipant>;
  /** An edge for our `EventParticipant`. May be used by Relay 1. */
  eventParticipantEdge?: Maybe<EventParticipantsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `UserInfo` that is related to this `EventParticipant`. */
  user?: Maybe<UserInfo>;
};

/** The output of our delete `EventParticipant` mutation. */
export type DeleteEventParticipantPayloadEventParticipantEdgeArgs = {
  orderBy?: InputMaybe<Array<EventParticipantsOrderBy>>;
};

/** The output of our delete `Event` mutation. */
export type DeleteEventPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedEventNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** The `Event` that was deleted by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `Event` mutation. */
export type DeleteEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** All input for the `deleteRoleByName` mutation. */
export type DeleteRoleByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

/** All input for the `deleteRoleByNodeId` mutation. */
export type DeleteRoleByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Role` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteRole` mutation. */
export type DeleteRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** The output of our delete `Role` mutation. */
export type DeleteRolePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedRoleNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Role` that was deleted by this mutation. */
  role?: Maybe<Role>;
  /** An edge for our `Role`. May be used by Relay 1. */
  roleEdge?: Maybe<RolesEdge>;
};

/** The output of our delete `Role` mutation. */
export type DeleteRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** All input for the `deleteUserAttributeByName` mutation. */
export type DeleteUserAttributeByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

/** All input for the `deleteUserAttributeByNodeId` mutation. */
export type DeleteUserAttributeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `UserAttribute` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteUserAttribute` mutation. */
export type DeleteUserAttributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** The output of our delete `UserAttribute` mutation. */
export type DeleteUserAttributePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedUserAttributeNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserAttribute`. */
  user?: Maybe<User>;
  /** The `UserAttribute` that was deleted by this mutation. */
  userAttribute?: Maybe<UserAttribute>;
  /** An edge for our `UserAttribute`. May be used by Relay 1. */
  userAttributeEdge?: Maybe<UserAttributesEdge>;
};

/** The output of our delete `UserAttribute` mutation. */
export type DeleteUserAttributePayloadUserAttributeEdgeArgs = {
  orderBy?: InputMaybe<Array<UserAttributesOrderBy>>;
};

/** All input for the `deleteUserByNodeId` mutation. */
export type DeleteUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteUserByUsername` mutation. */
export type DeleteUserByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  username: Scalars["String"]["input"];
};

/** All input for the `deleteUserInfoByEmail` mutation. */
export type DeleteUserInfoByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
};

/** All input for the `deleteUserInfoByNodeId` mutation. */
export type DeleteUserInfoByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `UserInfo` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteUserInfoByPhoneNumber` mutation. */
export type DeleteUserInfoByPhoneNumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber: Scalars["String"]["input"];
};

/** All input for the `deleteUserInfo` mutation. */
export type DeleteUserInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** The output of our delete `UserInfo` mutation. */
export type DeleteUserInfoPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedUserInfoNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserInfo`. */
  userById?: Maybe<User>;
  /** The `UserInfo` that was deleted by this mutation. */
  userInfo?: Maybe<UserInfo>;
  /** An edge for our `UserInfo`. May be used by Relay 1. */
  userInfoEdge?: Maybe<UserInfosEdge>;
};

/** The output of our delete `UserInfo` mutation. */
export type DeleteUserInfoPayloadUserInfoEdgeArgs = {
  orderBy?: InputMaybe<Array<UserInfosOrderBy>>;
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedUserNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteUserRoleByNodeId` mutation. */
export type DeleteUserRoleByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `UserRole` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteUserRole` mutation. */
export type DeleteUserRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  roleId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

/** The output of our delete `UserRole` mutation. */
export type DeleteUserRolePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedUserRoleNodeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Role` that is related to this `UserRole`. */
  role?: Maybe<Role>;
  /** Reads a single `UserInfo` that is related to this `UserRole`. */
  user?: Maybe<UserInfo>;
  /** The `UserRole` that was deleted by this mutation. */
  userRole?: Maybe<UserRole>;
  /** An edge for our `UserRole`. May be used by Relay 1. */
  userRoleEdge?: Maybe<UserRolesEdge>;
};

/** The output of our delete `UserRole` mutation. */
export type DeleteUserRolePayloadUserRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

export type Event = Node & {
  /** Reads and enables pagination through a set of `Category`. */
  categories: EventCategoriesManyToManyConnection;
  color: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["Datetime"]["output"]>;
  description: Scalars["String"]["output"];
  endDate: Scalars["Datetime"]["output"];
  /** Reads and enables pagination through a set of `EventCategory`. */
  eventCategories: EventCategoriesConnection;
  /** Reads and enables pagination through a set of `EventParticipant`. */
  eventParticipants: EventParticipantsConnection;
  id: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  startDate: Scalars["Datetime"]["output"];
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["Datetime"]["output"]>;
  /** Reads and enables pagination through a set of `UserInfo`. */
  userInfos: EventUserInfosManyToManyConnection;
};

export type EventCategoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

export type EventEventCategoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventCategoryCondition>;
  filter?: InputMaybe<EventCategoryFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventCategoriesOrderBy>>;
};

export type EventEventParticipantsArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventParticipantCondition>;
  filter?: InputMaybe<EventParticipantFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventParticipantsOrderBy>>;
};

export type EventUserInfosArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserInfoCondition>;
  filter?: InputMaybe<UserInfoFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserInfosOrderBy>>;
};

/** A connection to a list of `EventCategory` values. */
export type EventCategoriesConnection = {
  /** A list of edges which contains the `EventCategory` and cursor to aid in pagination. */
  edges: Array<EventCategoriesEdge>;
  /** A list of `EventCategory` objects. */
  nodes: Array<EventCategory>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `EventCategory` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `EventCategory` edge in the connection. */
export type EventCategoriesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `EventCategory` at the end of the edge. */
  node: EventCategory;
};

/** A connection to a list of `Category` values, with data from `EventCategory`. */
export type EventCategoriesManyToManyConnection = {
  /** A list of edges which contains the `Category`, info from the `EventCategory`, and the cursor to aid in pagination. */
  edges: Array<EventCategoriesManyToManyEdge>;
  /** A list of `Category` objects. */
  nodes: Array<Category>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Category` edge in the connection, with data from `EventCategory`. */
export type EventCategoriesManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Category` at the end of the edge. */
  node: Category;
};

/** Methods to use when ordering `EventCategory`. */
export type EventCategoriesOrderBy =
  | "CATEGORY_ID_ASC"
  | "CATEGORY_ID_DESC"
  | "EVENT_ID_ASC"
  | "EVENT_ID_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

export type EventCategory = Node & {
  /** Reads a single `Category` that is related to this `EventCategory`. */
  category?: Maybe<Category>;
  categoryId: Scalars["Int"]["output"];
  /** Reads a single `Event` that is related to this `EventCategory`. */
  event?: Maybe<Event>;
  eventId: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
};

/**
 * A condition to be used against `EventCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EventCategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A filter to be used against `EventCategory` object types. All fields are combined with a logical ‘and.’ */
export type EventCategoryFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<EventCategoryFilter>>;
  /** Filter by the object’s `categoryId` field. */
  categoryId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<EventCategoryFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<EventCategoryFilter>>;
};

/** An input for mutations affecting `EventCategory` */
export type EventCategoryInput = {
  categoryId: Scalars["Int"]["input"];
  eventId: Scalars["Int"]["input"];
};

/** Represents an update to a `EventCategory`. Fields that are set will be updated. */
export type EventCategoryPatch = {
  categoryId?: InputMaybe<Scalars["Int"]["input"]>;
  eventId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A condition to be used against `Event` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EventCondition = {
  /** Checks for equality with the object’s `color` field. */
  color?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `endDate` field. */
  endDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `startDate` field. */
  startDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** A filter to be used against `Event` object types. All fields are combined with a logical ‘and.’ */
export type EventFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<EventFilter>>;
  /** Filter by the object’s `color` field. */
  color?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `endDate` field. */
  endDate?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<EventFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<EventFilter>>;
  /** Filter by the object’s `startDate` field. */
  startDate?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** An input for mutations affecting `Event` */
export type EventInput = {
  color: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  startDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  title: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export type EventParticipant = Node & {
  /** Reads a single `Event` that is related to this `EventParticipant`. */
  event?: Maybe<Event>;
  eventId: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads a single `UserInfo` that is related to this `EventParticipant`. */
  user?: Maybe<UserInfo>;
  userId: Scalars["Int"]["output"];
};

/**
 * A condition to be used against `EventParticipant` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type EventParticipantCondition = {
  /** Checks for equality with the object’s `eventId` field. */
  eventId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A filter to be used against `EventParticipant` object types. All fields are combined with a logical ‘and.’ */
export type EventParticipantFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<EventParticipantFilter>>;
  /** Filter by the object’s `eventId` field. */
  eventId?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<EventParticipantFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<EventParticipantFilter>>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<IntFilter>;
};

/** An input for mutations affecting `EventParticipant` */
export type EventParticipantInput = {
  eventId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

/** Represents an update to a `EventParticipant`. Fields that are set will be updated. */
export type EventParticipantPatch = {
  eventId?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A connection to a list of `EventParticipant` values. */
export type EventParticipantsConnection = {
  /** A list of edges which contains the `EventParticipant` and cursor to aid in pagination. */
  edges: Array<EventParticipantsEdge>;
  /** A list of `EventParticipant` objects. */
  nodes: Array<EventParticipant>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `EventParticipant` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `EventParticipant` edge in the connection. */
export type EventParticipantsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `EventParticipant` at the end of the edge. */
  node: EventParticipant;
};

/** Methods to use when ordering `EventParticipant`. */
export type EventParticipantsOrderBy =
  | "EVENT_ID_ASC"
  | "EVENT_ID_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC"
  | "USER_ID_ASC"
  | "USER_ID_DESC";

/** Represents an update to a `Event`. Fields that are set will be updated. */
export type EventPatch = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  startDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
};

/** A connection to a list of `UserInfo` values, with data from `EventParticipant`. */
export type EventUserInfosManyToManyConnection = {
  /** A list of edges which contains the `UserInfo`, info from the `EventParticipant`, and the cursor to aid in pagination. */
  edges: Array<EventUserInfosManyToManyEdge>;
  /** A list of `UserInfo` objects. */
  nodes: Array<UserInfo>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserInfo` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `UserInfo` edge in the connection, with data from `EventParticipant`. */
export type EventUserInfosManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `UserInfo` at the end of the edge. */
  node: UserInfo;
};

/** A connection to a list of `Event` values. */
export type EventsConnection = {
  /** A list of edges which contains the `Event` and cursor to aid in pagination. */
  edges: Array<EventsEdge>;
  /** A list of `Event` objects. */
  nodes: Array<Event>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Event` edge in the connection. */
export type EventsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Event` at the end of the edge. */
  node: Event;
};

/** Methods to use when ordering `Event`. */
export type EventsOrderBy =
  | "COLOR_ASC"
  | "COLOR_DESC"
  | "CREATED_AT_ASC"
  | "CREATED_AT_DESC"
  | "DESCRIPTION_ASC"
  | "DESCRIPTION_DESC"
  | "END_DATE_ASC"
  | "END_DATE_DESC"
  | "ID_ASC"
  | "ID_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC"
  | "START_DATE_ASC"
  | "START_DATE_DESC"
  | "TITLE_ASC"
  | "TITLE_DESC"
  | "UPDATED_AT_ASC"
  | "UPDATED_AT_DESC";

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars["Int"]["input"]>;
  /** Included in the specified list. */
  eq?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars["Int"]["input"]>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars["Int"]["input"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars["Int"]["input"]>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars["Int"]["input"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars["Int"]["input"]>;
  /** Not equal to the specified value. */
  ne?: InputMaybe<Scalars["Int"]["input"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["Int"]["input"]>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a single `Class`. */
  createClass?: Maybe<CreateClassPayload>;
  /** Creates a single `ClassInfo`. */
  createClassInfo?: Maybe<CreateClassInfoPayload>;
  /** Creates a single `ClassLevel`. */
  createClassLevel?: Maybe<CreateClassLevelPayload>;
  /** Creates a single `ClassManagement`. */
  createClassManagement?: Maybe<CreateClassManagementPayload>;
  /** Creates a single `ClassStatus`. */
  createClassStatus?: Maybe<CreateClassStatusPayload>;
  /** Creates a single `ClassType`. */
  createClassType?: Maybe<CreateClassTypePayload>;
  /** Creates a single `Event`. */
  createEvent?: Maybe<CreateEventPayload>;
  /** Creates a single `EventCategory`. */
  createEventCategory?: Maybe<CreateEventCategoryPayload>;
  /** Creates a single `EventParticipant`. */
  createEventParticipant?: Maybe<CreateEventParticipantPayload>;
  /** Creates a single `Role`. */
  createRole?: Maybe<CreateRolePayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `UserAttribute`. */
  createUserAttribute?: Maybe<CreateUserAttributePayload>;
  /** Creates a single `UserInfo`. */
  createUserInfo?: Maybe<CreateUserInfoPayload>;
  /** Creates a single `UserRole`. */
  createUserRole?: Maybe<CreateUserRolePayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using its globally unique id. */
  deleteCategoryByNodeId?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Category` using a unique key. */
  deleteCategoryByTitle?: Maybe<DeleteCategoryPayload>;
  /** Deletes a single `Class` using a unique key. */
  deleteClass?: Maybe<DeleteClassPayload>;
  /** Deletes a single `Class` using its globally unique id. */
  deleteClassByNodeId?: Maybe<DeleteClassPayload>;
  /** Deletes a single `ClassInfo` using a unique key. */
  deleteClassInfo?: Maybe<DeleteClassInfoPayload>;
  /** Deletes a single `ClassInfo` using its globally unique id. */
  deleteClassInfoByNodeId?: Maybe<DeleteClassInfoPayload>;
  /** Deletes a single `ClassLevel` using a unique key. */
  deleteClassLevel?: Maybe<DeleteClassLevelPayload>;
  /** Deletes a single `ClassLevel` using a unique key. */
  deleteClassLevelByName?: Maybe<DeleteClassLevelPayload>;
  /** Deletes a single `ClassLevel` using its globally unique id. */
  deleteClassLevelByNodeId?: Maybe<DeleteClassLevelPayload>;
  /** Deletes a single `ClassManagement` using a unique key. */
  deleteClassManagement?: Maybe<DeleteClassManagementPayload>;
  /** Deletes a single `ClassManagement` using its globally unique id. */
  deleteClassManagementByNodeId?: Maybe<DeleteClassManagementPayload>;
  /** Deletes a single `ClassStatus` using a unique key. */
  deleteClassStatus?: Maybe<DeleteClassStatusPayload>;
  /** Deletes a single `ClassStatus` using a unique key. */
  deleteClassStatusByName?: Maybe<DeleteClassStatusPayload>;
  /** Deletes a single `ClassStatus` using its globally unique id. */
  deleteClassStatusByNodeId?: Maybe<DeleteClassStatusPayload>;
  /** Deletes a single `ClassType` using a unique key. */
  deleteClassType?: Maybe<DeleteClassTypePayload>;
  /** Deletes a single `ClassType` using its globally unique id. */
  deleteClassTypeByNodeId?: Maybe<DeleteClassTypePayload>;
  /** Deletes a single `Event` using a unique key. */
  deleteEvent?: Maybe<DeleteEventPayload>;
  /** Deletes a single `Event` using its globally unique id. */
  deleteEventByNodeId?: Maybe<DeleteEventPayload>;
  /** Deletes a single `EventCategory` using a unique key. */
  deleteEventCategory?: Maybe<DeleteEventCategoryPayload>;
  /** Deletes a single `EventCategory` using its globally unique id. */
  deleteEventCategoryByNodeId?: Maybe<DeleteEventCategoryPayload>;
  /** Deletes a single `EventParticipant` using a unique key. */
  deleteEventParticipant?: Maybe<DeleteEventParticipantPayload>;
  /** Deletes a single `EventParticipant` using its globally unique id. */
  deleteEventParticipantByNodeId?: Maybe<DeleteEventParticipantPayload>;
  /** Deletes a single `Role` using a unique key. */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Deletes a single `Role` using a unique key. */
  deleteRoleByName?: Maybe<DeleteRolePayload>;
  /** Deletes a single `Role` using its globally unique id. */
  deleteRoleByNodeId?: Maybe<DeleteRolePayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `UserAttribute` using a unique key. */
  deleteUserAttribute?: Maybe<DeleteUserAttributePayload>;
  /** Deletes a single `UserAttribute` using a unique key. */
  deleteUserAttributeByName?: Maybe<DeleteUserAttributePayload>;
  /** Deletes a single `UserAttribute` using its globally unique id. */
  deleteUserAttributeByNodeId?: Maybe<DeleteUserAttributePayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUserByNodeId?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByUsername?: Maybe<DeleteUserPayload>;
  /** Deletes a single `UserInfo` using a unique key. */
  deleteUserInfo?: Maybe<DeleteUserInfoPayload>;
  /** Deletes a single `UserInfo` using a unique key. */
  deleteUserInfoByEmail?: Maybe<DeleteUserInfoPayload>;
  /** Deletes a single `UserInfo` using its globally unique id. */
  deleteUserInfoByNodeId?: Maybe<DeleteUserInfoPayload>;
  /** Deletes a single `UserInfo` using a unique key. */
  deleteUserInfoByPhoneNumber?: Maybe<DeleteUserInfoPayload>;
  /** Deletes a single `UserRole` using a unique key. */
  deleteUserRole?: Maybe<DeleteUserRolePayload>;
  /** Deletes a single `UserRole` using its globally unique id. */
  deleteUserRoleByNodeId?: Maybe<DeleteUserRolePayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using its globally unique id and a patch. */
  updateCategoryByNodeId?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategoryByTitle?: Maybe<UpdateCategoryPayload>;
  /** Updates a single `Class` using a unique key and a patch. */
  updateClass?: Maybe<UpdateClassPayload>;
  /** Updates a single `Class` using its globally unique id and a patch. */
  updateClassByNodeId?: Maybe<UpdateClassPayload>;
  /** Updates a single `ClassInfo` using a unique key and a patch. */
  updateClassInfo?: Maybe<UpdateClassInfoPayload>;
  /** Updates a single `ClassInfo` using its globally unique id and a patch. */
  updateClassInfoByNodeId?: Maybe<UpdateClassInfoPayload>;
  /** Updates a single `ClassLevel` using a unique key and a patch. */
  updateClassLevel?: Maybe<UpdateClassLevelPayload>;
  /** Updates a single `ClassLevel` using a unique key and a patch. */
  updateClassLevelByName?: Maybe<UpdateClassLevelPayload>;
  /** Updates a single `ClassLevel` using its globally unique id and a patch. */
  updateClassLevelByNodeId?: Maybe<UpdateClassLevelPayload>;
  /** Updates a single `ClassManagement` using a unique key and a patch. */
  updateClassManagement?: Maybe<UpdateClassManagementPayload>;
  /** Updates a single `ClassManagement` using its globally unique id and a patch. */
  updateClassManagementByNodeId?: Maybe<UpdateClassManagementPayload>;
  /** Updates a single `ClassStatus` using a unique key and a patch. */
  updateClassStatus?: Maybe<UpdateClassStatusPayload>;
  /** Updates a single `ClassStatus` using a unique key and a patch. */
  updateClassStatusByName?: Maybe<UpdateClassStatusPayload>;
  /** Updates a single `ClassStatus` using its globally unique id and a patch. */
  updateClassStatusByNodeId?: Maybe<UpdateClassStatusPayload>;
  /** Updates a single `ClassType` using a unique key and a patch. */
  updateClassType?: Maybe<UpdateClassTypePayload>;
  /** Updates a single `ClassType` using its globally unique id and a patch. */
  updateClassTypeByNodeId?: Maybe<UpdateClassTypePayload>;
  /** Updates a single `Event` using a unique key and a patch. */
  updateEvent?: Maybe<UpdateEventPayload>;
  /** Updates a single `Event` using its globally unique id and a patch. */
  updateEventByNodeId?: Maybe<UpdateEventPayload>;
  /** Updates a single `EventCategory` using a unique key and a patch. */
  updateEventCategory?: Maybe<UpdateEventCategoryPayload>;
  /** Updates a single `EventCategory` using its globally unique id and a patch. */
  updateEventCategoryByNodeId?: Maybe<UpdateEventCategoryPayload>;
  /** Updates a single `EventParticipant` using a unique key and a patch. */
  updateEventParticipant?: Maybe<UpdateEventParticipantPayload>;
  /** Updates a single `EventParticipant` using its globally unique id and a patch. */
  updateEventParticipantByNodeId?: Maybe<UpdateEventParticipantPayload>;
  /** Updates a single `Role` using a unique key and a patch. */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Updates a single `Role` using a unique key and a patch. */
  updateRoleByName?: Maybe<UpdateRolePayload>;
  /** Updates a single `Role` using its globally unique id and a patch. */
  updateRoleByNodeId?: Maybe<UpdateRolePayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `UserAttribute` using a unique key and a patch. */
  updateUserAttribute?: Maybe<UpdateUserAttributePayload>;
  /** Updates a single `UserAttribute` using a unique key and a patch. */
  updateUserAttributeByName?: Maybe<UpdateUserAttributePayload>;
  /** Updates a single `UserAttribute` using its globally unique id and a patch. */
  updateUserAttributeByNodeId?: Maybe<UpdateUserAttributePayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUserByNodeId?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUsername?: Maybe<UpdateUserPayload>;
  /** Updates a single `UserInfo` using a unique key and a patch. */
  updateUserInfo?: Maybe<UpdateUserInfoPayload>;
  /** Updates a single `UserInfo` using a unique key and a patch. */
  updateUserInfoByEmail?: Maybe<UpdateUserInfoPayload>;
  /** Updates a single `UserInfo` using its globally unique id and a patch. */
  updateUserInfoByNodeId?: Maybe<UpdateUserInfoPayload>;
  /** Updates a single `UserInfo` using a unique key and a patch. */
  updateUserInfoByPhoneNumber?: Maybe<UpdateUserInfoPayload>;
  /** Updates a single `UserRole` using a unique key and a patch. */
  updateUserRole?: Maybe<UpdateUserRolePayload>;
  /** Updates a single `UserRole` using its globally unique id and a patch. */
  updateUserRoleByNodeId?: Maybe<UpdateUserRolePayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateClassArgs = {
  input: CreateClassInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateClassInfoArgs = {
  input: CreateClassInfoInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateClassLevelArgs = {
  input: CreateClassLevelInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateClassManagementArgs = {
  input: CreateClassManagementInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateClassStatusArgs = {
  input: CreateClassStatusInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateClassTypeArgs = {
  input: CreateClassTypeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventArgs = {
  input: CreateEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventCategoryArgs = {
  input: CreateEventCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateEventParticipantArgs = {
  input: CreateEventParticipantInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserAttributeArgs = {
  input: CreateUserAttributeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserInfoArgs = {
  input: CreateUserInfoInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserRoleArgs = {
  input: CreateUserRoleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByNodeIdArgs = {
  input: DeleteCategoryByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByTitleArgs = {
  input: DeleteCategoryByTitleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassArgs = {
  input: DeleteClassInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassByNodeIdArgs = {
  input: DeleteClassByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassInfoArgs = {
  input: DeleteClassInfoInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassInfoByNodeIdArgs = {
  input: DeleteClassInfoByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassLevelArgs = {
  input: DeleteClassLevelInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassLevelByNameArgs = {
  input: DeleteClassLevelByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassLevelByNodeIdArgs = {
  input: DeleteClassLevelByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassManagementArgs = {
  input: DeleteClassManagementInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassManagementByNodeIdArgs = {
  input: DeleteClassManagementByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassStatusArgs = {
  input: DeleteClassStatusInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassStatusByNameArgs = {
  input: DeleteClassStatusByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassStatusByNodeIdArgs = {
  input: DeleteClassStatusByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassTypeArgs = {
  input: DeleteClassTypeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassTypeByNodeIdArgs = {
  input: DeleteClassTypeByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventArgs = {
  input: DeleteEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventByNodeIdArgs = {
  input: DeleteEventByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventCategoryArgs = {
  input: DeleteEventCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventCategoryByNodeIdArgs = {
  input: DeleteEventCategoryByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventParticipantArgs = {
  input: DeleteEventParticipantInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteEventParticipantByNodeIdArgs = {
  input: DeleteEventParticipantByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoleByNameArgs = {
  input: DeleteRoleByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoleByNodeIdArgs = {
  input: DeleteRoleByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserAttributeArgs = {
  input: DeleteUserAttributeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserAttributeByNameArgs = {
  input: DeleteUserAttributeByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserAttributeByNodeIdArgs = {
  input: DeleteUserAttributeByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByNodeIdArgs = {
  input: DeleteUserByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByUsernameArgs = {
  input: DeleteUserByUsernameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserInfoArgs = {
  input: DeleteUserInfoInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserInfoByEmailArgs = {
  input: DeleteUserInfoByEmailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserInfoByNodeIdArgs = {
  input: DeleteUserInfoByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserInfoByPhoneNumberArgs = {
  input: DeleteUserInfoByPhoneNumberInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserRoleArgs = {
  input: DeleteUserRoleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserRoleByNodeIdArgs = {
  input: DeleteUserRoleByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByNodeIdArgs = {
  input: UpdateCategoryByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByTitleArgs = {
  input: UpdateCategoryByTitleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassArgs = {
  input: UpdateClassInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassByNodeIdArgs = {
  input: UpdateClassByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassInfoArgs = {
  input: UpdateClassInfoInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassInfoByNodeIdArgs = {
  input: UpdateClassInfoByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassLevelArgs = {
  input: UpdateClassLevelInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassLevelByNameArgs = {
  input: UpdateClassLevelByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassLevelByNodeIdArgs = {
  input: UpdateClassLevelByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassManagementArgs = {
  input: UpdateClassManagementInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassManagementByNodeIdArgs = {
  input: UpdateClassManagementByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassStatusArgs = {
  input: UpdateClassStatusInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassStatusByNameArgs = {
  input: UpdateClassStatusByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassStatusByNodeIdArgs = {
  input: UpdateClassStatusByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassTypeArgs = {
  input: UpdateClassTypeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassTypeByNodeIdArgs = {
  input: UpdateClassTypeByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventArgs = {
  input: UpdateEventInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventByNodeIdArgs = {
  input: UpdateEventByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventCategoryArgs = {
  input: UpdateEventCategoryInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventCategoryByNodeIdArgs = {
  input: UpdateEventCategoryByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventParticipantArgs = {
  input: UpdateEventParticipantInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateEventParticipantByNodeIdArgs = {
  input: UpdateEventParticipantByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoleByNameArgs = {
  input: UpdateRoleByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoleByNodeIdArgs = {
  input: UpdateRoleByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserAttributeArgs = {
  input: UpdateUserAttributeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserAttributeByNameArgs = {
  input: UpdateUserAttributeByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserAttributeByNodeIdArgs = {
  input: UpdateUserAttributeByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByNodeIdArgs = {
  input: UpdateUserByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUsernameArgs = {
  input: UpdateUserByUsernameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserInfoArgs = {
  input: UpdateUserInfoInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserInfoByEmailArgs = {
  input: UpdateUserInfoByEmailInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserInfoByNodeIdArgs = {
  input: UpdateUserInfoByNodeIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserInfoByPhoneNumberArgs = {
  input: UpdateUserInfoByPhoneNumberInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserRoleArgs = {
  input: UpdateUserRoleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserRoleByNodeIdArgs = {
  input: UpdateUserRoleByNodeIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["Cursor"]["output"]>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  /** Reads and enables pagination through a set of `Category`. */
  categories?: Maybe<CategoriesConnection>;
  category?: Maybe<Category>;
  /** Reads a single `Category` using its globally unique `ID`. */
  categoryByNodeId?: Maybe<Category>;
  categoryByTitle?: Maybe<Category>;
  class?: Maybe<Class>;
  /** Reads a single `Class` using its globally unique `ID`. */
  classByNodeId?: Maybe<Class>;
  classInfo?: Maybe<ClassInfo>;
  /** Reads a single `ClassInfo` using its globally unique `ID`. */
  classInfoByNodeId?: Maybe<ClassInfo>;
  /** Reads and enables pagination through a set of `ClassInfo`. */
  classInfos?: Maybe<ClassInfosConnection>;
  classLevel?: Maybe<ClassLevel>;
  classLevelByName?: Maybe<ClassLevel>;
  /** Reads a single `ClassLevel` using its globally unique `ID`. */
  classLevelByNodeId?: Maybe<ClassLevel>;
  /** Reads and enables pagination through a set of `ClassLevel`. */
  classLevels?: Maybe<ClassLevelsConnection>;
  classManagement?: Maybe<ClassManagement>;
  /** Reads a single `ClassManagement` using its globally unique `ID`. */
  classManagementByNodeId?: Maybe<ClassManagement>;
  /** Reads and enables pagination through a set of `ClassManagement`. */
  classManagements?: Maybe<ClassManagementsConnection>;
  classStatus?: Maybe<ClassStatus>;
  classStatusByName?: Maybe<ClassStatus>;
  /** Reads a single `ClassStatus` using its globally unique `ID`. */
  classStatusByNodeId?: Maybe<ClassStatus>;
  /** Reads and enables pagination through a set of `ClassStatus`. */
  classStatuses?: Maybe<ClassStatusesConnection>;
  classType?: Maybe<ClassType>;
  /** Reads a single `ClassType` using its globally unique `ID`. */
  classTypeByNodeId?: Maybe<ClassType>;
  /** Reads and enables pagination through a set of `ClassType`. */
  classTypes?: Maybe<ClassTypesConnection>;
  /** Reads and enables pagination through a set of `Class`. */
  classes?: Maybe<ClassesConnection>;
  event?: Maybe<Event>;
  /** Reads a single `Event` using its globally unique `ID`. */
  eventByNodeId?: Maybe<Event>;
  /** Reads and enables pagination through a set of `EventCategory`. */
  eventCategories?: Maybe<EventCategoriesConnection>;
  eventCategory?: Maybe<EventCategory>;
  /** Reads a single `EventCategory` using its globally unique `ID`. */
  eventCategoryByNodeId?: Maybe<EventCategory>;
  eventParticipant?: Maybe<EventParticipant>;
  /** Reads a single `EventParticipant` using its globally unique `ID`. */
  eventParticipantByNodeId?: Maybe<EventParticipant>;
  /** Reads and enables pagination through a set of `EventParticipant`. */
  eventParticipants?: Maybe<EventParticipantsConnection>;
  /** Reads and enables pagination through a set of `Event`. */
  events?: Maybe<EventsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars["ID"]["output"];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  role?: Maybe<Role>;
  roleByName?: Maybe<Role>;
  /** Reads a single `Role` using its globally unique `ID`. */
  roleByNodeId?: Maybe<Role>;
  /** Reads and enables pagination through a set of `Role`. */
  roles?: Maybe<RolesConnection>;
  user?: Maybe<User>;
  userAttribute?: Maybe<UserAttribute>;
  userAttributeByName?: Maybe<UserAttribute>;
  /** Reads a single `UserAttribute` using its globally unique `ID`. */
  userAttributeByNodeId?: Maybe<UserAttribute>;
  /** Reads and enables pagination through a set of `UserAttribute`. */
  userAttributes?: Maybe<UserAttributesConnection>;
  /** Reads a single `User` using its globally unique `ID`. */
  userByNodeId?: Maybe<User>;
  userByUsername?: Maybe<User>;
  userInfo?: Maybe<UserInfo>;
  userInfoByEmail?: Maybe<UserInfo>;
  /** Reads a single `UserInfo` using its globally unique `ID`. */
  userInfoByNodeId?: Maybe<UserInfo>;
  userInfoByPhoneNumber?: Maybe<UserInfo>;
  /** Reads and enables pagination through a set of `UserInfo`. */
  userInfos?: Maybe<UserInfosConnection>;
  userRole?: Maybe<UserRole>;
  /** Reads a single `UserRole` using its globally unique `ID`. */
  userRoleByNodeId?: Maybe<UserRole>;
  /** Reads and enables pagination through a set of `UserRole`. */
  userRoles?: Maybe<UserRolesConnection>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<CategoryCondition>;
  filter?: InputMaybe<CategoryFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryCategoryByTitleArgs = {
  title: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassInfoArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassInfoByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassInfosArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassInfoCondition>;
  filter?: InputMaybe<ClassInfoFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassInfosOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryClassLevelArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassLevelByNameArgs = {
  name: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassLevelByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassLevelsArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassLevelCondition>;
  filter?: InputMaybe<ClassLevelFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassLevelsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryClassManagementArgs = {
  classId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassManagementByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassManagementsArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassManagementCondition>;
  filter?: InputMaybe<ClassManagementFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryClassStatusArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassStatusByNameArgs = {
  name: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassStatusByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassStatusesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassStatusCondition>;
  filter?: InputMaybe<ClassStatusFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassStatusesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryClassTypeArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassTypeByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassTypesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassTypeCondition>;
  filter?: InputMaybe<ClassTypeFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassTypesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryClassesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassCondition>;
  filter?: InputMaybe<ClassFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryEventArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventCategoryCondition>;
  filter?: InputMaybe<EventCategoryFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventCategoriesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryArgs = {
  categoryId: Scalars["Int"]["input"];
  eventId: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventCategoryByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventParticipantArgs = {
  eventId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventParticipantByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryEventParticipantsArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventParticipantCondition>;
  filter?: InputMaybe<EventParticipantFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventParticipantsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryEventsArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventCondition>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryRoleArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryRoleByNameArgs = {
  name: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryRoleByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryRolesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<RoleCondition>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserAttributeArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserAttributeByNameArgs = {
  name: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserAttributeByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserAttributesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserAttributeCondition>;
  filter?: InputMaybe<UserAttributeFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserAttributesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryUserByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserByUsernameArgs = {
  username: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserInfoArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserInfoByEmailArgs = {
  email: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserInfoByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserInfoByPhoneNumberArgs = {
  phoneNumber: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserInfosArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserInfoCondition>;
  filter?: InputMaybe<UserInfoFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserInfosOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryUserRoleArgs = {
  roleId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserRoleByNodeIdArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserRolesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserRoleCondition>;
  filter?: InputMaybe<UserRoleFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type Role = Node & {
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads and enables pagination through a set of `UserInfo`. */
  userInfos: RoleUserInfosManyToManyConnection;
  /** Reads and enables pagination through a set of `UserRole`. */
  userRoles: UserRolesConnection;
};

export type RoleUserInfosArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserInfoCondition>;
  filter?: InputMaybe<UserInfoFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserInfosOrderBy>>;
};

export type RoleUserRolesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserRoleCondition>;
  filter?: InputMaybe<UserRoleFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

/** A condition to be used against `Role` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RoleCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** A filter to be used against `Role` object types. All fields are combined with a logical ‘and.’ */
export type RoleFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RoleFilter>>;
  /** Filter by the object’s `description` field. */
  description?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RoleFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RoleFilter>>;
};

/** An input for mutations affecting `Role` */
export type RoleInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents an update to a `Role`. Fields that are set will be updated. */
export type RolePatch = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** A connection to a list of `UserInfo` values, with data from `UserRole`. */
export type RoleUserInfosManyToManyConnection = {
  /** A list of edges which contains the `UserInfo`, info from the `UserRole`, and the cursor to aid in pagination. */
  edges: Array<RoleUserInfosManyToManyEdge>;
  /** A list of `UserInfo` objects. */
  nodes: Array<UserInfo>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserInfo` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `UserInfo` edge in the connection, with data from `UserRole`. */
export type RoleUserInfosManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `UserInfo` at the end of the edge. */
  node: UserInfo;
};

/** A connection to a list of `Role` values. */
export type RolesConnection = {
  /** A list of edges which contains the `Role` and cursor to aid in pagination. */
  edges: Array<RolesEdge>;
  /** A list of `Role` objects. */
  nodes: Array<Role>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Role` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Role` edge in the connection. */
export type RolesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Role` at the end of the edge. */
  node: Role;
};

/** Methods to use when ordering `Role`. */
export type RolesOrderBy =
  | "DESCRIPTION_ASC"
  | "DESCRIPTION_DESC"
  | "ID_ASC"
  | "ID_DESC"
  | "NAME_ASC"
  | "NAME_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars["String"]["input"]>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Included in the specified list. */
  eq?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars["String"]["input"]>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars["String"]["input"]>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars["String"]["input"]>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Contains the specified string (case-sensitive). */
  iLike?: InputMaybe<Scalars["String"]["input"]>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars["String"]["input"]>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars["String"]["input"]>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars["String"]["input"]>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Not equal to the specified value. */
  ne?: InputMaybe<Scalars["String"]["input"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["String"]["input"]>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars["String"]["input"]>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars["String"]["input"]>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars["String"]["input"]>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars["String"]["input"]>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars["String"]["input"]>;
};

/** All input for the `updateCategoryByNodeId` mutation. */
export type UpdateCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Category` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
};

/** All input for the `updateCategoryByTitle` mutation. */
export type UpdateCategoryByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
  title: Scalars["String"]["input"];
};

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch;
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayload = {
  /** The `Category` that was updated by this mutation. */
  category?: Maybe<Category>;
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>;
};

/** All input for the `updateClassByNodeId` mutation. */
export type UpdateClassByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Class` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `Class` being updated. */
  patch: ClassPatch;
};

/** All input for the `updateClassInfoByNodeId` mutation. */
export type UpdateClassInfoByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassInfo` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `ClassInfo` being updated. */
  patch: ClassInfoPatch;
};

/** All input for the `updateClassInfo` mutation. */
export type UpdateClassInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `ClassInfo` being updated. */
  patch: ClassInfoPatch;
};

/** The output of our update `ClassInfo` mutation. */
export type UpdateClassInfoPayload = {
  /** The `ClassInfo` that was updated by this mutation. */
  classInfo?: Maybe<ClassInfo>;
  /** An edge for our `ClassInfo`. May be used by Relay 1. */
  classInfoEdge?: Maybe<ClassInfosEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `ClassInfo` mutation. */
export type UpdateClassInfoPayloadClassInfoEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassInfosOrderBy>>;
};

/** All input for the `updateClass` mutation. */
export type UpdateClassInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `Class` being updated. */
  patch: ClassPatch;
};

/** All input for the `updateClassLevelByName` mutation. */
export type UpdateClassLevelByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  /** An object where the defined keys will be set on the `ClassLevel` being updated. */
  patch: ClassLevelPatch;
};

/** All input for the `updateClassLevelByNodeId` mutation. */
export type UpdateClassLevelByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassLevel` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `ClassLevel` being updated. */
  patch: ClassLevelPatch;
};

/** All input for the `updateClassLevel` mutation. */
export type UpdateClassLevelInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `ClassLevel` being updated. */
  patch: ClassLevelPatch;
};

/** The output of our update `ClassLevel` mutation. */
export type UpdateClassLevelPayload = {
  /** The `ClassLevel` that was updated by this mutation. */
  classLevel?: Maybe<ClassLevel>;
  /** An edge for our `ClassLevel`. May be used by Relay 1. */
  classLevelEdge?: Maybe<ClassLevelsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `ClassLevel` mutation. */
export type UpdateClassLevelPayloadClassLevelEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassLevelsOrderBy>>;
};

/** All input for the `updateClassManagementByNodeId` mutation. */
export type UpdateClassManagementByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassManagement` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `ClassManagement` being updated. */
  patch: ClassManagementPatch;
};

/** All input for the `updateClassManagement` mutation. */
export type UpdateClassManagementInput = {
  classId: Scalars["Int"]["input"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** An object where the defined keys will be set on the `ClassManagement` being updated. */
  patch: ClassManagementPatch;
  userId: Scalars["Int"]["input"];
};

/** The output of our update `ClassManagement` mutation. */
export type UpdateClassManagementPayload = {
  /** Reads a single `Class` that is related to this `ClassManagement`. */
  class?: Maybe<Class>;
  /** The `ClassManagement` that was updated by this mutation. */
  classManagement?: Maybe<ClassManagement>;
  /** An edge for our `ClassManagement`. May be used by Relay 1. */
  classManagementEdge?: Maybe<ClassManagementsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `ClassManagement`. */
  user?: Maybe<User>;
};

/** The output of our update `ClassManagement` mutation. */
export type UpdateClassManagementPayloadClassManagementEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

/** The output of our update `Class` mutation. */
export type UpdateClassPayload = {
  /** The `Class` that was updated by this mutation. */
  class?: Maybe<Class>;
  /** An edge for our `Class`. May be used by Relay 1. */
  classEdge?: Maybe<ClassesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Class`. */
  teacher?: Maybe<User>;
};

/** The output of our update `Class` mutation. */
export type UpdateClassPayloadClassEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

/** All input for the `updateClassStatusByName` mutation. */
export type UpdateClassStatusByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  /** An object where the defined keys will be set on the `ClassStatus` being updated. */
  patch: ClassStatusPatch;
};

/** All input for the `updateClassStatusByNodeId` mutation. */
export type UpdateClassStatusByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassStatus` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `ClassStatus` being updated. */
  patch: ClassStatusPatch;
};

/** All input for the `updateClassStatus` mutation. */
export type UpdateClassStatusInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `ClassStatus` being updated. */
  patch: ClassStatusPatch;
};

/** The output of our update `ClassStatus` mutation. */
export type UpdateClassStatusPayload = {
  /** The `ClassStatus` that was updated by this mutation. */
  classStatus?: Maybe<ClassStatus>;
  /** An edge for our `ClassStatus`. May be used by Relay 1. */
  classStatusEdge?: Maybe<ClassStatusesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `ClassStatus` mutation. */
export type UpdateClassStatusPayloadClassStatusEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassStatusesOrderBy>>;
};

/** All input for the `updateClassTypeByNodeId` mutation. */
export type UpdateClassTypeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassType` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `ClassType` being updated. */
  patch: ClassTypePatch;
};

/** All input for the `updateClassType` mutation. */
export type UpdateClassTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `ClassType` being updated. */
  patch: ClassTypePatch;
};

/** The output of our update `ClassType` mutation. */
export type UpdateClassTypePayload = {
  /** The `ClassType` that was updated by this mutation. */
  classType?: Maybe<ClassType>;
  /** An edge for our `ClassType`. May be used by Relay 1. */
  classTypeEdge?: Maybe<ClassTypesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `ClassType` mutation. */
export type UpdateClassTypePayloadClassTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassTypesOrderBy>>;
};

/** All input for the `updateEventByNodeId` mutation. */
export type UpdateEventByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Event` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `Event` being updated. */
  patch: EventPatch;
};

/** All input for the `updateEventCategoryByNodeId` mutation. */
export type UpdateEventCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `EventCategory` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `EventCategory` being updated. */
  patch: EventCategoryPatch;
};

/** All input for the `updateEventCategory` mutation. */
export type UpdateEventCategoryInput = {
  categoryId: Scalars["Int"]["input"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  eventId: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `EventCategory` being updated. */
  patch: EventCategoryPatch;
};

/** The output of our update `EventCategory` mutation. */
export type UpdateEventCategoryPayload = {
  /** Reads a single `Category` that is related to this `EventCategory`. */
  category?: Maybe<Category>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `EventCategory`. */
  event?: Maybe<Event>;
  /** The `EventCategory` that was updated by this mutation. */
  eventCategory?: Maybe<EventCategory>;
  /** An edge for our `EventCategory`. May be used by Relay 1. */
  eventCategoryEdge?: Maybe<EventCategoriesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `EventCategory` mutation. */
export type UpdateEventCategoryPayloadEventCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<EventCategoriesOrderBy>>;
};

/** All input for the `updateEvent` mutation. */
export type UpdateEventInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `Event` being updated. */
  patch: EventPatch;
};

/** All input for the `updateEventParticipantByNodeId` mutation. */
export type UpdateEventParticipantByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `EventParticipant` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `EventParticipant` being updated. */
  patch: EventParticipantPatch;
};

/** All input for the `updateEventParticipant` mutation. */
export type UpdateEventParticipantInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  eventId: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `EventParticipant` being updated. */
  patch: EventParticipantPatch;
  userId: Scalars["Int"]["input"];
};

/** The output of our update `EventParticipant` mutation. */
export type UpdateEventParticipantPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `Event` that is related to this `EventParticipant`. */
  event?: Maybe<Event>;
  /** The `EventParticipant` that was updated by this mutation. */
  eventParticipant?: Maybe<EventParticipant>;
  /** An edge for our `EventParticipant`. May be used by Relay 1. */
  eventParticipantEdge?: Maybe<EventParticipantsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `UserInfo` that is related to this `EventParticipant`. */
  user?: Maybe<UserInfo>;
};

/** The output of our update `EventParticipant` mutation. */
export type UpdateEventParticipantPayloadEventParticipantEdgeArgs = {
  orderBy?: InputMaybe<Array<EventParticipantsOrderBy>>;
};

/** The output of our update `Event` mutation. */
export type UpdateEventPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** The `Event` that was updated by this mutation. */
  event?: Maybe<Event>;
  /** An edge for our `Event`. May be used by Relay 1. */
  eventEdge?: Maybe<EventsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our update `Event` mutation. */
export type UpdateEventPayloadEventEdgeArgs = {
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** All input for the `updateRoleByName` mutation. */
export type UpdateRoleByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  /** An object where the defined keys will be set on the `Role` being updated. */
  patch: RolePatch;
};

/** All input for the `updateRoleByNodeId` mutation. */
export type UpdateRoleByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Role` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `Role` being updated. */
  patch: RolePatch;
};

/** All input for the `updateRole` mutation. */
export type UpdateRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `Role` being updated. */
  patch: RolePatch;
};

/** The output of our update `Role` mutation. */
export type UpdateRolePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Role` that was updated by this mutation. */
  role?: Maybe<Role>;
  /** An edge for our `Role`. May be used by Relay 1. */
  roleEdge?: Maybe<RolesEdge>;
};

/** The output of our update `Role` mutation. */
export type UpdateRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** All input for the `updateUserAttributeByName` mutation. */
export type UpdateUserAttributeByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  /** An object where the defined keys will be set on the `UserAttribute` being updated. */
  patch: UserAttributePatch;
};

/** All input for the `updateUserAttributeByNodeId` mutation. */
export type UpdateUserAttributeByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `UserAttribute` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `UserAttribute` being updated. */
  patch: UserAttributePatch;
};

/** All input for the `updateUserAttribute` mutation. */
export type UpdateUserAttributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `UserAttribute` being updated. */
  patch: UserAttributePatch;
};

/** The output of our update `UserAttribute` mutation. */
export type UpdateUserAttributePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserAttribute`. */
  user?: Maybe<User>;
  /** The `UserAttribute` that was updated by this mutation. */
  userAttribute?: Maybe<UserAttribute>;
  /** An edge for our `UserAttribute`. May be used by Relay 1. */
  userAttributeEdge?: Maybe<UserAttributesEdge>;
};

/** The output of our update `UserAttribute` mutation. */
export type UpdateUserAttributePayloadUserAttributeEdgeArgs = {
  orderBy?: InputMaybe<Array<UserAttributesOrderBy>>;
};

/** All input for the `updateUserByNodeId` mutation. */
export type UpdateUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUserByUsername` mutation. */
export type UpdateUserByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
  username: Scalars["String"]["input"];
};

/** All input for the `updateUserInfoByEmail` mutation. */
export type UpdateUserInfoByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  /** An object where the defined keys will be set on the `UserInfo` being updated. */
  patch: UserInfoPatch;
};

/** All input for the `updateUserInfoByNodeId` mutation. */
export type UpdateUserInfoByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `UserInfo` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `UserInfo` being updated. */
  patch: UserInfoPatch;
};

/** All input for the `updateUserInfoByPhoneNumber` mutation. */
export type UpdateUserInfoByPhoneNumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** An object where the defined keys will be set on the `UserInfo` being updated. */
  patch: UserInfoPatch;
  phoneNumber: Scalars["String"]["input"];
};

/** All input for the `updateUserInfo` mutation. */
export type UpdateUserInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `UserInfo` being updated. */
  patch: UserInfoPatch;
};

/** The output of our update `UserInfo` mutation. */
export type UpdateUserInfoPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `UserInfo`. */
  userById?: Maybe<User>;
  /** The `UserInfo` that was updated by this mutation. */
  userInfo?: Maybe<UserInfo>;
  /** An edge for our `UserInfo`. May be used by Relay 1. */
  userInfoEdge?: Maybe<UserInfosEdge>;
};

/** The output of our update `UserInfo` mutation. */
export type UpdateUserInfoPayloadUserInfoEdgeArgs = {
  orderBy?: InputMaybe<Array<UserInfosOrderBy>>;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `updateUserRoleByNodeId` mutation. */
export type UpdateUserRoleByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `UserRole` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `UserRole` being updated. */
  patch: UserRolePatch;
};

/** All input for the `updateUserRole` mutation. */
export type UpdateUserRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** An object where the defined keys will be set on the `UserRole` being updated. */
  patch: UserRolePatch;
  roleId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

/** The output of our update `UserRole` mutation. */
export type UpdateUserRolePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Role` that is related to this `UserRole`. */
  role?: Maybe<Role>;
  /** Reads a single `UserInfo` that is related to this `UserRole`. */
  user?: Maybe<UserInfo>;
  /** The `UserRole` that was updated by this mutation. */
  userRole?: Maybe<UserRole>;
  /** An edge for our `UserRole`. May be used by Relay 1. */
  userRoleEdge?: Maybe<UserRolesEdge>;
};

/** The output of our update `UserRole` mutation. */
export type UpdateUserRolePayloadUserRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

export type User = Node & {
  /** Reads and enables pagination through a set of `ClassManagement`. */
  classManagements: ClassManagementsConnection;
  /** Reads and enables pagination through a set of `Class`. */
  classes: UserClassesManyToManyConnection;
  /** Reads and enables pagination through a set of `Class`. */
  classesByTeacherId: ClassesConnection;
  createdAt?: Maybe<Scalars["Datetime"]["output"]>;
  createdDate?: Maybe<Scalars["Datetime"]["output"]>;
  id: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  updatedAt?: Maybe<Scalars["Datetime"]["output"]>;
  updatedDate?: Maybe<Scalars["Datetime"]["output"]>;
  /** Reads and enables pagination through a set of `UserAttribute`. */
  userAttributes: UserAttributesConnection;
  /** Reads a single `UserInfo` that is related to this `User`. */
  userInfoById?: Maybe<UserInfo>;
  /**
   * Reads and enables pagination through a set of `UserInfo`.
   * @deprecated Please use userInfoById instead
   */
  userInfosById: UserInfosConnection;
  username: Scalars["String"]["output"];
};

export type UserClassManagementsArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassManagementCondition>;
  filter?: InputMaybe<ClassManagementFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

export type UserClassesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassCondition>;
  filter?: InputMaybe<ClassFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

export type UserClassesByTeacherIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassCondition>;
  filter?: InputMaybe<ClassFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

export type UserUserAttributesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserAttributeCondition>;
  filter?: InputMaybe<UserAttributeFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserAttributesOrderBy>>;
};

export type UserUserInfosByIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserInfoCondition>;
  filter?: InputMaybe<UserInfoFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserInfosOrderBy>>;
};

export type UserAttribute = Node & {
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads a single `User` that is related to this `UserAttribute`. */
  user?: Maybe<User>;
  userId: Scalars["Int"]["output"];
  value: Scalars["String"]["output"];
};

/**
 * A condition to be used against `UserAttribute` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type UserAttributeCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `value` field. */
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** A filter to be used against `UserAttribute` object types. All fields are combined with a logical ‘and.’ */
export type UserAttributeFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserAttributeFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserAttributeFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserAttributeFilter>>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `value` field. */
  value?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `UserAttribute` */
export type UserAttributeInput = {
  id: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
  userId: Scalars["Int"]["input"];
  value: Scalars["String"]["input"];
};

/** Represents an update to a `UserAttribute`. Fields that are set will be updated. */
export type UserAttributePatch = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** A connection to a list of `UserAttribute` values. */
export type UserAttributesConnection = {
  /** A list of edges which contains the `UserAttribute` and cursor to aid in pagination. */
  edges: Array<UserAttributesEdge>;
  /** A list of `UserAttribute` objects. */
  nodes: Array<UserAttribute>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserAttribute` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `UserAttribute` edge in the connection. */
export type UserAttributesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `UserAttribute` at the end of the edge. */
  node: UserAttribute;
};

/** Methods to use when ordering `UserAttribute`. */
export type UserAttributesOrderBy =
  | "ID_ASC"
  | "ID_DESC"
  | "NAME_ASC"
  | "NAME_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC"
  | "USER_ID_ASC"
  | "USER_ID_DESC"
  | "VALUE_ASC"
  | "VALUE_DESC";

/** A connection to a list of `Class` values, with data from `ClassManagement`. */
export type UserClassesManyToManyConnection = {
  /** A list of edges which contains the `Class`, info from the `ClassManagement`, and the cursor to aid in pagination. */
  edges: Array<UserClassesManyToManyEdge>;
  /** A list of `Class` objects. */
  nodes: Array<Class>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Class` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Class` edge in the connection, with data from `ClassManagement`. */
export type UserClassesManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Class` at the end of the edge. */
  node: Class;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `createdDate` field. */
  createdDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `updatedDate` field. */
  updatedDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `createdDate` field. */
  createdDate?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `updatedDate` field. */
  updatedDate?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `username` field. */
  username?: InputMaybe<StringFilter>;
};

export type UserInfo = Node & {
  avatarUrl?: Maybe<Scalars["String"]["output"]>;
  dateOfBirth?: Maybe<Scalars["Datetime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  /** Reads and enables pagination through a set of `EventParticipant`. */
  eventParticipantsByUserId: EventParticipantsConnection;
  /** Reads and enables pagination through a set of `Event`. */
  events: UserInfoEventsManyToManyConnection;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  /** Reads and enables pagination through a set of `Role`. */
  roles: UserInfoRolesManyToManyConnection;
  /** Reads a single `User` that is related to this `UserInfo`. */
  userById?: Maybe<User>;
  /** Reads and enables pagination through a set of `UserRole`. */
  userRolesByUserId: UserRolesConnection;
};

export type UserInfoEventParticipantsByUserIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventParticipantCondition>;
  filter?: InputMaybe<EventParticipantFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventParticipantsOrderBy>>;
};

export type UserInfoEventsArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<EventCondition>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

export type UserInfoRolesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<RoleCondition>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

export type UserInfoUserRolesByUserIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserRoleCondition>;
  filter?: InputMaybe<UserRoleFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

/**
 * A condition to be used against `UserInfo` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type UserInfoCondition = {
  /** Checks for equality with the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `dateOfBirth` field. */
  dateOfBirth?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  /** Checks for equality with the object’s `phoneNumber` field. */
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

/** A connection to a list of `Event` values, with data from `EventParticipant`. */
export type UserInfoEventsManyToManyConnection = {
  /** A list of edges which contains the `Event`, info from the `EventParticipant`, and the cursor to aid in pagination. */
  edges: Array<UserInfoEventsManyToManyEdge>;
  /** A list of `Event` objects. */
  nodes: Array<Event>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Event` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Event` edge in the connection, with data from `EventParticipant`. */
export type UserInfoEventsManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Event` at the end of the edge. */
  node: Event;
};

/** A filter to be used against `UserInfo` object types. All fields are combined with a logical ‘and.’ */
export type UserInfoFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserInfoFilter>>;
  /** Filter by the object’s `avatarUrl` field. */
  avatarUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `dateOfBirth` field. */
  dateOfBirth?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `firstName` field. */
  firstName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `lastName` field. */
  lastName?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserInfoFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserInfoFilter>>;
  /** Filter by the object’s `phoneNumber` field. */
  phoneNumber?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `UserInfo` */
export type UserInfoInput = {
  avatarUrl?: InputMaybe<Scalars["String"]["input"]>;
  dateOfBirth?: InputMaybe<Scalars["Datetime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

/** Represents an update to a `UserInfo`. Fields that are set will be updated. */
export type UserInfoPatch = {
  avatarUrl?: InputMaybe<Scalars["String"]["input"]>;
  dateOfBirth?: InputMaybe<Scalars["Datetime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

/** A connection to a list of `Role` values, with data from `UserRole`. */
export type UserInfoRolesManyToManyConnection = {
  /** A list of edges which contains the `Role`, info from the `UserRole`, and the cursor to aid in pagination. */
  edges: Array<UserInfoRolesManyToManyEdge>;
  /** A list of `Role` objects. */
  nodes: Array<Role>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Role` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Role` edge in the connection, with data from `UserRole`. */
export type UserInfoRolesManyToManyEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Role` at the end of the edge. */
  node: Role;
};

/** A connection to a list of `UserInfo` values. */
export type UserInfosConnection = {
  /** A list of edges which contains the `UserInfo` and cursor to aid in pagination. */
  edges: Array<UserInfosEdge>;
  /** A list of `UserInfo` objects. */
  nodes: Array<UserInfo>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserInfo` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `UserInfo` edge in the connection. */
export type UserInfosEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `UserInfo` at the end of the edge. */
  node: UserInfo;
};

/** Methods to use when ordering `UserInfo`. */
export type UserInfosOrderBy =
  | "AVATAR_URL_ASC"
  | "AVATAR_URL_DESC"
  | "DATE_OF_BIRTH_ASC"
  | "DATE_OF_BIRTH_DESC"
  | "EMAIL_ASC"
  | "EMAIL_DESC"
  | "FIRST_NAME_ASC"
  | "FIRST_NAME_DESC"
  | "ID_ASC"
  | "ID_DESC"
  | "LAST_NAME_ASC"
  | "LAST_NAME_DESC"
  | "NATURAL"
  | "PHONE_NUMBER_ASC"
  | "PHONE_NUMBER_DESC"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

/** An input for mutations affecting `User` */
export type UserInput = {
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  createdDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  id: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  updatedDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  username: Scalars["String"]["input"];
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  createdAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  createdDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["Datetime"]["input"]>;
  updatedDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserRole = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads a single `Role` that is related to this `UserRole`. */
  role?: Maybe<Role>;
  roleId: Scalars["Int"]["output"];
  /** Reads a single `UserInfo` that is related to this `UserRole`. */
  user?: Maybe<UserInfo>;
  userId: Scalars["Int"]["output"];
};

/**
 * A condition to be used against `UserRole` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type UserRoleCondition = {
  /** Checks for equality with the object’s `roleId` field. */
  roleId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A filter to be used against `UserRole` object types. All fields are combined with a logical ‘and.’ */
export type UserRoleFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserRoleFilter>>;
  /** Negates the expression. */
  not?: InputMaybe<UserRoleFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserRoleFilter>>;
  /** Filter by the object’s `roleId` field. */
  roleId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: InputMaybe<IntFilter>;
};

/** An input for mutations affecting `UserRole` */
export type UserRoleInput = {
  roleId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

/** Represents an update to a `UserRole`. Fields that are set will be updated. */
export type UserRolePatch = {
  roleId?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A connection to a list of `UserRole` values. */
export type UserRolesConnection = {
  /** A list of edges which contains the `UserRole` and cursor to aid in pagination. */
  edges: Array<UserRolesEdge>;
  /** A list of `UserRole` objects. */
  nodes: Array<UserRole>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserRole` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `UserRole` edge in the connection. */
export type UserRolesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `UserRole` at the end of the edge. */
  node: UserRole;
};

/** Methods to use when ordering `UserRole`. */
export type UserRolesOrderBy =
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC"
  | "ROLE_ID_ASC"
  | "ROLE_ID_DESC"
  | "USER_ID_ASC"
  | "USER_ID_DESC";

/** A connection to a list of `User` values. */
export type UsersConnection = {
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** Methods to use when ordering `User`. */
export type UsersOrderBy =
  | "CREATED_AT_ASC"
  | "CREATED_AT_DESC"
  | "CREATED_DATE_ASC"
  | "CREATED_DATE_DESC"
  | "ID_ASC"
  | "ID_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC"
  | "UPDATED_AT_ASC"
  | "UPDATED_AT_DESC"
  | "UPDATED_DATE_ASC"
  | "UPDATED_DATE_DESC"
  | "USERNAME_ASC"
  | "USERNAME_DESC";
