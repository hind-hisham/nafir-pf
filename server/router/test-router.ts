import axios from "axios";
import {
  publicProcedure,
  protectedProcedure,
  router,
  authedProcedure,
} from "../init";
import { contextFetch } from "../services/apiCalls";

export const testRouter = router({
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

  getMentorships: authedProcedure.query(async ({ ctx }) => {
    const data = await contextFetch<any>("/mentorships", ctx);
    return data.data;
  }),

  getBlogs: publicProcedure.query(async () => {
    const res = await axios.get("http://localhost:8000/api/posts");
    const data = res.data.data;

    return data;
  }),

  getActivites: publicProcedure.query(async () => {
    const res = await axios.get("http://localhost:8000/api/activites");
    const data = res.data.data;

    return data;
  }),
});
