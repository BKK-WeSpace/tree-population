import { useEffect, useState } from "react";
import { useMemo } from "react";
import Trees from "../../types/Trees";
import TreeRepository from "../repositories/TreesRepositories";

export default function useGetTrees(
  polygon: number[][],
  deps: any[] = []
): { trees?: Trees[]; isLoading: boolean } {
  const [isLoading, setIsLoading] = useState(false);
  const [trees, setTrees] = useState<Trees[]>([]);

  async function fetchTrees() {
    setIsLoading(true);
    const trees = await TreeRepository.getTreesWithinBound({ polygon });
    setIsLoading(false);
    setTrees(trees);
  }

  useEffect(() => {
    fetchTrees();
  }, deps);

  return { isLoading, trees };
}
