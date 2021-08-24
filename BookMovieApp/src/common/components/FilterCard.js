import React, { useState } from "react";
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
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 240,
    maxWidth: 240,
  },
  title: {
    fontSize: 14,
    color: theme.palette.primary.light,
    margin: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(1),
    minWidth: 192,
  },
  apply: {
    marginTop: theme.spacing(2),
  },
}));

export default function FilterCard(props) {
  const classes = useStyles();

  let name = [];
  let genres = [];

  const movieData = props.movieData.filter((item) => {
    return item.status === "RELEASED";
  });

  for (let data of movieData) {
    for (let artist of data.artists) {
      name.push(artist["first_name"] + " " + artist["last_name"]);
    }
  }

  for (let data of movieData) {
    for (let genre of data.genres) {
      genres.push(genre);
    }
  }

  genres = genres.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  const [artistName, setArtistName] = useState([]);
  const [movieGenre, setMovieGenre] = useState([]);

  const artistChangeHandler = (event) => {
    setArtistName(event.target.value);
  };
  const genreChangeHandler = (event) => {
    setMovieGenre(event.target.value);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          FIND MOVIES BY:
        </Typography>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="movie-name">Movie Name</InputLabel>
          <Input id="movie-name" />
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="genre">Genre</InputLabel>
          <Select
            id="genre"
            multiple
            value={movieGenre}
            onChange={genreChangeHandler}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
          >
            {genres.map((item) => (
              <MenuItem key={item} value={item}>
                <Checkbox
                  color="primary"
                  checked={movieGenre.indexOf(item) > -1}
                />
                <ListItemText primary={item} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="artist">Artist</InputLabel>
          <Select
            id="artist"
            multiple
            value={artistName}
            onChange={artistChangeHandler}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
          >
            {name.map((item) => (
              <MenuItem key={item} value={item}>
                <Checkbox
                  color="primary"
                  checked={artistName.indexOf(item) > -1}
                />
                <ListItemText primary={item} />
              </MenuItem>
            ))}
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
