import NetworkRequestHandler, { NetworkHandlerArgs } from "./NetworkRequestHandler";
import { FetchError, TimeoutError } from "../models/NetworkResult";

jest.useFakeTimers();

describe("NetworkRequestHandler", () => {
  let networkRequestHandler: NetworkRequestHandler;

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockClear();
    networkRequestHandler = new NetworkRequestHandler({
      baseUrl: "https://example.com",
    });
  });

  afterEach(() => {
    jest.spyOn(global, "fetch").mockRestore();
  });

  it("should handle a successful GET request", async () => {
    // Arrange
    const mockResponse = { data: "example data" };
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response)
    );

    // Act
    const result = await networkRequestHandler.handle<{ data: string }>({
      method: "GET",
      path: "/example",
    });

    // Assert
    expect(result.error).toBeUndefined();
    expect(result.result).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://example.com/example",
      expect.objectContaining({
        method: "GET",
      })
    );
  });

  it("should handle a failed GET request", async () => {
    // Arrange
    const mockErrorResponse = {
      code: "404",
      description: "Not Found",
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockErrorResponse),
      } as Response)
    );

    // Act
    const result = await networkRequestHandler.handle<{ data: string }>({
      method: "GET",
      path: "/example",
    });

    // Assert
    expect(result.result).toBeUndefined();
    expect(result.error).toEqual(
      new FetchError({
        message: "Not Found",
        responseCode: "404",
      })
    );
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://example.com/example",
      expect.objectContaining({
        method: "GET",
      })
    );
  });

  it("should handle a timeout error", (done) => {
    // Arrange
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return new Promise<Response>((resolve) => {
        setTimeout(() => {
          resolve({
            ok: true,
            json: () => Promise.resolve({ data: "example data" }),
          } as Response);
        }, 3000); // Set timeout to 3 seconds
      }).then((response) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(response);
          }, 2000); // Set delay to 2 seconds
        });
      });
    });
  
    // Act
    networkRequestHandler
      .handle<{ data: string }>({
        method: "GET",
        path: "/example",
        timeout: 1000, // Set timeout to 1 second
      } as NetworkHandlerArgs)
      .then(() => {
        // Assert
        done.fail(new Error("Expected request to timeout"));
      })
      .catch((error) => {
        // Assert
        expect(error).toBeInstanceOf(TimeoutError);
        done();
      });
  }, 10000); // Set test timeout to 10 seconds
});
