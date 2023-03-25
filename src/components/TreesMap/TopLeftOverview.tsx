import { Box } from "@mui/material";
import * as React from "react";
import AlertImage from "../../common/AlertImage";
import IconLeaf from "../../common/IconLeaf";
import useGetTrees from "../../data/hooks/useGetTrees";
import SearchBox from "../Search";

import { useState } from "react";

export default function TopLeftOverview() {
  const { data, isLoading } = useGetTrees({});
  // TODO use bounding box to query trees from Lumphini park.
  // get array of area from ?
  const serveyArea = [
    "All",
    "สวนลุมพินี",
    "สวนเบญ",
    "สวนจตุจักร",
    "สวนสนุก",
    "สวนน้ำ",
  ];

  const [selctedArea, setSelctedArea] = useState(serveyArea[0]);

  const handleAreaChange = (event) => {
    setSelctedArea(event.target.value);
  };
  const [dataSearch, setDataSearch] = useState("");
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
        <SearchBox setDataSearch={setDataSearch} />
      </Box>

      {dataSearch ? (
        <Box
          sx={{
            color: "black",
            borderRadius: "12px",
            width: "100%",
            height: "170px",
            background: "white",
            boxShadow: "0px 4px 8px rgba(109, 143, 12, 0.11)",
          }}
        >
          <br />
          <div>
            <span
              style={{ fontSize: "25px", fontWeight: "bold", color: "#94B044" }}
            >
              จำนวนต้นไม้ในพื้นที่
            </span>
            <IconLeaf></IconLeaf>
          </div>
          <span style={{ fontSize: "48px", fontWeight: "bold" }}>
            {dataSearch.amount} ต้น
          </span>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span style={{ fontSize: "14px", fontWeight: "shape" }}>
              สำหรับ (พื้นที่สำรวจ)&nbsp;
            </span>
            <AlertImage></AlertImage>
          </div>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}
