import { FetchError, FetchResult, TimeoutError } from "../models/NetworkResult";

type _BaseNetworkHandlerArgs = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path?: string;
  queryParams?: Record<string, any>;
  timeoutSeconds?: number;
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

  async handle<T>(args: NetworkHandlerArgs): Promise<FetchResult<T>> {
    let { path, queryParams, timeoutSeconds, ...rest } = args;

    timeoutSeconds ??= 10;

    path ??= "";
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
          resolve({ error: new TimeoutError({}) });
        }, timeoutSeconds! * 1000);

        const response = await fetch(this._baseUrl + path + paramString, rest);

        if (!response.ok) {
          resolve({ error: new FetchError({ response }) });
        }

        const result = await response.json();

        resolve({ result: result as T, response: response });
      });
    } catch (e) {
      return {
        error: new FetchError({ error: e }),
      };
    }
  }
}
