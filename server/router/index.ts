import { publicProcedure, Router } from "../init";
import { router as testRouter } from "./test-router";
import { router as activityRouter } from "./activities-router";
import { router as mentorshipRouter } from "./mentorships-router";
import { router as cvRouter } from "./cv-router";
import { router as blogsRouter } from "./blogs-router";

export const appRouter = Router({
  test: testRouter,

  activity: activityRouter,
  mentorship: mentorshipRouter,
  cv: cvRouter,
  blog: blogsRouter
});

export type AppRouter = typeof appRouter;
