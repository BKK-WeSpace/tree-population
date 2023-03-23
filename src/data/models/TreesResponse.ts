import Tree from "../../types/Trees";

export interface TreesResponse {
  type: "FeatureCollection";
  features: Tree[];
}
