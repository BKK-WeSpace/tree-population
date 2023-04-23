import { Feature, Point } from "geojson";

/**
 * The only mandatory fields for a tree are its longitude and latitude.
 */
export default interface Tree extends Omit<Feature<Point>, "properties"> {
    // Have to overwrite it like this to force it to be optional.
    /**
     * The id of this tree in the Vallaris database.
     */
    id: string;
    properties?: Partial<TreeProperties>;
}

export interface TreeProperties {
    /**
     * Whether or not the tree has been verified by a human.
     */
    isVerified: boolean;
    imgId: string;
    isReward: boolean;
    commonName: string;
    species: string;
    genus: string;
    quote: TreeQuote;
    code: string;
    isAlive: boolean;
    health: "healthy" | "unhealthy";
    crownSizeMeter: number;
    crownShape: string;
    lifeExpectancyYear: number;
    descriptiveFeatures: string;
    /**
     * Animals that live off of a tree
     */
    arboreals: string[];
    extinctArboreals: string[];
    hasEcobenefits: boolean;
    /**
     * In the context of forestry, "DBH" stands for "Diameter at Breast Height".
     * DBH is a standard measurement used to determine the size of a standing tree.
     * It is typically measured at 1.3 meters (4.5 feet) above the ground, which is approximately the height of an adult's breast height.
     *
     * Measuring DBH is an important forestry practice because it provides a consistent and accurate way to measure the size of trees,
     * which is useful for forest inventory, growth analysis, and timber management. By measuring the DBH of a tree, foresters can estimate
     * the tree's age, calculate its volume and biomass, and determine its value for timber harvesting.
     */
    diameterAtBreastHeightInches: number;
    archived: boolean;
    crownLightexposure: "Partial" | "Full" | "None" | number;
    location: Partial<TreeLocationData>;
    management: Partial<TreeManagementDetail>;
}

export interface TreeAppearance {
    circumference?: string;
    height?: number;
}

export interface TreeQuote {
    quote?: string;
    description?: string;
}

export interface TreeLocationData {
    /**
     * A short description of where the tree is located.
     */
    shortDescription: string;
    address: string;
    no: string;
    street: string;
    district: string;
    // How the land around the tree is being used. For example, it could be used for agriculture, residential or commercial purposes.
    typeOfLandUse: string;
    areaCharacteristics: string;
}

export interface TreeManagementDetail {
    urgency: "low" | "mid" | "high";
    decorations: string;
}
