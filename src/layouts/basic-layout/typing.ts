import type { ExtractPropTypes, VNodeChild } from "vue";

import { arrayType, booleanType, eventType, numberType, stringType } from "@v-c/utils";

export type CheckedType = boolean | string | number;
export type MenuData = MenuDataItem[];

export type Key = string | number;

export type MenuDataItem = {
  // Unique ID
  id?: string | number;
  // Title
  title: string | (() => VNodeChild);
  // Icon
  icon?: string | (() => VNodeChild);
  // Path
  path: string;
  // Which component to bind
  component?: string;
  // Sub menus
  children?: MenuDataItem[];
  // Redirect path
  redirect?: string;
  // Which are fixed tabs
  affix?: boolean;
  // Parent menu ID
  parentId?: string | number | null;
  // Name in the same route, mainly used for keep-alive
  name?: string;
  // Whether to hide current menu
  hideInMenu?: boolean;
  // If hidden is used, when clicking current menu, can use parent key
  parentKeys?: string[];
  // Whether to use iframe
  isIframe?: boolean;
  // If current is iframe mode, need a jump URL support, cannot duplicate with path, path is still for routing
  url?: string;
  // Whether breadcrumb exists
  hideInBreadcrumb?: boolean;
  // Whether to show all sub menus
  hideChildrenInMenu?: boolean;
  // Whether to keep alive
  keepAlive?: boolean;
  // Contains all parent elements
  matched?: MenuDataItem[];
  // Full link jump mode
  target?: "_blank" | "_self" | "_parent";
  // Multi-language configuration
  locale?: string;
};

export type LayoutType = "mix" | "side" | "top";

export type ThemeType = "light" | "dark" | "inverted";

export type ContentWidth = "Fluid" | "Fixed";

export type MenuSelectEvent = {
  item: any;
  key: string;
  selectedKeys: string[];
};

const proLayoutEvents = {
  "onUpdate:openKeys": eventType<(val: string[]) => void>(),
  "onUpdate:selectedKeys": eventType<(val: string[]) => void>(),
  "onMenuSelect": eventType<(data: MenuSelectEvent) => void>(),
};

export const proLayoutProps = {
  layout: stringType<LayoutType>("mix"),
  logo: stringType(),
  title: stringType(),
  collapsedWidth: numberType(48),
  siderWidth: numberType(234),
  headerHeight: numberType<number>(48),
  menuData: arrayType<MenuData>(),
  fixedHeader: booleanType<boolean>(false),
  fixedSider: booleanType<boolean>(true),
  splitMenus: booleanType(),
  collapsed: booleanType<boolean>(false),
  leftCollapsed: booleanType<boolean>(false),
  theme: stringType<ThemeType>("light"),
  onCollapsed: eventType<(collapsed: boolean) => void>(),
  isMobile: booleanType(),
  contentWidth: stringType<ContentWidth>(),
  header: booleanType<boolean>(true),
  footer: booleanType<boolean>(true),
  menu: booleanType<boolean>(true),
  menuHeader: booleanType<boolean>(true),
  // Expanded menu
  openKeys: arrayType<string[]>(),
  // Selected menu
  selectedKeys: arrayType<string[]>(),
  copyright: stringType(),
  ...proLayoutEvents,
};

export type ProLayoutProps = Partial<ExtractPropTypes<typeof proLayoutProps>>;
