import axios from "axios";
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

  getMentorships: publicProcedure.query(async()=>{
const res = await axios.get("http://localhost:8000/api/mentorships");
const data = res.data.data;

return data;
}),

getBlogs : publicProcedure.query(async()=>{
  const res = await axios.get('http://localhost:8000/api/post');
const data = res.data.data;

return data;
}),

getActivites : publicProcedure.query(async()=>{
  const res = await axios.get('http://localhost:8000/api/activites');
const data = res.data.data;

return data;
})


});
