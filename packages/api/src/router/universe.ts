import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const universeRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.universe.findMany();
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.universe.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.universe.create({ data: input });
    }),
  playingIn: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.universe.findMany({
        where: {
          id: input.id,
          players: { some: { id: ctx.session.user.id } },
        },
      });
    }),
  join: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const universe = await ctx.prisma.universe.findFirst({
        where: { id: input.id },
      });
      if (!universe) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Universe was not found",
        });
      }
      const universesPlayingIn = await ctx.prisma.universe.findMany({
        where: {
          players: {
            some: {
              id: ctx.session.user.id,
            },
          },
        },
      });

      const isAlreadyPlayingHere = universesPlayingIn
        .map((u) => u.id)
        .includes(universe.id);
      if (isAlreadyPlayingHere) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "You are already playing in this universe",
        });
      }

      return ctx.prisma.universe.update({
        where: { id: universe.id },
        data: { players: { connect: { id: ctx.session.user.id } } },
      });
    }),
});
