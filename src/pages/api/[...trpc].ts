/**
 * All non-trpc request are routed to open-api routes.
 */
import { NextApiRequest, NextApiResponse } from "next";
import cors from "nextjs-cors";
import { createOpenApiNextHandler } from "trpc-openapi";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Setup CORS
    await cors(req, res);

    // Handle incoming OpenAPI requests
    return createOpenApiNextHandler({
        router: appRouter,
        createContext: createTRPCContext,
    })(req, res);
};

export default handler;
