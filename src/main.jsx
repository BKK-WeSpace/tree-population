import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './theme/ThemeContext';
import App from './App';
import './index.css';
import './fontCss.css'

import Button from '@mui/material/Button';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <Button variant="contained">Contained</Button>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
