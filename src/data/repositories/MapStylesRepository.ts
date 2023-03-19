import { FetchResult } from "../models/NetworkResult";
import VallarisService from "../services/VallarisService";

export default class MapStylesRepository {
  public static getBaseMapstyle(): Promise<FetchResult<string>> {
    return Promise.resolve(VallarisService.getMapStyle());
  }
}
