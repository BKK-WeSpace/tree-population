import mockResponse from "../../mockResponses/trees.json";
import Trees from "../../types/Trees";
import TreesRequestBody from "../models/TreesRequest";
import { TreesResponse } from "../models/TreesResponse";

export default class TreeRepository {
  // TreesRequestBody
  static getTreesWithinBound(reqBody: TreesRequestBody): Promise<Trees[]> {
    // TODO replace with real data fetch to Valaris.

    // If the coordinates is empty, return ALL existing coordiantes from CouchBase.
    return Promise.resolve(mockResponse.features as Trees[]);
  }

  // TODO upload endpoint to update the detail of the tree. Needs to wait for valaris connection to be made first. Also implement the upload and response models.
}
