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
    secondary : {
      light: '#ECE2DF',
      main: '#A0705F',
      dark: '##604339'
    },
    error : {
      light: '#FFD7D8',
      main: '#E03A3E',
      dark: '#911108'
    },
    warning : {
      light: '#FFF2CC',
      main: '#FCB827',
      dark: '#997300'
    },
    success : {
      light: '#DBF0DC',
      main: '#4DB251',
      dark: '#2E6B30'
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
          }
        ),
    },
  },
});

export { getDesignTokens };
