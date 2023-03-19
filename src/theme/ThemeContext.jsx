import { createContext,useState,useContext,useMemo } from 'react';
import { getDesignTokens } from './theme';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext()


const ThemeProvider = ({children})=> {

  const [mode,setMode] = useState('dark')
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const handleTheme = () => setMode(mode==='light'? 'dark' : 'light')


  
  return (
    <ThemeContext.Provider value={{handleTheme,mode}}>
      <MuiThemeProvider theme={theme}>
      {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}


export default ThemeProvider


export const useTheme = () =>{
  return useContext(ThemeContext)
}