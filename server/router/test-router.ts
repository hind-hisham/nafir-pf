import { UserSchema } from "@/lib/dtos";
import axios from "axios";
import {
  publicProcedure,
  protectedProcedure,
  router,
  authedProcedure,
} from "../init";

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

  getMentorships: publicProcedure.query(async () => {
    const res = await axios.get("http://localhost:8000/api/mentorships");
    const data = res.data.data;

    return data;
  }),
});
