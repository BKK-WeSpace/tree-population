import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import useGetTrees from "../../data/hooks/useGetTrees";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// TODO style this; apply theme, responsive, etc.
export default function TopLeftOverview() {
  const { data, isLoading } = useGetTrees({});
  // will have to get from the useGetTrees hook.
  const treesInTheArea = isLoading ? "loading..." : data?.result?.length;
  // get array of area from ?
  const serveyArea = [
    "สวนลุมพินี",
    "สวนเบญ",
    "สวนจตุจักร",
    "สวนสนุก",
    "สวนน้ำ",
  ];
  const currentArea = serveyArea[0];

  console.log(data);

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

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
        <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        margin={2}
        >
          <Typography display='flex' flexGrow={1}
            sx={{
              fontSize: "16px",
              color:"#65792D",
              fontWeight:'Bold'
            }}
            marginLeft={2}
          >
            พื้นที่สำรวจ
          </Typography>
          <FormControl
            sx={{
              color: "black",
              minWidth: 150,
              maxWidth: 150,
              textAlign: "left",
              mx: 2,
              fontWeight:'Bold'
            }}
          >
            <Select
              IconComponent={KeyboardArrowDownOutlinedIcon}
              // value={serveyArea[0]}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              defaultValue="option1"
              sx={{
                "& .MuiSvgIcon-root": { color: "#333333" },
                color: "#333333",
                backgroundColor: "white",
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value={serveyArea[0]}>{serveyArea[0]}</MenuItem>
              <MenuItem value={serveyArea[1]}>{serveyArea[1]}</MenuItem>
              <MenuItem value={serveyArea[2]}>{serveyArea[2]}</MenuItem>
              <MenuItem value={serveyArea[3]}>{serveyArea[3]}</MenuItem>
            </Select>
          </FormControl>
        </Grid>

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
        <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        >
          <Typography sx={{
            fontSize: '18px',
            fontWeight: "bold", 
            color:"#65792D",
          }}
          marginTop={3}
          >จำนวนต้นไม้ในพื้นที่</Typography>
          
          <Typography sx={{
            fontSize: '30px',
            fontWeight: "bold", 
          }}>
            {treesInTheArea} ต้น</Typography>
          <Typography sx={{
            fontSize: '14px', 
            fontStyle: 'italic',
            
          }}>สำหรับ {currentArea} <ErrorOutlineIcon sx={{fontSize:14,}}></ErrorOutlineIcon></Typography>
        </Grid>
        
      </Box>
    </Box>
  );
}
