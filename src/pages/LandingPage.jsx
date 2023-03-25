// import { useState, useMemo } from 'react';

// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// import Button from '@mui/material/Button';

// import '../styles/LandingPage.css';
// import AboutUs from '../components/AboutUs/AboutUs';
// import ContributeUs from '../components/ContributeUs/ContributeUs';
// import reactLogo from '../assets/react.svg';

// import useGetTrees from '../data/hooks/useGetTrees';
// import { useTheme } from '../theme/ThemeContext';

// import CardModal from '../components/CardModal/CardModal';
// import TreesMap from '../components/TreesMap';


// function LandingPage() {
//   const [count, setCount] = useState(0);
//   const {handleTheme,mode} = useTheme()

//   // const { isLoading, data } = useGetTrees({}); // How to get tree from data hooks
//   // console.log(isLoading, data?.result, data?.error); // Delete this line when the frontend work begins.
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   return (

//     // <Box className='landing-container' sx={{
    
//     //   width: "100%",
//     //   bgcolor: "background.default",
//     //   color: "text.primary",
    
//     // }}>
//     //     <header className='navbar'>
//     //       <nav>
//     //         {/* TODO change  button to toggle button for theme toggle */}
//     //       <Button variant="outlined" onClick={handleTheme}  sx={{border:'none'}}>Theme : {mode.toUpperCase()}</Button>
//     //       </nav>
//     //     </header>
 
//     //     {/* <main>
//     //       <a href='#' target='_blank'>
//     //         <img src='/logo.svg' className='logo' alt='WeSpace logo' />
//     //       </a>
//     //       <a href='https://reactjs.org' target='_blank'>
//     //         <img src={reactLogo} className='logo react' alt='React logo' />
//     //       </a>
//     //     </main>
//     //     <h1>WeSpace + React</h1>
//     //     <div className='card'>
//     //       <Button  variant="contained" color="grey"  sx={{border:'none'}}onClick={() => setCount((count) => count + 1)}>
//     //         current Number of tree is : {count}
//     //       </Button>
         
          
//     //     </div>
//     //     <Typography variant='h5' color='primary' >
//     //         Bangkok OpenSource - Tree Mapping{' '}
//     //       </Typography>
//     //     <AboutUs />
//     //     <button onClick={handleOpenModal}>รายละเอียด</button>
//     //   <CardModal
//     //     image="https://medthai.com/wp-content/uploads/2013/08/%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B0%E0%B8%A2%E0%B8%AD%E0%B8%A1.jpg"
//     //     name="พยอม"
//     //     height="100cm"
//     //     isOpen={modalOpen}
//     //     onClose={handleCloseModal}
//     //   /> */}
//       <div>
//       <TreesMap/>
//       <ContributeUs/>
//       <CardModal
//       image="https://medthai.com/wp-content/uploads/2013/08/%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B0%E0%B8%A2%E0%B8%AD%E0%B8%A1.jpg"
//       name="พยอม"
//       height="100cm"
//       isOpen={modalOpen}
//       onClose={handleCloseModal}
//       />
//       <AboutUs/>
//       </div>
      
//     // </Box>
    

//   );
// }

// export default LandingPage;

import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../styles/LandingPage.css';
import AboutUs from '../components/AboutUs/AboutUs';
import ContributeUs from '../components/ContributeUs/ContributeUs';
import reactLogo from '../assets/react.svg';
import useGetTrees from '../data/hooks/useGetTrees';
import { useTheme } from '../theme/ThemeContext';
import CardModal from '../components/CardModal/CardModal';
import TreesMap from '../components/TreesMap';

function LandingPage() {
  const [count, setCount] = useState(0);
  const { handleTheme, mode } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box
      className='landing-container'
      sx={{
        width: '100%',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <header className='navbar'>
        <nav>
          <Button variant='outlined' onClick={handleTheme} sx={{ border: 'none' }}>Theme : {mode.toUpperCase()}</Button>
        </nav>
      </header>

      <main>
        <a href='#' target='_blank'>
          <img src='/logo.svg' className='logo' alt='WeSpace logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </main>

      <div className='card'>
        <Button
          variant='contained'
          color='grey'
          sx={{ border: 'none' }}
          onClick={() => setCount((count) => count + 1)}
        >
          current Number of tree is : {count}
        </Button>
      </div>

      <Typography variant='h5' color='primary'>
        Bangkok OpenSource - Tree Mapping{' '}
      </Typography>

      <div>
      
      <TreesMap />

      <ContributeUs />

      <CardModal
        image='https://medthai.com/wp-content/uploads/2013/08/%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%9E%E0%B8%B0%E0%B8%A2%E0%B8%AD%E0%B8%A1.jpg'
        name='พยอม'
        height='100cm'
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
      <Button onClick={handleOpenModal}>Open Modal</Button>

      <AboutUs />
      </div>
    </Box>
  );
}

export default LandingPage;

