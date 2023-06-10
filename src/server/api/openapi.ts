import { generateOpenApiDocument } from "trpc-openapi";
import { appRouter } from "./root";

/**
 * For public-facing API endpoints.
 */

export const openApiDocument = generateOpenApiDocument(appRouter, {
    title: "WeSpace OpenAPI documentation",
    version: "0.0.1",
    baseUrl: "http://localhost:3000",
});
