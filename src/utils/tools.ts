// Router import moved to function scope to avoid server-side resolution issues

/**
 * Deep clone an object or array
 * @param obj - The object to clone
 * @returns A deep copy of the object
 */
export function cloneDeep<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => cloneDeep(item)) as T;
  }

  if (typeof obj === "object") {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = cloneDeep(obj[key]);
      }
    }
    return clonedObj;
  }

  return obj;
}

/**
 * Get a nested property value from an object using a path
 * @param obj - The object to get the value from
 * @param path - The path to the property (string or array of strings)
 * @param defaultValue - The default value to return if the property is not found
 * @returns The value at the path or the default value
 */
export function get(obj: any, path: string | string[], defaultValue?: any): any {
  const keys = Array.isArray(path) ? path : path.split(".");
  let result = obj;

  for (const key of keys) {
    if (result == null || typeof result !== "object") {
      return defaultValue;
    }
    result = result[key];
  }

  return result !== undefined ? result : defaultValue;
}

// Note: getQueryParam moved to client-side only utilities to avoid server import issues
// Use router composables directly in components instead
