import {
  CommonColor,
  GreyColorLevel,
  Text,
  Background,
  ActionColor,
} from "./type";

import { PaletteColorOptions } from "@mui/material";

const common: CommonColor = {
  black: "#000",
  white: "#FFFFFF",
};

// *note: dark value will be used as button 's hover state
const primary: PaletteColorOptions = {
  main: "#94B044",
  light: "#F2F6E6",
  dark: "#65792D",
  // *note: if contrastText is not provided, MUI will calculate this value for us
  // contrastText: "#fff",
};

const secondary: PaletteColorOptions = {
  main: "#A0705F",
  light: "#F4EDEA",
  dark: "#604339",
};

const error: PaletteColorOptions = {
  main: "#E03A3E",
  light: "#FFD7D8",
  dark: "#911108",
};

const warning: PaletteColorOptions = {
  main: "#FCB827",
  light: "#FFF2CC",
  dark: "#997300",
};

const success: PaletteColorOptions = {
  main: "#4DB251",
  light: "#DBF0DC",
  dark: "#2E6B30",
};
const info: PaletteColorOptions = {
  main: "#0288d1",
  light: "#03a9f4",
  dark: "#01579b",
  contrastText: "#fff",
};

const grey: GreyColorLevel = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161",
};

const text: Text = {
  primary: "#333333",
  secondary: "#808080",
  disabled: "#B1BAB2",
};

const background: Background = {
  paper: "#fff",
  default: "#fff",
};

const action: ActionColor = {
  active: "rgba(0, 0, 0, 0.54)",
  hover: "rgba(0, 0, 0, 0.04)",
  hoverOpacity: 0.04,
  selected: "rgba(0, 0, 0, 0.08)",
  selectedOpacity: 0.08,
  disabled: "rgba(0, 0, 0, 0.26)",
  disabledBackground: "rgba(0, 0, 0, 0.12)",
  disabledOpacity: 0.38,
  focus: "rgba(0, 0, 0, 0.12)",
  focusOpacity: 0.12,
  activeOpacity: 0.12,
};

export const palette = {
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
};
