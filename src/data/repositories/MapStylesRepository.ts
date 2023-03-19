import VallarisService from "../services/VallarisService";

export default class MapStylesRepository {
  public static getBaseMapstyle(): Promise<string> {
    return Promise.resolve(VallarisService.getMapStyle());
  }
}
