import type { GlobalToken } from "ant-design-vue/es/theme";
import { canUseDom, updateCSS } from "@/utils/helper";

// Native JavaScript replacement for lodash kebabCase function
function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function formatKey(key: string, prefixCls: string) {
  return `${prefixCls}${kebabCase(key)}`;
}
const prefixCls = "--pro-ant-";

const dynamicStyleMark = `${prefixCls}${Date.now()}-${Math.random()}`;

export function registerTokenToCSSVar(token: GlobalToken) {
  // TODO
  const variables: Record<string, any> = {};
  if (!token)
    return;

  for (const key in token) {
    const val = token[key as keyof GlobalToken];
    variables[formatKey(key, prefixCls)] = val;
  }
  const cssList = Object.keys(variables).map(key => `${key}: ${variables[key]};`);
  if (canUseDom()) {
    updateCSS(
      `:root {${cssList.join("\n")}}`,
      `${dynamicStyleMark}-dynamic-theme`,
    );
  }
}
