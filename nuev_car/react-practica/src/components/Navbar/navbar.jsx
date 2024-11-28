import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStylees = makeStyles( (thema) => ({
title: {
    flexGrow: 1,
},
    link: {
    color: 'white',
    textDecoration: 'none',
    margin: thema.spacing(2),
},
    Toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
},

}));

export default function Navbar() {
const classes = useStylees();
return( 
       <AppBar position="static">
            <toolbar ClassName= {classes.toolbar}>
            <Typography variant='h6' className={classes.title}>
                SERVICIO NACIONAL DE APRENDIZAJE - SENA
            </Typography>
            <div>
                <Link to="/home" className={ classes.link} >
                <Button color='inherit'>home</Button>
                </Link>
                
            </div>
            
            </toolbar>
       </AppBar>
    )
}