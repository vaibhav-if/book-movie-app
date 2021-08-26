import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import "./ReleasedMoviesGrid.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "visible",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    overflow: "visible",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function ReleasedMoviesGrid(props) {
  const classes = useStyles();

  const posterClickHandler = (id) => {
    console.log(id);
  };

  return (
    <div className={classes.root}>
      <ImageList rowHeight={350} cols={4} className={classes.imageList}>
        {/* TODO: Change cursor on hover and add click function */}
        {props.movieData
          .filter((item) => {
            return item.status === "RELEASED";
          })
          .map((item) => (
            <ImageListItem
              key={item["poster_url"]}
              className="movie-poster"
              onClick={() => posterClickHandler(item.id)}
            >
              <img src={item["poster_url"]} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                //TODO: change date format
                subtitle={<span>Release Date: {item["release_date"]}</span>}
              />
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
}
