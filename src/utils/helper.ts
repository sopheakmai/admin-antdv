/**
 * Helper utility functions to replace @v-c/utils dependency
 */

import type { PropType } from "vue";

// Type checking utilities
export function isFunction(value: any): value is (...args: any[]) => any {
  return typeof value === "function";
}

export function isUrl(value: string): boolean {
  if (!value || typeof value !== "string")
    return false;

  // Check for absolute URLs
  try {
    // eslint-disable-next-line no-new
    new URL(value);
    return true;
  }
  catch {
    // Check for protocol-relative URLs
    if (value.startsWith("//"))
      return true;

    // Check for common URL patterns
    const urlPattern = /^(?:https?:\/\/|ftp:\/\/|mailto:|tel:|#)/i;
    return urlPattern.test(value);
  }
}

// Object manipulation utilities
export function pick<T extends Record<string, any>, K extends keyof T>(
  object: T,
  keys: K[],
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in object) {
      result[key] = object[key];
    }
  }
  return result;
}

export function omit<T extends Record<string, any>, K extends keyof T>(
  object: T,
  keys: K[],
): Omit<T, K> {
  const result = { ...object };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}

// Array utilities
export function toArray<T>(value: T | T[]): T[] {
  if (Array.isArray(value))
    return value;
  return value !== undefined ? [value] : [];
}

// DOM utilities
export function canUseDom(): boolean {
  return !!(
    typeof window !== "undefined"
    && window.document
    && window.document.createElement
  );
}

export function updateCSS(css: string, key: string): void {
  if (!canUseDom())
    return;

  const existingStyle = document.getElementById(key);
  if (existingStyle) {
    existingStyle.remove();
  }

  const style = document.createElement("style");
  style.id = key;
  style.innerHTML = css;
  document.head.appendChild(style);
}

// Event utilities
export function runEvent<T extends any[]>(
  event: ((...args: T) => void) | undefined,
  ...args: T
): void {
  if (isFunction(event)) {
    event(...args);
  }
}

export function runEventAny(
  event: ((...args: any[]) => void) | undefined,
  ...args: any[]
): void {
  if (isFunction(event)) {
    event(...args);
  }
}

// Timer utilities
export function delayTimer(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

// Vue prop type utilities
export function stringType<T extends string = string>(defaultValue?: T) {
  return {
    type: String as unknown as PropType<T>,
    default: defaultValue,
  };
}

export function numberType<T extends number = number>(defaultValue?: T) {
  return {
    type: Number as unknown as PropType<T>,
    default: defaultValue,
  };
}

export function booleanType<T extends boolean = boolean>(defaultValue?: T) {
  return {
    type: Boolean as PropType<T>,
    default: defaultValue,
  };
}

export function arrayType<T extends any[] = any[]>(defaultValue?: () => T) {
  return {
    type: Array as unknown as PropType<T>,
    default: defaultValue || (() => [] as unknown as T),
  };
}

export function eventType<T extends (...args: any[]) => any = (...args: any[]) => any>() {
  return {
    type: Function as PropType<T>,
  };
}

// Clipboard utilities
export function useClipboard() {
  const copy = async (text: string): Promise<boolean> => {
    if (!canUseDom())
      return false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const result = document.execCommand("copy");
        document.body.removeChild(textArea);
        return result;
      }
    }
    catch (error) {
      console.error("Failed to copy text to clipboard:", error);
      return false;
    }
  };

  const isSupported = canUseDom() && (
    (navigator.clipboard && window.isSecureContext)
    || document.queryCommandSupported?.("copy")
  );

  return {
    copy,
    isSupported,
  };
}
