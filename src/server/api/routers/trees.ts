import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { TreesResponse } from "~/server/models/trees/treesResponse";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const treesRouter = createTRPCRouter({
    getAll: publicProcedure
        .input(
            z.object({
                // TODO can we do zod validation that asserts for an array of length 4?
                boundingBox: z.array(z.number()).optional(),
                limit: z.number().optional(),
            })
        )
        .output(
            z.object({
                type: z.string(),
                // Just provide the check for mandatory fields.
                // For now, we're only checking if the returned objct comes with the coordinates.
                features: z.array(
                    z.object({
                        geometry: z.object({
                            coordinates: z.array(z.number()),
                        }),
                    })
                ),
            })
        )
        .query(async ({ ctx, input }) => {
            const { boundingBox, limit } = input;
            if (boundingBox && boundingBox.length !== 4) {
                throw new TRPCError({
                    message: "boundingBox should have a length of 4",
                    code: "BAD_REQUEST",
                });
            }
            const trees: TreesResponse = await ctx.vallarisService.getTrees({
                // @ts-expect-error
                boundingBox: boundingBox,
                limit: limit,
            });

            return trees;
        }),
});
