import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Card, CardHeader, CardMedia, CardContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 400,
    height: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 'none',
    padding: theme.spacing(2, 4, 3),
    borderRadius: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    borderRadius: 10
  },
}));

const CardModal = ({ image, name, height, isOpen, onClose }) => {
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
    >
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardMedia
  className={classes.media}
  image={image}
>
  <img src={image} alt={name} style={{objectFit: "cover", height: "100%", width: "100%"}} />
</CardMedia>
        <CardContent>
            <h2>{name}</h2>
          <p>ส่วนสูง: {height}</p>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default CardModal;
