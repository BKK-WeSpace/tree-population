import mockResponse from "../../mockResponses/trees.json";
import TreesRequestBody from "../models/TreesRequest";
import { TreesResponse } from "../models/TreesResponse";

export default class TreeRepository {
  // TreesRequestBody
  static getTreesWithinBound(
    reqBody: TreesRequestBody
  ): Promise<TreesResponse> {
    // TODO replace with real data fetch to CouchBase.
    // If the coordinates is empty, return ALL existing coordiantes from CouchBase.
    return Promise.resolve(mockResponse as TreesResponse);
  }
}
