import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience'
import Project from '../components/Project';
import Contact from '../components/Contact';

import Typography from '@mui/material/Typography';

const theme = createTheme ({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0f1724',
      contrastText: '#12ede5',
      light: '#cadad4',
    },
    secondary: {
      main: '#12ede5',
      light: '#31f1ea',
      dark: '#00fff7',
    },
    background: {
      default: '#090f19',
      paper: '#101c2f',
    },
    text: {
      primary: '#dedcdc',
      secondary: '#c7d4e7',
    },
  },
});
function index() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Typography variant="h1" component="div" sx={{ p:20, fontWeight: 'medium' }}>
        Never Stop Learning...
      </Typography>
      <About />
      <Experience />
      <Project />
      <Contact />
    </ThemeProvider>
  )
}

export default index
