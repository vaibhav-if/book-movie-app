import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginRight: theme.spacing(0.5),
    },
  },
}));

export default function ActionButton(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        className={props.className}
        variant={props.variant}
        color={props.color}
      >
        {props.buttonName}
      </Button>
    </div>
  );
}
