export enum AccessEnum {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum DynamicLoadEnum {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
}

export enum STATUS {
  OFF = "0",
  RUNNING = "1",
  ONLINE = "2",
  ERROR = "3",

}

export const DYNAMIC_LOAD_WAY = import.meta.env.VITE_APP_LOAD_ROUTE_WAY ?? DynamicLoadEnum.BACKEND;
