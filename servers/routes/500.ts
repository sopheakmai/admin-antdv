import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  event.res.status = 500;
  return {
    code: 500,
    msg: "Server error",
  };
});
