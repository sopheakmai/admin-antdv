import router from "@/router";

export function useCurrentRoute() {
  const currentRoute = router.currentRoute;
  const layoutMenuStore = useLayoutMenu();
  const { menuDataMap } = storeToRefs(layoutMenuStore);
  const pathsKeys = menuDataMap.value?.keys();
  const currentPath = currentRoute.value.path;
  // router.
  // Validate to check if it is inmenuItemthe middle of
  console.log("currentPath", currentPath, pathsKeys);
  return {
    currentRoute,
  };
}
