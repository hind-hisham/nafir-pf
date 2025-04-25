import { publicProcedure, router } from "../init";
import { testRouter } from "./test-router";

export const appRouter = router({
  test: testRouter,
});

export type AppRouter = typeof appRouter;
