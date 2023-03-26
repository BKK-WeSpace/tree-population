import { ChevronLeft } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import { SelectedTreeContext } from ".";
import Tree from "../../types/Trees";
import TreeCard from "./TreeCard";

//TODO Sync UI with Figma
export default function FindTreesTab({ trees }: { trees: Tree[] }) {
  const { setSelectedTree, selectedTree } = useContext(SelectedTreeContext);
  const [cardState, setCardState] = useState<"treesList" | "treeDetail">(
    "treesList"
  );

  function onBackToTreesListClicked() {
    setCardState("treesList");
  }

  function onAddInformationPressed(tree: Tree, i: number) {
    setCardState("treeDetail");
    setSelectedTree(tree, i);
  }
  return cardState === "treesList" ? (
    <div style={{ backgroundColor: "white" }}>
      <div className="treeCardContainer">
        {trees != undefined &&
          trees.map((tree, i) => (
            <TreeCard
              tree={tree}
              index={i}
              isFindTheTreeTab
              onAddInformationPressed={() => {
                onAddInformationPressed(tree, i);
              }}
            />
          ))}
      </div>
    </div>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "58px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ChevronLeft
            onClick={onBackToTreesListClicked}
            sx={{
              cursor: "pointer",
              marginRight: "14px",
            }}
          />
          <p>{selectedTree?.properties?.commonName ?? "ไม่มีชื่อ"}</p>
        </Box>
        <Box>{/* TODO Favorite and share icons*/}</Box>
      </Box>
      <Box>
        {selectedTree?.properties?.imgLink ? (
          <img src={selectedTree?.properties?.imgLink} />
        ) : (
          // TODO finalize no image placeholder
          <Box
            sx={{
              width: "324px",
              height: "205px",
              background: "grey",
              borderRadius: "10px",
              margin: "0 auto",
              display: "grid",
              placeItems: "center",
            }}
          >
            <span>No Image</span>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          marginTop: "8px",
          "& > * + *": {
            marginTop: "4px",
          },
        }}
      >
        {selectedTree?.id && (
          <TextRow title={"รหัส"} value={selectedTree!.id} />
        )}
        {selectedTree?.properties?.isAlive && (
          <TextRow title={"สถานะ"} value={selectedTree!.properties!.isAlive} />
        )}
        {selectedTree?.properties?.descriptiveFeatures && (
          <TextRow
            title={"ลักษณะที่สังเกตุได้"}
            value={selectedTree!.properties!.descriptiveFeatures}
          />
        )}
        {selectedTree?.geometry && (
          <>
            <TextRow
              title={"ลองติจูด"}
              value={selectedTree!.geometry!.coordinates[0]}
            />
            <TextRow
              title={"ละติจูด"}
              value={selectedTree!.geometry!.coordinates[1]}
            />
          </>
        )}
        <Button
          sx={{
            marginTop: "25px",
          }}
          variant="contained"
          color="secondary"
        >
          อัพโหลดข้อมูลต้นไม้
        </Button>
      </Box>
    </Box>
  );
}

function TextRow({ title, value }: { title: string; value: any }) {
  return (
    <Box
      sx={{
        display: "flex",
        paddingLeft: "24px",
        justifyContent: "space-between",
      }}
    >
      <span style={{ flex: 0.45, display: "inherit" }}>{title}:</span>
      <span style={{ flex: 0.55, display: "inherit" }}>
        <b>{value}</b>
      </span>
    </Box>
  );
}
