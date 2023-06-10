import { z } from "zod";

/**
 * For simplicity's sake, we only allow the Polygon request type for now.
 */
export const TreesRequestSchema = z
    .object({
        boundingBox: z.array(z.number()).max(4),
        limit: z.number(),
    })
    .partial();
