import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import "./ReleasedMoviesGrid.css";

export default function ReleasedMoviesGrid(props) {
  const posterClickHandler = (id) => {
    console.log(id);
  };

  return (
    <div>
      <ImageList rowHeight={350} gap={12} cols={4}>
        {/* TODO: Change cursor on hover and add click function */}
        {props.movieData
          .filter((item) => {
            return item.status === "RELEASED";
          })
          .map((item) => (
            <ImageListItem
              key={item["poster_url"]}
              onClick={() => posterClickHandler(item.id)}
              className="movie-poster"
            >
              <img src={item["poster_url"]} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                subtitle={
                  <span>
                    Release Date:{" "}
                    {new Date(item["release_date"]).toDateString()}
                  </span>
                }
              />
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
}
