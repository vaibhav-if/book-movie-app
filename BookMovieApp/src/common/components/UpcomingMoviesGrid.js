import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    //height works better at 200 rather than 250
    height: 200,
  },
}));

export default function UpcomingMoviesGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={6}>
        {props.movieData
          // .filter((item) => {
          //   return item.status === "PUBLISHED";
          // })
          // Data of upcoming movies not enough
          .map((item) => (
            <ImageListItem key={item["poster_url"]}>
              <img src={item["poster_url"]} alt={item.title} />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
}
