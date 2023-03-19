import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
import { getDesignTokens } from './theme/theme';
import Button from '@mui/material/Button';

import './App.css';
import AboutUs from '../src/components/AboutUs/AboutUs';
import reactLogo from './assets/react.svg';
import Loading from './components/Loading';

import useGetTrees from './data/hooks/useGetTrees';

// const lightTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#94B044',
//     },
//     secondary: {
//       main: '#edf2ff',
//     },
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//      primary: {
//       main: '#94B044',
//     },
//   },
// });

function App() {
  const [count, setCount] = useState(0);
  const [mode,setMode] = useState('light')

  const { isLoading, trees } = useGetTrees(); // How to get tree from data hooks
  console.log(isLoading, trees); // Delete this line when the frontend work begins.

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleTheme = () => setMode(mode==='light'? 'dark' : 'light')

  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
        <head>

        </head>
        <Loading />
        <div>
          <a href='#' target='_blank'>
            <img src='/logo.svg' className='logo' alt='WeSpace logo' />
          </a>
          <a href='https://reactjs.org' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>WeSpace + React</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            current Number of tree is : {count}
          </button>
          <Button variant="outlined" onClick={handleTheme}>Theme : {mode.toUpperCase()}</Button>
          
        </div>
        <Typography variant='h5' color='primary'>
            Bangkok OpenSource - Tree Mapping{' '}
          </Typography>
        <AboutUs />
 
    </div>
    </ThemeProvider>
  );
}

export default App;
