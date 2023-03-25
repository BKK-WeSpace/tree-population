import { Button, ButtonBase, Divider } from "@mui/material";
import { Box, SxProps } from "@mui/system";
import React, { useEffect, useState } from "react";
import useGetTrees from "../../data/hooks/useGetTrees";

import SearchIcon from "@mui/icons-material/Search";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import CupImage from "../../common/CupImage";
import VerifiedImage from "../../common/VerifiedImage";

//@ts-ignore
import TreeImage from "../../assets/treeImage.png";

//@ts-ignore
import Tree1 from "../../assets/tree1.png";

//@ts-ignore
import Tree2 from "../../assets/tree2.png";

//@ts-ignore
import Tree3 from "../../assets/tree3.png";

//@ts-ignore
import NoImage from "../../assets/noImage.png";

//@ts-ignore
import DefaultImage from "../../common/DefaultImage";

//@ts-ignore
import LogoWespace from "../../common/LogoWespace";

import "./style/RightSideBar.css";
import { SelectedTreeContext } from ".";
import Tree from "../../types/Trees";

const treeList = [Tree1, Tree2, Tree3, Tree1, Tree2];

const sideBarWidth = 372;
export default function RightSideBar() {
  const [showSidebar, setShowSidebar] = useState(true);
  let { isLoading, data } = useGetTrees({});

  function toggleShowOrHide() {
    setShowSidebar((s) => !s);
  }

  return (
    <Box
      className="treeCardContainer"
      sx={{
        position: "fixed",
        width: sideBarWidth + "px",
        right: showSidebar ? 0 : -sideBarWidth,
        height: "100%",
        background: "#F2F6E6",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        transition: ".3s",
      }}
    >
      <SidebarToggle
        onClick={toggleShowOrHide}
        icon={
          <p>
            {showSidebar ? (
              <ArrowForwardIosIcon
                style={{ fontSize: "15px" }}
              ></ArrowForwardIosIcon>
            ) : (
              <ArrowBackIosNewIcon
                style={{ fontSize: "15px" }}
              ></ArrowBackIosNewIcon>
            )}
          </p>
        }
      />
      <FunFactSection
        sx={{
          padding: "24px 32px 0 24px",
        }}
      />
      <TabSwitcher
        children={[
          {
            jsx: <AllTreesTab trees={data?.result?.features ?? []} />,
            sectionTitle: "้ต้นไม้ทั้งหมด",
          },
          {
            jsx: <FindTreesTab trees={data?.result?.features ?? []} />,
            sectionTitle: "ตามหาต้นไม้",
          },
        ]}
        sx={{
          paddingTop: "24px",
        }}
      />
    </Box>
  );
}

// TODO style it and replace with a real chevron :p
function SidebarToggle({
  onClick,
  icon,
}: {
  onClick: VoidFunction;
  icon: JSX.Element;
}) {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        position: "fixed",
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        color: "black",
        background: "white",
        top: "147px",
        transform: "translate(-50%)",
        ":focus": {
          outline: "none",
        },
        zIndex: 5,
      }}
    >
      {icon}
    </ButtonBase>
  );
}

// TODO apply styles & functionality
function FunFactSection({ sx }: { sx?: SxProps }) {
  return (
    <Box
      sx={{
        ...sx,
        color: "black",
        fontSize: "14px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LogoWespace />
        <Button
          variant="contained"
          style={{
            background: "#A0705F",
            color: "white",
            fontSize: "17px",
            fontWeight: "bold",
            borderRadius: 12,
            padding: 7,
          }}
        >
          เข้าสู่ระบบ
        </Button>
      </Box>
      <Box
        sx={{
          "& > * + *": {
            marginBottom: "13px",
          },
        }}
      >
        <Box
          sx={{
            width: "324px",
            height: "138px",
            background: "grey",
            borderRadius: "10px",
            // margin: "29px",
            top: "24px",
            left: "24px",
            marginTop: "24px",
            marginBottom: "24px",
          }}
        >
          <img
            src={TreeImage}
            alt="treeImage"
            style={{
              width: "324px",
              height: "138px",
              background: "grey",
              borderRadius: "10px",
              top: "24px",
              left: "24px",
              objectFit: "cover",
            }}
          />
        </Box>
        <p style={{ color: "#65792D", fontSize: "24px", fontWeight: "bold" }}>
          รู้หรือไม่?
        </p>
        <p>
          ปัจจุบันต้นไม้ในกรุงเทพฯ ได้รับการดูแลที่ไม่ดีนัก เพราะข้อมูลที่น้อย
          และมีค่าใช้จ่ายสูงในการดูแล
          <br />
          <br />
          ช่วยกันเก็บข้อมูลต้นไม้เพื่อให้น้องต้นไม้
          <br />
          ได้รับการดูแลที่ถูกต้อง
        </p>
      </Box>
    </Box>
  );
}

function TabSwitcher({
  sx,
  children,
}: {
  sx?: SxProps;
  children: {
    sectionTitle: string;
    jsx: React.ReactNode;
  }[];
}) {
  const [selectedSection, setSelectedSection] = useState(0);

  return (
    <Box sx={{ ...sx, overflow: "visible", position: "relative" }}>
      <Box sx={{ top: "-31px", display: "flex" }}>
        {children.map((c, i) => {
          return (
            <ButtonBase
              key={c.sectionTitle + i}
              onClick={() => setSelectedSection(i)}
              sx={{
                display: "grid",
                placeItems: "center",
                padding: "5px 23px 2px 23px",
                borderRadius: "10px 10px 0 0",
                cursor: "pointer",
                background:
                  selectedSection === i ? "white" : "rgba(101, 121, 45, 0.2)",
                color: "#65792D",
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "24px",
                fontStyle: "normal",
                transition: ".3s",
                ":focus": {
                  outline: "none",
                },
              }}
            >
              <b>{c.sectionTitle}</b>
            </ButtonBase>
          );
        })}
      </Box>
      <Divider />
      {children.map((c, i) => {
        return (
          <Box
            key={c.sectionTitle + "body"}
            sx={{
              display: i === selectedSection ? "unset" : "none",
            }}
          >
            {c.jsx}
          </Box>
        );
      })}
    </Box>
  );
}

function AllTreesTab({ trees }: { trees: Tree[] }) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Search />
      <div className="treeCardContainer">
        {trees != undefined &&
          trees.map((tree, i) => (
            <TreeCard
              tree={tree}
              index={i}
              isFindTheTreeTab={false}
              treeImg={treeList[i]}
            />
          ))}
      </div>
    </div>
  );
}

function FindTreesTab({ trees }: { trees: Tree[] }) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="treeCardContainer">
        {trees != undefined &&
          trees.map((tree, i) => (
            <TreeCard
              tree={tree}
              index={i}
              isFindTheTreeTab
              treeImg={treeList[i]}
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

function TreeCard({
  treeImg,
  isFindTheTreeTab,
  tree,
  index,
}: {
  treeImg: string;
  isFindTheTreeTab: boolean;
  tree: Tree;
  index: number;
}) {
  const treeContext = React.useContext(SelectedTreeContext);
  function onNavigateToTreeButtonClicked() {
    treeContext.setSelectedTree(tree as Tree, index as number);
  }

  return (
    <div className="tree-card">
      {isFindTheTreeTab ? (
        <img
          src={NoImage}
          alt="treeImage"
          style={{ width: "108px", height: "108px" }}
        />
      ) : (
        <img
          src={treeImg}
          alt="treeImage"
          style={{ width: "108px", height: "108px" }}
        />
      )}

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
      {isFindTheTreeTab ? "ไม่มีข้อมูลสถานะ" : "arrive"}
    </p>
  );
}
