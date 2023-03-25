import { createTheme } from "@mui/material";
import palette from "./palette";
import typography from "./typography";
import lineSeedSansTH from "../assets/fonts/LINE_Seed_Sans_TH";

const {
  common,
	primary,
	secondary,
	error,
	warning,
	success,
	info,
	grey,
	text,
	background,
	action,
} = palette

const customTheme = createTheme({
	palette: {
		common,
    primary,
    secondary,
    error,
    warning,
    success,
    info,
    grey,
    text,
    background,
    action, 
	},
    typography: {
      fontFamily: 'LINE Seed Sans TH',
      ...typography
    }
});

export default customTheme;