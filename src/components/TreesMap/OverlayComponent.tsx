import { Box } from "@mui/system";
import React from "react";
import RightSideBar from "./RightSideBar";
import TopLeftOverview from "./TopLeftOverview";

export default function OverlayComponent() {
  return (
    <Box
      id="overlay-component-root"
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        "& > *": {
          pointerEvents: "auto",
        },
      }}
    >
      <TopLeftOverview />
      <RightSideBar />
    </Box>
  );
}
