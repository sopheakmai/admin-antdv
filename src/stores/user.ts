import { logoutApi } from "~@/api/common/login";
// import { getRouteMenusApi } from "~@/api/common/menu";
import type { UserInfo } from "~@/api/common/user";
import { getUserInfoApi } from "~@/api/common/user";
import type { MenuData } from "~@/layouts/basic-layout/typing";
import { rootRoute } from "~@/router/constant";
import { generateFlatRoutes, generateRoutes, generateTreeRoutes } from "~@/router/generate-route";
import { DYNAMIC_LOAD_WAY, DynamicLoadEnum } from "~@/utils/constant";

const menuDataStatic = [
  {
    id: 2,
    parentId: null,
    title: "Analysis page",
    icon: "DashboardOutlined",
    component: "/dashboard/analysis",
    path: "/dashboard/analysis",
    name: "DashboardAnalysis",
    keepAlive: true,
    locale: "menu.dashboard.analysis",
  },
  {
    id: 1,
    parentId: null,
    title: "Dashboard",
    icon: "DashboardOutlined",
    component: "RouteView",
    redirect: "/dashboard/analysis",
    path: "/dashboard",
    name: "Dashboard",
    locale: "menu.dashboard",
  },
  {
    id: 3,
    parentId: null,
    title: "Form page",
    icon: "FormOutlined",
    component: "RouteView",
    redirect: "/form/basic",
    path: "/form",
    name: "Form",
    locale: "menu.form",
  },
  {
    id: 19,
    parentId: null,
    title: "Exception page",
    icon: "WarningOutlined",
    component: "RouteView",
    redirect: "/exception/403",
    path: "/exception",
    name: "Exception",
    locale: "menu.exception",
  },
  {
    id: 20,
    parentId: 19,
    path: "/exception/403",
    title: "403",
    name: "403",
    component: "/exception/403",
    locale: "menu.exception.not-permission",
  },
  {
    id: 21,
    parentId: 19,
    path: "/exception/404",
    title: "404",
    name: "404",
    component: "/exception/404",
    locale: "menu.exception.not-find",
  },
  {
    id: 22,
    parentId: 19,
    path: "/exception/500",
    title: "500",
    name: "500",
    component: "/exception/500",
    locale: "menu.exception.server-error",
  },
  {
    id: 26,
    parentId: null,
    title: "List page",
    icon: "TableOutlined",
    component: "RouteView",
    redirect: "/list/table-list",
    path: "/list",
    name: "List",
    locale: "menu.list",
  },
  {
    id: 28,
    parentId: null,
    title: "Details page",
    icon: "ProfileOutlined",
    component: "RouteView",
    redirect: "/profile/basic",
    path: "/profile",
    name: "Profile",
    locale: "menu.profile",
  },
  {
    id: 29,
    parentId: 28,
    path: "/profile/basic",
    title: "Basic details page",
    name: "ProfileBasic",
    component: "/profile/basic/index",
    locale: "menu.profile.basic",
  },
  {
    id: 35,
    parentId: 28,
    path: "/profile/advanced",
    title: "Advanced details page",
    name: "ProfileAdvanced",
    component: "/profile/advanced/index",
    locale: "menu.profile.advanced",
  },
  {
    id: 4,
    parentId: 3,
    title: "Basic form",
    icon: "FormOutlined",
    component: "/form/basic-form/index",
    path: "/form/basic-form",
    name: "FormBasic",
    keepAlive: false,
    locale: "menu.form.basic-form",
  },
  {
    id: 36,
    parentId: null,
    title: "Personal page",
    icon: "UserOutlined",
    component: "RouteView",
    redirect: "/account/center",
    path: "/account",
    name: "Account",
    locale: "menu.account",
  },
  {
    id: 37,
    parentId: 36,
    path: "/account/center",
    title: "Personal center",
    name: "AccountCenter",
    component: "/account/center",
    locale: "menu.account.center",
  },
  {
    id: 38,
    parentId: 36,
    path: "/account/settings",
    title: "Personal settings",
    name: "AccountSettings",
    component: "/account/settings",
    locale: "menu.account.settings",
  },
  {
    id: 41,
    parentId: 26,
    path: "/list/table-list",
    title: "Query table",
    name: "ConsultTable",
    component: "/list/table-list",
    locale: "menu.list.consult-table",
  },
  {
    id: 42,
    parentId: 1,
    title: "Monitoring page",
    component: "/dashboard/monitor",
    path: "/dashboard/monitor",
    name: "DashboardMonitor",
    keepAlive: true,
    locale: "menu.dashboard.monitor",
  },
  {
    id: 43,
    parentId: 1,
    title: "Workbench",
    component: "/dashboard/workplace",
    path: "/dashboard/workplace",
    name: "DashboardWorkplace",
    keepAlive: true,
    locale: "menu.dashboard.workplace",
  },
  {
    id: 45,
    parentId: 9,
    path: "/menu/menu4",
    redirect: "/menu/menu4/menu1",
    title: "Menu2-1",
    component: "RouteView",
    locale: "menu.menu.menu4",
  },
  {
    id: 46,
    parentId: 45,
    path: "/menu/menu4/menu1",
    component: "/menu/menu-2-1/menu1",
    title: "Menu2-1-1",
    keepAlive: true,
    locale: "menu.menu4.menu1",
  },
  {
    id: 47,
    parentId: 45,
    path: "/menu/menu4/menu2",
    component: "/menu/menu-2-1/menu2",
    title: "Menu2-1-2",
    keepAlive: true,
    locale: "menu.menu4.menu2",
  },
];
export const useUserStore = defineStore("user", () => {
  const routerData = shallowRef();
  const menuData = shallowRef<MenuData>([]);
  const userInfo = shallowRef<UserInfo>();
  const token = useAuthorization();
  const avatar = computed(() => userInfo.value?.avatar);
  const nickname = computed(() => userInfo.value?.nickname ?? userInfo.value?.username);
  const roles = computed(() => userInfo.value?.roles);

  const getMenuRoutes = async () => {
    // const { data } = await getRouteMenusApi();
    return generateTreeRoutes(menuDataStatic ?? []);
  };

  const generateDynamicRoutes = async () => {
    const dynamicLoadWay = DYNAMIC_LOAD_WAY === DynamicLoadEnum.BACKEND ? getMenuRoutes : generateRoutes;
    const { menuData: treeMenuData, routeData } = await dynamicLoadWay();

    menuData.value = treeMenuData;

    routerData.value = {
      ...rootRoute,
      children: generateFlatRoutes(routeData),
    };
    return routerData.value;
  };

  // Get user information
  const getUserInfo = async () => {
    // Get user information
    const { data } = await getUserInfoApi();
    userInfo.value = data;
  };

  const logout = async () => {
    // Log out
    // 1. Clear user information
    try {
      await logoutApi();
    }
    finally {
      token.value = null;
      userInfo.value = undefined;
      routerData.value = undefined;
      menuData.value = [];
    }
  };

  return {
    userInfo,
    roles,
    getUserInfo,
    logout,
    routerData,
    menuData,
    generateDynamicRoutes,
    avatar,
    nickname,
  };
});
