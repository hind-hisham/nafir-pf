import {
  Router,
  authedProcedure,
} from "../init";
import { callBackend } from "../services/apiCalls";

// change this to protected?
const Procedure = authedProcedure

export const router = Router({
  getMentorships: Procedure.query(async ({ ctx }) => {
    const data = await callBackend("/mentorships", ctx);
    return data.data;
  }),
});
