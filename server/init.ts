import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "./context";
import { auth } from "@/auth";

const t = initTRPC.context<Context>().create();

export const Router = t.router;

export const baseProcedure = t.procedure.use((opts) => {
  // Log the procedure name and input
  console.log(`Procedure: ${opts.path}`);
  console.log(`Input: ${JSON.stringify(opts.input)}`);

  return opts.next();
});


export const publicProcedure = baseProcedure;

// These procedures will make use of the session.
export const authedProcedure = baseProcedure.use(async (opts) => {
  const sesh = await auth();
  
  console.log(sesh)
  return opts.next({ ctx: { ...opts.ctx, token: sesh?.user.authToken} }); // TODO: Implement actual logic!
});

// These procedures will DEMAND that the ID exists.
export const protectedProcedure = authedProcedure.use(async (opts) => {
  if (!opts.ctx.token)
    throw new TRPCError({
      code: "UNAUTHORIZED",
      cause: "Token does not exist.",
    });
  return opts.next();
});
