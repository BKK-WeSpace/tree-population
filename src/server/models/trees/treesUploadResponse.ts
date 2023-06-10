import { z } from "zod";
import { TreeSchema } from "./trees";

export const VallarisTreeMetadata = z.object({
    properties: z.object({
        _collectionId: z.string(),
        _createdAt: z.string(),
        _createdBy: z.string(),
        _id: z.string(),
        _updatedAt: z.string(),
        _updatedBy: z.string(),
    }),
});

export const TreesUploadResponse = z.object({
    type: z.literal("FeatureCollection"),
    features: z.intersection(TreeSchema, VallarisTreeMetadata),
});
