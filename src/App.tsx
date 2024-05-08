import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { ErrorComponent, useNotificationProvider } from "@refinedev/antd";
import { Authenticated, Refine } from "@refinedev/core";
import routerProvider, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";

import { App as AntdApp, ConfigProvider } from "antd";

import { resources, themeConfig } from "@/config";
import {
  authProvider,
  localDataProvider,
  loginProvider,
  refineProvider,
} from "@/providers";
import { CompanyCreatePage } from "@/routes/classes/create";

import { AlgoliaSearchWrapper, Layout } from "./components";
import { accessControlProvider } from "./providers/accessControl";
import { AuditLogPage, SettingsPage } from "./routes/administration";
import {
  CalendarCreatePage,
  // CalendarCreatePage,
  CalendarEditPage,
  CalendarPageWrapper,
  CalendarShowPage,
} from "./routes/calendar";
import { CompanyEditPage, CompanyListPage } from "./routes/classes";
import { ContactShowPage, StudentsListPage } from "./routes/contacts/students";
import { TeachersListPage } from "./routes/contacts/teachers/list";
import { DashboardPage } from "./routes/dashboard";
import { ForgotPasswordPage } from "./routes/forgot-password";
import { LoginPage } from "./routes/login";
import { RegisterPage } from "./routes/register";
import { UpdatePasswordPage } from "./routes/update-password";

import "@refinedev/antd/dist/reset.css";
import "./styles/antd.css";
import "./styles/fc.css";
import "./styles/index.css";
import "./utilities/init-dayjs";

const App: React.FC = () => {
  // This hook is used to automatically login the user.
  // We use this hook to skip the login page and demonstrate the application more quickly.
  // const { loading } = useAutoLoginForDemo();

  // if (loading) {
  //   return <FullScreenLoading />;
  // }

  return (
    <AlgoliaSearchWrapper>
      <BrowserRouter>
        <ConfigProvider theme={themeConfig}>
          {/* <ConfigProvider theme={ RefineThemes.Red}> */}
          <AntdApp>
            {/* <DevtoolsProvider> */}
            <Refine
              authProvider={authProvider}
              dataProvider={{
                refine: refineProvider,
                default: localDataProvider,
                local: localDataProvider,
                rest: loginProvider,
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
                      <Layout>
                        <Outlet />
                      </Layout>
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
                    <Route path="create" element={<CompanyCreatePage />} />
                  </Route>
                  <Route
                    path="/classes/edit/:id"
                    element={<CompanyEditPage />}
                  />

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
                      <Route path="show/:id" element={<ContactShowPage />} />
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
                    ></Route>
                  </Route>

                  <Route path="/administration" element={<Outlet />}>
                    <Route path="settings" element={<SettingsPage />} />
                    <Route path="audit-log" element={<AuditLogPage />} />
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
    </AlgoliaSearchWrapper>
  );
};

export default App;
