/**
 * All possible tags of a tree on open street map as specified in
 * https://wiki.openstreetmap.org/wiki/Tag:natural%3Dtree
 *
 * The tags are represented in a geojson as properties of a point, while in OSM, the
 * tags are a properties in an XML-like document. To convert between the two formats, we'll
 * have to use some of the tools discussed here https://wiki.openstreetmap.org/wiki/GeoJSON
 */
export class OpenStreetMapTreeSchema {
    public natural: "tree";
    public leafType?: "broadleaved" | "needleleaved";
    public genus?: string;
    public species?: string;
    public speciesWikidata?: string;
    public taxon?: string;
    public sex?: "male" | "female";
    public protected?: "yes" | "no";
    public circumference?: number; // assuming in metres
    public diameter?: number; // assuming in millimetres
    public estHeight?: number; // assuming in metres
    public height?: number; // assuming in metres
    public diameterCrown?: number; // assuming in metres
    public leafCycle?:
        | "deciduous"
        | "evergreen"
        | "semi_deciduous"
        | "semi_evergreen";

    constructor(data: Omit<OpenStreetMapTreeSchema, "natural">) {
        this.natural = "tree";
        this.leafType = data?.leafType;
        this.genus = data?.genus;
        this.species = data?.species;
        this.speciesWikidata = data?.speciesWikidata;
        this.taxon = data?.taxon;
        this.sex = data?.sex;
        this.protected = data?.protected;
        this.circumference = data?.circumference;
        this.diameter = data?.diameter;
        this.estHeight = data?.estHeight;
        this.height = data?.height;
        this.diameterCrown = data?.diameterCrown;
        this.leafCycle = data?.leafCycle;
    }

    // TODO this is too verbose for serialization...find a better way
    public static toJson<T extends OpenStreetMapTreeSchema>(
        properties: T
    ): string {
        const {
            natural,
            leafType,
            genus,
            species,
            speciesWikidata,
            taxon,
            sex,
            circumference,
            diameter,
            estHeight,
            height,
            diameterCrown,
            leafCycle,
        } = properties;

        return JSON.stringify({
            natural,
            leafType,
            genus,
            species,
            speciesWikidata,
            taxon,
            sex,
            circumference,
            diameter,
            estHeight,
            height,
            diameterCrown,
            leafCycle,
        });
    }
}
