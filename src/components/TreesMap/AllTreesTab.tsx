import React from "react";
import Tree from "../../types/Trees";
import SearchIcon from "@mui/icons-material/Search";
import TreeCard from "./TreeCard";

// TODO tree-reporting-flow
export default function AllTreesTab({ trees }: { trees: Tree[] }) {
  // This is a temp limit until we implement pagination.

  return (
    <div style={{ backgroundColor: "white" }}>
      {/* TODO search functionality */}
      <Search />
      <div className="treeCardContainer">
        {/* TODO infinite scroll */}
        {trees.map((tree, i) => (
          <TreeCard
            tree={tree}
            index={i}
            isFindTheTreeTab={false}
            onAddInformationPressed={() => {}}
          />
        ))}
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
