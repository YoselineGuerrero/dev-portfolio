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
          '& label.Mui-disabled': {
            color: '#747474',
          },
          '& .MuiOutlinedInput-root': {
            backgroundColor: "#01080E",
            '&.Mui-disabled fieldset': {
              borderColor: '#272838',
            },
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
          '&.Mui-disabled': {
            color: '#747474',
            backgroundColor: '#01080E',
            borderColor: '#272838'
          }
        }
      }
    },
    MuiChip:{
      styleOverrides:{
        root:{
          '&.MuiChip-root':{
            backgroundColor: '#cbe8b3',
            borderColor: '#406920',
            color: '#253c12'
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
      paper: '#E0EDF5',
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
          '& label.Mui-disabled': {
            color: '#676c94',
          },
          '& .MuiOutlinedInput-root': {
             backgroundColor: "#e6ecf7",
            '&.Mui-disabled fieldset': {
              borderColor: '#b8b9ce',
            },
          },
          "& .MuiInputBase-root.Mui-disabled" :{
            color: '#676c94 !important',
          },
        },
      }
    },
    MuiButton:{
      styleOverrides:{
        root:{
          '&.Mui-disabled': {
             color: '#676c94',
             backgroundColor: '#e6ecf7',
             borderColor: '#b8b9ce'
          }
        }
      }
    },
    MuiChip:{
      styleOverrides:{
        root:{
          '&.MuiChip-root':{
            backgroundColor: '#cbe8b3',
            borderColor: '#406920',
            color: '#253c12'
          }
        }
      }
    }
  },
})

export {darkTheme, lightTheme};