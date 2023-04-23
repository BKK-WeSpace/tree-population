import Tree from "./trees";

export interface TreesResponse {
    type: "FeatureCollection";
    features: Tree[];
}
