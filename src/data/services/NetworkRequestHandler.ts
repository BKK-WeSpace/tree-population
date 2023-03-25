import { ConnectingAirportsOutlined } from "@mui/icons-material";
import { FetchError, FetchResult, TimeoutError } from "../models/NetworkResult";
import CacheManager from "./CacheManager";

type _BaseNetworkHandlerArgs = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path?: string;
  queryParams?: Record<string, any>;
  timeoutSeconds?: number;
  fromCacheIfExists?: boolean;
};

export type NetworkHandlerArgs = _BaseNetworkHandlerArgs &
  Omit<RequestInit, keyof _BaseNetworkHandlerArgs>;

// TODO write test cases for this handler.
// Maybe we'll just move to React Query. We'll see.
export default class NetworkRequestHandler {
  private _baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    this._baseUrl = baseUrl;
  }

  // Bruh, why didn't I just use React Query?!
  async handle<T>(args: NetworkHandlerArgs): Promise<FetchResult<T>> {
    return CacheManager.wrap<T>(() => this._handle<T>(args), args);
  }

  private _handle<T>({
    path = "",
    timeoutSeconds = 10,
    queryParams,
    ...rest
  }: NetworkHandlerArgs): Promise<FetchResult<T>> {
    if (path && path[0] != "/") path += "/";

    queryParams ??= {};
    let paramString = "";
    for (const key of Object.keys(queryParams)) {
      const value = queryParams[key];
      if (!paramString) paramString += "?";
      if (value) {
        paramString += `&${key}=${value}`;
      }
    }

    try {
      return new Promise(async (resolve, _) => {
        setTimeout(() => {
          resolve({ error: new TimeoutError({}), fromCache: false });
        }, timeoutSeconds! * 1000);

        const response = await fetch(this._baseUrl + path + paramString, rest);

        if (!response.ok) {
          const responseError = await response.json();
          resolve({
            error: new FetchError({
              message: responseError.description,
              responseCode: responseError.code,
            }),
            fromCache: false,
          });
          return;
        }

        const result = await response.json();

        resolve({ result: result as T, fromCache: false });
      });
    } catch (e) {
      return Promise.resolve({
        error: new FetchError({ error: e }),
        fromCache: false,
      });
    }
  }
}
