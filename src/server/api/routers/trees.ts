import { z } from "zod";
import { TreesRequestSchema } from "~/server/models/trees/treesRequest";
import { TreesResponseSchema } from "~/server/models/trees/treesResponse";
import { TreesUploadRequestSchema } from "~/server/models/trees/treesUploadRequest";
import { TreesUploadResponse } from "~/server/models/trees/treesUploadResponse";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const treesRouter = createTRPCRouter({
    upload: publicProcedure
        .input(TreesUploadRequestSchema)
        .output(TreesUploadResponse)
        .query(async ({ ctx, input }) => {
            try {
                const result = await ctx.vallarisRepository.upload(input);
                return result;
            } catch (e) {
                console.log(e);
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Unknown error while uploading tree",
                });
            }
        }),
    getAll: publicProcedure
        .input(TreesRequestSchema)
        .output(TreesResponseSchema)
        .query(async ({ ctx, input }) => {
            const { boundingBox, limit } = input;
            const trees: z.infer<typeof TreesResponseSchema> =
                await ctx.vallarisRepository.getTrees({
                    boundingBox: boundingBox,
                    limit: limit,
                });

            return trees;
        }),
});
