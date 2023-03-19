import Trees from "../../types/Trees";
import TreesRequestParams from "../models/TreesRequest";
import { TreesResponse } from "../models/TreesResponse";

export default class TreeRepository {
  private static _baseVallarisUrl: string = `https://v2k-dev.vallarismaps.com/core/api`;
  private static _collectionId = "64169999e89e47973094f506";

  // TreesRequestBody
  static async getTreesWithinBound(
    treesRequest?: TreesRequestParams
  ): Promise<Trees[]> {
    const bboxString = treesRequest?.boundingBox?.join(", ");
    const limit = treesRequest?.limit ?? 1000;

    // TODO refactor to a common network handler

    const finalUrl = `${TreeRepository._baseVallarisUrl}/features/1.0/collections/${this._collectionId}/items`;

    const result = await fetch(
      bboxString
        ? `${TreeRepository._baseVallarisUrl}/features/1.0/collections/${this._collectionId}/items?bbox=${bboxString}&limit=${limit}`
        : `${TreeRepository._baseVallarisUrl}/features/1.0/collections/${this._collectionId}/items?limit=${limit}`,
      {
        headers: {
          "api-key": import.meta.env.VITE_VALLARIS_API_KEY,
        },
      }
    );

    if (result.status != 200) {
      // TODO handle error
    }

    const json = await result.json();
    const data = json as TreesResponse;

    return data.features;
  }

  // TODO upload endpoint to update the detail of the tree. Needs to wait for valaris connection to be made first. Also implement the upload and response models.
}
