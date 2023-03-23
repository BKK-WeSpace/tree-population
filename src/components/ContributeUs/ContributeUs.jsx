import React, { useState } from 'react'
import { Button, Modal, Typography, Box } from '@mui/material';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#FFFFFF',
    borderRadius: '10px !important',
    boxShadow: 24,
    p: 4,
    color:'black',
  };

function ContributeUs() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
    <div>
        <Button onClick={()=>{handleOpen()}}>Contribute Us</Button>
        <Modal open={openModal}>
        <Box sx={{...style}}>
                <div style={{position:"relative"}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{display: "inline-block", color: '#6E8139', fontWeight: '600', fontSize: '15px'}}>
                    <VolunteerActivismIcon style={{fontSize: '25px', position: 'relative', top:'3px'}}/> Contribute Us
                    </Typography>
                    <CloseSharpIcon onClick={handleClose} style={{cursor: "pointer", position:"absolute", right: "0"}} />
                </div>
                <p style={{ fontWeight: "bold", marginBottom:0, }}>we space</p>

                <Typography id="modal-modal-description" sx={{ mt: 1, mb: 5}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </Typography>
                <p style={{ fontWeight: "bold", marginBottom:0, }}>we space</p>

                <Typography id="modal-modal-description" sx={{ mt: 1}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </Typography>
            
            </Box>
        </Modal>
    </div>
    
    )
}

export default ContributeUs