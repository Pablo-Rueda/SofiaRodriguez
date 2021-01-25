import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import discountStyle from "./discount.module.scss"


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    width: 25,
    margin:10,
    padding:0,
    backgroundColor:"rgb(247, 245, 245)"
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={discountStyle.card}>
            {props.children}
        </div>
      </CardContent>
    </Card>
  );
}