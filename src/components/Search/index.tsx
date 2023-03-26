import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { SelectedTreeContext } from "../TreesMap";
import Tree from "../../types/Trees";

export default function SearchBox({ setDataSearch }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const treeContext = React.useContext(SelectedTreeContext);

  const handleOptionChange = (event, newValue) => {
    console.log(newValue);
    setDataSearch(newValue);
    setSelectedOption(newValue);
    treeContext.setSelectedTree(newValue as Tree, 0);
  };

  //   const handleSearchInputChange = (event) => {
  //     console.log(event.target.value);
  //     setSearchQuery(event.target.value);
  //   };

  const filteredOptions = mockTopListsSearch.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      value={selectedOption}
      onChange={handleOptionChange}
      options={mockTopListsSearch}
      getOptionLabel={(option) => option.label}
      sx={{
        borderRadius: "12px",
        width: "100%",
        background: "white",
        height: "56px",
        marginBottom: "20px",
        boxShadow: "0px 4px 8px rgba(109, 143, 12, 0.11)",
        color: "black",
      }}
      renderInput={(params) => (
        <TextField {...params} label="ค้นหาพื้นที่สำรวจ" />
      )}
    />
  );
}

const mockTopListsSearch = [
  {
    label: "สวนเบญจกิติ",
    value: "สวนเบญจกิติ",
    amount: "360",
    geometry: {
      type: "Point",
      coordinates: [100.559471, 13.720874],
    },
  },
  {
    label: "สวนลุมพินี",
    value: "สวนลุมพินี",
    amount: "190",
    geometry: {
      type: "Point",
      coordinates: [100.5395044, 13.7314281],
    },
  },
  {
    label: "สวนลานพระจอม",
    value: "สวนลานพระจอม",
    amount: "90",
    geometry: {
      type: "Point",
      coordinates: [100.776415, 13.7305036],
    },
  },
  {
    label: "สวนหลวง ร.9",
    value: "สวนหลวง ร.9",
    amount: "120",
    geometry: {
      type: "Point",
      coordinates: [100.6601213, 13.6871027],
    },
  },

  {
    label: "สวนจตุจักร",
    value: "สวนจตุจักร",
    amount: "60",
    geometry: {
      type: "Point",
      coordinates: [100.5532258, 13.807484],
    },
  },
  {
    label: "สวนวชิรเบญจทัศ สวนรถไฟ",
    value: "สวนวชิรเบญจทัศ สวนรถไฟ",
    amount: "80",
    geometry: {
      type: "Point",
      coordinates: [100.551316, 13.816283],
    },
  },
];
