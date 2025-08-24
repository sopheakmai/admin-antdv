const routerModules = import.meta.glob([
  "~/pages/**/*.vue",
  "!~/pages/**/*copy.vue",
  "!~/pages/**/component",
  "!~/pages/**/components",
  "!~/pages/**/composables",
  "!~/pages/**/hooks",
  "!~/pages/**/locales",
  "!~/pages/**/modules",
  "!~/pages/**/plugins",
  "!~/pages/**/tests",
  "!~/pages/**/test",
  "!~/pages/common",
]);

export const basicRouteMap = {
  // Used in iframe mode
  Iframe: () => import("~/layouts/components/iframe-view.vue"),
  // Generally used for pages with subsets
  RouteView: () => import("~/layouts/components/route-view.vue"),
  // Error page
  ComponentError: () => import("~/layouts/components/component-error.vue"),
  // Empty page
  EmptyView: () => import("~/layouts/components/empty-view.vue"),
};

function checkEager(module: any) {
  if (typeof module === "object" && "default" in module)
    return module.default;

  return module;
}
export function getRouterModule(path?: string): any {
  if (!path)
    return basicRouteMap.ComponentError;
  // Check if exists in basicRouteMap
  if (path in basicRouteMap)
    return (basicRouteMap as any)[path];

  // Check if it starts with /
  if (path.startsWith("/"))
    path = path.slice(1);
  // Assemble data format
  const fullPath = `/src/pages/${path}.vue`;
  const fullPathIndex = `/src/pages/${path}/index.vue`;
  if (fullPathIndex in routerModules)
    return checkEager(routerModules[fullPathIndex]);

  // Return plugin info
  return checkEager(routerModules[fullPath]);
}

export default routerModules;
