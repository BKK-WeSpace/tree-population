import { Button, ButtonBase, Divider } from "@mui/material";
import { Box, SxProps } from "@mui/system";
import React, { useState } from "react";
import useGetTrees from "../../data/hooks/useGetTrees";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//@ts-ignore
import TreeImage from "../../assets/treeImage.png";

//@ts-ignore
import LogoWespace from "../../common/LogoWespace";

import { SelectedTreeContext } from ".";
import Tree from "../../types/Trees";
import AllTreesTab from "./AllTreesTab";
import "./style/RightSideBar.css";
import TreeCard from "./TreeCard";
import { Margin } from "@mui/icons-material";

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
          // padding: "24px 24px 0 24px",
        }}
      />
      <TabSwitcher
        children={[
          {
            jsx: <AllTreesTab trees={data?.result?.features ?? []} />,
            sectionTitle: "ต้นไม้ทั้งหมด",
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

function FunFactSection({ sx }: { sx?: SxProps }) {
  return (
    <Box
      sx={{
        ...sx,
        color: "black",
        fontSize: "14px",
        alignItem:"center",
        
      }}
    >
      <Box
        sx={{
          paddingLeft:"26px",
          paddingRight:"26px",
          paddingTop:"14px",
          paddingBottom:"14px",
          backgroundColor: 'white',
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          marginBottom:"14px",
        }}
      >
        <LogoWespace />
        <Button
          variant="contained"
          style={{
            background: "#A0705F",
            color: "white",
            fontSize: "12px",
            fontWeight: "bold",
            borderRadius: 12,
            padding: 7,
            textAlign:"center",
          }}
        >
          เข้าสู่ระบบ
        </Button>
        
      </Box>

      {/* img */}
      <Box
          sx={{
            position:"",
            width: "324px",
            height: "138px",
            background: "grey",
            borderRadius: "10px",
            marginTop: "24px",
            marginLeft: "24px",
            marginRight: "24px",
            // top: "24px",
            // left: "24px",
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
      <Box
        sx={{
          "& > * + *": {
            marginBottom: "13px",
          },
        }}
      >
        <p style={{
          color: "#65792D",
          fontSize: "24px",
          fontWeight: "bold",
          marginTop: '16px',
          marginBottom: '16px',
          }}>
          รู้หรือไม่?
        </p>
        <p
        style={{
          marginTop: '16px',
          marginBottom: '16px',
          marginLeft: "24px",
          marginRight: "24px",
          }}
        >
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

// TODO show only trees that do not have names
function FindTreesTab({ trees }: { trees: Tree[] }) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="treeCardContainer">
        {trees != undefined &&
          trees.map((tree, i) => (
            <TreeCard tree={tree} index={i} isFindTheTreeTab />
          ))}
      </div>
    </div>
  );
}
