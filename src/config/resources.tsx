import type { IResourceItem } from "@refinedev/core";

import {
  CalendarOutlined,
  CrownOutlined,
  DashboardOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <DashboardOutlined />,
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
      icon: <CalendarOutlined />,
    },
  },
  {
    name: "classes",
    list: "/classes",
    create: "/classes/create",
    edit: "/classes/edit/:id",
    meta: {
      label: "Classes",
      icon: <ShopOutlined />,
    },
  },
  {
    name: "lessons",
    show: "/classes/edit/:id/lessons/:id",
  },
  {
    name: "people",
    meta: {
      label: "Human Resources",
      icon: <CrownOutlined />,
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
      icon: <TeamOutlined />,
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
      icon: <TeamOutlined />,
    },
  },
  {
    name: "administration",
    meta: {
      label: "Administration",
      icon: <CrownOutlined />,
    },
  },
  {
    name: "settings",
    list: "/administration/settings",
    meta: {
      label: "Settings",
      parent: "administration",
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
