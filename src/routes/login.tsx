import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { AuthPage } from "@refinedev/antd";
import { useLogin } from "@refinedev/core";

import { Title } from "@/components";

export const LoginPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { mutate } = useLogin();

  // const emailFromSearchParams = searchParams.get("email");
  const accessToken = searchParams.get("accessToken");
  // const refreshToken = searchParams.get("refreshToken");

  useEffect(() => {
    if (accessToken) {
      mutate({
        accessToken,
        // refreshToken,
      });
    }
  }, [accessToken]);

  return (
    <AuthPage
      type="login"
      registerLink={false}
      // formProps={{
      //   initialValues,
      // }}
      contentProps={{
        className: "auth-page",
      }}
      title={<Title collapsed={false} />}
    />
  );
};
