import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";
import presetEase from "unocss-preset-ease";
import antdUnoTheme from "./themes/antd-uno-theme.json";

export default defineConfig({
  safelist: [
    "py-16px",
    "pb-16px",
  ],
  theme: {
    ...antdUnoTheme,
  },
  shortcuts: {
    "flex-inline-center": "inline-flex justify-center items-center",
    "flex-center": "flex justify-center items-center",
    "flex-start": "flex justify-start",
    "flex-end": "flex justify-end",
    "flex-std": "flex justify-center",
    "flex-ver": "flex items-center",
    "flex-vend": "flex items-end",
    "flex-jend": "flex justify-end",
    "flex-jcsb": "flex justify-between",
    "flex-col-vstart": "flex justify-start flex-col",
    "flex-col-vend": "flex justify-end flex-col",
    "flex-col-ver": "flex justify-center flex-col",
    "ell": "truncate text-truncate",
    "flex-col-std": "flex items-center flex-col",
    "flex-col-sstart": "flex items-start flex-col",
    "flex-col-send": "flex items-end flex-col",
    "flex-baseline": "flex self-baseline",
    "flex-ais": "flex justify-self-stretch",
    "wh-full": "w-full h-full",
  },
  presets: [
    presetWind3(),
    presetAttributify(),
    presetEase(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
      processors: createLocalFontProcessor({
        // Directory to cache the fonts
        cacheDir: "node_modules/.cache/unocss/fonts",
        // Directory to save the fonts assets
        fontAssetsDir: "public/assets/fonts",
        // Base URL to serve the fonts from the client
        fontServeBaseUrl: "/assets/fonts",
      }),
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
