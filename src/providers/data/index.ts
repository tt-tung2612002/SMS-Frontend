import graphqlDataProvider, {
  GraphQLClient,
  liveProvider as graphqlLiveProvider,
} from "@refinedev/nestjs-query";

import { AxiosRequestConfig } from "axios";
import { createClient } from "graphql-ws";

import { axiosInstance } from "./axios";

export const API_BASE_URL = "https://api.crm.refine.dev";
export const API_URL = API_BASE_URL + "/graphql";
export const LOCAL_URL = "http://localhost:5000" + "/graphql";
export const WS_URL = "ws://localhost:8082/graphql";

export const client = new GraphQLClient(API_URL, {
  fetch: async (url: string, options: any) => {
    try {
      const axiosOptions: AxiosRequestConfig = {
        ...options, // existing options from GraphQLClient
        url, // ensure URL is set from the function arguments
        data: options.body, // map `body` from GraphQLClient options to `data` for Axios
        withCredentials: false, // set `withCredentials` to false or any other Axios specific configurations
      };
      const response = await axiosInstance.request(axiosOptions);
      // const response = await axiosInstance.request({
      //   // withCredentials: false
      //   data: options.body,
      //   url,
      //   ...options,
      // });

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
      axiosInstance.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";
      const axiosOptions: AxiosRequestConfig = {
        ...options, // existing options from GraphQLClient
        url, // ensure URL is set from the function arguments
        data: options.body, // map `body` from GraphQLClient options to `data` for Axios
        proxy: {
          host: "localhost:5000",
        },
        headers: {
          // allow cors
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        withCredentials: false, // set `withCredentials` to false or any other Axios specific configurations
      };
      const response = await axiosInstance.request(axiosOptions);

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

export const wsClient = createClient({
  url: WS_URL,
  connectionParams: () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  }),
});

export const dataProvider = graphqlDataProvider(client);
export const localDataProvider = graphqlDataProvider(localClient);

export const liveProvider = graphqlLiveProvider(wsClient);
