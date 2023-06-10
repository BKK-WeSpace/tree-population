import { z } from "zod";
import { TreesRequestSchema } from "~/server/models/trees/treesRequest";
import { TreesResponseSchema } from "~/server/models/trees/treesResponse";
import { TreesUploadRequestSchema } from "~/server/models/trees/treesUploadRequest";
import { TreesUploadResponse } from "~/server/models/trees/treesUploadResponse";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const treesRouter = createTRPCRouter({
    getAll: publicProcedure
        .meta({
            openapi: {
                method: "GET",
                path: "/public/trees",
                summary: "Get all trees from the database.",
            },
        })
        .input(
            z
                .object({
                    /**
                     * a string-serialized array of length 4.
                     */
                    boundingBox: z.string(),
                    limit: z.number(),
                })
                .partial()
        )
        .output(TreesResponseSchema)
        .query(async ({ ctx, input }) => {
            const parsedInput = TreesRequestSchema.parse(input);
            const trees: z.infer<typeof TreesResponseSchema> =
                await ctx.vallarisRepository.getTrees(parsedInput);

            return trees;
        }),
    upload: publicProcedure
        .meta({
            openapi: {
                method: "POST",
                path: "/public/upload-trees",
                summary: "Upload trees to the database",
            },
        })
        .input(TreesUploadRequestSchema)
        .output(TreesUploadResponse)
        .query(async ({ ctx, input }) => {
            try {
                const result = await ctx.vallarisRepository.upload(input);
                return result;
            } catch (e) {
                console.error(
                    "Unexpected error. Input: " + JSON.stringify(input.trees)
                );
                console.error(e);
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Unknown error while uploading tree",
                });
            }
        }),
});
