import { useEffect, useState } from "react";
import Trees from "../../types/Trees";
import TreeDataRepository from "../repositories/TreeDataRepository";

export default function useGetTrees(
  boundingBox?: [number, number, number, number],
  deps: any[] = []
): { trees?: Trees[]; isLoading: boolean } {
  const [isLoading, setIsLoading] = useState(true);
  const [trees, setTrees] = useState<Trees[]>([]);

  async function fetchTrees() {
    setIsLoading(true);
    const trees = await TreeDataRepository.getTreesWithinBound({ boundingBox });
    setIsLoading(false);
    setTrees(trees);
  }

  useEffect(() => {
    fetchTrees();
  }, deps);

  return { isLoading, trees };
}
