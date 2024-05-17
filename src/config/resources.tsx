import type { IResourceItem } from "@refinedev/core";

import {
  CalendarOutlined,
  CrownOutlined,
  DashboardOutlined,
  SettingOutlined,
  ShopOutlined,
  SolutionOutlined,
  TeamOutlined
} from "@ant-design/icons";

const globalStyleIcon = {
  fontSize: "18px",
};

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <DashboardOutlined style={globalStyleIcon} />,
    },
  },
  {
    name: "events",
    list: "/events",
    create: "/events/create",
    edit: "/events/edit/:id",
    show: "/events/show/:id",
    meta: {
      label: "Calendar",
      icon: <CalendarOutlined style={globalStyleIcon} />,
    },
  },
  {
    name: "classes",
    list: "/classes",
    create: "/classes/create",
    show: "/classes/show/:id",
    edit: "/classes/edit/:id",
    meta: {
      label: "Classes",
      icon: <ShopOutlined style={globalStyleIcon} />,
    },
  },
  {
    name: "people",
    meta: {
      label: "Human Resources",
      icon: <SolutionOutlined style={globalStyleIcon} />,
    },
  },
  {
    name: "students",
    list: "/people/students",
    create: "/people/students/create",
    edit: "/people/students/edit/:id",
    show: "/people/students/show/:id",
    meta: {
      label: "Students",
      icon: <TeamOutlined style={globalStyleIcon} />,
      parent: "people",
    },
  },
  {
    name: "teachers",
    list: "/people/teachers",
    create: "/people/teachers/create",
    edit: "/people/teachers/edit/:id",
    show: "/people/teachers/show/:id",
    meta: {
      parent: "people",
      label: "Teacher",
      icon: <TeamOutlined style={globalStyleIcon} />,
    },
  },
  {
    name: "administration",
    meta: {
      label: "Administration",
      icon: <CrownOutlined style={globalStyleIcon} />,
    },
  },
  {
    name: "settings",
    list: "/administration/settings",
    meta: {
      label: "Settings",
      parent: "administration",
      icon: <SettingOutlined style={globalStyleIcon} />,
    },
  },
  {
    name: "audits",
    list: "/administration/audit-log",
    meta: {
      label: "Audit Log",
      parent: "administration",
    },
  },
];
