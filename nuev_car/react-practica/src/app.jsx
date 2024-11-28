import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';

import home from './pages/Home/home';
import cursos from './pages/cursos/cursos';
import Usuarios from './pages/usuarios/usuarios';
import Masinformacion from './pages/masinformacion/Masinformacion';

import { createTheme, ThemeProvider } from '@mui/material/styles/';

const theme = createTheme({
  palette: {
    primary: {
      main: '#39A900',
    },
    secondary: {
      main: '#007832',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Router>
          <Router path="/home" element={<Home/>}/>
          <Router path="/cursor" element={<Cursos/>}/>
          <Router path="/usuarios" element={<Usuarios/>}/>
          <Router path="/mas-informacion" element={<Masinformacion/>}/>
        </Router>
      </Router>
    </ThemeProvider>
  );
}