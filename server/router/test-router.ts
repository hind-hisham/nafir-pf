import {
  publicProcedure,
  protectedProcedure,
  router,
  authedProcedure,
} from "../trpc";

export const testRouter = router({
  test: publicProcedure.query(() => {
    return {
      message: "Hello from tRPC!",
    };
  }),
  testAuth: authedProcedure.query(async ({ ctx: { token } }) => {
    return {
      message: `Hi, ${token}.`,
    };
  }),
  testProtect: protectedProcedure.query(async ({ ctx: { token } }) => {
    return {
        message: `Hello! You are logged in.`
    }
  }),
});
