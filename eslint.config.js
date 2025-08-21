import antfu from "@antfu/eslint-config";

export default antfu(
  {
    vue: true,
    unocss: true,
    formatters: true,
    typescript: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    unicorn: {
      "filename-case": ["error", {
        case: "kebabCase",
        ignore: ["README.md", /src\/locales\//],
      }],
    },
  },
  {
    ignores: [
      "types/auto-imports.d.ts",
      "types/components.d.ts",
      "public",
      "tsconfig.*.json",
      "tsconfig.json",
    ],
  },
  {
    rules: {
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": 0,
      "style/quote-props": 0,
      "unused-imports/no-unused-vars": 0,
      "ts/no-unused-expressions": 0,
      "perfectionist/sort-imports": "off",
      "perfectionist/sort-exports": "off",
      "perfectionist/sort-named-exports": "off",
      "ts/no-redeclare": "off",
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
    },
  },
);
