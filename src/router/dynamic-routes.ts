import type { RouteRecordRaw } from "vue-router";
import { basicRouteMap } from "./router-modules";
import { AccessEnum } from "~@/utils/constant";

export default [
  {
    path: "/dashboard",
    redirect: "/dashboard/analysis",
    name: "Dashboard",
    meta: {
      title: "Dashboard",
      icon: "DashboardOutlined",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/dashboard/analysis",
        name: "DashboardAnalysis",
        component: () => import("~/pages/dashboard/analysis/index.vue"),
        meta: {
          title: "Analysis page",
        },
      },
      {
        path: "/dashboard/monitor",
        name: "DashboardMonitor",
        component: () => import("~/pages/dashboard/monitor/index.vue"),
        meta: {
          title: "Monitoring page",
        },
      },
      {
        path: "/dashboard/workplace",
        name: "DashboardWorkplace",
        component: () => import("~/pages/dashboard/workplace/index.vue"),
        meta: {
          title: "Monitoring page",
        },
      },
    ],
  },
  {
    path: "/form",
    redirect: "/form/basic-form",
    name: "Form",
    meta: {
      title: "Form page",
      icon: "FormOutlined",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/form/basic-form",
        name: "FormBasic",
        component: () => import("~/pages/form/basic-form/index.vue"),
        meta: {
          title: "Basic form",
          locale: "menu.form.basic-form",
        },
      },
    ],
  },
  {
    path: "/profile",
    name: "profile",
    redirect: "/profile/basic",
    meta: {
      title: "menu.profile",
      icon: "ProfileOutlined",
      locale: "menu.profile",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/profile/basic",
        name: "ProfileBasic",
        component: () => import("~/pages/profile/basic/index.vue"),
        meta: {
          title: "menu.profile.basic",
          locale: "menu.profile.basic",
        },
      },
    ],
  },
  {
    path: "/access",
    redirect: "/access/common",
    name: "Access",
    meta: {
      title: "Permission module",
      icon: "ClusterOutlined",
    },
    children: [
      {
        path: "/access/common",
        name: "AccessCommon",
        component: () => import("~/pages/access/common.vue"),
        meta: {
          title: "General permissions",
        },
      },
      {
        path: "/access/user",
        name: "AccessUser",
        component: () => import("~/pages/access/user.vue"),
        meta: {
          title: "Regular user",
          access: [AccessEnum.USER, AccessEnum.ADMIN],
        },
      },
      {
        path: "/access/admin",
        name: "AccessAdmin",
        component: () => import("~/pages/access/admin.vue"),
        meta: {
          title: "Administrator",
          access: [AccessEnum.ADMIN],
        },
      },
    ],
  },
  {
    path: "/exception",
    redirect: "/exception/403",
    name: "Exception",
    meta: {
      title: "Exception page",
      icon: "WarningOutlined",
      locale: "menu.exception",
    },
    children: [
      {
        path: "/exception/403",
        name: "Exception403",
        component: () => import("~/pages/exception/403.vue"),
        meta: {
          title: "403",
          locale: "menu.exception.not-permission",
        },
      },
      {
        path: "/exception/404",
        name: "Exception404",
        component: () => import("~/pages/exception/404.vue"),
        meta: {
          title: "404",
          locale: "menu.exception.not-find",
        },
      },
      {
        path: "/exception/500",
        name: "Exception500",
        component: () => import("~/pages/exception/500.vue"),
        meta: {
          title: "500",
          locale: "menu.exception.server-error",
        },
      },
    ],
  },
  {
    path: "/list",
    redirect: "/list/card-list",
    name: "List",
    meta: {
      title: "List page",
      icon: "TableOutlined",
      locale: "menu.list",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/list/table-list",
        name: "ConsultTable",
        component: () => import("~/pages/list/table-list.vue"),
        meta: {
          title: "Query table",
          locale: "menu.list.consult-table",
        },
      },
    ],
  },
  {
    path: "/account",
    redirect: "/account/center",
    name: "Account",
    meta: {
      title: "Personal page",
      icon: "UserOutlined",
      locale: "menu.account",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/account/center",
        name: "AccountCenter",
        component: () => import("~/pages/account/center.vue"),
        meta: {
          title: "Personal homepage",
          locale: "menu.account.center",
        },
      },
      {
        path: "/account/settings",
        name: "AccountSettings",
        component: () => import("~/pages/account/settings.vue"),
        meta: {
          title: "Personal settings",
          locale: "menu.account.settings",
        },
      },
      {
        path: "/account/settings/:id",
        name: "AccountSettings1",
        component: () => import("~/pages/account/settings.vue"),
        meta: {
          title: "Personal settings1",
          locale: "menu.account.settings",
          hideInMenu: true,
          parentKeys: ["/account/settings"],
        },
      },
    ],
  },
] as RouteRecordRaw[];
