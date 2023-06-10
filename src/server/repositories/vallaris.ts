import axios from "axios";
import { TreesRequestSchema } from "../models/trees/treesRequest";
import { z } from "zod";
import { TreesResponseSchema } from "../models/trees/treesResponse";
import { TreesUploadRequestSchema } from "../models/trees/treesUploadRequest";
import { TreesUploadResponse } from "../models/trees/treesUploadResponse";

/**
 * TODO (big maybe, this might not be necessary at all, because we have the trpc router doing a bit of abstraction already.)
 *
 * When we connect to other open data repositories, having a common abstraction helps us switch between two
 * repositories at runtime and/or migrate to a new database repositorie. An ideal interface would be the common repository pattern.
 *
 * We might in the future have something akin to
 *
 * ```ts
 * class CommoRepository<T> {
 *      getAll(): Promise<T[]>;
 *      get(): Promise<T>;
 *      remove(): Promise<boolean | void>;
 *      ...
 * }
 * ```
 *
 * Then all repositories can extend this.
 *
 * ```ts
 * class SecondaryDatabaseService extends CommoRepository<T> {...}
 * class VallarisRepository extends CommoRepository<T> {...}
 * ```
 *
 * Then switching repositories is simply changing the name of the instance:
 *
 * ```ts
 * // from
 * const trees =vallarisRepository.getTrees();
 * // to
 * const trees = secondaryRepository.getTrees();
 * ```
 *
 */
const vallarisRepository = {
    baseURL: process.env.VALLARIS_ENDPOINT,
    collectionId: "6444e234b4b978478bef26f1",
    defaultTimeoutMillis: 30 * 1000,
    getTrees: async function (
        request: z.infer<typeof TreesRequestSchema>
    ): Promise<z.infer<typeof TreesResponseSchema>> {
        // TODO have a common axios config for stuff like base url, headers, timeout, etc.
        try {
            const data = await axios({
                method: "get",
                baseURL:
                    this.baseURL +
                    `/features/1.0/collections/${this.collectionId}/items`,
                headers: {
                    "Content-Type": "application/json",
                    "api-key": process.env.VALLARIS_API_KEY,
                },
                params: request,
                timeout: this.defaultTimeoutMillis,
            });
            return TreesResponseSchema.parse(data.data);
        } catch (error) {
            console.error(error);
            // TODO maybe handle this error differently for a better UX?
            // Force return an empty array.
            return Promise.resolve({
                type: "FeatureCollection",
                features: [],
            });
        }
    },
    /**
     * The public endpoint that is exposed to everyone.
     *
     * TODO need to rate limit the public endpoint for this to some arbitrary values.
     */
    upload: async function (
        request: z.infer<typeof TreesUploadRequestSchema>
    ): Promise<z.infer<typeof TreesUploadResponse>> {
        const data = await axios({
            method: "post",
            baseURL:
                this.baseURL +
                `/features/1.0-beta/collections/${this.collectionId}/items`,
            headers: {
                "content-Type": "application/json",
                "api-key": process.env.VALLARIS_API_KEY,
            },
            data: {
                type: "FeatureCollection",
                features: request.trees,
            },
            timeout: this.defaultTimeoutMillis,
        });
        return TreesUploadResponse.parse(data.data);
    },
};

export default vallarisRepository;
