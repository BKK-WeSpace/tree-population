import { useRef, useState } from "react";
import Tree from "../../types/Trees";

export default function useTreeState({
  map,
  mapSourceId,
}: {
  map: React.MutableRefObject<maplibregl.Map | undefined>;
  mapSourceId: string;
}) {
  const [selectedTree, setSelectedTree] = useState<Tree | undefined>();
  const clickedStateId = useRef<undefined | number | string>(undefined);

  function selectTree(tree: Tree, searchId?: number) {
    setSelectedTree(undefined);
    // Use setTimeout to allow repeated selection of the same object.
    setTimeout(() => {
      if (Number.isInteger(clickedStateId.current)) {
        map.current!.setFeatureState(
          {
            source: mapSourceId,
            id: clickedStateId.current,
          },
          { clicked: false }
        );
      }
      clickedStateId.current = searchId ?? tree.id!;
      setSelectedTree(tree);
      map.current!.setFeatureState(
        { source: mapSourceId, id: clickedStateId.current },
        { clicked: true }
      );
    }, 0);
  }

  return { selectedTree, setSelectedTree: selectTree };
}
