# Customization Guide for Ant Design Vue Pro Project

This guide will help you understand how to customize various aspects of your Ant Design Vue Pro project. The project is built with Vue 3, Ant Design Vue 4, TypeScript, Vite, and UnoCSS.

## Table of Contents

1. [Theme Customization](#theme-customization)
2. [Layout Customization](#layout-customization)
3. [Localization (i18n)](#localization-i18n)
4. [Routing Configuration](#routing-configuration)
5. [Environment Variables](#environment-variables)
6. [UnoCSS Customization](#unocss-customization)
7. [API Configuration](#api-configuration)
8. [Component Customization](#component-customization)

## Theme Customization

### Changing the Theme Colors

You can customize the theme colors by modifying the following files:

1. **Default Settings**: Edit the `src/config/default-setting.ts` file to change the primary color and other layout settings:

```typescript
export default {
  title: "Antdv Pro",
  theme: "light", // Change to "dark" for dark mode
  logo: "/logo.svg",
  colorPrimary: "#1677FF", // Change this to customize the primary color
  // ... other settings
} as LayoutSetting;
```

2. **Theme Variables**: The project uses CSS variables for theming. You can customize these in the `themes/antd-uno-theme.json` file:

```json
{
  "colors": {
    "primary": "var(--pro-ant-color-primary)",
    "success": "var(--pro-ant-color-success)",
    "warning": "var(--pro-ant-color-warning)",
    "error": "var(--pro-ant-color-error)"
  }
}
```

3. **Dark Mode Toggle**: The project supports dark mode. You can use the `toggleDark` function from `src/composables/theme.ts`:

```typescript
// In your component
import { isDark, toggleDark } from "~/composables/theme";

// Toggle dark mode
function handleToggleDark() {
  toggleDark();
}
```

4. **Ant Design Token System**: You can customize Ant Design tokens using the `useAntdToken` composable:

```typescript
// In your component
import { useAntdToken } from "~/composables/antd-token";

const { token, setToken } = useAntdToken();

// Customize tokens
setToken({
  ...token.value,
  colorPrimary: "#ff0000",
});
```

## Layout Customization

The project provides several layout options that can be configured in `src/config/default-setting.ts`:

```typescript
export default {
  // ... other settings
  layout: "mix", // Options: "side", "top", "mix"
  contentWidth: "Fluid", // Options: "Fluid", "Fixed"
  fixedHeader: false,
  fixedSider: true,
  splitMenus: false,
  header: true,
  menu: true,
  watermark: true,
  menuHeader: true,
  footer: false,
  multiTab: true,
  multiTabFixed: false,
  // ... other settings
} as LayoutSetting;
```

You can also customize the layout components by modifying files in the `src/layouts` directory.

## Localization (i18n)

The project uses Vue I18n for internationalization. Here's how to customize it:

1. **Add New Language**: Create a new language file in `src/locales/lang/` directory, following the pattern of existing files like `en-US.ts`:

```typescript
import enUS from "ant-design-vue/es/locale/en_US";

const enUSModules = import.meta.glob([
  "~/locales/lang/**/en-US.ts",
  "~/pages/**/locales/en-US.ts",
], {
  eager: true,
});

const messages = {};

for (const item in enUSModules) {
  const locale = (enUSModules[item] as any)?.default;
  if (locale)
    Object.assign(messages, locale);
}
export default {
  ...messages,
  antd: enUS,
};
```

2. **Use Translations**: In your components, use the `useI18n` composable:

```typescript
// In your component
const { t } = useI18n();
```

```vue
<!-- In your template -->
<template>
  <a-button>{{ t('button.submit') }}</a-button>
</template>
```

3. **Switch Language**: Use the app store to change the current language:

```typescript
const appStore = useAppStore();
appStore.setLocale("en-US"); // or 'zh-CN', etc.
```

## Routing Configuration

The project supports both static and dynamic routing:

1. **Static Routes**: Defined in `src/router/static-routes.ts`
2. **Dynamic Routes**: Defined in `src/router/dynamic-routes.ts`

To add a new route, edit the appropriate file:

```typescript
export default [
  // ... existing routes
  {
    path: "/your-new-path",
    name: "YourNewRoute",
    component: () => import("~/pages/your-new-path/index.vue"),
    meta: {
      title: "Your New Page",
      icon: "CustomIcon", // Ant Design icon name
      access: "canRead", // Optional access control
    },
  },
];
```

The project supports route-based access control through the `access` directive and the `meta.access` property.

## Environment Variables

You can customize environment variables in the following files:

1. `.env`: Base environment variables for all environments
2. `.env.development`: Development-specific variables
3. `.env.production`: Production-specific variables

Key environment variables include:

```properties
VITE_APP_NAME=Antdv-Pro
VITE_APP_BASE=/
VITE_APP_BASE_API=/api
VITE_APP_LOAD_ROUTE_WAY=BACKEND
```

## UnoCSS Customization

The project uses UnoCSS for utility-first CSS. You can customize it in `unocss.config.ts`:

```typescript
export default defineConfig({
  // ... existing config
  theme: {
    ...antdUnoTheme,
    // Add your custom theme values here
    colors: {
      customColor: "#abcdef",
    },
  },
  shortcuts: [
    ["flex-center", "flex items-center justify-center"],
    // Add your custom shortcuts here
    ["custom-card", "p-4 rounded-lg shadow-md bg-white"],
  ],
  // ... other configurations
});
```

## API Configuration

The project uses Axios for API requests. You can customize the API configuration in `src/utils/request.ts` and create API endpoints in the `src/api` directory.

To add a new API endpoint, create a new file in the appropriate subdirectory of `src/api/`.

## Component Customization

You can create and customize components in the `src/components` directory. The project uses Ant Design Vue components which can be customized using the theme token system.

To create a new component:

1. Create a new directory in `src/components/`
2. Add your component files (Vue, TypeScript, etc.)
3. Import and use your component in your pages

### Custom Directives

The project includes custom directives for access control and loading states:

- **Access Directive**: Use `v-access` to control element visibility based on permissions
- **Loading Directive**: Use `v-loading` to show loading states

You can find these in the `src/directive` directory and customize them as needed.

### State Management

The project uses Pinia for state management. You can find stores in the `src/stores` directory:

- `app.ts`: Application-wide settings
- `user.ts`: User authentication and profile
- `layout-menu.ts`: Layout and menu state
- `multi-tab.ts`: Multi-tab functionality

To create a new store:

```typescript
import { defineStore } from "pinia";

export const useYourStore = defineStore("your-store", () => {
  const state = ref(initialState);

  const actions = {
    // Your actions here
  };

  return {
    state,
    ...actions,
  };
});
```

### Server-Side Routes

The project includes a Nitro server with API routes in the `servers/routes` directory. You can add new API endpoints by creating new files following the naming convention:

- `filename.get.ts` for GET requests
- `filename.post.ts` for POST requests
- `filename.put.ts` for PUT requests
- `filename.delete.ts` for DELETE requests

## Development Scripts

The project includes several useful development scripts:

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run typecheck`: Run TypeScript type checking
- `npm run gen:uno`: Generate UnoCSS utilities
- `npm run dir-tree`: Generate directory tree

---

This guide covers the main customization options for your Ant Design Vue Pro project. For more detailed information, refer to the official documentation of the libraries used:

- [Ant Design Vue](https://antdv.com/)
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [UnoCSS](https://unocss.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue I18n](https://vue-i18n.intlify.dev/)
