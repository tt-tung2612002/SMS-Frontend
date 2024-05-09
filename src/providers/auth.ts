import { AuthProvider } from "@refinedev/core";

import { SECURITY_URL, loginProvider, refineProvider } from "./data";

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

      const role = data.roles[0];

      console.log(role);

      const enum Roles {
        "admin" = 1,
        "teacher" = 2,
        "student" = 3,
      }

      let highestRole = "student";
      if (role == Roles.admin) {
        highestRole = "admin";
      } else if (role == Roles.teacher) {
        highestRole = "teacher";
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
      await refineProvider.custom({
        url: SECURITY_URL + "/register",
        method: "post",
        headers: {},
      });

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
    // client.setHeaders({
    //   Authorization: "",
    // });

    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");

    return {
      success: true,
      redirectTo: "/login",
    };
  },

  onError: async (error) => {
    // if (error?.statusCode === "UNAUTHENTICATED") {
    //   return {
    //     logout: true,
    //   };
    // }

    return { error };
  },
  check: async () => {
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken) {
      console.log("No need to authenticate, access token is valid.");
      return {
        authenticated: true,
      };
    } else {
      console.log("Required Login");
      return {
        authenticated: false,
      };
    }

    // try {
    //   await refineProvider.custom({
    //     url: API_URL,
    //     method: "post",
    //     headers: {},
    //     meta: {
    //       rawQuery: `
    //                 query Me {
    //                     me {
    //                       name
    //                     }
    //                   }
    //             `,
    //     },
    //   });

    //   return {
    //     authenticated: true,
    //   };
    // } catch (error) {
    //   return {
    //     authenticated: false,
    //   };
    // }
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
      // parse bearer token and get username value
      if (sessionStorage.getItem("access_token")) {
        return {
          id: "1",
          email: "tt.tung261@gmail.com",
          username: "tt.tung261",
          phone: "+84 942694085",
          avatarUrl: "https://avatars.githubusercontent.com/u/47231147?v=4",
        };
      }
    } catch (error) {
      return undefined;
    }
  },
};
