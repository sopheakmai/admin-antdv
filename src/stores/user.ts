import { logoutApi } from "~@/api/common/login";
import { getRouteMenusApi } from "~@/api/common/menu";
import type { UserInfo } from "~@/api/common/user";
import { getUserInfoApi } from "~@/api/common/user";
import type { MenuData } from "~@/layouts/basic-layout/typing";
import { rootRoute } from "~@/router/constant";
import { generateFlatRoutes, generateRoutes, generateTreeRoutes } from "~@/router/generate-route";
import { DYNAMIC_LOAD_WAY, DynamicLoadEnum } from "~@/utils/constant";

export const useUserStore = defineStore("user", () => {
  const routerData = shallowRef();
  const menuData = shallowRef<MenuData>([]);
  const userInfo = shallowRef<UserInfo>();
  const token = useAuthorization();
  const avatar = computed(() => userInfo.value?.avatar);
  const nickname = computed(() => userInfo.value?.nickname ?? userInfo.value?.username);
  const roles = computed(() => userInfo.value?.roles);

  const getMenuRoutes = async () => {
    const { data } = await getRouteMenusApi();
    return generateTreeRoutes(data ?? []);
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
