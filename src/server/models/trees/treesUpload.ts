import { z } from "zod";
import { TreeSchema } from "./trees";

export const TreesUpload = z.object({
    type: z.literal("FeatureCollection").default("FeatureCollection"),
    features: TreeSchema,
});
