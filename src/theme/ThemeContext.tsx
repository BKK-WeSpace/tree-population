import { ThemeProvider } from '@mui/material/styles';
import customTheme from './theme';
import { CssBaseline } from '@mui/material';
import React from 'react'

const ThemeContext = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline/> 
        {children}
    </ThemeProvider>
  )
}

export default ThemeContext
