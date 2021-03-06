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
    },
    MuiIconButton:{
      styleOverrides:{
        root:{
          color:'#E0EDF5',
          '&:hover': {
            background: 'rgb(200,211,222, .2)'
          },
        }
      }
    }
  }
})

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#FAF9F6',
    },
    secondary: {
      main: '#272838',
    },
    text: {
      primary: '#272838',
      secondary: '#4f5172'
    },
    background: {
      default: "#FAF9F6",
      paper: 'rgb(200,211,222, .6)',
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
    },
    MuiIconButton:{
      styleOverrides:{
        root:{
          color:'#272838',
          '&:hover': {
            background: 'rgb(200,211,222, .4)'
          },
        }
      }
    }
  },
})

export {darkTheme, lightTheme};