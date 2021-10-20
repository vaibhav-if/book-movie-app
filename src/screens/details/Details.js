import React, { Fragment, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import "./Details.css";
import Header from "../../common/header/Header";
import YouTube from "react-youtube";
import StarBorderIcon from "@material-ui/icons/StarBorderOutlined";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { Link } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";

const StyledRating = withStyles({
  iconFilled: {
    color: "gold",
  },
  iconHover: {
    color: "gold",
  },
  iconEmpty: {
    color: "black",
  },
})(Rating);

export default function Details(props) {
  const [movieDetails, setMovieDetails] = useState({
    id: "",
    title: "",
    storyline: "",
    genres: [],
    duration: 0,
    poster_url: "",
    trailer_url: "",
    wiki_url: "",
    release_date: "",
    censor_board_rating: "",
    rating: 0,
    status: "",
    artists: [],
  });
  const [rating, setRating] = React.useState(0);

  useEffect(() => {
    async function getMoviesList() {
      const rawResponse = await fetch(
        `${props.baseUrl}/movies/${props.match.params.id}`
      );
      const data = await rawResponse.json();
      setMovieDetails(data);
    }
    getMoviesList();
  }, []);

  return (
    <Fragment>
      <Header isViewingDetails={true} movieId={props} />
      <div className="container">
        <div className="back-home-container">
          <Link to="/">
            <Typography className="back-home">&#60; Back to Home</Typography>
          </Link>
        </div>
        <div className="details-container">
          <div className="details-left">
            <img
              src={movieDetails["poster_url"]}
              alt={movieDetails.title}
              className="poster"
            />
          </div>
          <div className="details-mid">
            <Typography variant="h2" component="h2" gutterBottom>
              {movieDetails.title}
            </Typography>
            <Typography>
              <span className="bold">Genres:</span>{" "}
              {movieDetails.genres.join(", ")}
            </Typography>
            <Typography>
              <span className="bold">Duration:</span> {movieDetails.duration}
            </Typography>
            <Typography>
              <span className="bold">Release Data:</span>
              {new Date(movieDetails["release_date"]).toDateString()}
            </Typography>
            <Typography>
              <span className="bold">Rating:</span> {movieDetails.rating}
            </Typography>
            <Typography className="plot">
              <span className="bold">Plot:</span>
              <a href={movieDetails["wiki_url"]} target="_blank">
                (Wiki Link)
              </a>
              {movieDetails.storyline}
            </Typography>
            <Typography className="trailer">
              <span className="bold">Trailer:</span>
            </Typography>
            <YouTube
              videoId={movieDetails.trailer_url.split("?v=")[1]}
              className="youtube-video"
            />
          </div>
          <div className="details-right">
            <Typography>
              <span className="bold">Rate this movie: </span>
            </Typography>
            <Typography>
              <StyledRating
                name="user-ratings"
                icon={<StarBorderIcon />}
                value={rating}
                onChange={(event, newRating) => {
                  setRating(newRating);
                }}
              />
            </Typography>
            <Typography className="artist">
              <span className="bold">Artists: </span>
            </Typography>

            <ImageList cols={2} rowHeight={250}>
              {movieDetails.artists.map((movieDetails) => (
                <ImageListItem key={movieDetails["profile_url"]}>
                  <img
                    src={movieDetails["profile_url"]}
                    alt={movieDetails["first_name"]}
                  />
                  <ImageListItemBar
                    title={`${movieDetails["first_name"]} ${movieDetails["last_name"]}`}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
