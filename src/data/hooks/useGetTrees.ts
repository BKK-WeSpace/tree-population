import { useEffect, useState } from "react";
import Trees from "../../types/Trees";
import TreeRepository from "../repositories/TreesRepositories";

export default function useGetTrees(
  boundingBox?: [number, number, number, number],
  deps: any[] = []
): { trees?: Trees[]; isLoading: boolean } {
  const [isLoading, setIsLoading] = useState(true);
  const [trees, setTrees] = useState<Trees[]>([]);

  async function fetchTrees() {
    setIsLoading(true);
    const trees = await TreeRepository.getTreesWithinBound({ boundingBox });
    setIsLoading(false);
    setTrees(trees);
  }

  useEffect(() => {
    fetchTrees();
  }, deps);

  return { isLoading, trees };
}
