/* eslint-disable @typescript-eslint/ban-types */
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";

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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
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
  __typename?: "Class";
  classLevel?: Maybe<Scalars["Int"]["output"]>;
  /** Reads and enables pagination through a set of `ClassManagement`. */
  classManagementsByClassId: ClassManagementsConnection;
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
  teacher: User;

  /** Reads and enables pagination through a set of `User`. */
  usersByClassManagementClassIdAndUserId: ClassUsersByClassManagementClassIdAndUserIdManyToManyConnection;
};

export type ClassClassManagementsByClassIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassManagementCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

export type ClassUsersByClassManagementClassIdAndUserIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
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
  __typename?: "ClassManagement";
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
  __typename?: "ClassManagementsConnection";
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
  __typename?: "ClassManagementsEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `ClassManagement` at the end of the edge. */
  node: ClassManagement;
};

/** Methods to use when ordering `ClassManagement`. */
export enum ClassManagementsOrderBy {
  ClassIdAsc = "CLASS_ID_ASC",
  ClassIdDesc = "CLASS_ID_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  UserIdAsc = "USER_ID_ASC",
  UserIdDesc = "USER_ID_DESC",
}

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
  __typename?: "ClassType";
  /** Reads and enables pagination through a set of `Class`. */
  classesByClassTypeId: ClassesConnection;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads and enables pagination through a set of `User`. */
  usersByClassClassTypeIdAndTeacherId: ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnection;
};

export type ClassTypeClassesByClassTypeIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

export type ClassTypeUsersByClassClassTypeIdAndTeacherIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
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

/** A connection to a list of `User` values, with data from `Class`. */
export type ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnection = {
  __typename?: "ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnection";
  /** A list of edges which contains the `User`, info from the `Class`, and the cursor to aid in pagination. */
  edges: Array<ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `User` edge in the connection, with data from `Class`. */
export type ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdge = {
  __typename?: "ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdge";
  /** Reads and enables pagination through a set of `Class`. */
  classesByTeacherId: ClassesConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** A `User` edge in the connection, with data from `Class`. */
export type ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdgeClassesByTeacherIdArgs =
  {
    after?: InputMaybe<Scalars["Cursor"]["input"]>;
    before?: InputMaybe<Scalars["Cursor"]["input"]>;
    condition?: InputMaybe<ClassCondition>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<Array<ClassesOrderBy>>;
  };

/** A connection to a list of `ClassType` values. */
export type ClassTypesConnection = {
  __typename?: "ClassTypesConnection";
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
  __typename?: "ClassTypesEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `ClassType` at the end of the edge. */
  node: ClassType;
};

/** Methods to use when ordering `ClassType`. */
export enum ClassTypesOrderBy {
  DescriptionAsc = "DESCRIPTION_ASC",
  DescriptionDesc = "DESCRIPTION_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

/** A connection to a list of `User` values, with data from `ClassManagement`. */
export type ClassUsersByClassManagementClassIdAndUserIdManyToManyConnection = {
  __typename?: "ClassUsersByClassManagementClassIdAndUserIdManyToManyConnection";
  /** A list of edges which contains the `User`, info from the `ClassManagement`, and the cursor to aid in pagination. */
  edges: Array<ClassUsersByClassManagementClassIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `User` edge in the connection, with data from `ClassManagement`. */
export type ClassUsersByClassManagementClassIdAndUserIdManyToManyEdge = {
  __typename?: "ClassUsersByClassManagementClassIdAndUserIdManyToManyEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** A connection to a list of `Class` values. */
export type ClassesConnection = {
  __typename?: "ClassesConnection";
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
  __typename?: "ClassesEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Class` at the end of the edge. */
  node: Class;
};

/** Methods to use when ordering `Class`. */
export enum ClassesOrderBy {
  ClassLevelAsc = "CLASS_LEVEL_ASC",
  ClassLevelDesc = "CLASS_LEVEL_DESC",
  ClassTypeIdAsc = "CLASS_TYPE_ID_ASC",
  ClassTypeIdDesc = "CLASS_TYPE_ID_DESC",
  DescriptionAsc = "DESCRIPTION_ASC",
  DescriptionDesc = "DESCRIPTION_DESC",
  EndDateAsc = "END_DATE_ASC",
  EndDateDesc = "END_DATE_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  LogoUrlAsc = "LOGO_URL_ASC",
  LogoUrlDesc = "LOGO_URL_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  StartDateAsc = "START_DATE_ASC",
  StartDateDesc = "START_DATE_DESC",
  TeacherIdAsc = "TEACHER_ID_ASC",
  TeacherIdDesc = "TEACHER_ID_DESC",
}

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
  __typename?: "CreateClassManagementPayload";
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
  __typename?: "CreateClassPayload";
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
  __typename?: "CreateClassTypePayload";
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
  __typename?: "CreateRolePayload";
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
  __typename?: "CreateUserAttributePayload";
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
  __typename?: "CreateUserInfoPayload";
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
  __typename?: "CreateUserPayload";
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
  __typename?: "CreateUserRolePayload";
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
  __typename?: "DeleteClassManagementPayload";
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
  __typename?: "DeleteClassPayload";
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
  __typename?: "DeleteClassTypePayload";
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
  __typename?: "DeleteRolePayload";
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
  __typename?: "DeleteUserAttributePayload";
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
  __typename?: "DeleteUserInfoPayload";
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
  __typename?: "DeleteUserPayload";
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
  __typename?: "DeleteUserRolePayload";
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

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: "Mutation";
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
  __typename?: "PageInfo";
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
  __typename?: "Query";
  /** Reads and enables pagination through a set of `ClassManagement`. */
  allClassManagements?: Maybe<ClassManagementsConnection>;
  /** Reads and enables pagination through a set of `ClassType`. */
  allClassTypes?: Maybe<ClassTypesConnection>;
  /** Reads and enables pagination through a set of `Class`. */
  allClasses?: Maybe<ClassesConnection>;
  /** Reads and enables pagination through a set of `Role`. */
  allRoles?: Maybe<RolesConnection>;
  /** Reads and enables pagination through a set of `UserAttribute`. */
  allUserAttributes?: Maybe<UserAttributesConnection>;
  /** Reads and enables pagination through a set of `UserInfo`. */
  allUserInfos?: Maybe<UserInfosConnection>;
  /** Reads and enables pagination through a set of `UserRole`. */
  allUserRoles?: Maybe<UserRolesConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
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
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllClassTypesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassTypeCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassTypesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllClassesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllRolesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<RoleCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUserAttributesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserAttributeCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserAttributesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUserInfosArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserInfoCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserInfosOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUserRolesArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserRoleCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
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
  __typename?: "Role";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads and enables pagination through a set of `UserRole`. */
  userRolesByRoleId: UserRolesConnection;
  /** Reads and enables pagination through a set of `User`. */
  usersByUserRoleRoleIdAndUserId: RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnection;
};

export type RoleUserRolesByRoleIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserRoleCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

export type RoleUsersByUserRoleRoleIdAndUserIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
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

/** A connection to a list of `User` values, with data from `UserRole`. */
export type RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnection = {
  __typename?: "RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnection";
  /** A list of edges which contains the `User`, info from the `UserRole`, and the cursor to aid in pagination. */
  edges: Array<RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `User` edge in the connection, with data from `UserRole`. */
export type RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdge = {
  __typename?: "RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** A connection to a list of `Role` values. */
export type RolesConnection = {
  __typename?: "RolesConnection";
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
  __typename?: "RolesEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Role` at the end of the edge. */
  node: Role;
};

/** Methods to use when ordering `Role`. */
export enum RolesOrderBy {
  DescriptionAsc = "DESCRIPTION_ASC",
  DescriptionDesc = "DESCRIPTION_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

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
  __typename?: "UpdateClassManagementPayload";
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
  __typename?: "UpdateClassPayload";
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
  __typename?: "UpdateClassTypePayload";
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
  __typename?: "UpdateRolePayload";
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
  __typename?: "UpdateUserAttributePayload";
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
  __typename?: "UpdateUserInfoPayload";
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
  __typename?: "UpdateUserPayload";
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
  __typename?: "UpdateUserRolePayload";
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
  __typename?: "User";
  /** Reads and enables pagination through a set of `ClassManagement`. */
  classManagementsByUserId: ClassManagementsConnection;
  /** Reads and enables pagination through a set of `ClassType`. */
  classTypesByClassTeacherIdAndClassTypeId: UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Class`. */
  classesByClassManagementUserIdAndClassId: UserClassesByClassManagementUserIdAndClassIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Class`. */
  classesByTeacherId: ClassesConnection;
  createdDate?: Maybe<Scalars["Datetime"]["output"]>;
  id: Scalars["Int"]["output"];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]["output"];
  /** Reads and enables pagination through a set of `Role`. */
  rolesByUserRoleUserIdAndRoleId: UserRolesByUserRoleUserIdAndRoleIdManyToManyConnection;
  updatedDate?: Maybe<Scalars["Datetime"]["output"]>;
  /** Reads and enables pagination through a set of `UserAttribute`. */
  userAttributesByUserId: UserAttributesConnection;
  /** Reads a single `UserInfo` that is related to this `User`. */
  userInfoById?: Maybe<UserInfo>;
  /** Reads and enables pagination through a set of `UserRole`. */
  userRolesByUserId: UserRolesConnection;
  username: Scalars["String"]["output"];
};

export type UserClassManagementsByUserIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassManagementCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassManagementsOrderBy>>;
};

export type UserClassTypesByClassTeacherIdAndClassTypeIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassTypeCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassTypesOrderBy>>;
};

export type UserClassesByClassManagementUserIdAndClassIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

export type UserClassesByTeacherIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<ClassCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<ClassesOrderBy>>;
};

export type UserRolesByUserRoleUserIdAndRoleIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<RoleCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};

export type UserUserAttributesByUserIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserAttributeCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserAttributesOrderBy>>;
};

export type UserUserRolesByUserIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]["input"]>;
  before?: InputMaybe<Scalars["Cursor"]["input"]>;
  condition?: InputMaybe<UserRoleCondition>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRolesOrderBy>>;
};

export type UserAttribute = Node & {
  __typename?: "UserAttribute";
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
  __typename?: "UserAttributesConnection";
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
  __typename?: "UserAttributesEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `UserAttribute` at the end of the edge. */
  node: UserAttribute;
};

/** Methods to use when ordering `UserAttribute`. */
export enum UserAttributesOrderBy {
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  UserIdAsc = "USER_ID_ASC",
  UserIdDesc = "USER_ID_DESC",
  ValueAsc = "VALUE_ASC",
  ValueDesc = "VALUE_DESC",
}

/** A connection to a list of `ClassType` values, with data from `Class`. */
export type UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnection = {
  __typename?: "UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnection";
  /** A list of edges which contains the `ClassType`, info from the `Class`, and the cursor to aid in pagination. */
  edges: Array<UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdge>;
  /** A list of `ClassType` objects. */
  nodes: Array<ClassType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ClassType` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `ClassType` edge in the connection, with data from `Class`. */
export type UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdge = {
  __typename?: "UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdge";
  /** Reads and enables pagination through a set of `Class`. */
  classesByClassTypeId: ClassesConnection;
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `ClassType` at the end of the edge. */
  node: ClassType;
};

/** A `ClassType` edge in the connection, with data from `Class`. */
export type UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdgeClassesByClassTypeIdArgs =
  {
    after?: InputMaybe<Scalars["Cursor"]["input"]>;
    before?: InputMaybe<Scalars["Cursor"]["input"]>;
    condition?: InputMaybe<ClassCondition>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    orderBy?: InputMaybe<Array<ClassesOrderBy>>;
  };

/** A connection to a list of `Class` values, with data from `ClassManagement`. */
export type UserClassesByClassManagementUserIdAndClassIdManyToManyConnection = {
  __typename?: "UserClassesByClassManagementUserIdAndClassIdManyToManyConnection";
  /** A list of edges which contains the `Class`, info from the `ClassManagement`, and the cursor to aid in pagination. */
  edges: Array<UserClassesByClassManagementUserIdAndClassIdManyToManyEdge>;
  /** A list of `Class` objects. */
  nodes: Array<Class>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Class` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Class` edge in the connection, with data from `ClassManagement`. */
export type UserClassesByClassManagementUserIdAndClassIdManyToManyEdge = {
  __typename?: "UserClassesByClassManagementUserIdAndClassIdManyToManyEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Class` at the end of the edge. */
  node: Class;
};

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

export type UserInfo = Node & {
  __typename?: "UserInfo";
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
  __typename?: "UserInfosConnection";
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
  __typename?: "UserInfosEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `UserInfo` at the end of the edge. */
  node: UserInfo;
};

/** Methods to use when ordering `UserInfo`. */
export enum UserInfosOrderBy {
  AvatarUrlAsc = "AVATAR_URL_ASC",
  AvatarUrlDesc = "AVATAR_URL_DESC",
  DateOfBirthAsc = "DATE_OF_BIRTH_ASC",
  DateOfBirthDesc = "DATE_OF_BIRTH_DESC",
  EmailAsc = "EMAIL_ASC",
  EmailDesc = "EMAIL_DESC",
  FirstNameAsc = "FIRST_NAME_ASC",
  FirstNameDesc = "FIRST_NAME_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  LastNameAsc = "LAST_NAME_ASC",
  LastNameDesc = "LAST_NAME_DESC",
  Natural = "NATURAL",
  PhoneNumberAsc = "PHONE_NUMBER_ASC",
  PhoneNumberDesc = "PHONE_NUMBER_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

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
  __typename?: "UserRole";
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

/** A connection to a list of `Role` values, with data from `UserRole`. */
export type UserRolesByUserRoleUserIdAndRoleIdManyToManyConnection = {
  __typename?: "UserRolesByUserRoleUserIdAndRoleIdManyToManyConnection";
  /** A list of edges which contains the `Role`, info from the `UserRole`, and the cursor to aid in pagination. */
  edges: Array<UserRolesByUserRoleUserIdAndRoleIdManyToManyEdge>;
  /** A list of `Role` objects. */
  nodes: Array<Role>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Role` you could get from the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A `Role` edge in the connection, with data from `UserRole`. */
export type UserRolesByUserRoleUserIdAndRoleIdManyToManyEdge = {
  __typename?: "UserRolesByUserRoleUserIdAndRoleIdManyToManyEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `Role` at the end of the edge. */
  node: Role;
};

/** A connection to a list of `UserRole` values. */
export type UserRolesConnection = {
  __typename?: "UserRolesConnection";
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
  __typename?: "UserRolesEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `UserRole` at the end of the edge. */
  node: UserRole;
};

/** Methods to use when ordering `UserRole`. */
export enum UserRolesOrderBy {
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  RoleIdAsc = "ROLE_ID_ASC",
  RoleIdDesc = "ROLE_ID_DESC",
  UserIdAsc = "USER_ID_ASC",
  UserIdDesc = "USER_ID_DESC",
}

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: "UsersConnection";
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
  __typename?: "UsersEdge";
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]["output"]>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  CreatedDateAsc = "CREATED_DATE_ASC",
  CreatedDateDesc = "CREATED_DATE_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  UpdatedDateAsc = "UPDATED_DATE_ASC",
  UpdatedDateDesc = "UPDATED_DATE_DESC",
  UsernameAsc = "USERNAME_ASC",
  UsernameDesc = "USERNAME_DESC",
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
// eslint-disable-next-line @typescript-eslint/ban-types
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  Node:
    | Class
    | ClassManagement
    | ClassType
    | Query
    | Role
    | User
    | UserAttribute
    | UserInfo
    | UserRole;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Class: ResolverTypeWrapper<Class>;
  ClassCondition: ClassCondition;
  ClassInput: ClassInput;
  ClassManagement: ResolverTypeWrapper<ClassManagement>;
  ClassManagementCondition: ClassManagementCondition;
  ClassManagementInput: ClassManagementInput;
  ClassManagementPatch: ClassManagementPatch;
  ClassManagementsConnection: ResolverTypeWrapper<ClassManagementsConnection>;
  ClassManagementsEdge: ResolverTypeWrapper<ClassManagementsEdge>;
  ClassManagementsOrderBy: ClassManagementsOrderBy;
  ClassPatch: ClassPatch;
  ClassType: ResolverTypeWrapper<ClassType>;
  ClassTypeCondition: ClassTypeCondition;
  ClassTypeInput: ClassTypeInput;
  ClassTypePatch: ClassTypePatch;
  ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnection: ResolverTypeWrapper<ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnection>;
  ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdge: ResolverTypeWrapper<ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdge>;
  ClassTypesConnection: ResolverTypeWrapper<ClassTypesConnection>;
  ClassTypesEdge: ResolverTypeWrapper<ClassTypesEdge>;
  ClassTypesOrderBy: ClassTypesOrderBy;
  ClassUsersByClassManagementClassIdAndUserIdManyToManyConnection: ResolverTypeWrapper<ClassUsersByClassManagementClassIdAndUserIdManyToManyConnection>;
  ClassUsersByClassManagementClassIdAndUserIdManyToManyEdge: ResolverTypeWrapper<ClassUsersByClassManagementClassIdAndUserIdManyToManyEdge>;
  ClassesConnection: ResolverTypeWrapper<ClassesConnection>;
  ClassesEdge: ResolverTypeWrapper<ClassesEdge>;
  ClassesOrderBy: ClassesOrderBy;
  CreateClassInput: CreateClassInput;
  CreateClassManagementInput: CreateClassManagementInput;
  CreateClassManagementPayload: ResolverTypeWrapper<CreateClassManagementPayload>;
  CreateClassPayload: ResolverTypeWrapper<CreateClassPayload>;
  CreateClassTypeInput: CreateClassTypeInput;
  CreateClassTypePayload: ResolverTypeWrapper<CreateClassTypePayload>;
  CreateRoleInput: CreateRoleInput;
  CreateRolePayload: ResolverTypeWrapper<CreateRolePayload>;
  CreateUserAttributeInput: CreateUserAttributeInput;
  CreateUserAttributePayload: ResolverTypeWrapper<CreateUserAttributePayload>;
  CreateUserInfoInput: CreateUserInfoInput;
  CreateUserInfoPayload: ResolverTypeWrapper<CreateUserInfoPayload>;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  CreateUserRoleInput: CreateUserRoleInput;
  CreateUserRolePayload: ResolverTypeWrapper<CreateUserRolePayload>;
  Cursor: ResolverTypeWrapper<Scalars["Cursor"]["output"]>;
  Datetime: ResolverTypeWrapper<Scalars["Datetime"]["output"]>;
  DeleteClassByIdInput: DeleteClassByIdInput;
  DeleteClassInput: DeleteClassInput;
  DeleteClassManagementByClassIdAndUserIdInput: DeleteClassManagementByClassIdAndUserIdInput;
  DeleteClassManagementInput: DeleteClassManagementInput;
  DeleteClassManagementPayload: ResolverTypeWrapper<DeleteClassManagementPayload>;
  DeleteClassPayload: ResolverTypeWrapper<DeleteClassPayload>;
  DeleteClassTypeByIdInput: DeleteClassTypeByIdInput;
  DeleteClassTypeInput: DeleteClassTypeInput;
  DeleteClassTypePayload: ResolverTypeWrapper<DeleteClassTypePayload>;
  DeleteRoleByIdInput: DeleteRoleByIdInput;
  DeleteRoleByNameInput: DeleteRoleByNameInput;
  DeleteRoleInput: DeleteRoleInput;
  DeleteRolePayload: ResolverTypeWrapper<DeleteRolePayload>;
  DeleteUserAttributeByIdInput: DeleteUserAttributeByIdInput;
  DeleteUserAttributeByNameInput: DeleteUserAttributeByNameInput;
  DeleteUserAttributeInput: DeleteUserAttributeInput;
  DeleteUserAttributePayload: ResolverTypeWrapper<DeleteUserAttributePayload>;
  DeleteUserByIdInput: DeleteUserByIdInput;
  DeleteUserByUsernameInput: DeleteUserByUsernameInput;
  DeleteUserInfoByEmailInput: DeleteUserInfoByEmailInput;
  DeleteUserInfoByIdInput: DeleteUserInfoByIdInput;
  DeleteUserInfoByPhoneNumberInput: DeleteUserInfoByPhoneNumberInput;
  DeleteUserInfoInput: DeleteUserInfoInput;
  DeleteUserInfoPayload: ResolverTypeWrapper<DeleteUserInfoPayload>;
  DeleteUserInput: DeleteUserInput;
  DeleteUserPayload: ResolverTypeWrapper<DeleteUserPayload>;
  DeleteUserRoleByUserIdAndRoleIdInput: DeleteUserRoleByUserIdAndRoleIdInput;
  DeleteUserRoleInput: DeleteUserRoleInput;
  DeleteUserRolePayload: ResolverTypeWrapper<DeleteUserRolePayload>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>["Node"]>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  Role: ResolverTypeWrapper<Role>;
  RoleCondition: RoleCondition;
  RoleInput: RoleInput;
  RolePatch: RolePatch;
  RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnection: ResolverTypeWrapper<RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnection>;
  RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdge: ResolverTypeWrapper<RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdge>;
  RolesConnection: ResolverTypeWrapper<RolesConnection>;
  RolesEdge: ResolverTypeWrapper<RolesEdge>;
  RolesOrderBy: RolesOrderBy;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  UpdateClassByIdInput: UpdateClassByIdInput;
  UpdateClassInput: UpdateClassInput;
  UpdateClassManagementByClassIdAndUserIdInput: UpdateClassManagementByClassIdAndUserIdInput;
  UpdateClassManagementInput: UpdateClassManagementInput;
  UpdateClassManagementPayload: ResolverTypeWrapper<UpdateClassManagementPayload>;
  UpdateClassPayload: ResolverTypeWrapper<UpdateClassPayload>;
  UpdateClassTypeByIdInput: UpdateClassTypeByIdInput;
  UpdateClassTypeInput: UpdateClassTypeInput;
  UpdateClassTypePayload: ResolverTypeWrapper<UpdateClassTypePayload>;
  UpdateRoleByIdInput: UpdateRoleByIdInput;
  UpdateRoleByNameInput: UpdateRoleByNameInput;
  UpdateRoleInput: UpdateRoleInput;
  UpdateRolePayload: ResolverTypeWrapper<UpdateRolePayload>;
  UpdateUserAttributeByIdInput: UpdateUserAttributeByIdInput;
  UpdateUserAttributeByNameInput: UpdateUserAttributeByNameInput;
  UpdateUserAttributeInput: UpdateUserAttributeInput;
  UpdateUserAttributePayload: ResolverTypeWrapper<UpdateUserAttributePayload>;
  UpdateUserByIdInput: UpdateUserByIdInput;
  UpdateUserByUsernameInput: UpdateUserByUsernameInput;
  UpdateUserInfoByEmailInput: UpdateUserInfoByEmailInput;
  UpdateUserInfoByIdInput: UpdateUserInfoByIdInput;
  UpdateUserInfoByPhoneNumberInput: UpdateUserInfoByPhoneNumberInput;
  UpdateUserInfoInput: UpdateUserInfoInput;
  UpdateUserInfoPayload: ResolverTypeWrapper<UpdateUserInfoPayload>;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: ResolverTypeWrapper<UpdateUserPayload>;
  UpdateUserRoleByUserIdAndRoleIdInput: UpdateUserRoleByUserIdAndRoleIdInput;
  UpdateUserRoleInput: UpdateUserRoleInput;
  UpdateUserRolePayload: ResolverTypeWrapper<UpdateUserRolePayload>;
  User: ResolverTypeWrapper<User>;
  UserAttribute: ResolverTypeWrapper<UserAttribute>;
  UserAttributeCondition: UserAttributeCondition;
  UserAttributeInput: UserAttributeInput;
  UserAttributePatch: UserAttributePatch;
  UserAttributesConnection: ResolverTypeWrapper<UserAttributesConnection>;
  UserAttributesEdge: ResolverTypeWrapper<UserAttributesEdge>;
  UserAttributesOrderBy: UserAttributesOrderBy;
  UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnection: ResolverTypeWrapper<UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnection>;
  UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdge: ResolverTypeWrapper<UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdge>;
  UserClassesByClassManagementUserIdAndClassIdManyToManyConnection: ResolverTypeWrapper<UserClassesByClassManagementUserIdAndClassIdManyToManyConnection>;
  UserClassesByClassManagementUserIdAndClassIdManyToManyEdge: ResolverTypeWrapper<UserClassesByClassManagementUserIdAndClassIdManyToManyEdge>;
  UserCondition: UserCondition;
  UserInfo: ResolverTypeWrapper<UserInfo>;
  UserInfoCondition: UserInfoCondition;
  UserInfoInput: UserInfoInput;
  UserInfoPatch: UserInfoPatch;
  UserInfosConnection: ResolverTypeWrapper<UserInfosConnection>;
  UserInfosEdge: ResolverTypeWrapper<UserInfosEdge>;
  UserInfosOrderBy: UserInfosOrderBy;
  UserInput: UserInput;
  UserPatch: UserPatch;
  UserRole: ResolverTypeWrapper<UserRole>;
  UserRoleCondition: UserRoleCondition;
  UserRoleInput: UserRoleInput;
  UserRolePatch: UserRolePatch;
  UserRolesByUserRoleUserIdAndRoleIdManyToManyConnection: ResolverTypeWrapper<UserRolesByUserRoleUserIdAndRoleIdManyToManyConnection>;
  UserRolesByUserRoleUserIdAndRoleIdManyToManyEdge: ResolverTypeWrapper<UserRolesByUserRoleUserIdAndRoleIdManyToManyEdge>;
  UserRolesConnection: ResolverTypeWrapper<UserRolesConnection>;
  UserRolesEdge: ResolverTypeWrapper<UserRolesEdge>;
  UserRolesOrderBy: UserRolesOrderBy;
  UsersConnection: ResolverTypeWrapper<UsersConnection>;
  UsersEdge: ResolverTypeWrapper<UsersEdge>;
  UsersOrderBy: UsersOrderBy;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  Class: Class;
  ClassCondition: ClassCondition;
  ClassInput: ClassInput;
  ClassManagement: ClassManagement;
  ClassManagementCondition: ClassManagementCondition;
  ClassManagementInput: ClassManagementInput;
  ClassManagementPatch: ClassManagementPatch;
  ClassManagementsConnection: ClassManagementsConnection;
  ClassManagementsEdge: ClassManagementsEdge;
  ClassPatch: ClassPatch;
  ClassType: ClassType;
  ClassTypeCondition: ClassTypeCondition;
  ClassTypeInput: ClassTypeInput;
  ClassTypePatch: ClassTypePatch;
  ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnection: ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnection;
  ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdge: ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdge;
  ClassTypesConnection: ClassTypesConnection;
  ClassTypesEdge: ClassTypesEdge;
  ClassUsersByClassManagementClassIdAndUserIdManyToManyConnection: ClassUsersByClassManagementClassIdAndUserIdManyToManyConnection;
  ClassUsersByClassManagementClassIdAndUserIdManyToManyEdge: ClassUsersByClassManagementClassIdAndUserIdManyToManyEdge;
  ClassesConnection: ClassesConnection;
  ClassesEdge: ClassesEdge;
  CreateClassInput: CreateClassInput;
  CreateClassManagementInput: CreateClassManagementInput;
  CreateClassManagementPayload: CreateClassManagementPayload;
  CreateClassPayload: CreateClassPayload;
  CreateClassTypeInput: CreateClassTypeInput;
  CreateClassTypePayload: CreateClassTypePayload;
  CreateRoleInput: CreateRoleInput;
  CreateRolePayload: CreateRolePayload;
  CreateUserAttributeInput: CreateUserAttributeInput;
  CreateUserAttributePayload: CreateUserAttributePayload;
  CreateUserInfoInput: CreateUserInfoInput;
  CreateUserInfoPayload: CreateUserInfoPayload;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: CreateUserPayload;
  CreateUserRoleInput: CreateUserRoleInput;
  CreateUserRolePayload: CreateUserRolePayload;
  Cursor: Scalars["Cursor"]["output"];
  Datetime: Scalars["Datetime"]["output"];
  DeleteClassByIdInput: DeleteClassByIdInput;
  DeleteClassInput: DeleteClassInput;
  DeleteClassManagementByClassIdAndUserIdInput: DeleteClassManagementByClassIdAndUserIdInput;
  DeleteClassManagementInput: DeleteClassManagementInput;
  DeleteClassManagementPayload: DeleteClassManagementPayload;
  DeleteClassPayload: DeleteClassPayload;
  DeleteClassTypeByIdInput: DeleteClassTypeByIdInput;
  DeleteClassTypeInput: DeleteClassTypeInput;
  DeleteClassTypePayload: DeleteClassTypePayload;
  DeleteRoleByIdInput: DeleteRoleByIdInput;
  DeleteRoleByNameInput: DeleteRoleByNameInput;
  DeleteRoleInput: DeleteRoleInput;
  DeleteRolePayload: DeleteRolePayload;
  DeleteUserAttributeByIdInput: DeleteUserAttributeByIdInput;
  DeleteUserAttributeByNameInput: DeleteUserAttributeByNameInput;
  DeleteUserAttributeInput: DeleteUserAttributeInput;
  DeleteUserAttributePayload: DeleteUserAttributePayload;
  DeleteUserByIdInput: DeleteUserByIdInput;
  DeleteUserByUsernameInput: DeleteUserByUsernameInput;
  DeleteUserInfoByEmailInput: DeleteUserInfoByEmailInput;
  DeleteUserInfoByIdInput: DeleteUserInfoByIdInput;
  DeleteUserInfoByPhoneNumberInput: DeleteUserInfoByPhoneNumberInput;
  DeleteUserInfoInput: DeleteUserInfoInput;
  DeleteUserInfoPayload: DeleteUserInfoPayload;
  DeleteUserInput: DeleteUserInput;
  DeleteUserPayload: DeleteUserPayload;
  DeleteUserRoleByUserIdAndRoleIdInput: DeleteUserRoleByUserIdAndRoleIdInput;
  DeleteUserRoleInput: DeleteUserRoleInput;
  DeleteUserRolePayload: DeleteUserRolePayload;
  ID: Scalars["ID"]["output"];
  Int: Scalars["Int"]["output"];
  Mutation: {};
  Node: ResolversInterfaceTypes<ResolversParentTypes>["Node"];
  PageInfo: PageInfo;
  Query: {};
  Role: Role;
  RoleCondition: RoleCondition;
  RoleInput: RoleInput;
  RolePatch: RolePatch;
  RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnection: RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnection;
  RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdge: RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdge;
  RolesConnection: RolesConnection;
  RolesEdge: RolesEdge;
  String: Scalars["String"]["output"];
  UpdateClassByIdInput: UpdateClassByIdInput;
  UpdateClassInput: UpdateClassInput;
  UpdateClassManagementByClassIdAndUserIdInput: UpdateClassManagementByClassIdAndUserIdInput;
  UpdateClassManagementInput: UpdateClassManagementInput;
  UpdateClassManagementPayload: UpdateClassManagementPayload;
  UpdateClassPayload: UpdateClassPayload;
  UpdateClassTypeByIdInput: UpdateClassTypeByIdInput;
  UpdateClassTypeInput: UpdateClassTypeInput;
  UpdateClassTypePayload: UpdateClassTypePayload;
  UpdateRoleByIdInput: UpdateRoleByIdInput;
  UpdateRoleByNameInput: UpdateRoleByNameInput;
  UpdateRoleInput: UpdateRoleInput;
  UpdateRolePayload: UpdateRolePayload;
  UpdateUserAttributeByIdInput: UpdateUserAttributeByIdInput;
  UpdateUserAttributeByNameInput: UpdateUserAttributeByNameInput;
  UpdateUserAttributeInput: UpdateUserAttributeInput;
  UpdateUserAttributePayload: UpdateUserAttributePayload;
  UpdateUserByIdInput: UpdateUserByIdInput;
  UpdateUserByUsernameInput: UpdateUserByUsernameInput;
  UpdateUserInfoByEmailInput: UpdateUserInfoByEmailInput;
  UpdateUserInfoByIdInput: UpdateUserInfoByIdInput;
  UpdateUserInfoByPhoneNumberInput: UpdateUserInfoByPhoneNumberInput;
  UpdateUserInfoInput: UpdateUserInfoInput;
  UpdateUserInfoPayload: UpdateUserInfoPayload;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: UpdateUserPayload;
  UpdateUserRoleByUserIdAndRoleIdInput: UpdateUserRoleByUserIdAndRoleIdInput;
  UpdateUserRoleInput: UpdateUserRoleInput;
  UpdateUserRolePayload: UpdateUserRolePayload;
  User: User;
  UserAttribute: UserAttribute;
  UserAttributeCondition: UserAttributeCondition;
  UserAttributeInput: UserAttributeInput;
  UserAttributePatch: UserAttributePatch;
  UserAttributesConnection: UserAttributesConnection;
  UserAttributesEdge: UserAttributesEdge;
  UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnection: UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnection;
  UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdge: UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdge;
  UserClassesByClassManagementUserIdAndClassIdManyToManyConnection: UserClassesByClassManagementUserIdAndClassIdManyToManyConnection;
  UserClassesByClassManagementUserIdAndClassIdManyToManyEdge: UserClassesByClassManagementUserIdAndClassIdManyToManyEdge;
  UserCondition: UserCondition;
  UserInfo: UserInfo;
  UserInfoCondition: UserInfoCondition;
  UserInfoInput: UserInfoInput;
  UserInfoPatch: UserInfoPatch;
  UserInfosConnection: UserInfosConnection;
  UserInfosEdge: UserInfosEdge;
  UserInput: UserInput;
  UserPatch: UserPatch;
  UserRole: UserRole;
  UserRoleCondition: UserRoleCondition;
  UserRoleInput: UserRoleInput;
  UserRolePatch: UserRolePatch;
  UserRolesByUserRoleUserIdAndRoleIdManyToManyConnection: UserRolesByUserRoleUserIdAndRoleIdManyToManyConnection;
  UserRolesByUserRoleUserIdAndRoleIdManyToManyEdge: UserRolesByUserRoleUserIdAndRoleIdManyToManyEdge;
  UserRolesConnection: UserRolesConnection;
  UserRolesEdge: UserRolesEdge;
  UsersConnection: UsersConnection;
  UsersEdge: UsersEdge;
};

export type ClassResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Class"] = ResolversParentTypes["Class"]
> = {
  classLevel?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  classManagementsByClassId?: Resolver<
    ResolversTypes["ClassManagementsConnection"],
    ParentType,
    ContextType,
    RequireFields<ClassClassManagementsByClassIdArgs, "orderBy">
  >;
  classTypeByClassTypeId?: Resolver<
    Maybe<ResolversTypes["ClassType"]>,
    ParentType,
    ContextType
  >;
  classTypeId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  endDate?: Resolver<
    Maybe<ResolversTypes["Datetime"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  logoUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  startDate?: Resolver<
    Maybe<ResolversTypes["Datetime"]>,
    ParentType,
    ContextType
  >;
  teacherId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  userByTeacherId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  usersByClassManagementClassIdAndUserId?: Resolver<
    ResolversTypes["ClassUsersByClassManagementClassIdAndUserIdManyToManyConnection"],
    ParentType,
    ContextType,
    RequireFields<ClassUsersByClassManagementClassIdAndUserIdArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassManagementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClassManagement"] = ResolversParentTypes["ClassManagement"]
> = {
  classByClassId?: Resolver<
    Maybe<ResolversTypes["Class"]>,
    ParentType,
    ContextType
  >;
  classId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  userByUserId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassManagementsConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClassManagementsConnection"] = ResolversParentTypes["ClassManagementsConnection"]
> = {
  edges?: Resolver<
    Array<ResolversTypes["ClassManagementsEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["ClassManagement"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassManagementsEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClassManagementsEdge"] = ResolversParentTypes["ClassManagementsEdge"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["ClassManagement"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClassType"] = ResolversParentTypes["ClassType"]
> = {
  classesByClassTypeId?: Resolver<
    ResolversTypes["ClassesConnection"],
    ParentType,
    ContextType,
    RequireFields<ClassTypeClassesByClassTypeIdArgs, "orderBy">
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  usersByClassClassTypeIdAndTeacherId?: Resolver<
    ResolversTypes["ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnection"],
    ParentType,
    ContextType,
    RequireFields<ClassTypeUsersByClassClassTypeIdAndTeacherIdArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnection"] = ResolversParentTypes["ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnection"]
> = {
  edges?: Resolver<
    Array<
      ResolversTypes["ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdge"]
    >,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdge"] = ResolversParentTypes["ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdge"]
> = {
  classesByTeacherId?: Resolver<
    ResolversTypes["ClassesConnection"],
    ParentType,
    ContextType,
    RequireFields<
      ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdgeClassesByTeacherIdArgs,
      "orderBy"
    >
  >;
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassTypesConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClassTypesConnection"] = ResolversParentTypes["ClassTypesConnection"]
> = {
  edges?: Resolver<
    Array<ResolversTypes["ClassTypesEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["ClassType"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassTypesEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClassTypesEdge"] = ResolversParentTypes["ClassTypesEdge"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["ClassType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassUsersByClassManagementClassIdAndUserIdManyToManyConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClassUsersByClassManagementClassIdAndUserIdManyToManyConnection"] = ResolversParentTypes["ClassUsersByClassManagementClassIdAndUserIdManyToManyConnection"]
> = {
  edges?: Resolver<
    Array<
      ResolversTypes["ClassUsersByClassManagementClassIdAndUserIdManyToManyEdge"]
    >,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassUsersByClassManagementClassIdAndUserIdManyToManyEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClassUsersByClassManagementClassIdAndUserIdManyToManyEdge"] = ResolversParentTypes["ClassUsersByClassManagementClassIdAndUserIdManyToManyEdge"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassesConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClassesConnection"] = ResolversParentTypes["ClassesConnection"]
> = {
  edges?: Resolver<
    Array<ResolversTypes["ClassesEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Class"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassesEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ClassesEdge"] = ResolversParentTypes["ClassesEdge"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Class"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateClassManagementPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateClassManagementPayload"] = ResolversParentTypes["CreateClassManagementPayload"]
> = {
  classByClassId?: Resolver<
    Maybe<ResolversTypes["Class"]>,
    ParentType,
    ContextType
  >;
  classManagement?: Resolver<
    Maybe<ResolversTypes["ClassManagement"]>,
    ParentType,
    ContextType
  >;
  classManagementEdge?: Resolver<
    Maybe<ResolversTypes["ClassManagementsEdge"]>,
    ParentType,
    ContextType,
    RequireFields<
      CreateClassManagementPayloadClassManagementEdgeArgs,
      "orderBy"
    >
  >;
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  userByUserId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateClassPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateClassPayload"] = ResolversParentTypes["CreateClassPayload"]
> = {
  class?: Resolver<Maybe<ResolversTypes["Class"]>, ParentType, ContextType>;
  classEdge?: Resolver<
    Maybe<ResolversTypes["ClassesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<CreateClassPayloadClassEdgeArgs, "orderBy">
  >;
  classTypeByClassTypeId?: Resolver<
    Maybe<ResolversTypes["ClassType"]>,
    ParentType,
    ContextType
  >;
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  userByTeacherId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateClassTypePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateClassTypePayload"] = ResolversParentTypes["CreateClassTypePayload"]
> = {
  classType?: Resolver<
    Maybe<ResolversTypes["ClassType"]>,
    ParentType,
    ContextType
  >;
  classTypeEdge?: Resolver<
    Maybe<ResolversTypes["ClassTypesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<CreateClassTypePayloadClassTypeEdgeArgs, "orderBy">
  >;
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateRolePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateRolePayload"] = ResolversParentTypes["CreateRolePayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["Role"]>, ParentType, ContextType>;
  roleEdge?: Resolver<
    Maybe<ResolversTypes["RolesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<CreateRolePayloadRoleEdgeArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserAttributePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateUserAttributePayload"] = ResolversParentTypes["CreateUserAttributePayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  userAttribute?: Resolver<
    Maybe<ResolversTypes["UserAttribute"]>,
    ParentType,
    ContextType
  >;
  userAttributeEdge?: Resolver<
    Maybe<ResolversTypes["UserAttributesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<CreateUserAttributePayloadUserAttributeEdgeArgs, "orderBy">
  >;
  userByUserId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserInfoPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateUserInfoPayload"] = ResolversParentTypes["CreateUserInfoPayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  userById?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userInfo?: Resolver<
    Maybe<ResolversTypes["UserInfo"]>,
    ParentType,
    ContextType
  >;
  userInfoEdge?: Resolver<
    Maybe<ResolversTypes["UserInfosEdge"]>,
    ParentType,
    ContextType,
    RequireFields<CreateUserInfoPayloadUserInfoEdgeArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateUserPayload"] = ResolversParentTypes["CreateUserPayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userEdge?: Resolver<
    Maybe<ResolversTypes["UsersEdge"]>,
    ParentType,
    ContextType,
    RequireFields<CreateUserPayloadUserEdgeArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserRolePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CreateUserRolePayload"] = ResolversParentTypes["CreateUserRolePayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  roleByRoleId?: Resolver<
    Maybe<ResolversTypes["Role"]>,
    ParentType,
    ContextType
  >;
  userByUserId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  userRole?: Resolver<
    Maybe<ResolversTypes["UserRole"]>,
    ParentType,
    ContextType
  >;
  userRoleEdge?: Resolver<
    Maybe<ResolversTypes["UserRolesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<CreateUserRolePayloadUserRoleEdgeArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CursorScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Cursor"], any> {
  name: "Cursor";
}

export interface DatetimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Datetime"], any> {
  name: "Datetime";
}

export type DeleteClassManagementPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeleteClassManagementPayload"] = ResolversParentTypes["DeleteClassManagementPayload"]
> = {
  classByClassId?: Resolver<
    Maybe<ResolversTypes["Class"]>,
    ParentType,
    ContextType
  >;
  classManagement?: Resolver<
    Maybe<ResolversTypes["ClassManagement"]>,
    ParentType,
    ContextType
  >;
  classManagementEdge?: Resolver<
    Maybe<ResolversTypes["ClassManagementsEdge"]>,
    ParentType,
    ContextType,
    RequireFields<
      DeleteClassManagementPayloadClassManagementEdgeArgs,
      "orderBy"
    >
  >;
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  deletedClassManagementId?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  userByUserId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteClassPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeleteClassPayload"] = ResolversParentTypes["DeleteClassPayload"]
> = {
  class?: Resolver<Maybe<ResolversTypes["Class"]>, ParentType, ContextType>;
  classEdge?: Resolver<
    Maybe<ResolversTypes["ClassesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<DeleteClassPayloadClassEdgeArgs, "orderBy">
  >;
  classTypeByClassTypeId?: Resolver<
    Maybe<ResolversTypes["ClassType"]>,
    ParentType,
    ContextType
  >;
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  deletedClassId?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  userByTeacherId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteClassTypePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeleteClassTypePayload"] = ResolversParentTypes["DeleteClassTypePayload"]
> = {
  classType?: Resolver<
    Maybe<ResolversTypes["ClassType"]>,
    ParentType,
    ContextType
  >;
  classTypeEdge?: Resolver<
    Maybe<ResolversTypes["ClassTypesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<DeleteClassTypePayloadClassTypeEdgeArgs, "orderBy">
  >;
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  deletedClassTypeId?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteRolePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeleteRolePayload"] = ResolversParentTypes["DeleteRolePayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  deletedRoleId?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["Role"]>, ParentType, ContextType>;
  roleEdge?: Resolver<
    Maybe<ResolversTypes["RolesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<DeleteRolePayloadRoleEdgeArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserAttributePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeleteUserAttributePayload"] = ResolversParentTypes["DeleteUserAttributePayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  deletedUserAttributeId?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  userAttribute?: Resolver<
    Maybe<ResolversTypes["UserAttribute"]>,
    ParentType,
    ContextType
  >;
  userAttributeEdge?: Resolver<
    Maybe<ResolversTypes["UserAttributesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<DeleteUserAttributePayloadUserAttributeEdgeArgs, "orderBy">
  >;
  userByUserId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserInfoPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeleteUserInfoPayload"] = ResolversParentTypes["DeleteUserInfoPayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  deletedUserInfoId?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  userById?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userInfo?: Resolver<
    Maybe<ResolversTypes["UserInfo"]>,
    ParentType,
    ContextType
  >;
  userInfoEdge?: Resolver<
    Maybe<ResolversTypes["UserInfosEdge"]>,
    ParentType,
    ContextType,
    RequireFields<DeleteUserInfoPayloadUserInfoEdgeArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeleteUserPayload"] = ResolversParentTypes["DeleteUserPayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  deletedUserId?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userEdge?: Resolver<
    Maybe<ResolversTypes["UsersEdge"]>,
    ParentType,
    ContextType,
    RequireFields<DeleteUserPayloadUserEdgeArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserRolePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeleteUserRolePayload"] = ResolversParentTypes["DeleteUserRolePayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  deletedUserRoleId?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  roleByRoleId?: Resolver<
    Maybe<ResolversTypes["Role"]>,
    ParentType,
    ContextType
  >;
  userByUserId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  userRole?: Resolver<
    Maybe<ResolversTypes["UserRole"]>,
    ParentType,
    ContextType
  >;
  userRoleEdge?: Resolver<
    Maybe<ResolversTypes["UserRolesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<DeleteUserRolePayloadUserRoleEdgeArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createClass?: Resolver<
    Maybe<ResolversTypes["CreateClassPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateClassArgs, "input">
  >;
  createClassManagement?: Resolver<
    Maybe<ResolversTypes["CreateClassManagementPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateClassManagementArgs, "input">
  >;
  createClassType?: Resolver<
    Maybe<ResolversTypes["CreateClassTypePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateClassTypeArgs, "input">
  >;
  createRole?: Resolver<
    Maybe<ResolversTypes["CreateRolePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateRoleArgs, "input">
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes["CreateUserPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "input">
  >;
  createUserAttribute?: Resolver<
    Maybe<ResolversTypes["CreateUserAttributePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserAttributeArgs, "input">
  >;
  createUserInfo?: Resolver<
    Maybe<ResolversTypes["CreateUserInfoPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserInfoArgs, "input">
  >;
  createUserRole?: Resolver<
    Maybe<ResolversTypes["CreateUserRolePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserRoleArgs, "input">
  >;
  deleteClass?: Resolver<
    Maybe<ResolversTypes["DeleteClassPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteClassArgs, "input">
  >;
  deleteClassById?: Resolver<
    Maybe<ResolversTypes["DeleteClassPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteClassByIdArgs, "input">
  >;
  deleteClassManagement?: Resolver<
    Maybe<ResolversTypes["DeleteClassManagementPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteClassManagementArgs, "input">
  >;
  deleteClassManagementByClassIdAndUserId?: Resolver<
    Maybe<ResolversTypes["DeleteClassManagementPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteClassManagementByClassIdAndUserIdArgs, "input">
  >;
  deleteClassType?: Resolver<
    Maybe<ResolversTypes["DeleteClassTypePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteClassTypeArgs, "input">
  >;
  deleteClassTypeById?: Resolver<
    Maybe<ResolversTypes["DeleteClassTypePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteClassTypeByIdArgs, "input">
  >;
  deleteRole?: Resolver<
    Maybe<ResolversTypes["DeleteRolePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteRoleArgs, "input">
  >;
  deleteRoleById?: Resolver<
    Maybe<ResolversTypes["DeleteRolePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteRoleByIdArgs, "input">
  >;
  deleteRoleByName?: Resolver<
    Maybe<ResolversTypes["DeleteRolePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteRoleByNameArgs, "input">
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes["DeleteUserPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, "input">
  >;
  deleteUserAttribute?: Resolver<
    Maybe<ResolversTypes["DeleteUserAttributePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserAttributeArgs, "input">
  >;
  deleteUserAttributeById?: Resolver<
    Maybe<ResolversTypes["DeleteUserAttributePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserAttributeByIdArgs, "input">
  >;
  deleteUserAttributeByName?: Resolver<
    Maybe<ResolversTypes["DeleteUserAttributePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserAttributeByNameArgs, "input">
  >;
  deleteUserById?: Resolver<
    Maybe<ResolversTypes["DeleteUserPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserByIdArgs, "input">
  >;
  deleteUserByUsername?: Resolver<
    Maybe<ResolversTypes["DeleteUserPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserByUsernameArgs, "input">
  >;
  deleteUserInfo?: Resolver<
    Maybe<ResolversTypes["DeleteUserInfoPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserInfoArgs, "input">
  >;
  deleteUserInfoByEmail?: Resolver<
    Maybe<ResolversTypes["DeleteUserInfoPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserInfoByEmailArgs, "input">
  >;
  deleteUserInfoById?: Resolver<
    Maybe<ResolversTypes["DeleteUserInfoPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserInfoByIdArgs, "input">
  >;
  deleteUserInfoByPhoneNumber?: Resolver<
    Maybe<ResolversTypes["DeleteUserInfoPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserInfoByPhoneNumberArgs, "input">
  >;
  deleteUserRole?: Resolver<
    Maybe<ResolversTypes["DeleteUserRolePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserRoleArgs, "input">
  >;
  deleteUserRoleByUserIdAndRoleId?: Resolver<
    Maybe<ResolversTypes["DeleteUserRolePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserRoleByUserIdAndRoleIdArgs, "input">
  >;
  updateClass?: Resolver<
    Maybe<ResolversTypes["UpdateClassPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateClassArgs, "input">
  >;
  updateClassById?: Resolver<
    Maybe<ResolversTypes["UpdateClassPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateClassByIdArgs, "input">
  >;
  updateClassManagement?: Resolver<
    Maybe<ResolversTypes["UpdateClassManagementPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateClassManagementArgs, "input">
  >;
  updateClassManagementByClassIdAndUserId?: Resolver<
    Maybe<ResolversTypes["UpdateClassManagementPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateClassManagementByClassIdAndUserIdArgs, "input">
  >;
  updateClassType?: Resolver<
    Maybe<ResolversTypes["UpdateClassTypePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateClassTypeArgs, "input">
  >;
  updateClassTypeById?: Resolver<
    Maybe<ResolversTypes["UpdateClassTypePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateClassTypeByIdArgs, "input">
  >;
  updateRole?: Resolver<
    Maybe<ResolversTypes["UpdateRolePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRoleArgs, "input">
  >;
  updateRoleById?: Resolver<
    Maybe<ResolversTypes["UpdateRolePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRoleByIdArgs, "input">
  >;
  updateRoleByName?: Resolver<
    Maybe<ResolversTypes["UpdateRolePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateRoleByNameArgs, "input">
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes["UpdateUserPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, "input">
  >;
  updateUserAttribute?: Resolver<
    Maybe<ResolversTypes["UpdateUserAttributePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserAttributeArgs, "input">
  >;
  updateUserAttributeById?: Resolver<
    Maybe<ResolversTypes["UpdateUserAttributePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserAttributeByIdArgs, "input">
  >;
  updateUserAttributeByName?: Resolver<
    Maybe<ResolversTypes["UpdateUserAttributePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserAttributeByNameArgs, "input">
  >;
  updateUserById?: Resolver<
    Maybe<ResolversTypes["UpdateUserPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserByIdArgs, "input">
  >;
  updateUserByUsername?: Resolver<
    Maybe<ResolversTypes["UpdateUserPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserByUsernameArgs, "input">
  >;
  updateUserInfo?: Resolver<
    Maybe<ResolversTypes["UpdateUserInfoPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserInfoArgs, "input">
  >;
  updateUserInfoByEmail?: Resolver<
    Maybe<ResolversTypes["UpdateUserInfoPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserInfoByEmailArgs, "input">
  >;
  updateUserInfoById?: Resolver<
    Maybe<ResolversTypes["UpdateUserInfoPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserInfoByIdArgs, "input">
  >;
  updateUserInfoByPhoneNumber?: Resolver<
    Maybe<ResolversTypes["UpdateUserInfoPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserInfoByPhoneNumberArgs, "input">
  >;
  updateUserRole?: Resolver<
    Maybe<ResolversTypes["UpdateUserRolePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserRoleArgs, "input">
  >;
  updateUserRoleByUserIdAndRoleId?: Resolver<
    Maybe<ResolversTypes["UpdateUserRolePayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserRoleByUserIdAndRoleIdArgs, "input">
  >;
};

export type NodeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Node"] = ResolversParentTypes["Node"]
> = {
  __resolveType: TypeResolveFn<
    | "Class"
    | "ClassManagement"
    | "ClassType"
    | "Query"
    | "Role"
    | "User"
    | "UserAttribute"
    | "UserInfo"
    | "UserRole",
    ParentType,
    ContextType
  >;
  nodeId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
};

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PageInfo"] = ResolversParentTypes["PageInfo"]
> = {
  endCursor?: Resolver<
    Maybe<ResolversTypes["Cursor"]>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes["Cursor"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  allClassManagements?: Resolver<
    Maybe<ResolversTypes["ClassManagementsConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAllClassManagementsArgs, "orderBy">
  >;
  allClassTypes?: Resolver<
    Maybe<ResolversTypes["ClassTypesConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAllClassTypesArgs, "orderBy">
  >;
  allClasses?: Resolver<
    Maybe<ResolversTypes["ClassesConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAllClassesArgs, "orderBy">
  >;
  allRoles?: Resolver<
    Maybe<ResolversTypes["RolesConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAllRolesArgs, "orderBy">
  >;
  allUserAttributes?: Resolver<
    Maybe<ResolversTypes["UserAttributesConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAllUserAttributesArgs, "orderBy">
  >;
  allUserInfos?: Resolver<
    Maybe<ResolversTypes["UserInfosConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAllUserInfosArgs, "orderBy">
  >;
  allUserRoles?: Resolver<
    Maybe<ResolversTypes["UserRolesConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAllUserRolesArgs, "orderBy">
  >;
  allUsers?: Resolver<
    Maybe<ResolversTypes["UsersConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAllUsersArgs, "orderBy">
  >;
  class?: Resolver<
    Maybe<ResolversTypes["Class"]>,
    ParentType,
    ContextType,
    RequireFields<QueryClassArgs, "nodeId">
  >;
  classById?: Resolver<
    Maybe<ResolversTypes["Class"]>,
    ParentType,
    ContextType,
    RequireFields<QueryClassByIdArgs, "id">
  >;
  classManagement?: Resolver<
    Maybe<ResolversTypes["ClassManagement"]>,
    ParentType,
    ContextType,
    RequireFields<QueryClassManagementArgs, "nodeId">
  >;
  classManagementByClassIdAndUserId?: Resolver<
    Maybe<ResolversTypes["ClassManagement"]>,
    ParentType,
    ContextType,
    RequireFields<
      QueryClassManagementByClassIdAndUserIdArgs,
      "classId" | "userId"
    >
  >;
  classType?: Resolver<
    Maybe<ResolversTypes["ClassType"]>,
    ParentType,
    ContextType,
    RequireFields<QueryClassTypeArgs, "nodeId">
  >;
  classTypeById?: Resolver<
    Maybe<ResolversTypes["ClassType"]>,
    ParentType,
    ContextType,
    RequireFields<QueryClassTypeByIdArgs, "id">
  >;
  node?: Resolver<
    Maybe<ResolversTypes["Node"]>,
    ParentType,
    ContextType,
    RequireFields<QueryNodeArgs, "nodeId">
  >;
  nodeId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  query?: Resolver<ResolversTypes["Query"], ParentType, ContextType>;
  role?: Resolver<
    Maybe<ResolversTypes["Role"]>,
    ParentType,
    ContextType,
    RequireFields<QueryRoleArgs, "nodeId">
  >;
  roleById?: Resolver<
    Maybe<ResolversTypes["Role"]>,
    ParentType,
    ContextType,
    RequireFields<QueryRoleByIdArgs, "id">
  >;
  roleByName?: Resolver<
    Maybe<ResolversTypes["Role"]>,
    ParentType,
    ContextType,
    RequireFields<QueryRoleByNameArgs, "name">
  >;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "nodeId">
  >;
  userAttribute?: Resolver<
    Maybe<ResolversTypes["UserAttribute"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserAttributeArgs, "nodeId">
  >;
  userAttributeById?: Resolver<
    Maybe<ResolversTypes["UserAttribute"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserAttributeByIdArgs, "id">
  >;
  userAttributeByName?: Resolver<
    Maybe<ResolversTypes["UserAttribute"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserAttributeByNameArgs, "name">
  >;
  userById?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByIdArgs, "id">
  >;
  userByUsername?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByUsernameArgs, "username">
  >;
  userInfo?: Resolver<
    Maybe<ResolversTypes["UserInfo"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserInfoArgs, "nodeId">
  >;
  userInfoByEmail?: Resolver<
    Maybe<ResolversTypes["UserInfo"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserInfoByEmailArgs, "email">
  >;
  userInfoById?: Resolver<
    Maybe<ResolversTypes["UserInfo"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserInfoByIdArgs, "id">
  >;
  userInfoByPhoneNumber?: Resolver<
    Maybe<ResolversTypes["UserInfo"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserInfoByPhoneNumberArgs, "phoneNumber">
  >;
  userRole?: Resolver<
    Maybe<ResolversTypes["UserRole"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserRoleArgs, "nodeId">
  >;
  userRoleByUserIdAndRoleId?: Resolver<
    Maybe<ResolversTypes["UserRole"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserRoleByUserIdAndRoleIdArgs, "roleId" | "userId">
  >;
};

export type RoleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Role"] = ResolversParentTypes["Role"]
> = {
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  userRolesByRoleId?: Resolver<
    ResolversTypes["UserRolesConnection"],
    ParentType,
    ContextType,
    RequireFields<RoleUserRolesByRoleIdArgs, "orderBy">
  >;
  usersByUserRoleRoleIdAndUserId?: Resolver<
    ResolversTypes["RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnection"],
    ParentType,
    ContextType,
    RequireFields<RoleUsersByUserRoleRoleIdAndUserIdArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnection"] = ResolversParentTypes["RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnection"]
> = {
  edges?: Resolver<
    Array<ResolversTypes["RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdge"] = ResolversParentTypes["RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdge"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolesConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RolesConnection"] = ResolversParentTypes["RolesConnection"]
> = {
  edges?: Resolver<Array<ResolversTypes["RolesEdge"]>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes["Role"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolesEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RolesEdge"] = ResolversParentTypes["RolesEdge"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Role"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateClassManagementPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UpdateClassManagementPayload"] = ResolversParentTypes["UpdateClassManagementPayload"]
> = {
  classByClassId?: Resolver<
    Maybe<ResolversTypes["Class"]>,
    ParentType,
    ContextType
  >;
  classManagement?: Resolver<
    Maybe<ResolversTypes["ClassManagement"]>,
    ParentType,
    ContextType
  >;
  classManagementEdge?: Resolver<
    Maybe<ResolversTypes["ClassManagementsEdge"]>,
    ParentType,
    ContextType,
    RequireFields<
      UpdateClassManagementPayloadClassManagementEdgeArgs,
      "orderBy"
    >
  >;
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  userByUserId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateClassPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UpdateClassPayload"] = ResolversParentTypes["UpdateClassPayload"]
> = {
  class?: Resolver<Maybe<ResolversTypes["Class"]>, ParentType, ContextType>;
  classEdge?: Resolver<
    Maybe<ResolversTypes["ClassesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<UpdateClassPayloadClassEdgeArgs, "orderBy">
  >;
  classTypeByClassTypeId?: Resolver<
    Maybe<ResolversTypes["ClassType"]>,
    ParentType,
    ContextType
  >;
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  userByTeacherId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateClassTypePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UpdateClassTypePayload"] = ResolversParentTypes["UpdateClassTypePayload"]
> = {
  classType?: Resolver<
    Maybe<ResolversTypes["ClassType"]>,
    ParentType,
    ContextType
  >;
  classTypeEdge?: Resolver<
    Maybe<ResolversTypes["ClassTypesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<UpdateClassTypePayloadClassTypeEdgeArgs, "orderBy">
  >;
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRolePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UpdateRolePayload"] = ResolversParentTypes["UpdateRolePayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["Role"]>, ParentType, ContextType>;
  roleEdge?: Resolver<
    Maybe<ResolversTypes["RolesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<UpdateRolePayloadRoleEdgeArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserAttributePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UpdateUserAttributePayload"] = ResolversParentTypes["UpdateUserAttributePayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  userAttribute?: Resolver<
    Maybe<ResolversTypes["UserAttribute"]>,
    ParentType,
    ContextType
  >;
  userAttributeEdge?: Resolver<
    Maybe<ResolversTypes["UserAttributesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<UpdateUserAttributePayloadUserAttributeEdgeArgs, "orderBy">
  >;
  userByUserId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserInfoPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UpdateUserInfoPayload"] = ResolversParentTypes["UpdateUserInfoPayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  userById?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userInfo?: Resolver<
    Maybe<ResolversTypes["UserInfo"]>,
    ParentType,
    ContextType
  >;
  userInfoEdge?: Resolver<
    Maybe<ResolversTypes["UserInfosEdge"]>,
    ParentType,
    ContextType,
    RequireFields<UpdateUserInfoPayloadUserInfoEdgeArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UpdateUserPayload"] = ResolversParentTypes["UpdateUserPayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userEdge?: Resolver<
    Maybe<ResolversTypes["UsersEdge"]>,
    ParentType,
    ContextType,
    RequireFields<UpdateUserPayloadUserEdgeArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserRolePayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UpdateUserRolePayload"] = ResolversParentTypes["UpdateUserRolePayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  query?: Resolver<Maybe<ResolversTypes["Query"]>, ParentType, ContextType>;
  roleByRoleId?: Resolver<
    Maybe<ResolversTypes["Role"]>,
    ParentType,
    ContextType
  >;
  userByUserId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  userRole?: Resolver<
    Maybe<ResolversTypes["UserRole"]>,
    ParentType,
    ContextType
  >;
  userRoleEdge?: Resolver<
    Maybe<ResolversTypes["UserRolesEdge"]>,
    ParentType,
    ContextType,
    RequireFields<UpdateUserRolePayloadUserRoleEdgeArgs, "orderBy">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  classManagementsByUserId?: Resolver<
    ResolversTypes["ClassManagementsConnection"],
    ParentType,
    ContextType,
    RequireFields<UserClassManagementsByUserIdArgs, "orderBy">
  >;
  classTypesByClassTeacherIdAndClassTypeId?: Resolver<
    ResolversTypes["UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnection"],
    ParentType,
    ContextType,
    RequireFields<UserClassTypesByClassTeacherIdAndClassTypeIdArgs, "orderBy">
  >;
  classesByClassManagementUserIdAndClassId?: Resolver<
    ResolversTypes["UserClassesByClassManagementUserIdAndClassIdManyToManyConnection"],
    ParentType,
    ContextType,
    RequireFields<UserClassesByClassManagementUserIdAndClassIdArgs, "orderBy">
  >;
  classesByTeacherId?: Resolver<
    ResolversTypes["ClassesConnection"],
    ParentType,
    ContextType,
    RequireFields<UserClassesByTeacherIdArgs, "orderBy">
  >;
  createdDate?: Resolver<
    Maybe<ResolversTypes["Datetime"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  rolesByUserRoleUserIdAndRoleId?: Resolver<
    ResolversTypes["UserRolesByUserRoleUserIdAndRoleIdManyToManyConnection"],
    ParentType,
    ContextType,
    RequireFields<UserRolesByUserRoleUserIdAndRoleIdArgs, "orderBy">
  >;
  updatedDate?: Resolver<
    Maybe<ResolversTypes["Datetime"]>,
    ParentType,
    ContextType
  >;
  userAttributesByUserId?: Resolver<
    ResolversTypes["UserAttributesConnection"],
    ParentType,
    ContextType,
    RequireFields<UserUserAttributesByUserIdArgs, "orderBy">
  >;
  userInfoById?: Resolver<
    Maybe<ResolversTypes["UserInfo"]>,
    ParentType,
    ContextType
  >;
  userRolesByUserId?: Resolver<
    ResolversTypes["UserRolesConnection"],
    ParentType,
    ContextType,
    RequireFields<UserUserRolesByUserIdArgs, "orderBy">
  >;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAttributeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserAttribute"] = ResolversParentTypes["UserAttribute"]
> = {
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  userByUserId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAttributesConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserAttributesConnection"] = ResolversParentTypes["UserAttributesConnection"]
> = {
  edges?: Resolver<
    Array<ResolversTypes["UserAttributesEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["UserAttribute"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAttributesEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserAttributesEdge"] = ResolversParentTypes["UserAttributesEdge"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["UserAttribute"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnection"] = ResolversParentTypes["UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnection"]
> = {
  edges?: Resolver<
    Array<
      ResolversTypes["UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdge"]
    >,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["ClassType"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdge"] = ResolversParentTypes["UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdge"]
> = {
  classesByClassTypeId?: Resolver<
    ResolversTypes["ClassesConnection"],
    ParentType,
    ContextType,
    RequireFields<
      UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdgeClassesByClassTypeIdArgs,
      "orderBy"
    >
  >;
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["ClassType"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserClassesByClassManagementUserIdAndClassIdManyToManyConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserClassesByClassManagementUserIdAndClassIdManyToManyConnection"] = ResolversParentTypes["UserClassesByClassManagementUserIdAndClassIdManyToManyConnection"]
> = {
  edges?: Resolver<
    Array<
      ResolversTypes["UserClassesByClassManagementUserIdAndClassIdManyToManyEdge"]
    >,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Class"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserClassesByClassManagementUserIdAndClassIdManyToManyEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserClassesByClassManagementUserIdAndClassIdManyToManyEdge"] = ResolversParentTypes["UserClassesByClassManagementUserIdAndClassIdManyToManyEdge"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Class"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserInfo"] = ResolversParentTypes["UserInfo"]
> = {
  avatarUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  dateOfBirth?: Resolver<
    Maybe<ResolversTypes["Datetime"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  userById?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInfosConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserInfosConnection"] = ResolversParentTypes["UserInfosConnection"]
> = {
  edges?: Resolver<
    Array<ResolversTypes["UserInfosEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["UserInfo"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInfosEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserInfosEdge"] = ResolversParentTypes["UserInfosEdge"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["UserInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRoleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserRole"] = ResolversParentTypes["UserRole"]
> = {
  nodeId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  roleByRoleId?: Resolver<
    Maybe<ResolversTypes["Role"]>,
    ParentType,
    ContextType
  >;
  roleId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  userByUserId?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRolesByUserRoleUserIdAndRoleIdManyToManyConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserRolesByUserRoleUserIdAndRoleIdManyToManyConnection"] = ResolversParentTypes["UserRolesByUserRoleUserIdAndRoleIdManyToManyConnection"]
> = {
  edges?: Resolver<
    Array<ResolversTypes["UserRolesByUserRoleUserIdAndRoleIdManyToManyEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Role"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRolesByUserRoleUserIdAndRoleIdManyToManyEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserRolesByUserRoleUserIdAndRoleIdManyToManyEdge"] = ResolversParentTypes["UserRolesByUserRoleUserIdAndRoleIdManyToManyEdge"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Role"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRolesConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserRolesConnection"] = ResolversParentTypes["UserRolesConnection"]
> = {
  edges?: Resolver<
    Array<ResolversTypes["UserRolesEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["UserRole"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRolesEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserRolesEdge"] = ResolversParentTypes["UserRolesEdge"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["UserRole"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UsersConnection"] = ResolversParentTypes["UsersConnection"]
> = {
  edges?: Resolver<Array<ResolversTypes["UsersEdge"]>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UsersEdge"] = ResolversParentTypes["UsersEdge"]
> = {
  cursor?: Resolver<Maybe<ResolversTypes["Cursor"]>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Class?: ClassResolvers<ContextType>;
  ClassManagement?: ClassManagementResolvers<ContextType>;
  ClassManagementsConnection?: ClassManagementsConnectionResolvers<ContextType>;
  ClassManagementsEdge?: ClassManagementsEdgeResolvers<ContextType>;
  ClassType?: ClassTypeResolvers<ContextType>;
  ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnection?: ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyConnectionResolvers<ContextType>;
  ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdge?: ClassTypeUsersByClassClassTypeIdAndTeacherIdManyToManyEdgeResolvers<ContextType>;
  ClassTypesConnection?: ClassTypesConnectionResolvers<ContextType>;
  ClassTypesEdge?: ClassTypesEdgeResolvers<ContextType>;
  ClassUsersByClassManagementClassIdAndUserIdManyToManyConnection?: ClassUsersByClassManagementClassIdAndUserIdManyToManyConnectionResolvers<ContextType>;
  ClassUsersByClassManagementClassIdAndUserIdManyToManyEdge?: ClassUsersByClassManagementClassIdAndUserIdManyToManyEdgeResolvers<ContextType>;
  ClassesConnection?: ClassesConnectionResolvers<ContextType>;
  ClassesEdge?: ClassesEdgeResolvers<ContextType>;
  CreateClassManagementPayload?: CreateClassManagementPayloadResolvers<ContextType>;
  CreateClassPayload?: CreateClassPayloadResolvers<ContextType>;
  CreateClassTypePayload?: CreateClassTypePayloadResolvers<ContextType>;
  CreateRolePayload?: CreateRolePayloadResolvers<ContextType>;
  CreateUserAttributePayload?: CreateUserAttributePayloadResolvers<ContextType>;
  CreateUserInfoPayload?: CreateUserInfoPayloadResolvers<ContextType>;
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>;
  CreateUserRolePayload?: CreateUserRolePayloadResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  Datetime?: GraphQLScalarType;
  DeleteClassManagementPayload?: DeleteClassManagementPayloadResolvers<ContextType>;
  DeleteClassPayload?: DeleteClassPayloadResolvers<ContextType>;
  DeleteClassTypePayload?: DeleteClassTypePayloadResolvers<ContextType>;
  DeleteRolePayload?: DeleteRolePayloadResolvers<ContextType>;
  DeleteUserAttributePayload?: DeleteUserAttributePayloadResolvers<ContextType>;
  DeleteUserInfoPayload?: DeleteUserInfoPayloadResolvers<ContextType>;
  DeleteUserPayload?: DeleteUserPayloadResolvers<ContextType>;
  DeleteUserRolePayload?: DeleteUserRolePayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Role?: RoleResolvers<ContextType>;
  RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnection?: RoleUsersByUserRoleRoleIdAndUserIdManyToManyConnectionResolvers<ContextType>;
  RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdge?: RoleUsersByUserRoleRoleIdAndUserIdManyToManyEdgeResolvers<ContextType>;
  RolesConnection?: RolesConnectionResolvers<ContextType>;
  RolesEdge?: RolesEdgeResolvers<ContextType>;
  UpdateClassManagementPayload?: UpdateClassManagementPayloadResolvers<ContextType>;
  UpdateClassPayload?: UpdateClassPayloadResolvers<ContextType>;
  UpdateClassTypePayload?: UpdateClassTypePayloadResolvers<ContextType>;
  UpdateRolePayload?: UpdateRolePayloadResolvers<ContextType>;
  UpdateUserAttributePayload?: UpdateUserAttributePayloadResolvers<ContextType>;
  UpdateUserInfoPayload?: UpdateUserInfoPayloadResolvers<ContextType>;
  UpdateUserPayload?: UpdateUserPayloadResolvers<ContextType>;
  UpdateUserRolePayload?: UpdateUserRolePayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAttribute?: UserAttributeResolvers<ContextType>;
  UserAttributesConnection?: UserAttributesConnectionResolvers<ContextType>;
  UserAttributesEdge?: UserAttributesEdgeResolvers<ContextType>;
  UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnection?: UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyConnectionResolvers<ContextType>;
  UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdge?: UserClassTypesByClassTeacherIdAndClassTypeIdManyToManyEdgeResolvers<ContextType>;
  UserClassesByClassManagementUserIdAndClassIdManyToManyConnection?: UserClassesByClassManagementUserIdAndClassIdManyToManyConnectionResolvers<ContextType>;
  UserClassesByClassManagementUserIdAndClassIdManyToManyEdge?: UserClassesByClassManagementUserIdAndClassIdManyToManyEdgeResolvers<ContextType>;
  UserInfo?: UserInfoResolvers<ContextType>;
  UserInfosConnection?: UserInfosConnectionResolvers<ContextType>;
  UserInfosEdge?: UserInfosEdgeResolvers<ContextType>;
  UserRole?: UserRoleResolvers<ContextType>;
  UserRolesByUserRoleUserIdAndRoleIdManyToManyConnection?: UserRolesByUserRoleUserIdAndRoleIdManyToManyConnectionResolvers<ContextType>;
  UserRolesByUserRoleUserIdAndRoleIdManyToManyEdge?: UserRolesByUserRoleUserIdAndRoleIdManyToManyEdgeResolvers<ContextType>;
  UserRolesConnection?: UserRolesConnectionResolvers<ContextType>;
  UserRolesEdge?: UserRolesEdgeResolvers<ContextType>;
  UsersConnection?: UsersConnectionResolvers<ContextType>;
  UsersEdge?: UsersEdgeResolvers<ContextType>;
};
