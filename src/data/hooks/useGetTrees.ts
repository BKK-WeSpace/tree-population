import { default as Tree, default as Trees } from "../../types/Trees";
import { NetworkResult } from "../models/NetworkResult";
import TreeDataRepository from "../repositories/TreeDataRepository";
import useFetch from "./useFetch";

export default function useGetTrees(
  boundingBox?: [number, number, number, number],
  deps: any[] = []
): { trees?: Trees[]; isLoading: boolean } {
  return useFetch<NetworkResult<Tree[]>>({
    callback: async () => {
      const response = await TreeDataRepository.getTreesWithinBound({
        boundingBox,
      });
      return {
        error: response.error,
        result: response.result?.features,
      };
    },
    deps,
  });
}
