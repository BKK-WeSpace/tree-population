import React, { useEffect, useState } from "react";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={mockTopListsSearch}
      sx={{
        borderRadius: "12px",
        width: "100%",
        background: "white",
        height: "56px",
        marginBottom: "20px",
        boxShadow: "0px 4px 8px rgba(109, 143, 12, 0.11)",
        color: "black",
      }}
      renderInput={(params) => <TextField {...params} label="ค้นหาพื้นที่สำรวจ" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const mockTopListsSearch = [
  { label: 'สวนเบญจกิติ'},
  { label: 'สวนหลวง ร.9'},
  { label: 'สวนลุมพินี'},
  { label: 'สวนจตุจักร'},
  { label: 'สวนวชิรเบญจทัศ สวนรถไฟ'},
  { label: 'สวนลอยฟ้าเจ้าพระยา'},
];