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
      ...(mode === 'dark' && {
        main: '#604339',
      })
      
    },
    error : {
      light: '#FFD7D8',
      main: '#E03A3E',
      ...(mode === 'dark' && {
        main:'#911108',
      })
      
    },
    warning : {
      main: '#FCB827',
      light: '#FFF2CC',
      ...(mode === 'dark' && {
        main: '#997300',
      })
    },
    success : {
      main: '#4DB251',
      light: '#DBF0DC',
      ...(mode === 'dark' && {
        main: '#2E6B30',
      })
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
