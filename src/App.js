import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {lightTheme, darkTheme} from './theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import MainPage from './mainPage';
import React, { useEffect, createContext, useState, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import ErrorPage from './components/error404';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  return (
    <div>
      <CssBaseline />
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </div>
  );
}

export default function ToggleColorMode() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const defaultMode = ( prefersDarkMode ? 'dark' : 'light');
  const [mode, setMode] = useState(localStorage.getItem("mode") !== null ? localStorage.getItem("mode") : defaultMode);

  useEffect(()=>{
    if( localStorage.getItem("mode")){
      setMode(localStorage.getItem("mode"))
    }
  },[])

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        localStorage.setItem("mode", mode=== 'light' ? 'dark' : 'light' );
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [mode],
  );

  const theme = useMemo(
    () =>
      createTheme( mode=== 'dark' ? darkTheme : lightTheme),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export {ColorModeContext}
