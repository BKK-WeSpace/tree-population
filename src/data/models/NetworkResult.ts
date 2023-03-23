export type FetchResult<T> =
  | {
      result?: never;
      error: FetchError;
      response?: Response;
    }
  | {
      result: T;
      response: Response;
      error?: never;
    };

export class FetchError {
  error?: Error;
  type: "Generic" | "Client" | "Server";
  constructor({ response, error }: { response?: Response; error?: any }) {
    this.error = error;
    const responseString = response?.status.toString() ?? "";
    switch (responseString[0]) {
      case "4":
        this.type = "Client";
        break;
      case "5":
        this.type = "Server";
        break;
      default:
        this.type = "Generic";
    }
  }
}

export class TimeoutError extends FetchError {}
