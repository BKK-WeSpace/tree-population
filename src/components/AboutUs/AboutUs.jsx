import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: '10px !important',
  boxShadow: 24,
  p: 4,
  color:'black',
};

export default function AboutUs() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <div>Test About us</div>
      <Button onClick={handleOpen}>About Us</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{...style,}}>
                <div style={{position:"relative"}}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{display: "inline-block"}}>
                        🌿 เกี่ยวกับเรา
                    </Typography>
                    <CloseSharpIcon onClick={handleClose} style={{cursor: "pointer", position:"absolute", right: "0"}} />
                </div>
                <p style={{ fontWeight: "bold", marginBottom:0, }}>we space</p>

                <Typography id="modal-modal-description" sx={{ mt: 1}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet semper ipsum. Ut rhoncus dapibus eros, nec varius justo molestie vitae. 
                        Vestibulum vel faucibus ante. Aenean viverra enim vitae magna dictum, 
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet semper ipsum. Ut rhoncus dapibus eros, nec varius justo molestie vitae. 
                        Vestibulum vel faucibus ante. Aenean viverra enim vitae magna dictum, 
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet semper ipsum. Ut rhoncus dapibus eros, nec varius justo molestie vitae. 
                        Vestibulum vel faucibus ante. Aenean viverra enim vitae magna dictum, 
                </Typography>
            
            </Box>
        </Modal>
    </div>
  );
}