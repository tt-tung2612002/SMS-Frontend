import { BaseRecord, LogicalFilter } from "@refinedev/core";
import { VariableOptions } from "@refinedev/core/dist/interfaces/metaData/variableOptions";
import graphqlDataProvider, { GraphQLClient } from "@refinedev/nestjs-query";

import camelcase from "camelcase";
import * as gql from "gql-query-builder";
import gqlTag from "graphql-tag";
import { singular } from "pluralize";

import { axiosInstance } from "./axios";
import {
  generateFilters,
  generatePaging,
  generateSorting,
} from "./utils/camel";

export const API_BASE_URL = "https://api.crm.refine.dev";
export const API_URL = API_BASE_URL + "/graphql";
export const LOCAL_URL = "http://localhost:5000" + "/graphql";
// export const WS_URL = "ws://localhost:5000/graphql";

export const client = new GraphQLClient(API_URL, {
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

export const localClient = new GraphQLClient(LOCAL_URL, {
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

// export const wsClient = createClient({
//   url: WS_URL,
//   connectionParams: () => ({
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//     },
//   }),
// });

async function customGetList({
  resource,
  pagination,
  sorters,
  filters,
  meta,
}: {
  resource: string;
  pagination: any;
  sorters: any;
  filters: any;
  meta: any;
}): Promise<{ data: BaseRecord[]; total: number }> {
  const operation = camelcase(resource);
  const paging = generatePaging(pagination || {});
  const queryVariables: VariableOptions = {};
  let query;
  let variables;

  if (meta?.gqlQuery) {
    query = meta.gqlQuery;
    variables = {
      filter: filters ? generateFilters(filters as LogicalFilter[]) : {},
      sorting: sorters ? generateSorting(sorters) : [],
      paging,
    };
  } else {
    if (filters) {
      queryVariables["filter"] = {
        type: camelcase(`${singular(resource)}Filter`, { pascalCase: true }),
        required: true,
        value: generateFilters(filters as LogicalFilter[]),
      };
    }

    if (sorters) {
      queryVariables["sorting"] = {
        type: camelcase(`${singular(resource)}Sort`, { pascalCase: true }),
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

  const client = new GraphQLClient(API_URL); // Ensure API_URL is defined and client is properly configured
  const response = await client.request<BaseRecord>(query, variables);

  return {
    data: response[operation].nodes,
    total: response[operation].totalCount,
  };
}

export const dataProvider = graphqlDataProvider(client);
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

  return provider;
})();
