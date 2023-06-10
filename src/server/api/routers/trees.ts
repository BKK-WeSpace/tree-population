import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TreesRequestSchema } from "~/server/models/trees/treesRequest";
import { TreesResponseSchema } from "~/server/models/trees/treesResponse";

export const treesRouter = createTRPCRouter({
    upload: publicProcedure
        .input(
            z.object({
                trees: z.array(
                    z.object({
                        geometry: z.object({
                            type: z.string(),
                            coordinates: z.array(z.number()).max(2),
                        }),
                    })
                ),
            })
        )
        .query(async ({ ctx, input }) => {
            // await ctx.vallarisRepository.upload();
        }),
    getAll: publicProcedure
        .input(TreesRequestSchema)
        .output(TreesResponseSchema)
        .query(async ({ ctx, input }) => {
            const { boundingBox, limit } = input;
            if (boundingBox && boundingBox.length !== 4) {
                throw new TRPCError({
                    message: "boundingBox should have a length of 4",
                    code: "BAD_REQUEST",
                });
            }
            const trees: z.infer<typeof TreesResponseSchema> =
                await ctx.vallarisRepository.getTrees({
                    boundingBox: boundingBox,
                    limit: limit,
                });

            return trees;
        }),
});
