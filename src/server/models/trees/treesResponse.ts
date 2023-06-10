import { z } from "zod";
import { TreeSchema } from "./trees";

export const TreesResponseSchema = z.object({
    type: z.literal("FeatureCollection"),
    features: z.array(TreeSchema),
});
