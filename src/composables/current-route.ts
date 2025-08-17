import router from "@/router";

export function useCurrentRoute() {
  const currentRoute = router.currentRoute;
  const layoutMenuStore = useLayoutMenu();
  const { menuDataMap } = storeToRefs(layoutMenuStore);
  const pathsKeys = menuDataMap.value?.keys();
  const currentPath = currentRoute.value.path;
  // Check if it's in menuItem through validation
  console.log("currentPath", currentPath, pathsKeys);
  return {
    currentRoute,
  };
}
