import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import {
  Header,
  ThemedLayoutV2,
  ThemedTitleV2,
  useNotificationProvider,
} from "@refinedev/antd";
import {
  Authenticated,
  CanAccess,
  ErrorComponent,
  Refine,
} from "@refinedev/core";
import routerProvider, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";

import { App as AntdApp, ConfigProvider } from "antd";

import { resources } from "@/config";
import {
  authProvider,
  localDataProvider,
  loginProvider,
  securityGraphqlProvider,
  uploadProvider,
} from "@/providers";
import { ClassCreatePage } from "@/routes/classes/create";

import { ThemeProvider } from "@emotion/react";
import "@refinedev/antd/dist/reset.css";
import { Logo } from "./components";
import { MUISider } from "./components/layout/customSider";
import { accessControlProvider } from "./providers/accessControl";
import {
  CalendarCreatePage,
  // CalendarCreatePage,
  CalendarEditPage,
  CalendarPageWrapper,
  CalendarShowPage,
} from "./routes/calendar";
import { ClassEditPage, CompanyListPage } from "./routes/classes";
import { ClassShowPage } from "./routes/classes/show";
import { StudentShowPage, StudentsListPage } from "./routes/contacts/students";
import { TeachersListPage } from "./routes/contacts/teachers/list";
import { TeacherShowPage } from "./routes/contacts/teachers/show";
import { DashboardPage } from "./routes/dashboard";
import { ForgotPasswordPage } from "./routes/forgot-password";
import { LoginPage } from "./routes/login";
import { RegisterPage } from "./routes/register";
import { UpdatePasswordPage } from "./routes/update-password";
import "./styles";
import { CustomConfig, MaterialUIDarkTheme } from "./styles/dark";
import "./utilities/init-dayjs";
const App: React.FC = () => {
  return (
    <ThemeProvider theme={MaterialUIDarkTheme}>
      <BrowserRouter>
        <ConfigProvider theme={CustomConfig}>
          <AntdApp>
            {/* <DevtoolsProvider> */}
            <Refine
              authProvider={authProvider}
              dataProvider={{
                default: localDataProvider,
                local: localDataProvider,
                rest: loginProvider,
                upload: uploadProvider,
                security: securityGraphqlProvider,
              }}
              // liveProvider={liveProvider}
              accessControlProvider={accessControlProvider}
              routerProvider={routerProvider}
              resources={resources}
              notificationProvider={useNotificationProvider}
              options={{
                liveMode: "auto",
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "jGI9pf-4SnyBA-voKFI6",
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-layout"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <ThemedLayoutV2
                        Sider={MUISider}
                        Header={Header}
                        Title={({ collapsed }) => (
                          <ThemedTitleV2
                            wrapperStyles={{ fontSize: "15px" }}
                            collapsed={collapsed}
                            icon={<Logo />}
                            text="Study Corner"
                          />
                        )}
                      >
                        <CanAccess>
                          <Outlet />
                        </CanAccess>
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                  <Route index element={<DashboardPage />} />
                  <Route
                    path="/events"
                    element={
                      <CalendarPageWrapper>
                        <Outlet />
                      </CalendarPageWrapper>
                    }
                  >
                    <Route index element={null} />
                    <Route path="show/:id" element={<CalendarShowPage />} />
                    <Route path="edit/:id" element={<CalendarEditPage />} />
                    <Route path="create" element={<CalendarCreatePage />} />
                  </Route>

                  <Route
                    path="/classes"
                    element={
                      <CompanyListPage>
                        <Outlet />
                      </CompanyListPage>
                    }
                  >
                    <Route path="create" element={<ClassCreatePage />} />
                  </Route>
                  <Route
                    path="/classes/edit/:id"
                    element={<ClassEditPage />}
                  ></Route>
                  <Route
                    path="/classes/show/:id"
                    element={<ClassShowPage />}
                  ></Route>

                  <Route path="/people" element={<Outlet />}>
                    <Route
                      path="students"
                      element={
                        <StudentsListPage>
                          <Outlet />
                        </StudentsListPage>
                      }
                    >
                      <Route index element={null} />
                      <Route path="show/:id" element={<StudentShowPage />} />
                      {/* <Route
                        path="create"
                        element={
                          <ContactCreatePage>
                            <Outlet />
                          </ContactCreatePage>
                        }
                      >
                      </Route> */}
                    </Route>
                    <Route
                      path="teachers"
                      element={
                        <TeachersListPage>
                          <Outlet />
                        </TeachersListPage>
                      }
                    >
                      <Route path="show/:id" element={<TeacherShowPage />} />
                    </Route>
                  </Route>

                  <Route path="/administration" element={<Outlet />}>
                    <Route path="settings" element={null} />
                    <Route path="audit-log" element={null} />
                  </Route>
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
                <Route
                // element={
                //   <Authenticated
                //     key="authenticated-auth"
                //     fallback={<Outlet />}
                //   >
                //     <NavigateToResource resource="dashboard" />
                //   </Authenticated>
                // }
                >
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route
                    path="/forgot-password"
                    element={<ForgotPasswordPage />}
                  />
                  <Route
                    path="/update-password"
                    element={<UpdatePasswordPage />}
                  />
                </Route>
              </Routes>
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            {/* <DevtoolsPanel /> */}
            {/* </DevtoolsProvider> */}
          </AntdApp>
        </ConfigProvider>
      </BrowserRouter>
    </ThemeProvider>
    // </AlgoliaSearchWrapper>
  );
};

export default App;
