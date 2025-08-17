import { createRouter, createWebHistory } from "vue-router";

import { rootRoute } from "./constant";
import staticRoutes from "./static-routes";

const router = createRouter({
  routes: [
    rootRoute,
    ...staticRoutes,
  ],
  history: createWebHistory(import.meta.env.VITE_APP_BASE),
});

export default router;
