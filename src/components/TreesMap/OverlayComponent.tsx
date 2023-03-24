import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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

// TODO style this; apply theme, responsive, etc.
export function TopLeftOverview() {
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
        Test
      </Box>
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
        Test
      </Box>
    </Box>
  );
}

// TODO apply drawer?
export function RightSideBar() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "372px",
        height: "100%",
        background: "#F2F6E6",
        right: 0,
        padding: "24px 32px 0 24px",
        boxSizing: "border-box",
      }}
    >
      <FunFactSection />
    </Box>
  );
}

// TODO apply styles & functionality
function FunFactSection() {
  return (
    <Box
      sx={{
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
