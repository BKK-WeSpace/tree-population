import Trees from "../../types/Trees";
import TreesRequestParams from "../models/TreesRequest";
import VallarisService from "../services/VallarisService";

export default class TreeDataRepository {
  // TreesRequestBody
  static async getTreesWithinBound(
    treesRequest?: TreesRequestParams
  ): Promise<Trees[]> {
    const data = await VallarisService.getAllTrees({
      limit: treesRequest?.limit ?? 1000,
      boundingBox: treesRequest?.boundingBox,
    });

    return data.features;
  }

  // TODO upload endpoint to update the detail of the tree. Needs to wait for valaris connection to be made first. Also implement the upload and response models.

  // Get trees from other services if needed.
}
