import Pending from "../../types/Pending";
import { default as Tree } from "../../types/Trees";
import { FetchResult } from "../models/NetworkResult";
import TreesRequestParams from "../models/TreesRequest";
import VallarisService from "../services/VallarisService";
import useFetch from "./useFetch";

export default function useGetTrees({
  request,
  deps = [],
}: {
  request?: TreesRequestParams;
  deps: any[];
}) {
  return useFetch<FetchResult<Tree[]>>({
    callback: async () => {
      const response = await VallarisService.getAllTrees({
        ...request,
        limit: request?.limit ?? 1000,
      });

      return {
        error: response.error,
        result: response.result?.features,
      };
    },
    deps,
  });
}
