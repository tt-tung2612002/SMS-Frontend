import type { IResourceItem } from "@refinedev/core";

import {
  CalendarOutlined,
  ContainerOutlined,
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
    list: "/calendar",
    create: "/calendar/create",
    edit: "/calendar/edit/:id",
    show: "/calendar/show/:id",
    meta: {
      label: "Calendar",
      icon: <CalendarOutlined />,
    },
  },
  // {
  //   name: "scrumboard",
  //   meta: {
  //     label: "Scrumboard",
  //     icon: <ProjectOutlined />,
  //   },
  // },
  // {
  //   name: "tasks",
  //   list: "/scrumboard/kanban",
  //   create: "/scrumboard/kanban/create",
  //   edit: "/scrumboard/kanban/edit/:id",
  //   meta: {
  //     label: "Project Kanban",
  //     parent: "scrumboard",
  //   },
  // },
  // {
  //   name: "taskStages",
  //   create: "/scrumboard/kanban/stages/create",
  //   edit: "/scrumboard/kanban/stages/edit/:id",
  //   list: "/scrumboard/kanban",
  //   meta: {
  //     hide: true,
  //   },
  // },
  // {
  //   name: "deals",
  //   list: "/scrumboard/sales",
  //   create: "/scrumboard/sales/create",
  //   edit: "/scrumboard/sales/edit/:id",
  //   meta: {
  //     label: "Sales Pipeline",
  //     parent: "scrumboard",
  //   },
  // },
  // {
  //   name: "deals",
  //   identifier: "finalize-deals",
  //   edit: "/scrumboard/sales/:id/finalize",
  //   meta: {
  //     hide: true,
  //   },
  // },
  // {
  //   name: "dealStages",
  //   create: "/scrumboard/sales/stages/create",
  //   edit: "/scrumboard/sales/stages/edit/:id",
  //   list: "/scrumboard/sales",
  //   meta: {
  //     hide: true,
  //   },
  // },
  {
    name: "classes",
    list: "/classes",
    show: "/classes/:id",
    create: "/classes/create",
    edit: "/classes/edit/:id",
    meta: {
      label: "Class Management",
      icon: <ShopOutlined />,
    },
  },
  // {
  //   name: "companies",
  //   identifier: "sales-companies",
  //   create: "/scrumboard/sales/create/company/create",
  //   meta: {},
  // },
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
    name: "quotes",
    list: "/quotes",
    create: "/quotes/create",
    edit: "/quotes/edit/:id",
    show: "/quotes/show/:id",
    meta: {
      label: "Cost Management",
      icon: <ContainerOutlined />,
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
