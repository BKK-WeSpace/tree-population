import { lightGreen, deepOrange, grey } from "@mui/material/colors";
// for custom theme in light and dark mode
// TODO  config actual design system in file theme.js on getDesignTokens function
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === "light"
        ? {
            main: lightGreen[500],
          }
        : {
            main: lightGreen[900],
          }),
    },
    ...(mode === "dark" && {
      background: {
        default: grey[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      primary: mode === "dark" ? "#fff" : grey[800],
      secondary: mode === "dark" ? grey[500] : grey[900],
      main: mode === "dark" ? "#fff" : grey[800],
    },
    label: {
      primary: mode === "dark" ? "#fff" : grey[800],
      secondary: mode === "dark" ? "#fff" : grey[900],
      main: mode === "dark" ? "#fff" : grey[800],
    },
  },
});

export { getDesignTokens };
