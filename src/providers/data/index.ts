import { BaseRecord, LogicalFilter } from "@refinedev/core";
import { VariableOptions } from "@refinedev/core/dist/contexts/data/types";
import graphqlDataProvider, { GraphQLClient } from "@refinedev/nestjs-query";
import dataProvider from "@refinedev/simple-rest";

import camelcase from "camelcase";
import * as gql from "gql-query-builder";
import gqlTag from "graphql-tag";
import { singular } from "pluralize";

import { axiosInstance } from "./axios";

import {
  generateFilters,
  generatePaging,
  generateSorting,
  getOperationFields,
  isMutation,
} from "./utils/camel";


const env = process.env.NODE_ENV;
let GRAPHQL_URL = "", SECURITY_URL = ""

// if (env === "development") {
//   CORS_URL = "http://localhost:10000/";
//   SECURITY_URL = CORS_URL + "http://localhost:8082";
//   GRAPHQL_URL = CORS_URL + "http://localhost:5000/graphql";
// }
// else {
SECURITY_URL = "https://auth.sms.thanhtung.tech";
GRAPHQL_URL = "https://graphql.sms.thanhtung.tech/graphql";
// }

export const UPLOAD_URL = "https://upload.sms.thanhtung.tech";

export { GRAPHQL_URL, SECURITY_URL };

const securityGraphQLClient = new GraphQLClient(SECURITY_URL + "/graphql", {
  fetch: async (url: string, options: any) => {
    try {
      const response = await axiosInstance.request({
        data: options.body,
        url,
        ...options,
      });

      return { ...response, data: response.data };
    } catch (error: any) {
      const messages = error?.map((error: any) => error?.message)?.join("");
      const code = error?.[0]?.extensions?.code;

      return Promise.reject({
        message: messages || JSON.stringify(error),
        statusCode: code || 500,
      });
    }
  },
});

export const localClient = new GraphQLClient(GRAPHQL_URL, {
  fetch: async (url: string, options: any) => {
    try {
      const response = await axiosInstance.request({
        data: options.body,
        url,
        ...options,
      });

      return { ...response, data: response.data };
    } catch (error: any) {
      const messages = error?.map((error: any) => error?.message)?.join("");

      return Promise.reject(
        new Error(messages || JSON.stringify(error)) as any
      );
    }
  },
});

export const localDataProvider = (() => {
  const provider = graphqlDataProvider(localClient);
  provider.getList = async ({
    resource,
    pagination,
    sorters,
    filters,
    meta,
  }) => {
    const operation = camelcase(resource);

    const paging = generatePaging(pagination || {});

    const queryVariables: VariableOptions = {};

    let query;
    let variables;

    if (meta?.gqlQuery) {
      query = meta?.gqlQuery;

      variables = {
        filter: filters ? generateFilters(filters as LogicalFilter[]) : {},
        sorting: sorters ? generateSorting(sorters) : [],
        paging,
      };
    } else {
      if (filters) {
        queryVariables["filter"] = {
          type: camelcase(`${singular(resource)}Filter`, {
            pascalCase: true,
          }),
          required: true,
          value: generateFilters(filters as LogicalFilter[]),
        };
      }

      if (sorters) {
        queryVariables["sorting"] = {
          type: camelcase(`${singular(resource)}Sort`, {
            pascalCase: true,
          }),
          required: true,
          list: [true],
          value: generateSorting(sorters),
        };
      }

      if (paging) {
        queryVariables["paging"] = {
          type: "OffsetPaging",
          required: true,
          value: paging,
        };
      }

      const gqlQuery = gql.query({
        operation,
        fields: [{ nodes: meta?.fields }, "totalCount"],
        variables: queryVariables,
      });

      query = gqlQuery.query;
      variables = gqlQuery.variables;
    }

    const response = await localClient.request<BaseRecord>(query, variables);

    return {
      data: response[operation].nodes,
      total: response[operation].totalCount,
      custom: response[operation],
    };
  };
  provider.deleteOne = async ({ resource, id, meta }) => {
    const pascalResource = camelcase(singular(resource), {
      pascalCase: true,
    });

    const operation = `delete${pascalResource}`;

    if (meta?.gqlMutation) {
      const response = await localClient.request<BaseRecord>(meta.gqlMutation, {
        input: { id },
      });

      return {
        data: response[operation],
      };
    }

    const query = gqlTag`
                    mutation Delete${pascalResource}($input: Delete${pascalResource}Input!) {
                        ${operation}(input: $input) {
                          deleted${pascalResource}NodeId
                        }
                    }
                `;

    const response = await localClient.request<BaseRecord>(query, {
      input: { id },
    });

    return {
      data: response[operation],
    };
  };

  provider.getOne = async ({ resource, id, meta }) => {
    const operation = camelcase(singular(resource));

    const gqlOperation = meta?.gqlQuery ?? meta?.gqlMutation;

    id = parseInt(id.toString(), 10);

    if (gqlOperation) {
      let query = gqlOperation;
      const variables = { id: id };

      if (isMutation(gqlOperation)) {
        const stringFields = getOperationFields(gqlOperation);

        query = gqlTag`
                        query Get${camelcase(singular(resource), {
          pascalCase: true,
        })}($id: Int!) {
                            ${operation}(id: $id) {
                            ${stringFields}
                            }
                        }
                    `;
      }

      const response = await localClient.request<BaseRecord>(query, variables);

      return {
        data: response[operation],
      };
    }

    const { query, variables } = gql.query({
      operation,
      fields: meta?.fields || ["id"],
      variables: {
        id: {
          type: "Int",
          required: true,
          value: id,
        },
      },
    });

    const response = await localClient.request<BaseRecord>(query, variables);

    return {
      data: response[operation],
    };
  };

  provider.update = async ({ resource, id, variables, meta }) => {
    const operation = `update${camelcase(singular(resource), {
      pascalCase: true,
    })}`;

    const gqlOperation = meta?.gqlMutation ?? meta?.gqlQuery;
    id = parseInt(id.toString(), 10);

    if (gqlOperation) {
      const response = await localClient.request<BaseRecord>(gqlOperation, {
        input: {
          id,
          patch: variables,
        },
      });

      return {
        data: response[operation],
      };
    }

    const { query, variables: queryVariables } = gql.mutation({
      operation,
      fields: meta?.fields || ["clientMutationId"],
      variables: {
        input: {
          type: `Update${camelcase(singular(resource), {
            pascalCase: true,
          })}Input`,
          required: true,
          value: {
            id,
            patch: variables,
          },
        },
      },
    });

    const response = await localClient.request<BaseRecord>(
      query,
      queryVariables
    );

    return {
      data: response[operation],
    };
  };

  provider.create = async ({ resource, variables, meta }) => {
    const operation = `create${camelcase(singular(resource), {
      pascalCase: true,
    })}`;

    const gqlOperation = meta?.gqlMutation ?? meta?.gqlQuery;

    if (gqlOperation) {
      const response = await localClient.request<BaseRecord>(gqlOperation, {
        input: { [camelcase(singular(resource))]: variables },
      });

      return {
        data: response[operation],
      };
    }

    const { query, variables: queryVariables } = gql.mutation({
      operation,
      fields: meta?.fields || ["clientMutationId"],
      variables: {
        input: {
          type: `Create${camelcase(singular(resource), {
            pascalCase: true,
          })}Input`,
          required: true,
          value: {
            [camelcase(singular(resource))]: variables,
          },
        },
      },
    });

    const response = await localClient.request<BaseRecord>(
      query,
      queryVariables
    );

    return {
      data: response[operation],
    };
  };

  return provider;
})();

export const securityGraphqlProvider = (() => {
  const provider = graphqlDataProvider(securityGraphQLClient);
  provider.getList = async ({
    resource,
    pagination,
    sorters,
    filters,
    meta,
  }) => {
    const operation = camelcase(resource);

    const paging = generatePaging(pagination || {});

    const queryVariables: VariableOptions = {};

    let query;
    let variables;

    if (meta?.gqlQuery) {
      query = meta?.gqlQuery;

      variables = {
        filter: filters ? generateFilters(filters as LogicalFilter[]) : {},
        sorting: sorters ? generateSorting(sorters) : [],
        paging,
      };
    } else {
      if (filters) {
        queryVariables["filter"] = {
          type: camelcase(`${singular(resource)}Filter`, {
            pascalCase: true,
          }),
          required: true,
          value: generateFilters(filters as LogicalFilter[]),
        };
      }

      if (sorters) {
        queryVariables["sorting"] = {
          type: camelcase(`${singular(resource)}Sort`, {
            pascalCase: true,
          }),
          required: true,
          list: [true],
          value: generateSorting(sorters),
        };
      }

      if (paging) {
        queryVariables["paging"] = {
          type: "OffsetPaging",
          required: true,
          value: paging,
        };
      }

      const gqlQuery = gql.query({
        operation,
        fields: [{ nodes: meta?.fields }, "totalCount"],
        variables: queryVariables,
      });

      query = gqlQuery.query;
      variables = gqlQuery.variables;
    }

    const response = await localClient.request<BaseRecord>(query, variables);

    return {
      data: response[operation].nodes,
      total: response[operation].totalCount,
      custom: response[operation],
    };
  };
  provider.deleteOne = async ({ resource, id, meta }) => {
    const pascalResource = camelcase(singular(resource), {
      pascalCase: true,
    });

    const operation = `delete${pascalResource}`;

    if (meta?.gqlMutation) {
      const response = await localClient.request<BaseRecord>(meta.gqlMutation, {
        input: { id },
      });

      return {
        data: response[operation],
      };
    }

    const query = gqlTag`
                    mutation Delete${pascalResource}($input: Delete${pascalResource}Input!) {
                        ${operation}(input: $input) {
                          deleted${pascalResource}NodeId
                        }
                    }
                `;

    const response = await localClient.request<BaseRecord>(query, {
      input: { id },
    });

    return {
      data: response[operation],
    };
  };

  provider.getOne = async ({ resource, id, meta }) => {
    const operation = camelcase(singular(resource));

    const gqlOperation = meta?.gqlQuery ?? meta?.gqlMutation;

    id = parseInt(id.toString(), 10);

    if (gqlOperation) {
      let query = gqlOperation;
      const variables = { id: id };

      if (isMutation(gqlOperation)) {
        const stringFields = getOperationFields(gqlOperation);

        query = gqlTag`
                        query Get${camelcase(singular(resource), {
          pascalCase: true,
        })}($id: Int!) {
                            ${operation}(id: $id) {
                            ${stringFields}
                            }
                        }
                    `;
      }

      const response = await localClient.request<BaseRecord>(query, variables);

      return {
        data: response[operation],
      };
    }

    const { query, variables } = gql.query({
      operation,
      fields: meta?.fields || ["id"],
      variables: {
        id: {
          type: "Int",
          required: true,
          value: id,
        },
      },
    });

    const response = await localClient.request<BaseRecord>(query, variables);

    return {
      data: response[operation],
    };
  };

  provider.update = async ({ resource, id, variables, meta }) => {
    const operation = `update${camelcase(singular(resource), {
      pascalCase: true,
    })}`;

    const gqlOperation = meta?.gqlMutation ?? meta?.gqlQuery;
    id = parseInt(id.toString(), 10);

    if (gqlOperation) {
      const response = await localClient.request<BaseRecord>(gqlOperation, {
        input: {
          id,
          patch: variables,
        },
      });

      return {
        data: response[operation],
      };
    }

    const { query, variables: queryVariables } = gql.mutation({
      operation,
      fields: meta?.fields || ["clientMutationId"],
      variables: {
        input: {
          type: `Update${camelcase(singular(resource), {
            pascalCase: true,
          })}Input`,
          required: true,
          value: {
            id,
            patch: variables,
          },
        },
      },
    });

    const response = await localClient.request<BaseRecord>(
      query,
      queryVariables
    );

    return {
      data: response[operation],
    };
  };

  return provider;
})();

export const loginProvider = dataProvider(SECURITY_URL);
export const uploadProvider = dataProvider(UPLOAD_URL);
