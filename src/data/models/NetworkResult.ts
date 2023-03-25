export type FetchResult<T> = {
  result?: T;
  error?: FetchError;
  /**
   * Whether or not the returned value is from the local cache.
   */
  fromCache: boolean;
};

export class FetchError {
  error?: Error;
  message?: string;
  type: "Generic" | "Client" | "Server";
  constructor({
    responseCode = "",
    error,
    message,
  }: {
    responseCode?: string;
    error?: any;
    message?: string;
  }) {
    this.error = error;
    this.message = message;
    switch (responseCode[0]) {
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
