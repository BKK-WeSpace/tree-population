import { z } from "zod";
import { TreeSchema } from "./trees";

export const TreesUploadRequestSchema = z.object({
    trees: z.array(TreeSchema),
});
