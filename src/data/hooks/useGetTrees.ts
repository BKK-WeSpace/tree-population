import { default as Tree, default as Trees } from "../../types/Trees";
import TreeDataRepository from "../repositories/TreeDataRepository";
import useFetch from "./useFetch";

export default function useGetTrees(
  boundingBox?: [number, number, number, number],
  deps: any[] = []
): { trees?: Trees[]; isLoading: boolean } {
  return useFetch<Tree[]>({
    callback: () => {
      return TreeDataRepository.getTreesWithinBound({ boundingBox });
    },
    deps,
  });
}
