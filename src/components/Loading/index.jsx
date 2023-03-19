import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    useEffect(() => {
      handleToggle()  
      const timer = setTimeout(()=>{
            handleClose()
        }, 3000) 

        return () => { 
            clearTimeout(timer)
         }
    }, [])
  
    return (
      <div>
        {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
          &nbsp;&nbsp;กำลังโหลดข้อมูล...
        </Backdrop>
      </div>
    );
}

export default Loading