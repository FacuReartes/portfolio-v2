'use client';
import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--inconsolata)',
  },
  palette: {
    primary: {
      main: '#007BFF',
      //light: '#B8DBD9',
    },
    secondary: {
      main: '#171C28',
    },
    common: {
      black: '#000',
      white: '#E7E7E7',
    },
  },
});

export default theme;
