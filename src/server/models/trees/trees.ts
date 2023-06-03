import { Feature, Point } from "geojson";
import { OpenStreetMapTreeSchema } from "./treePropertiesSchema/openStreetMapTreeSchema";
import { WeSpaceTreeSchema } from "./treePropertiesSchema/wespaceTreeSchema";

/**
 * The only mandatory fields for a tree are its longitude and latitude.
 */
export default interface Tree extends Omit<Feature<Point>, "properties"> {
    // Have to overwrite it like this to force it to be optional.
    /**
     * The id of this tree in the Vallaris database.
     */
    id: string;
    /**
     * Because we try to be opened to as many databases as possible, this properties object
     * will be a combination of all vendor-specific tree schemas.
     *
     * TODO create a json serializer for each of the tree schema. Can be strategies or factories, as long as they work and not too verbose...
     */
    properties?: WeSpaceTreeSchema & OpenStreetMapTreeSchema;
}
