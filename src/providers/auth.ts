import { AuthProvider } from "@refinedev/core";
import { SECURITY_URL, securityGraphqlProvider } from "./data/index";

import { User } from "@/graphql/new/customSchema";
import { loginProvider } from "./data";
import { ME_QUERY } from "./getActiveUser";

const enum Roles {
  "admin" = 1,
  "teacher" = 2,
  "student" = 3,
}

export const authProvider: AuthProvider = {
  login: async ({ email, password, accessToken, refreshToken, idToken }) => {
    if (accessToken) {
      console.log("No need to authenticate, access token is valid.");
      return {
        success: true,
        redirectTo: "/",
      };
    }

    try {
      const { data } = await loginProvider.custom({
        url: SECURITY_URL + "/login",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Allow-Credentials": "true",
        },
        payload: {
          username: email,
          password,
        },
      });

      sessionStorage.setItem("access_token", data.accessToken);
      sessionStorage.setItem("refresh_token", data.refreshToken);
      sessionStorage.setItem("id_token", data.idToken);

      const role = parseInt(data.roles[0] ?? "");

      let highestRole = "";

      switch (role) {
        case Roles.admin:
          highestRole = "admin"
          break;
        case Roles.teacher:
          highestRole = "teacher"
          break;
        case Roles.student:
          highestRole = "student"
          break;
        default:
          break;
      }

      if (highestRole === "") {
        return {
          success: false,
          error: {
            message: "User is invalid",
            name: "Invalid user"
          },
        };
      }

      sessionStorage.setItem("highestRole", highestRole);

      return {
        success: true,
        redirectTo: "/",
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          message: "message" in error ? error.message : "Login failed",
          name: "name" in error ? error.name : "Invalid email or password",
        },
      };
    }
  },
  register: async ({ email, password }) => {
    try {
      return {
        success: true,
        redirectTo: `/login?email=${email}`,
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          message: "message" in error ? error.message : "Register failed",
          name: "name" in error ? error.name : "Invalid email or password",
        },
      };
    }
  },
  logout: async () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    sessionStorage.removeItem("id_token");
    sessionStorage.removeItem("highestRole");
    sessionStorage.removeItem("userId");

    return {
      success: true,
      redirectTo: "/login",
    };
  },

  onError: async (error) => {
    if (error?.statusCode === "UNAUTHENTICATED" || error?.statusCode === 401) {
      return {
        logout: true,
      };
    }
    return { error };
  },

  check: async () => {
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken) {
      try {
        await loginProvider.custom({
          url: SECURITY_URL + "/api/auth/validate",
          method: "get",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Credentials": "true",
            Authorization: "Bearer " + accessToken,
          },
        });

        return {
          authenticated: true,
        };
      } catch (error) {
        return {
          authenticated: false,
        };
      }
    }

    return {
      authenticated: false,
    };
  },

  forgotPassword: async () => {
    return {
      success: true,
      redirectTo: "/update-password",
    };
  },

  updatePassword: async () => {
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  getIdentity: async () => {
    try {
      const { data } = await securityGraphqlProvider.custom<{ me: User }>({
        url: SECURITY_URL + "/graphql",
        method: "post",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("access_token"),
        },
        meta: {
          rawQuery: ME_QUERY,
        },
      });

      sessionStorage.setItem("userId", data.me.id.toString());

      return data.me;
    } catch (error) {
      return undefined;
    }
  },
};
