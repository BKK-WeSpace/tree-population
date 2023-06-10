import { OpenStreetMapTreeSchema } from "./treePropertiesSchema/openStreetMapTreeSchema";
import { WeSpaceTreeSchema } from "./treePropertiesSchema/wespaceTreeSchema";
import { z } from "zod";

/**
 * The only mandatory fields for a tree are its longitude and latitude.
 */
export const TreeSchema = z.object({
    /**
     * The id of this tree in the Vallaris database.
     */
    id: z.union([z.string(), z.number()]).optional(),
    type: z.literal("Feature"),
    geometry: z.object({
        type: z.string(),
        coordinates: z.array(z.number()).max(2),
    }),
    /**
     * Because we try to be opened to as many databases as possible, this properties object
     * will be a combination of all vendor-specific tree schemas.
     */
    properties: z.intersection(WeSpaceTreeSchema, OpenStreetMapTreeSchema),
});
