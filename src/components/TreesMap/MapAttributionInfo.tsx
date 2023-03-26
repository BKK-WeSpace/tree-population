import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";

export default function MapAttributionInfo() {
  return (
    <Box sx={{
        overflow: "visible",
        position: "fixed",
        bottom:0,
        left:0,
        
        backgroundColor: 'white',
        padding:"0px 5px 0px 5px",

        borderRadius: "10px 10px 0 0",

        fontSize: "12px",
        fontWeight: "300",

        marginLeft:1,
        boxShadow: 3,

        height:"4%",

    }} >
        <p><a href="https://www.openstreetmap.org/">© OpenStreetMap</a> contributors</p>
    </Box>
  );
}
