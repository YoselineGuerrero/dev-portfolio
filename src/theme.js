import { createTheme } from '@mui/material/styles';
import './App.css'

const font =  "'Raleway', sans-serif";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#23334B',
    },
    secondary: {
      main: '#E0EDF5',
    },
    text: {
      primary: '#FFF',
      secondary: '#BFD1E5'
    },
    background: {
      default: "#121212",
      paper: '#37474f',
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
          "& .MuiFormHelperText-root" :{
            color: '#747474 !important',
          },
        },
      }
    },
    MuiButton:{
      styleOverrides:{
        root:{
        }
      }
    },
    MuiChip:{
      styleOverrides:{
        root:{
          '&.MuiChip-root':{
            backgroundColor: '#eadeee',
            borderColor: '#410058',
            color: '#410058'
          }
        }
      }
    }
  }
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
      default: "#FAF9F6",
      paper: '#cde2ef',
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
    MuiButton:{
      styleOverrides:{
        root:{
          '&.MuiButton-outlined': {
            '&:hover': {
              color: '#1a3c56',
              backgroundColor: '#d0d9ec',
              borderColor: '#235174'
            },
          }
        }
      }
    },
    MuiChip:{
      styleOverrides:{
        root:{
          '&.MuiChip-root':{
            backgroundColor: '#eadeee',
            borderColor: '#410058',
            color: '#410058'
          }
        }
      }
    }
  },
})

export {darkTheme, lightTheme};