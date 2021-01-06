import React,{useState} from 'react';

// Style & Structure: 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import headerStyles from "./header.module.scss";

//Components:
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//Utilities:
import {useScrollPosition} from "./useScrollPosition"
import {Link} from "gatsby";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    customizeToolbar: {
      paddingRight:55
    },
  }));
  
  export default function ButtonAppBar() {
  
    const classes = useStyles();
    const [shadowOnScroll, setShadowOnScroll] = useState({
      boxShadow: "0px 0px 0px 0px white",
    });
  
    useScrollPosition(({ prevPos, currPos }) => {
        const shadow = -40 > currPos.y
        if(shadow){
            setShadowOnScroll({boxShadow: "0px 0px 3px 0.1px black"})
        }else{
            setShadowOnScroll({boxShadow: "0px 0px 0px 0px black"})
        }
      })
  
    return (
      <div className={classes.root}>
        <AppBar  position="fixed" style={{ background: 'white', margin: 0, boxShadow: "0px 0px 0px 0px black" }}>
          <Toolbar className={classes.customizeToolbar} style={shadowOnScroll}>
            <Link to="/"> <img className={headerStyles.logo} src={require('./logo.png')} alt="logo"/></Link>
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <Link className={headerStyles.navItem} to="/">Inicio</Link>
              <Link className={headerStyles.navItem} to="/servicios">Servicios</Link>
              <Link className={headerStyles.navItem} to="/contacto">Contact</Link>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }