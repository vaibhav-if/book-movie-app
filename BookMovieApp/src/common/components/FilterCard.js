import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 240,
    maxWidth: 240,
  },
  title: {
    fontSize: 14,
    color: theme.palette.primary.light,
    margin: theme.spacing.unit,
  },
  form: {
    margin: theme.spacing.unit,
    minWidth: 192,
  },
  apply: {
    marginTop: theme.spacing(2),
  },
}));

export default function FilterCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          FIND MOVIES BY:
        </Typography>
        <FormControl className={classes.form}>
          <InputLabel id="movie-name">Movie Name</InputLabel>
          <Input labelId="movie-name" />
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel id="genre">Genre</InputLabel>
          <Select labelId="genre">
            <MenuItem></MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel id="artist">Artist</InputLabel>
          <Select labelId="artist">
            <MenuItem></MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.form}>
          <TextField
            id="relese-date-start"
            label="Release Date Start"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
        <FormControl className={classes.form}>
          <TextField
            id="relese-date-end"
            label="Release Date End"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
        <FormControl className={classes.form}>
          <Button className={classes.apply} variant="contained" color="primary">
            APPLY
          </Button>
        </FormControl>
      </CardContent>
    </Card>
  );
}
