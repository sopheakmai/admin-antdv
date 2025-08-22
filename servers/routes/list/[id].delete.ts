import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
  const id = event.context.params?.id as any;
  if (typeof id !== "number") {
    event.res.status = 403;
    return {
      code: 403,
      msg: "Deletion failed",
    };
  }
  return {
    code: 200,
    msg: "Successfully deleted",
  };
});
