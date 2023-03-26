import { ChevronLeft } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { useState, useContext, useRef } from "react";
import { SelectedTreeContext } from ".";
import Tree from "../../types/Trees";
import TreeCard from "./TreeCard";

import CloseIcon from "@mui/icons-material/Close";

//TODO Sync UI with Figma
export default function FindTreesTab({ trees }: { trees: Tree[] }) {
  const { setSelectedTree, selectedTree } = useContext(SelectedTreeContext);
  const [cardState, setCardState] = useState<"treesList" | "treeDetail">(
    "treesList"
  );
  const filePicekerRef = useRef(null);
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  function previewFile(e) {
    const reader = new FileReader();

    const selectedFile = e.target.files[0];
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }

    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("image")) {
        setImagePreview(readerEvent.target.result);
      } else if (selectedFile.type.includes("video")) {
        setVideoPreview(readerEvent.target.result);
      }
    };
  }

  function clearFiles() {
    setImagePreview(null);
    setVideoPreview(null);
  }

  function onUploadTreeButtonClicked() {
    setIsDrawerOpened(true);
  }

  function toggleDrawer() {
    setIsDrawerOpened(false);
  }

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
          onClick={onUploadTreeButtonClicked}
        >
          อัพโหลดข้อมูลต้นไม้
        </Button>

        <Drawer anchor={"bottom"} open={isDrawerOpened} onClose={toggleDrawer}>
          <FormControl
            style={{ height: "400px", alignItems: "center", marginTop: "30px" }}
          >
            <div style={{ width: "200px" }}>
              <TextField label="ชื่อต้นไม้" variant="outlined" />
            </div>

            <div
              style={{
                marginTop: "10px",
                width: "200px",
              }}
            >
              <div className="btn-container">
                <input
                  ref={filePicekerRef}
                  accept="image/*, video/*"
                  onChange={previewFile}
                  type="file"
                  hidden
                />
                <Button
                  style={{
                    marginRight: "10px",
                    width: "200px",
                    marginBottom: "10px",
                  }}
                  variant="outlined"
                  onClick={() => filePicekerRef.current.click()}
                >
                  Choose tree image
                </Button>
              </div>
            </div>

            <div className="preview">
              {imagePreview != null && <img src={imagePreview} alt="" />}
            </div>

            {imagePreview && (
              <CloseIcon
                style={{ cursor: "pointer", color: "red" }}
                onClick={clearFiles}
              />
            )}

            <Button
              variant="contained"
              style={{
                fontSize: "17px",
                width: "200px",
                marginTop: "30px",
                marginBottom: "30px",
                color: "white",
              }}
            >
              อัพโหลดข้อมูลต้นไม้
            </Button>
          </FormControl>
        </Drawer>
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
