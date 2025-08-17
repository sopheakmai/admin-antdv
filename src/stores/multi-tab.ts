import type { RouteLocationNormalizedLoaded } from "vue-router";

import router from "~@/router";

const allowList = ["/login", "/404", "/403"];

export type MultiTabItem = {
  path: string;
  fullPath: string;
  title: string;
  name?: string;
  icon?: string;
  locale?: string;
  // Check if current is a fixed tab
  affix?: boolean;
  loading?: boolean;
};

export const useMultiTab = defineStore("multi-tab", () => {
  const list = ref<MultiTabItem[]>([]);
  const activeKey = shallowRef();
  const refreshItem = ref<MultiTabItem | null>(null);
  const appStore = useAppStore();
  const cacheList = ref<string[]>([]);
  const message = useMessage();
  const addItem = (route: RouteLocationNormalizedLoaded) => {
    if (!route)
      return;
    // Check if it's a redirect address, if so, don't process
    if (route.path.startsWith("/redirect") || route.path.startsWith("/common"))
      return;
    if (route.path === "/")
      return;
    if (allowList.includes(route.path))
      return;
    // Set current loading to false
    if (refreshItem.value) {
      // Add a cancel delay
      setTimeout(() => {
        if (refreshItem.value) {
          refreshItem.value.loading = false;
          refreshItem.value = null;
        }
      }, 500);
    }
    if (list.value.some(item => item.fullPath === route.fullPath)) {
      if (!cacheList.value.includes(route?.name as string) && appStore.layoutSetting.keepAlive) {
        if (route.meta.keepAlive && route.name)
          cacheList.value.push(route.name as string);
      }
      return;
    }
    const item: MultiTabItem = {
      path: route.path,
      fullPath: route.fullPath,
      title: route.meta.title as string,
      name: route.name as string,
      icon: route.meta.icon,
      affix: route.meta.affix,
      locale: route.meta.locale,
    };
    if (!cacheList.value.includes(item?.name as string) && appStore.layoutSetting.keepAlive) {
      if (route.meta.keepAlive && route.name)
        cacheList.value.push(route.name as string);
    }

    list.value.push(item);
  };

  const close = (key: string) => {
    // Check if length is less than or equal to 1, if so, it cannot be closed
    if (list.value.length <= 1) {
      message.error("不能关闭最后一个标签页");
      return;
    }
    const index = list.value.findIndex(item => item.fullPath === key);
    if (index < 0) {
      message.error("当前页签不存在无法关闭");
      return;
    }
    const item = list.value[index];
    // Need to check if current tab is selected, if so, also need to check if current is the first tab, if so, need to activate previous tab, if not, need to activate next tab
    if (item.fullPath === activeKey.value) {
      const newItem = index === 0 ? list.value[index + 1] : list.value[index - 1];
      activeKey.value = newItem.fullPath;
      router.push(newItem.fullPath);
    }
    // Remove cache
    if (appStore.layoutSetting.keepAlive && item.name)
      cacheList.value = cacheList.value.filter(name => name !== item.name);

    list.value = list.value.filter(item => item.fullPath !== key);
  };

  const refresh = (key: string) => {
    const item = list.value.find(item => item.fullPath === key);
    if (item) {
      cacheList.value = cacheList.value.filter(name => name !== item.name);
      item.loading = true;
      refreshItem.value = item;
      router.replace(`/redirect/${encodeURIComponent(item.fullPath)}`);
    }
  };

  const switchTab = (key: any) => {
    if (key === activeKey.value)
      return;
    router.push(key);
  };

  const closeOther = (key: string) => {
    switchTab(key);
    list.value.forEach((item) => {
      if (item.affix)
        return;
      if (item.fullPath === key)
        return;
      close(item.fullPath);
    });
  };

  const closeLeft = (key: string) => {
    switchTab(key);

    const index = list.value.findIndex(item => item.fullPath === key);
    const leftList = list.value.slice(0, index);
    leftList.forEach((item) => {
      if (item.affix)
        return;
      close(item.fullPath);
    });
  };

  const closeRight = (key: string) => {
    switchTab(key);

    const index = list.value.findIndex(item => item.fullPath === key);
    const rightList = list.value.slice(index + 1);
    rightList.forEach((item) => {
      if (item.affix)
        return;
      close(item.fullPath);
    });
  };

  const clear = () => {
    list.value = [];
    cacheList.value = [];
    activeKey.value = undefined;
    refreshItem.value = null;
  };
  return {
    list,
    activeKey,
    cacheList,
    close,
    clear,
    closeLeft,
    closeRight,
    closeOther,
    refresh,
    switchTab,
    addItem,
  };
});
