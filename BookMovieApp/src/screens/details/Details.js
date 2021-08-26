import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import "./Details.css";
import Header from "../../common/header/Header";
import YouTube from "react-youtube";
import StarBorderIcon from "@material-ui/icons/StarBorderOutlined";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

export default function Details() {
  const item = {
    id: "0c364cd2-a235-11e8-9077-720006ceb890",
    title: "Shahid",
    storyline:
      "Shahid Azmi becomes an unlikely champion of human rights, particularly for Indias Muslim minority.",
    genres: ["Drama", "Crime", "Social"],
    duration: 129,
    poster_url:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/Shahid_Poster_%282013%29.jpg",
    trailer_url: "https://www.youtube.com/watch?v=XiQXmIn7qbI",
    wiki_url: "https://en.wikipedia.org/wiki/Shahid_(film)",
    release_date: "2013-10-18",
    censor_board_rating: "U",
    rating: 8.6,
    status: "RELEASED",
    artists: [
      {
        id: "24615f4c-a238-11e8-9077-720006ceb890",
        first_name: "Rajkummar",
        last_name: "Rao",
        role_type: "ACTOR",
        profile_description:
          "Rajkummar Rao, also known as Rajkumar Yadav, is an Indian actor. He has established a career in Hindi cinema and is the recipient of several awards, including a National Film Award, three Filmfare Awards, and an Asia Pacific Screen Award. He is cited in the media as one of the most talented actors of his generation.",
        profile_url:
          "https://en.wikipedia.org/wiki/Rajkummar_Rao#/media/File:Rajkummar_Rao_World_Premiere_Newton_Zoopalast_Berlinale_2017_02.jpg",
        wiki_url: "https://en.wikipedia.org/wiki/Rajkummar_Rao",
      },
      {
        id: "246162a8-a238-11e8-9077-720006ceb890",
        first_name: "Kay Kay",
        last_name: "Menon",
        role_type: "ACTOR",
        profile_description:
          "Kay Kay Menon is an Indian film, stage and television actor who works predominantly in Hindi cinema, and also in Gujarati, Tamil and Telugu cinema. He has also won the award for best actor for the film Shoonya from Festival of Arab and Asian cinema",
        profile_url:
          "https://upload.wikimedia.org/wikipedia/commons/a/ac/Kay_Kay_Menon_at_libas_store.jpg",
        wiki_url: "https://en.wikipedia.org/wiki/Kay_Kay_Menon",
      },
    ],
  };

  //to get video id from youtube trailer url
  let video_id = item.trailer_url.split("v=")[1];
  const ampersandPosition = video_id.indexOf("&");
  if (ampersandPosition !== -1) {
    video_id = video_id.substring(0, ampersandPosition);
  }

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="back-home-container">
          <Typography className="back-home">&#60; Back to Home</Typography>
        </div>
        <div className="details-container">
          <div className="details-left">
            <img src={item["poster_url"]} alt={item.title} className="poster" />
          </div>
          <div className="details-mid">
            <Typography variant="headline" component="h2" gutterBottom>
              {item.title}
            </Typography>
            <Typography>
              <span className="bold">Genres:</span> {item.genres.join(", ")}
            </Typography>
            <Typography>
              <span className="bold">Duration:</span> {item.duration}
            </Typography>
            <Typography>
              <span className="bold">Release Data:</span>
              {new Date(item["release_date"]).toDateString()}
            </Typography>
            <Typography>
              <span className="bold">Rating:</span> {item.rating}
            </Typography>
            <Typography className="plot">
              <span className="bold">Plot:</span>
              <a href={item["wiki_url"]} target="_blank">
                (Wiki Link)
              </a>
              {item.storyline}
            </Typography>
            <Typography className="trailer">
              <span className="bold">Trailer:</span>
            </Typography>
            <YouTube videoId={video_id} className="youtube-video" />
          </div>
          <div className="details-right">
            <Typography>
              <span className="bold">Rate this movie: </span>
            </Typography>
            <Typography>
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </Typography>
            <Typography className="artist">
              <span className="bold">Artists: </span>
            </Typography>

            <ImageList>
              {item.artists.map((item) => (
                <ImageListItem key={item["profile_url"]}>
                  <img src={item["profile_url"]} alt={item["first_name"]} />
                  <ImageListItemBar
                    title={`${item["first_name"]} ${item["last_name"]}`}
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
