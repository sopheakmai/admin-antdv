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
      {
        path: "/form/step-form",
        name: "FormStep",
        component: () => import("~/pages/form/step-form/index.vue"),
        meta: {
          title: "Step form",
          locale: "menu.form.step-form",
        },
      },
      {
        path: "/form/advanced-form",
        name: "FormAdvanced",
        component: () => import("~/pages/form/advanced-form/index.vue"),
        meta: {
          title: "Advanced form",
          locale: "menu.form.advanced-form",
        },
      },
    ],
  },
  {
    path: "/menu",
    redirect: "/menu/menu1",
    name: "Menu",
    meta: {
      title: "Menu",
      icon: "BarsOutlined",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/menu/menu1",
        name: "MenuMenu11",
        component: () => import("~/pages/menu/menu1.vue"),
        meta: {
          title: "Menu1",
        },
      },
      {
        path: "/menu/menu2",
        name: "MenuMenu12",
        component: () => import("~/pages/menu/menu2.vue"),
        meta: {
          title: "Menu2",
        },
      },
      {
        path: "/menu/menu3",
        redirect: "/menu/menu3/menu1",
        name: "MenuMenu1-1",
        meta: {
          title: "Menu1-1",
        },
        children: [
          {
            path: "/menu/menu3/menu1",
            name: "MenuMenu111",
            component: () => import("~/pages/menu/menu-1-1/menu1.vue"),
            meta: {
              title: "Menu1-1-1",
            },
          },
          {
            path: "/menu/menu3/menu2",
            name: "MenuMenu112",
            component: () => import("~/pages/menu/menu-1-1/menu2.vue"),
            meta: {
              title: "Menu1-1-2",
            },
          },
        ],
      },
      {
        path: "/menu/menu4",
        redirect: "/menu/menu4/menu1",
        name: "MenuMenu2-1",
        meta: {
          title: "Menu2-1",
        },
        children: [
          {
            path: "/menu/menu4/menu1",
            name: "MenuMenu211",
            component: () => import("~/pages/menu/menu-2-1/menu1.vue"),
            meta: {
              title: "Menu2-1-1",
            },
          },
          {
            path: "/menu/menu4/menu2",
            name: "MenuMenu212",
            component: () => import("~/pages/menu/menu-2-1/menu2.vue"),
            meta: {
              title: "Menu2-1-2",
            },
          },
        ],
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
  // Result page
  {
    path: "/result",
    redirect: "/result/success",
    name: "Result",
    meta: {
      title: "Result page",
      icon: "CheckCircleOutlined",
      locale: "menu.result",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "/result/success",
        name: "ResultSuccess",
        component: () => import("~/pages/result/success.vue"),
        meta: {
          title: "Success page",
          locale: "menu.result.success",
        },
      },
      {
        path: "/result/fail",
        name: "ResultFail",
        component: () => import("~/pages/result/fail.vue"),
        meta: {
          title: "Failure page",
          locale: "menu.result.fail",
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
        path: "/list/card-list",
        name: "CardList",
        component: () => import("~/pages/list/card-list.vue"),
        meta: {
          title: "Card list",
          locale: "menu.list.card-list",
        },
      },
      {
        path: "/list/table-list",
        name: "ConsultTable",
        component: () => import("~/pages/list/table-list.vue"),
        meta: {
          title: "Query table",
          locale: "menu.list.consult-table",
        },
      },
      {
        path: "/list/crud-table",
        name: "CrudTable",
        component: () => import("~/pages/list/crud-table.vue"),
        meta: {
          title: "CRUD table",
          locale: "menu.list.crud-table",
        },
      },
      {
        path: "/list/basic-list",
        name: "BasicList",
        component: () => import("~/pages/list/basic-list.vue"),
        meta: {
          title: "Standard list",
          locale: "menu.list.basic-list",
        },
      },
      {
        path: "/list/search-list",
        name: "SearchList",
        component: () => import("~/pages/list/search-list/index.vue"),
        meta: {
          title: "Search list",
          locale: "menu.list.search-list",
        },
        redirect: "/list/search-list/articles",
        children: [
          {
            path: "/list/search-list/articles",
            name: "SearchListArticles",
            component: () => import("~/pages/list/search-list/articles.vue"),
            meta: {
              title: "Search list（Article）",
              locale: "menu.list.search-list.articles",
            },
          },
          {
            path: "/list/search-list/projects",
            name: "SearchListProjects",
            component: () => import("~/pages/list/search-list/projects.vue"),
            meta: {
              title: "Search list（Project）",
              locale: "menu.list.search-list.projects",
            },
          },
          {
            path: "/list/search-list/applications",
            name: "SearchListApplications",
            component: () => import("~/pages/list/search-list/applications.vue"),
            meta: {
              title: "Search list（Application）",
              locale: "menu.list.search-list.applications",
            },
          },
        ],
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
