import axios from "axios";
import TreesRequestParams from "../models/trees/treesRequest";
import { TreesResponse } from "../models/trees/treesResponse";

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
    getTrees: async function (
        request: TreesRequestParams
    ): Promise<TreesResponse> {
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
                timeout: 30 * 1000,
            });
            return data.data;
        } catch (error) {
            console.error(error);
            // TODO maybe handle this error differently for a better UX?
            // Force return an empty array.
            return Promise.resolve({
                type: "FeatureCollection",
                features: [],
            } as TreesResponse);
        }
    },
};

export default vallarisRepository;
