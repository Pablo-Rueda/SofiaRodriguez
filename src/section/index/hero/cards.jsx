import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

import profile from "./profile.png"


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  card: {
    height: "100%"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Box boxShadow={3} className={classes.root}>
      <Card className={classes.card}>
              <CardMedia
                  component="img"
                  alt="Sofía Rodriguez"
                  height="100%"
                  image={profile}
                  title="Sofía Rodriguez"
              />
      </Card>
    </Box> 

  );
}
