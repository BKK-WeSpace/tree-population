import { Button, ButtonBase, Divider } from "@mui/material";
import { Box, SxProps } from "@mui/system";
import React, { useEffect, useState } from "react";
import useGetTrees from "../../data/hooks/useGetTrees";

import SearchIcon from "@mui/icons-material/Search";

import "./style/RightSideBar.css";

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
        <p>WeSpace logo</p>
        <p>Profile Icon</p>
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
            margin: "auto",
          }}
        >
          <span>Tree image</span>
        </Box>
        <p>Do you know?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          eos voluptatum dolores? Nesciunt fugit, architecto blanditiis sed
          dicta aliquam obcaecati.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cum!
        </p>
        <p style={{ color: "green" }}>Stepper Component</p>
        <Button variant="contained">Upload my Tree</Button>
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
    <div className="treeCard">
      <div>
        <div>{name}</div>
        <div>{status.toString()}</div>
      </div>
      <div></div>
    </div>
  );
}
