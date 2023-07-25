import { createTheme } from '@mui/material/styles';
import './App.css'

const font =  "'Raleway', sans-serif";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#121212',
    },
    secondary: {
      main: '#E0EDF5',
    },
    text: {
      primary: '#FFF',
      secondary: 'rgba(255, 255, 255)',
    },
    background: {
      default: "#121212",
      paper: 'rgba(48, 48, 48)',
    },
  },
  typography: {
    fontFamily: font,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          Input: {
            color: "#000",
          },
          "&.MuiTextField-root": {
            margin:'5px'
          },
          '& .MuiOutlinedInput-root': {
            backgroundColor: "#01080E",
          },
        },
      }
    },
    MuiChip:{
      styleOverrides:{
        root:{
          '&.MuiChip-root':{
            backgroundColor: 'rgba(238, 241, 248, .85)',
            borderColor: 'rgb(37, 37, 81)',
            color: 'rgb(37, 37, 81)'
          }
        }
      }
    },
    MuiIconButton:{
      styleOverrides:{
        root:{
          color:'#FFF',
          '&:hover': {
            background: 'rgba(238, 241, 248, .25)',
            color:'rgba(238, 241, 248, .75)',
          },
        }
      }
    },
    MuiDivider:{
      styleOverrides:{
        root:{
          background:'#FFF',
        }
      }
    }
  }
})

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#454648',
    },
    text: {
      primary: 'rgb(41, 41, 41 )',
      secondary: 'rgb(66, 66, 66)',
    },
    background: {
      default: "#FFF",
      paper: '#eaeef2',
    },
  },
  typography: {
    fontFamily: font,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.MuiTextField-root": {
            margin:'5px'
          },
          '& .MuiOutlinedInput-root': {
             backgroundColor: "#e6ecf7",
          },
        },
      }
    },
    MuiChip:{
      styleOverrides:{
        root:{
          '&.MuiChip-root':{
            backgroundColor: 'rgba(238, 241, 248, .85)',
            borderColor: 'rgb(37, 37, 81)',
            color: 'rgb(37, 37, 81)'
          }
        }
      }
    },
    MuiIconButton:{
      styleOverrides:{
        root:{
          color:'#272838',
          '&:hover': {
            background: 'rgb(200,211,222, .4)',
            color: 'rgb(39, 40, 56, .75)'
          },
        }
      }
    },
    MuiDivider:{
      styleOverrides:{
        root:{
          background:'rgb(41, 41, 41)',
        }
      }
    }
  },
})

export {darkTheme, lightTheme};