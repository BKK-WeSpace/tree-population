import TreesRequestParams from "../models/TreesRequest";
import { TreesResponse } from "../models/TreesResponse";
import NetworkRequestHandler from "../repositories/NetworkRequestHandler";

export default class VallarisService {
  private static _networkHandler = new NetworkRequestHandler({
    baseUrl: "https://v2k-dev.vallarismaps.com/core/api",
  });
  private static _collectionId = "64169999e89e47973094f506";

  public static async getAllTrees(request?: TreesRequestParams) {
    const data = await VallarisService._networkHandler.handle<TreesResponse>({
      method: "GET",
      path: `/features/1.0/collections/${VallarisService._collectionId}/items`,
      headers: {
        "api-key": import.meta.env.VITE_VALLARIS_API_KEY,
      },
      queryParams: {
        limit: request?.limit,
        bbox: request?.boundingBox?.join(" ,"),
      },
    });

    return data;
  }
}
