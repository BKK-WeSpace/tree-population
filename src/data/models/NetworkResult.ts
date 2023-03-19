export type FetchResult<T> = {
  error?: FetchError;
  result?: T;
};

export class FetchError {
  response?: Response;
  error?: Error;
  type: "Generic" | "Client" | "Server";
  constructor({ response, error }: { response?: Response; error?: any }) {
    this.response = response;
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
