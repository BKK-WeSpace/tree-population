import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import './App.css';
import AboutUs from '../src/components/AboutUs/AboutUs';
import reactLogo from './assets/react.svg';
import Loading from './components/Loading';
import useGetTrees from './data/hooks/useGetTrees';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#94B044',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
     primary: {
      main: '#94B044',
    },
  },
});

function App() {
  const [count, setCount] = useState(0);
  const [isDark,setIsDark] = useState(true)

  const { isLoading, trees } = useGetTrees(); // How to get tree from data hooks
  console.log(isLoading, trees); // Delete this line when the frontend work begins.

  return (
    <div className='App'>
      <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
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

          
        </div>
        <Typography variant='h5' color='primary'>
            Bangkok OpenSource - Tree Mapping{' '}
          </Typography>
        <AboutUs />
      </ThemeProvider>
    </div>
  );
}

export default App;
