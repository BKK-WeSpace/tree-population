import { z } from "zod";
import { TreeSchema } from "./trees";

export const TreesUploadRequestSchema = z.array(TreeSchema);
