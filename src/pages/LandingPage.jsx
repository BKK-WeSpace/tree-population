import { useState, useMemo } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';

import '../styles/LandingPage.css';
import AboutUs from '../components/AboutUs/AboutUs';
import reactLogo from '../assets/react.svg';

import useGetTrees from '../data/hooks/useGetTrees';
import { useTheme } from '../theme/ThemeContext';


function LandingPage() {
  const [count, setCount] = useState(0);
  const {handleTheme,mode} = useTheme()

  const { isLoading, data } = useGetTrees(); // How to get tree from data hooks
  console.log(isLoading, data?.result, data?.error); // Delete this line when the frontend work begins.

  return (

    <Box className='landing-container' sx={{
    
      width: "100%",
      bgcolor: "background.default",
      color: "text.primary",
    
    }}>
        <header className='navbar'>
          <nav>
            {/* TODO change  button to toggle button for theme toggle */}
          <Button variant="outlined" onClick={handleTheme}  sx={{border:'none'}}>Theme : {mode.toUpperCase()}</Button>
          </nav>
        </header>
 
        <main>
          <a href='#' target='_blank'>
            <img src='/logo.svg' className='logo' alt='WeSpace logo' />
          </a>
          <a href='https://reactjs.org' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </main>
        <h1>WeSpace + React</h1>
        <div className='card'>
          <Button  variant="contained" color="grey"  sx={{border:'none'}}onClick={() => setCount((count) => count + 1)}>
            current Number of tree is : {count}
          </Button>
         
          
        </div>
        <Typography variant='h5' color='primary' >
            Bangkok OpenSource - Tree Mapping{' '}
          </Typography>
        <AboutUs />

    </Box>

  );
}

export default LandingPage;
