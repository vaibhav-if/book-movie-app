import React, { Fragment, useEffect, useState } from "react";
import FilterCard from "../../common/components/FilterCard";
import Header from "../../common/header/Header";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import "./Home.css";

export default function Home(props) {
  const [upcomingMoviesList, setUpcomingMoviesList] = useState([]);
  const [releasedMoviesList, setReleasedMoviesList] = useState([]);

  useEffect(() => {
    async function getMoviesList() {
      const rawResponse = await fetch(
        `http://localhost:8085/api/v1/movies?page=1&limit=100&status=published`
      );
      const data = await rawResponse.json();
      setUpcomingMoviesList(data.movies);
    }
    getMoviesList();
  }, []);

  useEffect(() => {
    async function getMoviesList() {
      const rawResponse = await fetch(
        `http://localhost:8085/api/v1/movies?page=1&limit=100&status=released`
      );
      const data = await rawResponse.json();
      setReleasedMoviesList(data.movies);
    }
    getMoviesList();
  }, []);

  const applyFilter = (filterString) => {
    async function getMoviesList() {
      const rawResponse = await fetch(
        `http://localhost:8085/api/v1/movies?page=1&limit=100${filterString}`
      );
      const data = await rawResponse.json();
      setReleasedMoviesList(data.movies);
    }
    getMoviesList();
  };

  const posterClickHandler = (movie) => {
    props.history.push("/movie/" + movie.id);
  };

  return (
    <Fragment>
      <Header />
      <div className="home-header">
        <div className="home-header-text">Upcoming Movies</div>
      </div>
      <ImageList
        style={{ flexWrap: "nowrap", transform: "translateZ(0)" }}
        rowHeight={250}
        cols={6}
      >
        {upcomingMoviesList
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

      <div className="flex-container">
        <div className="released-movie-grid">
          <ImageList rowHeight={350} gap={12} cols={4}>
            {releasedMoviesList
              .filter((item) => {
                return item.status === "RELEASED";
              })
              .map((item) => (
                <ImageListItem
                  key={item["poster_url"]}
                  onClick={() => posterClickHandler(item)}
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
        <div className="movies-filter">
          <FilterCard
            movieData={releasedMoviesList}
            applyFilter={applyFilter}
          />
        </div>
      </div>
    </Fragment>
  );
}
