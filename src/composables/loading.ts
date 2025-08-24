export function useLoadingCheck() {
  const loading = document.querySelector("body > #loading-app");
  if (loading) {
    const body = document.querySelector("body");
    setTimeout(() => {
      body?.removeChild(loading);
    }, 100);
  }
}

export function useScrollToTop() {
  const app = document.getElementById("app");
  if (app) {
    setTimeout(() => {
      app.scrollTo({
        top: 0,
      });
    }, 300);
  }
}

export function useLoading(defaultLoading = false) {
  const loading = ref(defaultLoading);
  const setLoading = (value: boolean) => {
    loading.value = value;
  };
  return {
    loading,
    setLoading,
  };
}
