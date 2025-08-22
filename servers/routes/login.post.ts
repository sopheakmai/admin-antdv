import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body: any = await readBody(event);
  const { type } = body;
  const success = {
    code: 200,
    data: {
      token: "1234567890",
    },
    msg: "Login successful",
  };
  if (type !== "mobile") {
    // eslint-disable-next-line node/prefer-global/buffer
    success.data.token = Buffer.from(body.username).toString("base64");
    // Check if username and password are correct
    if (body.username === "admin" && body.password === "admin")
      return success;

    if (body.username === "user" && body.password === "user")
      return success;
  }
  else {
    return success;
  }

  // setResponseStatus(event, 403)
  event.res.status = 403;
  return {
    code: 401,
    msg: "Incorrect username or password",
  };
});
