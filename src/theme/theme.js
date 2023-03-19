import { lightGreen, deepOrange, grey } from '@mui/material/colors';
// for custom theme in light and dark mode
// TODO  config actual design system in file theme.js on getDesignTokens function
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...lightGreen,
      ...(mode === 'dark' && {
        main: lightGreen[900],
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: grey[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },
});

export { getDesignTokens };
