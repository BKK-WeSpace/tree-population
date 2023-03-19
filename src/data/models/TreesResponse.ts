import { FeatureCollection, Point } from "geojson";
import { TreeProperties } from "../../types/Trees";

export interface TreesResponse
  extends FeatureCollection<Point, Partial<TreeProperties>> {}
