import { useMemo } from "react";
import TreeRepository from "../repositories/TreesRepositories";

export function useGetTrees(polygon: number[][], deps: any[]) {
  return useMemo(() => {
    return TreeRepository.getTreesWithinBound({
      polygon: polygon,
    });
  }, deps);
}
