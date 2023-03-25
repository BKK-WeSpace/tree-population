import { FetchResult } from "../models/NetworkResult";
import TreesRequestParams from "../models/TreesRequest";
import { TreesResponse } from "../models/TreesResponse";
import VallarisService from "../services/VallarisService";
import useFetch from "./useFetch";

export default function useGetTrees({
  request,
  deps,
}: {
  request?: TreesRequestParams;
  deps?: any[];
}) {
  return useFetch<FetchResult<TreesResponse>>({
    callback: async () => {
      const response = await VallarisService.getAllTrees({
        ...request,
        limit: request?.limit ?? 1000,
      });

      return {
        ...response,
        result: response.result,
      };
    },
    deps,
  });
}
