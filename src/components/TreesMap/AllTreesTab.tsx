import React from "react";
import Tree from "../../types/Trees";
import SearchIcon from "@mui/icons-material/Search";
import TreeCard from "./TreeCard";

// TODO tree-reporting-flow
export default function AllTreesTab({ trees, mockTree }: { trees: Tree[], mockTree: string[] }) {
  // This is a temp limit until we implement pagination.

  return (
    <div style={{ backgroundColor: "white" }}>
      {/* TODO search functionality */}
      <Search />
      <div className="treeCardContainer">
        {/* TODO infinite scroll */}
        {trees.map((tree, i) => {
          let index = i % mockTree.length;
          tree.properties ??= {};
          tree.properties!.imgId = mockTree[index];
          return (
            <TreeCard
              tree={tree}
              index={i}
              isFindTheTreeTab={false}
              onAddInformationPressed={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
}

function Search() {
  return (
    <div>
      <br />
      <div className="searchBar">
        found 200 trees <SearchIcon />
      </div>
    </div>
  );
}
