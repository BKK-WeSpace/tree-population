import React from "react";
import Tree from "../../types/Trees";
import SearchIcon from "@mui/icons-material/Search";
import TreeCard from "./TreeCard";

export default function AllTreesTab({ trees }: { trees: Tree[] }) {
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* TODO search functionality */}
      <Search />
      <div className="treeCardContainer">
        {/* TODO infinite scroll */}
        {trees != undefined &&
          trees.map((tree, i) => (
            <TreeCard tree={tree} index={i} isFindTheTreeTab={false} />
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
