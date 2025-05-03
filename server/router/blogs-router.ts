import { Router, authedProcedure } from "../init";
import { callBackend } from "../services/apiCalls";

// change this to protected?
const Procedure = authedProcedure;

export const router = Router({
  getBlogs: Procedure.query(async ({ctx}) => {
    const res = await callBackend("/posts", ctx);
    const data = res.data.data;

    return data;
  }),
});
