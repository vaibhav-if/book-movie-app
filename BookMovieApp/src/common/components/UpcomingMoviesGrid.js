import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

export default function UpcomingMoviesGrid(props) {
  return (
    <div>
      <ImageList
        style={{ flexWrap: "nowrap", transform: "translateZ(0)" }}
        rowHeight={250}
        cols={6}
      >
        {props.movieData
          .filter((item) => {
            return item.status === "PUBLISHED";
          })
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
