import { FetchResult } from "../models/NetworkResult";
import TreesRequestParams from "../models/TreesRequest";
import { TreesResponse } from "../models/TreesResponse";
import UpdateTreeInfoBody from "../models/UpdateTreeInfoBody";
import NetworkRequestHandler from "./NetworkRequestHandler";
//@ts-ignore
import mockJson from "../../mockResponses/mock.json";
import Tree from "../../types/Trees";
import UploadImageResponse from "../models/UploadImageResponse";

export default class VallarisService {
  static _networkHandler = new NetworkRequestHandler({
    baseUrl: "https://v2k-dev.vallarismaps.com/core/api",
  });
  private static _collectionId = "641eb96d476571350cabeac3";

  public static async getAllTrees(
    request?: TreesRequestParams,
    fromCacheIfExists = true
  ): Promise<FetchResult<TreesResponse>> {
    const path = `/features/1.0/collections/${VallarisService._collectionId}/items`;
    const data = await VallarisService._networkHandler.handle<TreesResponse>({
      fromCacheIfExists,
      method: "GET",
      path: path,
      headers: {
        // @ts-ignore
        "api-key": import.meta.env.VITE_VALLARIS_API_KEY,
      },
      queryParams: {
        limit: request?.limit,
        bbox: request?.boundingBox?.join(" ,"),
      },
    });

    if (data?.result?.features) {
      data!.result.features = [
        ...data.result.features,
        ...(mockJson.features as Tree[]),
      ];
    }

    return data;
  }

  public static async upload(
    filePath: string
  ): Promise<FetchResult<UploadImageResponse>> {
    const formdata = new FormData();
    formdata.append("files", filePath, "[PROXY]");

    const response = await this._networkHandler.handle<UploadImageResponse>({
      method: "POST",
      body: formdata,
      redirect: "follow",
      path: "/utilities/1.0/files",
    });

    return response;
  }

  public static async downloadTreeImage(tree: Tree): Promise<Blob> {
    if (!tree.properties?.imgId) {
      throw new Error("The image id of this tree is null");
    }

    // TODO use network handler.
    const response = await fetch(
      this._networkHandler.baseUrl +
        "/utilities/1.0/files/" +
        tree.properties.imgId +
        "/download"
    );
    const result = await response.blob();

    return result;
  }

  /**
   * Returns a pre-configured Libre map style
   *
   * config here: https://v2k-dev.vallarismaps.com/management/visual/style
   */
  public static getMapStyle(): FetchResult<string> {
    // TODO Replace Libre map style with the actual one we're gonna be using in prod.
    const styleId = "641ef0e2dd63c244d85b099a";

    return {
      result: `https://v2k-dev.vallarismaps.com/core/api/styles/1.0-beta/styles/${styleId}?api_key=${
        // @ts-ignore
        import.meta.env.VITE_VALLARIS_API_KEY
      }`,
      fromCache: true,
    };
  }

  public static async updateTreeData(
    request: UpdateTreeInfoBody
  ): Promise<FetchResult<void>> {
    const result = await VallarisService._networkHandler.handle<void>({
      method: "PUT",
      headers: {
        // @ts-ignore
        "api-key": import.meta.env.VITE_VALLARIS_API_KEY,
        "content-type": "application/json",
      },
      path: `/features/1.0-beta/collections/${VallarisService._collectionId}/items/${request.id}`,
      body: JSON.stringify(request),
    });

    return result;
  }
}
