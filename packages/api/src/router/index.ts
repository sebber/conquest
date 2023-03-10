import { router } from "../trpc";
import { postRouter } from "./post";
import { authRouter } from "./auth";
import { universeRouter } from "./universe";

export const appRouter = router({
  post: postRouter,
  auth: authRouter,
  universe: universeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
