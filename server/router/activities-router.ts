import { Router, publicProcedure } from "../init";

import { callBackend } from "../services/apiCalls";

// change this to protected?
const Procedure = publicProcedure;

export const router = Router({
  getActivites: Procedure.query(async ({ ctx }) => {
    const res = await callBackend("/activities", ctx);
    const data = res.data.data;

    return data;
  }),
});
