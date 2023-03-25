import { createTheme } from "@mui/material";
import palette from "./palette";
import typography from "./typography";

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
	// TODO we import by spread operator (example ...breakpoints)
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
      ...typography
    }
});

export default customTheme;