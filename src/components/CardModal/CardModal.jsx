import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { display } from '@mui/system';

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
    borderRadius: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    borderRadius: 10,
  },
  badge: {
    backgroundColor: '#F2F6E6',
    borderRadius: 10,
    padding: 6,
    fontSize: 14,
  },
  navigateButton: {
    width: '100%',
    border: '1px solid rgb(101, 121, 45)',
    borderRadius: 10,
    color: 'rgb(101, 121, 45)',
    fontWeight: 'bold',
  },
  navigateButton: {
    width: '100%',
    border: '1px solid rgb(101, 121, 45)',
    borderRadius: 10,
    color: 'rgb(101, 121, 45)',
    fontWeight: 'bold',
  },
  pageContainer: {
    marginTop: 24,
    display: 'flex',
    gap: 8,
  },
  changePageButton: {
    color: 'rgb(236, 226, 223)',
    border: '1px solid rgb(236, 226, 223)',
    padding: '4px 8px 4px 8px',
  },
}));

const CardModal = ({ image, name, height, isOpen, onClose }) => {
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose} className={classes.modal}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        />

        <CardMedia className={classes.media} image={image}>
          <img
            src={image}
            alt={name}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </CardMedia>

        <CardContent>
          <h2 style={{ display: 'inline' }}>{name} </h2>
          <span className={classes.badge}>สภาพ: สมบูรณ์</span>
          <p>ส่วนสูง: {height}</p>

          <button className={classes.navigateButton}>นำทาง</button>

          <div className={classes.pageContainer}>
            <button className={classes.changePageButton}>&lt;</button>
            <button className={classes.changePageButton}>&gt;</button>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default CardModal;
