import React, { useEffect, useState } from "react";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBox({setDataSearch}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOptionChange = (event, newValue) => {
    console.log(newValue);
    setDataSearch(newValue);
    setSelectedOption(newValue);
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
      renderInput={(params) => <TextField {...params} label="ค้นหาพื้นที่สำรวจ" />}
    />
  );
}

const mockTopListsSearch = [
  { label: 'สวนเบญจกิติ', value:'สวนเบญจกิติ', amount: '360'},
  { label: 'สวนหลวง ร.9', value: 'สวนหลวง ร.9', amount: '120'},
  { label: 'สวนลุมพินี', value: 'สวนลุมพินี', amount: '190'},
  { label: 'สวนจตุจักร', value: 'สวนจตุจักร', amount: '60'},
  { label: 'สวนวชิรเบญจทัศ สวนรถไฟ', value: 'สวนวชิรเบญจทัศ สวนรถไฟ', amount: '80'},
  { label: 'สวนลอยฟ้าเจ้าพระยา', value: 'สวนลอยฟ้าเจ้าพระยา', amount: '20'},
];