import { Box } from "@mui/material";
import React from "react";
import SearchBox from "../Search";

// TODO style this; apply theme, responsive, etc.
export default function TopLeftOverview() {
  // will have to get from the useTrees hook.
  const treesInTheArea = 350;
  const data = null;
  return (
    <Box
      sx={{
        position: "absolute",
        width: "322px",
        left: "38px",
        top: "29px",
        pointerEvents: "auto",
      }}
    >
      <Box
        sx={{
          borderRadius: "12px",
          width: "100%",
          background: "white",
          height: "56px",
          marginBottom: "20px",
          boxShadow: "0px 4px 8px rgba(109, 143, 12, 0.11)",
          color: "black",
        }}
      >
        {/* Search Filter */}
        <SearchBox/>
      </Box>

      {
        data?
          <Box
          sx={{
            color: "black",
            borderRadius: "12px",
            width: "100%",
            height: "147px",
            background: "white",
            boxShadow: "0px 4px 8px rgba(109, 143, 12, 0.11)",
          }}
        >
          Trees in the area {treesInTheArea}
        </Box>
        : <></>
      }
    </Box>
  );
}
