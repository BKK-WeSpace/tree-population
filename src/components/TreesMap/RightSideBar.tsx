import { Button, ButtonBase, Divider } from "@mui/material";
import { Box, SxProps } from "@mui/system";
import React, { useEffect, useState } from "react";
import useGetTrees from "../../data/hooks/useGetTrees";

import SearchIcon from "@mui/icons-material/Search";

import "./style/RightSideBar.css";

//@ts-ignore
import TreeImage from "../../assets/treeImage.png";
//@ts-ignore
import DefaultImage from "../../common/DefaultImage"
//@ts-ignore
import LogoWespace from "../../common/LogoWespace";


const sideBarWidth = 372;
// TODO apply drawer?
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
        icon={<p>{showSidebar ? ">" : "<"}</p>}
      />
      <FunFactSection
        sx={{
          padding: "24px 32px 0 24px",
        }}
      />
      <TabSwitcher
        children={[
          {
            jsx: <AllTreesTab trees={data} />,
            // TODO title for All Trees
            sectionTitle: "All Trees",
          },
          {
            jsx: <FindTreesTab />,
            // TODO title for Find Trees
            sectionTitle: "Find Trees",
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
        position: "absolute",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        color: "black",
        background: "white",
        top: "147px",
        transform: "translate(-50%)",
        ":focus": {
          outline: "none",
        },
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
        <LogoWespace alt="logoWespace" style={{ width: "98px", height: "18px", top: "28px", left: "1092px"}}></LogoWespace>
        {/* <img src={logoWespace} alt="logoWespace" style={{ width: "98px", height: "18px", top: "28px", left: "1092px"}} /> */}
        <DefaultImage alt="defaultImage" style={{ width: "24px", height: "24px", top: "24px", left: "1384px"}}></DefaultImage>
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
            width: "270px",
            height: "164px",
            background: "grey",
            borderRadius: "10px",
            margin: "29px",
          }}
        >
          <img src={TreeImage} alt="treeImage"/>
        </Box>
        <p style={{ color: "#65792D", fontSize: '24px', fontWeight: "bold" }}>รู้หรือไม่?</p>
        <p>
        ปัจจุบันต้นไม้ในกรุงเทพฯ ได้รับการดูแลที่ไม่ดีนัก 
        เพราะข้อมูลที่น้อย และมีค่าใช้จ่ายสูงในการดูแล
            <br/>
            <br/>
        ช่วยกันเก็บข้อมูลต้นไม้เพื่อให้น้องต้นไม้
            <br/>
                 ได้รับการดูแลที่ถูกต้อง 
        </p>
        <Button variant="contained" style={{ background: "#94B044", color: "white", fontSize: "15px"}}>อัปโหลดต้นไม้ของฉัน</Button>
      </Box>
    </Box>
  );
}

// TODO apply styles and functionality
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

// TODO implement <AllTreesTab/>
function AllTreesTab({ trees }) {
  return (
    <div>
      <Search />
      <div className="treeCardContainer">
        {trees != undefined &&
          trees.result.map((tree) => (
            <TreeCard
              name={tree.properties.commonName}
              status={tree.properties.isAlive}
            />
          ))}
      </div>
    </div>
  );
}

// TODO implement <FindTreesTab/>
function FindTreesTab() {
  return <p style={{ color: "green" }}> Find Trees Tab</p>;
}

function Search() {
  return (
    <div className="container">
      <div className="searchBar">
        found 200 trees <SearchIcon />
      </div>
    </div>
  );
}

function TreeCard({ name, status }) {
  return (
    <div className="tree-card">
      <div></div>
      <div className="">
        <div className="tree-detail">
          <div className="tree-title">{name}</div>
          <div className="tree-status">
            <p className="status-prompt">tree status :</p> {status.toString()}
          </div>
        </div>
        <div className="call-to-action-container"></div>
      </div>
    </div>
  );
}

function treeStatus({ status }) {
  return (
    <div className={`status-tag-${status ? "-active" : "-inactive"}`}></div>
  );
}
