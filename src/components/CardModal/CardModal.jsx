import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Switch,
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
  darkCard: {
    backgroundColor: '#333',
    color: '#fff',
  },
  darkBadge: {
    backgroundColor: '#666',
  },
  darkNavigateButton: {
    border: '1px solid #ccc',
    color: '#ccc',
  },
  darkChangePageButton: {
    color: '#ccc',
    border: '1px solid #ccc',
  },
}));

const CardModal = ({ image, name, height, isOpen, onClose }) => {
  const classes = useStyles();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <Modal open={isOpen} onClose={handleClose} className={classes.modal}>
      <Card className={`$classes.card} ${isDarkMode ? classes.darkCard : ''}`}>
        <CardHeader
          action={
            <IconButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        />

        <CardMedia className={`${classes.media} ${isDarkMode ? classes.darkCard : ''}`} image={image}>
          <img
            src={image}
            alt={name}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </CardMedia>

        <CardContent>
        <h2 className={`${isDarkMode ? classes.darkText : ''}`} style={{ display: 'inline' }}>{name} </h2>
        <span className={`${classes.badge} ${isDarkMode ? classes.darkBadge : ''}`}>สภาพ: สมบูรณ์</span>
          <p>ส่วนสูง: {height}</p>

          <div className={classes.navigateButton}>
            <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
            <Switch
              checked={isDarkMode}
              onChange={handleToggle}
              color="primary"
            />
          </div>

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
