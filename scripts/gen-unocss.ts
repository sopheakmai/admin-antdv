import path from "node:path";
import process from "node:process";
import { theme } from "ant-design-vue";
import fsExtra from "fs-extra";

function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function camelCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : "")
    .replace(/^[A-Z]/, char => char.toLowerCase());
}

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);

function formatKey(key: string, prefixCls: string) {
  return `${prefixCls}${kebabCase(key)}`;
}
const prefixCls = "--pro-ant-";

const variables: {
  colors: Record<string, any>;
} = {
  colors: {},
};
let colorTheme = "";
for (const key in mapToken) {
  if (key.startsWith("color")) {
    const cssVar = formatKey(key, prefixCls);
    const colors = variables.colors;
    const themeKey = camelCase(key.slice(5));
    colors[themeKey] = `var(${cssVar})`;
    colorTheme += `${themeKey}\n`;
  }
}

fsExtra.outputFile(path.resolve(process.cwd(), "./themes/antd-uno-theme.json"), JSON.stringify(variables, null, 2));

fsExtra.outputFile(path.resolve(process.cwd(), "./themes/color-theme-var.md"), colorTheme);
