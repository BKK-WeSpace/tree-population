import { FetchResult } from "../models/NetworkResult";
import TreesRequestParams from "../models/TreesRequest";
import { TreesResponse } from "../models/TreesResponse";
import VallarisService from "../services/VallarisService";

export default class TreeDataRepository {
  // TreesRequestBody
  static async getTreesWithinBound(
    treesRequest?: TreesRequestParams
  ): Promise<FetchResult<TreesResponse>> {
    const data = await VallarisService.getAllTrees({
      limit: treesRequest?.limit ?? 1000,
      boundingBox: treesRequest?.boundingBox,
    });

    return data;
  }

  // TODO upload endpoint to update the detail of the tree. Needs to wait for valaris connection to be made first. Also implement the upload and response models.

  // Get trees from other services if needed.
}
