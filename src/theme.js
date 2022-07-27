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
      secondary: '#35354d',
      tertiary: '#33333b',
    },
    background: {
      default: "#121212",
      paper: '#899096',
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
    MuiChip:{
      styleOverrides:{
        root:{
          '&.MuiChip-root':{
            backgroundColor: '#f0dcd4',
            borderColor: '#E1746E',
            color: '#A4413C'
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
      secondary: '#b3b3c4',
      tertiary: '#e6e7fa',
    },
    background: {
      default: "#FAF9F6",
      paper: '#313d47',
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
            backgroundColor: '#f2ebe9',
            borderColor: '#E1746E',
            color: '#A4413C'
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