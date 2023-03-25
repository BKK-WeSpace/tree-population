import { ThemeProvider } from '@mui/material/styles';
import customTheme from './theme';

import React from 'react'

const ThemeContext = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
        {children}
    </ThemeProvider>
  )
}

export default ThemeContext
