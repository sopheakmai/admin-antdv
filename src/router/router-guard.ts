import { AxiosError } from "axios";
import router from "~/router";
import { useMetaTitle } from "~/composables/meta-title";
import { setRouteEmitter } from "~@/utils/route-listener";

const allowList = ["/login", "/error", "/401", "/404", "/403"];
const loginPath = "/login";

router.beforeEach(async (to, _, next) => {
  setRouteEmitter(to);
  // Get
  const userStore = useUserStore();
  const token = useAuthorization();
  if (!token.value) {
    // If token doesnot exist, redirect to login page
    if (!allowList.includes(to.path) && !to.path.startsWith("/redirect")) {
      next({
        path: loginPath,
        query: {
          redirect: encodeURIComponent(to.fullPath),
        },
      });
      return;
    }
  }
  else {
    if (!userStore.userInfo && !allowList.includes(to.path) && !to.path.startsWith("/redirect")) {
      try {
        // Get user info
        await userStore.getUserInfo();
        // Get route menu info
        const currentRoute = await userStore.generateDynamicRoutes();
        router.addRoute(currentRoute);
        next({
          ...to,
          replace: true,
        });
        return;
      }
      catch (e) {
        if (e instanceof AxiosError && e?.response?.status === 401) {
          // Redirect to error page
          next({
            path: "/401",
          });
        }
      }
    }
    else {
      // If current page is login page, redirect to home page
      if (to.path === loginPath) {
        next({
          path: "/",
        });
        return;
      }
    }
  }
  next();
});

router.afterEach((to) => {
  useMetaTitle(to);
  useLoadingCheck();
  useScrollToTop();
});
