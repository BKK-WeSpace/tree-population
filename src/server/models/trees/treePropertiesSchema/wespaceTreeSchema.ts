import { z } from "zod";

export const TreeQuoteSchema = z.object({
    quote: z.string().nullish(),
    description: z.string().nullish(),
});

/**
 * A short description of where the tree is located.
 */
export const TreeLocationDataSchema = z
    .object({
        shortDescription: z.string(),
        address: z.string(),
        no: z.string(),
        street: z.string(),
        district: z.string(),
        // How the land around the tree is being used. For example, it could be used for agriculture, residential or commercial purposes.
        typeOfLandUse: z.string(),
        areaCharacteristics: z.string(),
    })
    .partial();

export const TreeManagementDetailSchema = z
    .object({
        urgency: z.union([
            z.literal("low"),
            z.literal("mid"),
            z.literal("high"),
        ]),
        decorations: z.string(),
    })
    .partial();

/**
 * Whether or not the tree has been verified by a human.
 */
export const WeSpaceTreeSchema = z.object({
    isVerified: z.boolean().nullish(),
    imgId: z.string().nullish(),
    isReward: z.boolean().nullish(),
    commonName: z.string().nullish(),
    species: z.string().nullish(),
    genus: z.string().nullish(),
    quote: TreeQuoteSchema.nullish(),
    code: z.string().nullish(),
    isAlive: z.boolean().nullish(),
    health: z.enum(["healthy", "unhealthy"]).nullish(),
    crownSizeMeter: z.number().nullish(),
    crownShape: z.string().nullish(),
    lifeExpectancyYear: z.number().nullish(),
    descriptiveFeatures: z.string().nullish(),
    /**
     * Animals that live off of a tree
     */
    arboreals: z.array(z.string()).nullish(),
    extinctArboreals: z.array(z.string()).nullish(),
    hasEcobenefits: z.boolean().nullish(),
    /**
     * In the context of forestry, "DBH" stands for "Diameter at Breast Height".
     * DBH is a standard measurement used to determine the size of a standing tree.
     * It is typically measured at 1.3 meters (4.5 feet) above the ground, which is approximately the height of an adult's breast height.
     *
     * Measuring DBH is an important forestry practice because it provides a consistent and accurate way to measure the size of trees,
     * which is useful for forest inventory, growth analysis, and timber management. By measuring the DBH of a tree, foresters can estimate
     * the tree's age, calculate its volume and biomass, and determine its value for timber harvesting.
     */
    diameterAtBreastHeightInches: z.number().nullish(),
    archived: z.boolean().nullish(),
    crownLightexposure: z
        .union([
            z.literal("Partial"),
            z.literal("Full"),
            z.literal("None"),
            z.number(),
        ])
        .nullish(),
    location: TreeLocationDataSchema.nullish(),
    management: TreeManagementDetailSchema.nullish(),
});
