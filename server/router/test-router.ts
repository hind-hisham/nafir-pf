import {
  publicProcedure,
  protectedProcedure,
  Router,
  authedProcedure,
} from "../init";

export const router = Router({
  test: publicProcedure.query(() => {
    return {
      message: "Hello from tRPC!",
    };
  }),
  testAuth: authedProcedure.query(async ({ ctx: { token } }) => {
    return {
      message: `Hi, ${JSON.stringify(token)}.`,
    };
  }),
  testProtect: protectedProcedure.query(async ({ ctx: { token } }) => {
    return {
      message: `Hello! You are logged in.`,
    };
  }),
});
