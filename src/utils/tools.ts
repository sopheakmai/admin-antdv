import router from "@/router";

function get(object: any, path: string | string[], defaultValue?: any): any {
  const keys = Array.isArray(path) ? path : path.split(".");
  let result = object;

  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) {
      return defaultValue;
    }
  }

  return result;
}

export function getQueryParam(param: string | string[], defaultVal = "") {
  const query = router.currentRoute.value?.query ?? {};
  const val = get(query, param) ?? defaultVal;
  return decodeURIComponent(val);
}
