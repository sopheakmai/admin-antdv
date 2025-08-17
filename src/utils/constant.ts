export enum AccessEnum {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum DynamicLoadEnum {
  FRONTEND = "FRONTEND", // Frontend dynamic menu loading, this method loads menu and route information from dynamic-routes.ts
  BACKEND = "BACKEND", // Backend dynamic menu loading, this method loads menu and route information from backend API
}

export enum STATUS {
  OFF = "0",
  RUNNING = "1",
  ONLINE = "2",
  ERROR = "3",

}
// By default, we provide logic for loading from the backend
export const DYNAMIC_LOAD_WAY = import.meta.env.VITE_APP_LOAD_ROUTE_WAY ?? DynamicLoadEnum.BACKEND;
