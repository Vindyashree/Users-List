
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Route , Switch , Link , BrowserRouter} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const headerstyle = () => {
  return {
    color :'white',
    fontSize:'22px',
    textDecoration:'none',
    padding : '0px 50px'
    

  }
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" className={classes.title} >
          <Link to="/" className = "header" style={headerstyle()} >
                Home     
              </Link>
          </Typography>
          <Link to="/List-Users"  style={headerstyle()}>
                List-Users
              </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}