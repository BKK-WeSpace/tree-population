import * as React from 'react';
import { AppBar, Button, Toolbar, Stack,Box, Modal , Typography  } from "@mui/material";

const WeSpaceNavbar = () => {

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  const buttonStyle = {
    
  }
  // TODO make Modal for seperate button and Change theme to theme setup
    return(
        <div>
            <AppBar style={{ backgroundColor:'rgba(255, 255, 255, 0.5)', boxShadow: 'none'}} elevation={0}>
            <Toolbar>
                <Box display='flex' flexGrow={1}>
                    <img src="./public/WeSpace-logo.svg" height={20}/>
                </Box>

                <Stack direction='row'>
                    <Button variant="h3" onClick={handleOpen} >🌿เกี่ยวกับเรา</Button>
                    <Button variant="h3" onClick={handleOpen} >🎯Contribute us</Button>
                </Stack>
            </Toolbar>
            </AppBar>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>

            

        </div>
        
    )
}


export default WeSpaceNavbar;