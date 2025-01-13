'use client'
import { createTheme } from '@mui/material';

const theme = createTheme({
  //typography: {
   // fontFamily: 'var(--outfit)',
  //},
  palette: {
    primary: {
      main: '#586F7C',
      light: '#B8DBD9',
    },
    secondary: {
      main: '#2F4550',
    },
    common: {
      black: '#000',
      white: '#F4F4F9',
    },
  },
});

export default theme;