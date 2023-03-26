import { Button } from "@mui/material";
import React, { useState } from "react";
import { SelectedTreeContext } from ".";
import CupImage from "../../common/CupImage";
import VerifiedImage from "../../common/VerifiedImage";
import Tree from "../../types/Trees";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

//@ts-ignore
import NoImage from "../../assets/noImage.png";

export default function TreeCard({
  isFindTheTreeTab,
  tree,
  index,
  onAddInformationPressed,
}: {
  isFindTheTreeTab: boolean;
  tree: Tree;
  index: number;
  onAddInformationPressed: VoidFunction;
}) {
  const treeContext = React.useContext(SelectedTreeContext);
  function onNavigateToTreeButtonClicked() {
    console.log("-> tree", tree);
    console.log("-> index", index);
    treeContext.setSelectedTree(tree as Tree, index as number);
  }
  return (
    <div className="tree-card">
      <img
        src={tree.properties?.imgId ?? NoImage}
        alt="treeImage"
        style={{ width: "108px", height: "108px" }}
      />

      <div className="box">
        <div className="tree-detail">
          <div className="tree-title">
            <span>{tree.properties?.commonName}</span>
            {tree.properties?.isVerified && <VerifiedImage />}
            {tree.properties?.isReward && <CupImage />}
          </div>
          {tree.properties?.isAlive !== undefined && (
            <div className="tree-status">
              <p className="status-prompt">tree status:</p>
              <TreeStatus
                status={tree.properties.isAlive}
                isFindTheTreeTab={isFindTheTreeTab}
              />
            </div>
          )}
        </div>

        <div className="call-to-action-container">
          <div></div>
          <div>
            <Button
              style={{
                color: isFindTheTreeTab ? "#A0705F" : "#94B044",
                fontWeight: "700",
                borderRadius: "8px",
                padding: "4px 7px",
                borderColor: isFindTheTreeTab ? "#A0705F" : "#94B044",
                height: "32px",
                fontSize: "12px",
              }}
              variant="outlined"
              onClick={onNavigateToTreeButtonClicked}
              endIcon={<MapOutlinedIcon />}
            >
              นำทาง
            </Button>
            <Button
              style={{
                color: "white",
                fontWeight: "700",
                borderRadius: "8px",
                marginLeft: "6px",
                padding: "4px 7px",
                backgroundColor: isFindTheTreeTab ? "#A0705F" : "#94B044",
                height: "32px",
                fontSize: "12px",
              }}
              // TODO Hug Tree
              onClick={isFindTheTreeTab ? onAddInformationPressed : () => {}}
              variant="contained"
              endIcon={
                isFindTheTreeTab ? (
                  <AddCircleOutlineIcon style={{ marginLeft: "0px" }} />
                ) : (
                  <FavoriteBorderOutlinedIcon style={{ marginLeft: "0px" }} />
                )
              }
            >
              {isFindTheTreeTab ? "เพิ่มข้อมูล" : "กอดน้อง"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TreeStatus({ status, isFindTheTreeTab }) {
  return (
    <p className={`tag-${status ? "active" : "inactive"}`}>
      {isFindTheTreeTab ? "ไม่มีข้อมูลสถานะ" : "Alive"}
    </p>
  );
}
