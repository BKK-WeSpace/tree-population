import { z } from "zod";

/**
 * All possible tags of a tree on open street map as specified in
 * https://wiki.openstreetmap.org/wiki/Tag:natural%3Dtree
 *
 * The tags are represented in a geojson as properties of a point, while in OSM, the
 * tags are properties in an XML-like document. To convert between the two formats, we'll
 * have to use some of the tools discussed here https://wiki.openstreetmap.org/wiki/GeoJSON
 */
export const OpenStreetMapTreeSchema = z.object({
    natural: z.literal("tree").default("tree"),
    leafType: z.enum(["broadleaved", "needleleaved"]).nullish(),
    genus: z.string().nullish(),
    species: z.string().nullish(),
    speciesWikidata: z.string().nullish(),
    taxon: z.string().nullish(),
    sex: z.union([z.literal("male"), z.literal("female")]).nullish(),
    protected: z.union([z.literal("yes"), z.literal("no")]).nullish(),
    circumference: z.number().nullish(), // assuming in metres
    diameter: z.number().nullish(), // assuming in millimetres
    estHeight: z.number().nullish(), // assuming in metres
    height: z.number().nullish(), // assuming in metres
    diameterCrown: z.number().nullish(), // assuming in metres
    leafCycle: z
        .enum(["deciduous", "evergreen", "smi_deciduous", "semi_evergreen"])
        .nullish(),
});
