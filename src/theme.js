import { createTheme } from '@mui/material/styles';
import './App.css'

const font =  "'Raleway', sans-serif";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#272838',
    },
    secondary: {
      main: '#E0EDF5',
    },
    text: {
      primary: '#FFF',
      secondary: '#BFD1E5'
    },
    background: {
      default: "#02010A",
      paper: '#37474f',
    },
  },
  typography: {
    fontFamily: font,
  },
})
const lightTheme = createTheme({
  palette: {
    primary: {
        main: '#BFD1E5',
      },
      secondary: {
        main: '#272838',
      },
      text: {
        primary: '#272838',
      },
      background: {
        default: "#FFF",
        paper: '#E0EDF5',
      },
  },
  typography: {
    fontFamily: font,
  },
})

export {darkTheme, lightTheme};