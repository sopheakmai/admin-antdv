import type { ExtractPropTypes, VNodeChild } from "vue";
import { arrayType, booleanType, eventType, numberType, stringType } from "@/utils/helper";

export type CheckedType = boolean | string | number;
export type MenuData = MenuDataItem[];

export type Key = string | number;

export type MenuDataItem = {
  // Uniqueid
  id?: string | number;
  // Title
  title: string | (() => VNodeChild);
  // Icon
  icon?: string | (() => VNodeChild);
  // Address
  path: string;
  // Which component is bound
  component?: string;
  // Subset menu
  children?: MenuDataItem[];
  // Redirect address
  redirect?: string;
  // Which are fixed tabs
  affix?: boolean;
  // Parent menu'sid
  parentId?: string | number | null;
  // In the same routename，Mainly used for keeping alive
  name?: string;
  // Hide current menu
  hideInMenu?: boolean;
  // If hidden is used，then when clicking the current menu，you can use the parent'skey
  parentKeys?: string[];
  // Applyiframe
  isIframe?: boolean;
  // If the current isiframemode，there needs to be a jumpurlsupport，It cannot be the same aspathrepeated，pathor for the route
  url?: string;
  // Does breadcrumb exist
  hideInBreadcrumb?: boolean;
  // Do you need to display all submenus
  hideChildrenInMenu?: boolean;
  // Keep alive
  keepAlive?: boolean;
  // This contains all parent elements
  matched?: MenuDataItem[];
  // Full link jump mode
  target?: "_blank" | "_self" | "_parent";
  // Multilingual configuration
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
  // Expand menu
  openKeys: arrayType<string[]>(),
  // Selected menu
  selectedKeys: arrayType<string[]>(),
  copyright: stringType(),
  ...proLayoutEvents,
};

export type ProLayoutProps = Partial<ExtractPropTypes<typeof proLayoutProps>>;
