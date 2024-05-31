import React from "react";

import { ThemedLayoutContextProvider } from "@refinedev/antd";

import { Layout as AntdLayout, Grid } from "antd";

import { Header } from "./header";
import { Sider } from "./sider";
type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const breakpoint = Grid.useBreakpoint();
  const isSmall = typeof breakpoint.sm === "undefined" ? true : breakpoint.sm;

  return (
    <ThemedLayoutContextProvider>
      {/* <GitHubBanner /> */}
      <AntdLayout hasSider style={{ minHeight: "100vh" }}>
        <Sider />
        <AntdLayout>
          <Header />
          <AntdLayout.Content
            style={{
              padding: isSmall ? 32 : 16,
            }}
          >
            {children}
          </AntdLayout.Content>
        </AntdLayout>
      </AntdLayout>
    </ThemedLayoutContextProvider>
  );
};
