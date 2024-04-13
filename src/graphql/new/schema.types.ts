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

export type Class = Node & {
  classLevel?: Maybe<Scalars["Int"]["output"]>;
  /** Reads and enables pagination through a set of `ClassManagement`. */
  classManagementsByClassId: ClassManagementsConnection;
  /** Reads and enables pagination through a set of `ClassManagement`. */
  classManagementsByClassIdList: Array<ClassManagement>;
  /** Reads a single `ClassType` that is related to this `Class`. */
  classTypeByClassTypeId?: Maybe<ClassType>;
  classTypeId?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  endDate?: Maybe<Scalars["Datetime"]["output"]>;
  id: Scalars["Int"]["output"];
  logoUrl?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  startDate?: Maybe<Scalars["Datetime"]["output"]>;
  teacherId?: Maybe<Scalars["Int"]["output"]>;
  /** Reads a single `User` that is related to this `Class`. */
  userByTeacherId?: Maybe<User>;
};

export type ClassClassManagementsByClassIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassManagementCondition>;
  filter?: InputMaybe<ClassManagementFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

export type ClassClassManagementsByClassIdListArgs = {
  condition?: InputMaybe<ClassManagementCondition>;
  filter?: InputMaybe<ClassManagementFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

/** A condition to be used against `Class` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ClassCondition = {
  /** Checks for equality with the object’s `classLevel` field. */
  classLevel?: InputMaybe<Scalars["Int"]["input"]>;
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

/** An input for mutations affecting `Class` */
export type ClassInput = {
  classLevel?: InputMaybe<Scalars["Int"]["input"]>;
  classTypeId?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  id: Scalars["Int"]["input"];
  logoUrl?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  startDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  teacherId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClassManagement = Node & {
  /** Reads a single `Class` that is related to this `ClassManagement`. */
  classByClassId?: Maybe<Class>;
  classId: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads a single `User` that is related to this `ClassManagement`. */
  userByUserId?: Maybe<User>;
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
  nodes: Array<Maybe<ClassManagement>>;
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
  node?: Maybe<ClassManagement>;
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
  classTypeId?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  logoUrl?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  teacherId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ClassType = Node & {
  /** Reads and enables pagination through a set of `Class`. */
  classesByClassTypeId: ClassesConnection;
  /** Reads and enables pagination through a set of `Class`. */
  classesByClassTypeIdList: Array<Class>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
};

export type ClassTypeClassesByClassTypeIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassCondition>;
  filter?: InputMaybe<ClassFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

export type ClassTypeClassesByClassTypeIdListArgs = {
  condition?: InputMaybe<ClassCondition>;
  filter?: InputMaybe<ClassFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
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
  nodes: Array<Maybe<ClassType>>;
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
  node?: Maybe<ClassType>;
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

/** A connection to a list of `Class` values. */
export type ClassesConnection = {
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
  node?: Maybe<Class>;
};

/** Methods to use when ordering `Class`. */
export type ClassesOrderBy =
  | "CLASS_LEVEL_ASC"
  | "CLASS_LEVEL_DESC"
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
  classByClassId?: Maybe<Class>;
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
  userByUserId?: Maybe<User>;
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
  /** Reads a single `ClassType` that is related to this `Class`. */
  classTypeByClassTypeId?: Maybe<ClassType>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Class`. */
  userByTeacherId?: Maybe<User>;
};

/** The output of our create `Class` mutation. */
export type CreateClassPayloadClassEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
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
  /** The `UserAttribute` that was created by this mutation. */
  userAttribute?: Maybe<UserAttribute>;
  /** An edge for our `UserAttribute`. May be used by Relay 1. */
  userAttributeEdge?: Maybe<UserAttributesEdge>;
  /** Reads a single `User` that is related to this `UserAttribute`. */
  userByUserId?: Maybe<User>;
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
  roleByRoleId?: Maybe<Role>;
  /** Reads a single `User` that is related to this `UserRole`. */
  userByUserId?: Maybe<User>;
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
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
};

/** All input for the `deleteClassById` mutation. */
export type DeleteClassByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteClass` mutation. */
export type DeleteClassInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Class` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `deleteClassManagementByClassIdAndUserId` mutation. */
export type DeleteClassManagementByClassIdAndUserIdInput = {
  classId: Scalars["Int"]["input"];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  userId: Scalars["Int"]["input"];
};

/** All input for the `deleteClassManagement` mutation. */
export type DeleteClassManagementInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassManagement` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `ClassManagement` mutation. */
export type DeleteClassManagementPayload = {
  /** Reads a single `Class` that is related to this `ClassManagement`. */
  classByClassId?: Maybe<Class>;
  /** The `ClassManagement` that was deleted by this mutation. */
  classManagement?: Maybe<ClassManagement>;
  /** An edge for our `ClassManagement`. May be used by Relay 1. */
  classManagementEdge?: Maybe<ClassManagementsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedClassManagementId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `ClassManagement`. */
  userByUserId?: Maybe<User>;
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
  /** Reads a single `ClassType` that is related to this `Class`. */
  classTypeByClassTypeId?: Maybe<ClassType>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedClassId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Class`. */
  userByTeacherId?: Maybe<User>;
};

/** The output of our delete `Class` mutation. */
export type DeleteClassPayloadClassEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

/** All input for the `deleteClassTypeById` mutation. */
export type DeleteClassTypeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `deleteClassType` mutation. */
export type DeleteClassTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassType` to be deleted. */
  nodeId: Scalars["ID"]["input"];
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
  deletedClassTypeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The output of our delete `ClassType` mutation. */
export type DeleteClassTypePayloadClassTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassTypesOrderBy>>;
};

/** All input for the `deleteRoleById` mutation. */
export type DeleteRoleByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
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

/** All input for the `deleteRole` mutation. */
export type DeleteRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Role` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `Role` mutation. */
export type DeleteRolePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedRoleId?: Maybe<Scalars["ID"]["output"]>;
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

/** All input for the `deleteUserAttributeById` mutation. */
export type DeleteUserAttributeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
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

/** All input for the `deleteUserAttribute` mutation. */
export type DeleteUserAttributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `UserAttribute` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `UserAttribute` mutation. */
export type DeleteUserAttributePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedUserAttributeId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserAttribute` that was deleted by this mutation. */
  userAttribute?: Maybe<UserAttribute>;
  /** An edge for our `UserAttribute`. May be used by Relay 1. */
  userAttributeEdge?: Maybe<UserAttributesEdge>;
  /** Reads a single `User` that is related to this `UserAttribute`. */
  userByUserId?: Maybe<User>;
};

/** The output of our delete `UserAttribute` mutation. */
export type DeleteUserAttributePayloadUserAttributeEdgeArgs = {
  orderBy?: InputMaybe<Array<UserAttributesOrderBy>>;
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
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

/** All input for the `deleteUserInfoById` mutation. */
export type DeleteUserInfoByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
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
  /** The globally unique `ID` which will identify a single `UserInfo` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `UserInfo` mutation. */
export type DeleteUserInfoPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedUserInfoId?: Maybe<Scalars["ID"]["output"]>;
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
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedUserId?: Maybe<Scalars["ID"]["output"]>;
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

/** All input for the `deleteUserRoleByUserIdAndRoleId` mutation. */
export type DeleteUserRoleByUserIdAndRoleIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  roleId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

/** All input for the `deleteUserRole` mutation. */
export type DeleteUserRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `UserRole` to be deleted. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our delete `UserRole` mutation. */
export type DeleteUserRolePayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  deletedUserRoleId?: Maybe<Scalars["ID"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Role` that is related to this `UserRole`. */
  roleByRoleId?: Maybe<Role>;
  /** Reads a single `User` that is related to this `UserRole`. */
  userByUserId?: Maybe<User>;
  /** The `UserRole` that was deleted by this mutation. */
  userRole?: Maybe<UserRole>;
  /** An edge for our `UserRole`. May be used by Relay 1. */
  userRoleEdge?: Maybe<UserRolesEdge>;
};

/** The output of our delete `UserRole` mutation. */
export type DeleteUserRolePayloadUserRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars["Int"]["input"]>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars["Int"]["input"]>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars["Int"]["input"]>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars["Int"]["input"]>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars["Int"]["input"]>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars["Int"]["input"]>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["Int"]["input"]>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars["Int"]["input"]>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  /** Creates a single `Class`. */
  createClass?: Maybe<CreateClassPayload>;
  /** Creates a single `ClassManagement`. */
  createClassManagement?: Maybe<CreateClassManagementPayload>;
  /** Creates a single `ClassType`. */
  createClassType?: Maybe<CreateClassTypePayload>;
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
  /** Deletes a single `Class` using its globally unique id. */
  deleteClass?: Maybe<DeleteClassPayload>;
  /** Deletes a single `Class` using a unique key. */
  deleteClassById?: Maybe<DeleteClassPayload>;
  /** Deletes a single `ClassManagement` using its globally unique id. */
  deleteClassManagement?: Maybe<DeleteClassManagementPayload>;
  /** Deletes a single `ClassManagement` using a unique key. */
  deleteClassManagementByClassIdAndUserId?: Maybe<DeleteClassManagementPayload>;
  /** Deletes a single `ClassType` using its globally unique id. */
  deleteClassType?: Maybe<DeleteClassTypePayload>;
  /** Deletes a single `ClassType` using a unique key. */
  deleteClassTypeById?: Maybe<DeleteClassTypePayload>;
  /** Deletes a single `Role` using its globally unique id. */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Deletes a single `Role` using a unique key. */
  deleteRoleById?: Maybe<DeleteRolePayload>;
  /** Deletes a single `Role` using a unique key. */
  deleteRoleByName?: Maybe<DeleteRolePayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `UserAttribute` using its globally unique id. */
  deleteUserAttribute?: Maybe<DeleteUserAttributePayload>;
  /** Deletes a single `UserAttribute` using a unique key. */
  deleteUserAttributeById?: Maybe<DeleteUserAttributePayload>;
  /** Deletes a single `UserAttribute` using a unique key. */
  deleteUserAttributeByName?: Maybe<DeleteUserAttributePayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByUsername?: Maybe<DeleteUserPayload>;
  /** Deletes a single `UserInfo` using its globally unique id. */
  deleteUserInfo?: Maybe<DeleteUserInfoPayload>;
  /** Deletes a single `UserInfo` using a unique key. */
  deleteUserInfoByEmail?: Maybe<DeleteUserInfoPayload>;
  /** Deletes a single `UserInfo` using a unique key. */
  deleteUserInfoById?: Maybe<DeleteUserInfoPayload>;
  /** Deletes a single `UserInfo` using a unique key. */
  deleteUserInfoByPhoneNumber?: Maybe<DeleteUserInfoPayload>;
  /** Deletes a single `UserRole` using its globally unique id. */
  deleteUserRole?: Maybe<DeleteUserRolePayload>;
  /** Deletes a single `UserRole` using a unique key. */
  deleteUserRoleByUserIdAndRoleId?: Maybe<DeleteUserRolePayload>;
  /** Updates a single `Class` using its globally unique id and a patch. */
  updateClass?: Maybe<UpdateClassPayload>;
  /** Updates a single `Class` using a unique key and a patch. */
  updateClassById?: Maybe<UpdateClassPayload>;
  /** Updates a single `ClassManagement` using its globally unique id and a patch. */
  updateClassManagement?: Maybe<UpdateClassManagementPayload>;
  /** Updates a single `ClassManagement` using a unique key and a patch. */
  updateClassManagementByClassIdAndUserId?: Maybe<UpdateClassManagementPayload>;
  /** Updates a single `ClassType` using its globally unique id and a patch. */
  updateClassType?: Maybe<UpdateClassTypePayload>;
  /** Updates a single `ClassType` using a unique key and a patch. */
  updateClassTypeById?: Maybe<UpdateClassTypePayload>;
  /** Updates a single `Role` using its globally unique id and a patch. */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Updates a single `Role` using a unique key and a patch. */
  updateRoleById?: Maybe<UpdateRolePayload>;
  /** Updates a single `Role` using a unique key and a patch. */
  updateRoleByName?: Maybe<UpdateRolePayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `UserAttribute` using its globally unique id and a patch. */
  updateUserAttribute?: Maybe<UpdateUserAttributePayload>;
  /** Updates a single `UserAttribute` using a unique key and a patch. */
  updateUserAttributeById?: Maybe<UpdateUserAttributePayload>;
  /** Updates a single `UserAttribute` using a unique key and a patch. */
  updateUserAttributeByName?: Maybe<UpdateUserAttributePayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUsername?: Maybe<UpdateUserPayload>;
  /** Updates a single `UserInfo` using its globally unique id and a patch. */
  updateUserInfo?: Maybe<UpdateUserInfoPayload>;
  /** Updates a single `UserInfo` using a unique key and a patch. */
  updateUserInfoByEmail?: Maybe<UpdateUserInfoPayload>;
  /** Updates a single `UserInfo` using a unique key and a patch. */
  updateUserInfoById?: Maybe<UpdateUserInfoPayload>;
  /** Updates a single `UserInfo` using a unique key and a patch. */
  updateUserInfoByPhoneNumber?: Maybe<UpdateUserInfoPayload>;
  /** Updates a single `UserRole` using its globally unique id and a patch. */
  updateUserRole?: Maybe<UpdateUserRolePayload>;
  /** Updates a single `UserRole` using a unique key and a patch. */
  updateUserRoleByUserIdAndRoleId?: Maybe<UpdateUserRolePayload>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateClassArgs = {
  input: CreateClassInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateClassManagementArgs = {
  input: CreateClassManagementInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateClassTypeArgs = {
  input: CreateClassTypeInput;
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
export type MutationDeleteClassArgs = {
  input: DeleteClassInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassByIdArgs = {
  input: DeleteClassByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassManagementArgs = {
  input: DeleteClassManagementInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassManagementByClassIdAndUserIdArgs = {
  input: DeleteClassManagementByClassIdAndUserIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassTypeArgs = {
  input: DeleteClassTypeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteClassTypeByIdArgs = {
  input: DeleteClassTypeByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoleByIdArgs = {
  input: DeleteRoleByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRoleByNameArgs = {
  input: DeleteRoleByNameInput;
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
export type MutationDeleteUserAttributeByIdArgs = {
  input: DeleteUserAttributeByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserAttributeByNameArgs = {
  input: DeleteUserAttributeByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
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
export type MutationDeleteUserInfoByIdArgs = {
  input: DeleteUserInfoByIdInput;
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
export type MutationDeleteUserRoleByUserIdAndRoleIdArgs = {
  input: DeleteUserRoleByUserIdAndRoleIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassArgs = {
  input: UpdateClassInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassByIdArgs = {
  input: UpdateClassByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassManagementArgs = {
  input: UpdateClassManagementInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassManagementByClassIdAndUserIdArgs = {
  input: UpdateClassManagementByClassIdAndUserIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassTypeArgs = {
  input: UpdateClassTypeInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateClassTypeByIdArgs = {
  input: UpdateClassTypeByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoleByIdArgs = {
  input: UpdateRoleByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRoleByNameArgs = {
  input: UpdateRoleByNameInput;
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
export type MutationUpdateUserAttributeByIdArgs = {
  input: UpdateUserAttributeByIdInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserAttributeByNameArgs = {
  input: UpdateUserAttributeByNameInput;
};

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
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
export type MutationUpdateUserInfoByIdArgs = {
  input: UpdateUserInfoByIdInput;
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
export type MutationUpdateUserRoleByUserIdAndRoleIdArgs = {
  input: UpdateUserRoleByUserIdAndRoleIdInput;
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
  /** Reads and enables pagination through a set of `ClassManagement`. */
  allClassManagements?: Maybe<ClassManagementsConnection>;
  /** Reads a set of `ClassManagement`. */
  allClassManagementsList?: Maybe<Array<ClassManagement>>;
  /** Reads and enables pagination through a set of `ClassType`. */
  allClassTypes?: Maybe<ClassTypesConnection>;
  /** Reads a set of `ClassType`. */
  allClassTypesList?: Maybe<Array<ClassType>>;
  /** Reads and enables pagination through a set of `Class`. */
  allClasses?: Maybe<ClassesConnection>;
  /** Reads a set of `Class`. */
  allClassesList?: Maybe<Array<Class>>;
  /** Reads and enables pagination through a set of `Role`. */
  allRoles?: Maybe<RolesConnection>;
  /** Reads a set of `Role`. */
  allRolesList?: Maybe<Array<Role>>;
  /** Reads and enables pagination through a set of `UserAttribute`. */
  allUserAttributes?: Maybe<UserAttributesConnection>;
  /** Reads a set of `UserAttribute`. */
  allUserAttributesList?: Maybe<Array<UserAttribute>>;
  /** Reads and enables pagination through a set of `UserInfo`. */
  allUserInfos?: Maybe<UserInfosConnection>;
  /** Reads a set of `UserInfo`. */
  allUserInfosList?: Maybe<Array<UserInfo>>;
  /** Reads and enables pagination through a set of `UserRole`. */
  allUserRoles?: Maybe<UserRolesConnection>;
  /** Reads a set of `UserRole`. */
  allUserRolesList?: Maybe<Array<UserRole>>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads a set of `User`. */
  allUsersList?: Maybe<Array<User>>;
  /** Reads a single `Class` using its globally unique `ID`. */
  class?: Maybe<Class>;
  classById?: Maybe<Class>;
  /** Reads a single `ClassManagement` using its globally unique `ID`. */
  classManagement?: Maybe<ClassManagement>;
  classManagementByClassIdAndUserId?: Maybe<ClassManagement>;
  /** Reads a single `ClassType` using its globally unique `ID`. */
  classType?: Maybe<ClassType>;
  classTypeById?: Maybe<ClassType>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars["ID"]["output"];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Role` using its globally unique `ID`. */
  role?: Maybe<Role>;
  roleById?: Maybe<Role>;
  roleByName?: Maybe<Role>;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  /** Reads a single `UserAttribute` using its globally unique `ID`. */
  userAttribute?: Maybe<UserAttribute>;
  userAttributeById?: Maybe<UserAttribute>;
  userAttributeByName?: Maybe<UserAttribute>;
  userById?: Maybe<User>;
  userByUsername?: Maybe<User>;
  /** Reads a single `UserInfo` using its globally unique `ID`. */
  userInfo?: Maybe<UserInfo>;
  userInfoByEmail?: Maybe<UserInfo>;
  userInfoById?: Maybe<UserInfo>;
  userInfoByPhoneNumber?: Maybe<UserInfo>;
  /** Reads a single `UserRole` using its globally unique `ID`. */
  userRole?: Maybe<UserRole>;
  userRoleByUserIdAndRoleId?: Maybe<UserRole>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllClassManagementsArgs = {
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
export type QueryAllClassManagementsListArgs = {
  condition?: InputMaybe<ClassManagementCondition>;
  filter?: InputMaybe<ClassManagementFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllClassTypesArgs = {
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
export type QueryAllClassTypesListArgs = {
  condition?: InputMaybe<ClassTypeCondition>;
  filter?: InputMaybe<ClassTypeFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassTypesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllClassesArgs = {
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
export type QueryAllClassesListArgs = {
  condition?: InputMaybe<ClassCondition>;
  filter?: InputMaybe<ClassFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllRolesArgs = {
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
export type QueryAllRolesListArgs = {
  condition?: InputMaybe<RoleCondition>;
  filter?: InputMaybe<RoleFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUserAttributesArgs = {
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
export type QueryAllUserAttributesListArgs = {
  condition?: InputMaybe<UserAttributeCondition>;
  filter?: InputMaybe<UserAttributeFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserAttributesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUserInfosArgs = {
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
export type QueryAllUserInfosListArgs = {
  condition?: InputMaybe<UserInfoCondition>;
  filter?: InputMaybe<UserInfoFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserInfosOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUserRolesArgs = {
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
export type QueryAllUserRolesListArgs = {
  condition?: InputMaybe<UserRoleCondition>;
  filter?: InputMaybe<UserRoleFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUsersListArgs = {
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryClassArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassManagementArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassManagementByClassIdAndUserIdArgs = {
  classId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassTypeArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryClassTypeByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryRoleArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryRoleByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryRoleByNameArgs = {
  name: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserAttributeArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserAttributeByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserAttributeByNameArgs = {
  name: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserByUsernameArgs = {
  username: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserInfoArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserInfoByEmailArgs = {
  email: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserInfoByIdArgs = {
  id: Scalars["Int"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserInfoByPhoneNumberArgs = {
  phoneNumber: Scalars["String"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserRoleArgs = {
  nodeId: Scalars["ID"]["input"];
};

/** The root query type which gives access points into the data universe. */
export type QueryUserRoleByUserIdAndRoleIdArgs = {
  roleId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

export type Role = Node & {
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads and enables pagination through a set of `UserRole`. */
  userRolesByRoleId: UserRolesConnection;
  /** Reads and enables pagination through a set of `UserRole`. */
  userRolesByRoleIdList: Array<UserRole>;
};

export type RoleUserRolesByRoleIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserRoleCondition>;
  filter?: InputMaybe<UserRoleFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

export type RoleUserRolesByRoleIdListArgs = {
  condition?: InputMaybe<UserRoleCondition>;
  filter?: InputMaybe<UserRoleFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
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

/** A connection to a list of `Role` values. */
export type RolesConnection = {
  /** A list of edges which contains the `Role` and cursor to aid in pagination. */
  edges: Array<RolesEdge>;
  /** A list of `Role` objects. */
  nodes: Array<Maybe<Role>>;
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
  node?: Maybe<Role>;
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
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars["String"]["input"]>;
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
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars["String"]["input"]>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars["String"]["input"]>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars["String"]["input"]>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars["String"]["input"]>;
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

/** All input for the `updateClassById` mutation. */
export type UpdateClassByIdInput = {
  /** An object where the defined keys will be set on the `Class` being updated. */
  classPatch: ClassPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `updateClass` mutation. */
export type UpdateClassInput = {
  /** An object where the defined keys will be set on the `Class` being updated. */
  classPatch: ClassPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Class` to be updated. */
  nodeId: Scalars["ID"]["input"];
};

/** All input for the `updateClassManagementByClassIdAndUserId` mutation. */
export type UpdateClassManagementByClassIdAndUserIdInput = {
  classId: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `ClassManagement` being updated. */
  classManagementPatch: ClassManagementPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  userId: Scalars["Int"]["input"];
};

/** All input for the `updateClassManagement` mutation. */
export type UpdateClassManagementInput = {
  /** An object where the defined keys will be set on the `ClassManagement` being updated. */
  classManagementPatch: ClassManagementPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassManagement` to be updated. */
  nodeId: Scalars["ID"]["input"];
};

/** The output of our update `ClassManagement` mutation. */
export type UpdateClassManagementPayload = {
  /** Reads a single `Class` that is related to this `ClassManagement`. */
  classByClassId?: Maybe<Class>;
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
  userByUserId?: Maybe<User>;
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
  /** Reads a single `ClassType` that is related to this `Class`. */
  classTypeByClassTypeId?: Maybe<ClassType>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Class`. */
  userByTeacherId?: Maybe<User>;
};

/** The output of our update `Class` mutation. */
export type UpdateClassPayloadClassEdgeArgs = {
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

/** All input for the `updateClassTypeById` mutation. */
export type UpdateClassTypeByIdInput = {
  /** An object where the defined keys will be set on the `ClassType` being updated. */
  classTypePatch: ClassTypePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
};

/** All input for the `updateClassType` mutation. */
export type UpdateClassTypeInput = {
  /** An object where the defined keys will be set on the `ClassType` being updated. */
  classTypePatch: ClassTypePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `ClassType` to be updated. */
  nodeId: Scalars["ID"]["input"];
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

/** All input for the `updateRoleById` mutation. */
export type UpdateRoleByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `Role` being updated. */
  rolePatch: RolePatch;
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
  rolePatch: RolePatch;
};

/** All input for the `updateRole` mutation. */
export type UpdateRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `Role` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `Role` being updated. */
  rolePatch: RolePatch;
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

/** All input for the `updateUserAttributeById` mutation. */
export type UpdateUserAttributeByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `UserAttribute` being updated. */
  userAttributePatch: UserAttributePatch;
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
  userAttributePatch: UserAttributePatch;
};

/** All input for the `updateUserAttribute` mutation. */
export type UpdateUserAttributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `UserAttribute` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `UserAttribute` being updated. */
  userAttributePatch: UserAttributePatch;
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
  /** The `UserAttribute` that was updated by this mutation. */
  userAttribute?: Maybe<UserAttribute>;
  /** An edge for our `UserAttribute`. May be used by Relay 1. */
  userAttributeEdge?: Maybe<UserAttributesEdge>;
  /** Reads a single `User` that is related to this `UserAttribute`. */
  userByUserId?: Maybe<User>;
};

/** The output of our update `UserAttribute` mutation. */
export type UpdateUserAttributePayloadUserAttributeEdgeArgs = {
  orderBy?: InputMaybe<Array<UserAttributesOrderBy>>;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUserByUsername` mutation. */
export type UpdateUserByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
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
  userInfoPatch: UserInfoPatch;
};

/** All input for the `updateUserInfoById` mutation. */
export type UpdateUserInfoByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `UserInfo` being updated. */
  userInfoPatch: UserInfoPatch;
};

/** All input for the `updateUserInfoByPhoneNumber` mutation. */
export type UpdateUserInfoByPhoneNumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber: Scalars["String"]["input"];
  /** An object where the defined keys will be set on the `UserInfo` being updated. */
  userInfoPatch: UserInfoPatch;
};

/** All input for the `updateUserInfo` mutation. */
export type UpdateUserInfoInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `UserInfo` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `UserInfo` being updated. */
  userInfoPatch: UserInfoPatch;
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
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
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

/** All input for the `updateUserRoleByUserIdAndRoleId` mutation. */
export type UpdateUserRoleByUserIdAndRoleIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  roleId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
  /** An object where the defined keys will be set on the `UserRole` being updated. */
  userRolePatch: UserRolePatch;
};

/** All input for the `updateUserRole` mutation. */
export type UpdateUserRoleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** The globally unique `ID` which will identify a single `UserRole` to be updated. */
  nodeId: Scalars["ID"]["input"];
  /** An object where the defined keys will be set on the `UserRole` being updated. */
  userRolePatch: UserRolePatch;
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
  roleByRoleId?: Maybe<Role>;
  /** Reads a single `User` that is related to this `UserRole`. */
  userByUserId?: Maybe<User>;
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
  classManagementsByUserId: ClassManagementsConnection;
  /** Reads and enables pagination through a set of `ClassManagement`. */
  classManagementsByUserIdList: Array<ClassManagement>;
  /** Reads and enables pagination through a set of `Class`. */
  classesByTeacherId: ClassesConnection;
  /** Reads and enables pagination through a set of `Class`. */
  classesByTeacherIdList: Array<Class>;
  createdDate?: Maybe<Scalars["Datetime"]["output"]>;
  id: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  updatedDate?: Maybe<Scalars["Datetime"]["output"]>;
  /** Reads and enables pagination through a set of `UserAttribute`. */
  userAttributesByUserId: UserAttributesConnection;
  /** Reads and enables pagination through a set of `UserAttribute`. */
  userAttributesByUserIdList: Array<UserAttribute>;
  /** Reads a single `UserInfo` that is related to this `User`. */
  userInfoById?: Maybe<UserInfo>;
  /**
   * Reads and enables pagination through a set of `UserInfo`.
   * @deprecated Please use userInfoById instead
   */
  userInfosById: UserInfosConnection;
  /** Reads and enables pagination through a set of `UserRole`. */
  userRolesByUserId: UserRolesConnection;
  /** Reads and enables pagination through a set of `UserRole`. */
  userRolesByUserIdList: Array<UserRole>;
  username: Scalars["String"]["output"];
};

export type UserClassManagementsByUserIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassManagementCondition>;
  filter?: InputMaybe<ClassManagementFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

export type UserClassManagementsByUserIdListArgs = {
  condition?: InputMaybe<ClassManagementCondition>;
  filter?: InputMaybe<ClassManagementFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
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

export type UserClassesByTeacherIdListArgs = {
  condition?: InputMaybe<ClassCondition>;
  filter?: InputMaybe<ClassFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

export type UserUserAttributesByUserIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserAttributeCondition>;
  filter?: InputMaybe<UserAttributeFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserAttributesOrderBy>>;
};

export type UserUserAttributesByUserIdListArgs = {
  condition?: InputMaybe<UserAttributeCondition>;
  filter?: InputMaybe<UserAttributeFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
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

export type UserUserRolesByUserIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserRoleCondition>;
  filter?: InputMaybe<UserRoleFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

export type UserUserRolesByUserIdListArgs = {
  condition?: InputMaybe<UserRoleCondition>;
  filter?: InputMaybe<UserRoleFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

export type UserAttribute = Node & {
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads a single `User` that is related to this `UserAttribute`. */
  userByUserId?: Maybe<User>;
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
  nodes: Array<Maybe<UserAttribute>>;
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
  node?: Maybe<UserAttribute>;
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

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `createdDate` field. */
  createdDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Checks for equality with the object’s `updatedDate` field. */
  updatedDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `createdDate` field. */
  createdDate?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `updatedDate` field. */
  updatedDate?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `username` field. */
  username?: InputMaybe<StringFilter>;
};

export type UserInfo = Node & {
  avatarUrl?: Maybe<Scalars["String"]["output"]>;
  dateOfBirth?: Maybe<Scalars["Datetime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  /** Reads a single `User` that is related to this `UserInfo`. */
  userById?: Maybe<User>;
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

/** A connection to a list of `UserInfo` values. */
export type UserInfosConnection = {
  /** A list of edges which contains the `UserInfo` and cursor to aid in pagination. */
  edges: Array<UserInfosEdge>;
  /** A list of `UserInfo` objects. */
  nodes: Array<Maybe<UserInfo>>;
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
  node?: Maybe<UserInfo>;
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
  createdDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  id: Scalars["Int"]["input"];
  updatedDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  username: Scalars["String"]["input"];
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  createdDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  updatedDate?: InputMaybe<Scalars["Datetime"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserRole = Node & {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads a single `Role` that is related to this `UserRole`. */
  roleByRoleId?: Maybe<Role>;
  roleId: Scalars["Int"]["output"];
  /** Reads a single `User` that is related to this `UserRole`. */
  userByUserId?: Maybe<User>;
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
  nodes: Array<Maybe<UserRole>>;
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
  node?: Maybe<UserRole>;
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
  nodes: Array<Maybe<User>>;
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
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export type UsersOrderBy =
  | "CREATED_DATE_ASC"
  | "CREATED_DATE_DESC"
  | "ID_ASC"
  | "ID_DESC"
  | "NATURAL"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC"
  | "UPDATED_DATE_ASC"
  | "UPDATED_DATE_DESC"
  | "USERNAME_ASC"
  | "USERNAME_DESC";
