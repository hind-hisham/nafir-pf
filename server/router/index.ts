import { publicProcedure, router } from '../trpc'

export const appRouter = router({
    test: publicProcedure.query(() => {
        return {
            message: 'Hello from tRPC!',
        }
    })
})

export type AppRouter = typeof appRouter