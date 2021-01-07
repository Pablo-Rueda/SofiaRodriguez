import React from 'react';
// Style:
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import cardStyles from "./card.module.scss";
import images from "./images"
// Components:
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'ubuntu',
            'sans-serif'
          ].join(','),
      
    },
});

const useStyles = makeStyles({
    root: {
        width: "100%",
        minHeight: "410px",
        borderRadius:0,
        padding:0,
        margin:0,
    },
    img: {
        height: 175
    }
  });
  
  export default function MediaCard(props) {
    const classes = useStyles();
  
    return (
    <ThemeProvider theme={theme}><Card className={classes.root} style={{backgroundColor:"rgb(247, 245, 245)"}}>
        <CardMedia
            className={classes.img}
            style={{borderBottom:"5px solid "+props.color}}
            image={images[0][props.imgId]}
            title=""
        />
        <CardContent>
        <div className={cardStyles.content}>
          {props.children}
        </div> 
        </CardContent>
    </Card></ThemeProvider>
    );
  }