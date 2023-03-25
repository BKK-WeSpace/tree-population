import { FetchResult } from "../models/NetworkResult";
import { NetworkHandlerArgs } from "./NetworkRequestHandler";

export default class CacheManager {
  static async wrap<T>(
    refreshMethod: () => Promise<FetchResult<T>>,
    args: NetworkHandlerArgs
  ) {
    let key = args.path;
    if (args.queryParams) {
      key += JSON.stringify(args.queryParams);
    }
    if ((args.fromCacheIfExists ?? true) && key) {
      const trees: string | null = localStorage.getItem(key);
      if (trees) {
        const parsedCachedValue: FetchResult<T> = JSON.parse(trees);
        if (parsedCachedValue.result) {
          parsedCachedValue.fromCache = true;
          return parsedCachedValue;
        }
      }
    }
    const result = await refreshMethod();
    if (key && result.result) {
      localStorage.setItem(key, JSON.stringify(result));
    }

    return result;
  }
}
