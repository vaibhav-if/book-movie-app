import React, { Fragment, useEffect, useState } from "react";
import FilterCard from "../../common/components/FilterCard";
import Header from "../../common/header/Header";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import useMediaQuery from '@mui/material/useMediaQuery';
import "./Home.css";

export default function Home(props) {
  const [upcomingMoviesList, setUpcomingMoviesList] = useState([]);
  const [releasedMoviesList, setReleasedMoviesList] = useState([]);
  
  const sm = useMediaQuery('(max-width:720px)');
  const md = useMediaQuery('(max-width:880px)');

  useEffect(() => {
    async function getMoviesList() {
      const rawResponse = await fetch(
        `${props.baseUrl}/movies?page=1&limit=100&status=published`
      );
      const data = await rawResponse.json();
      setUpcomingMoviesList(data.movies);
    }
    getMoviesList();
  }, []);

  useEffect(() => {
    async function getMoviesList() {
      const rawResponse = await fetch(
        `${props.baseUrl}/movies?page=1&limit=100&status=released`
      );
      const data = await rawResponse.json();
      setReleasedMoviesList(data.movies);
    }
    getMoviesList();
  }, []);

  const applyFilter = (filterString) => {
    async function getMoviesList() {
      const rawResponse = await fetch(
        `${props.baseUrl}/movies?page=1&limit=100&status=released${filterString}`
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

      <Header baseUrl={props.baseUrl}/>

      <div className="home-header">
        <div className="home-header-text">Upcoming Movies</div>
      </div>

      {/* Upcoming Movies Grid */}
      <ImageList
        style={{ flexWrap: "nowrap", transform: "translateZ(0)" }}
        rowHeight={(sm) ? 200 : 250}
        cols={(sm) ? 4 : 6}
      >
        {upcomingMoviesList.map((item) => (
          <ImageListItem key={item["poster_url"]}>
            <img src={item["poster_url"]} alt={item.title} />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Released Movies Grid */}
      <div className="flex-container">
        <div className="released-movie-grid">
          <ImageList rowHeight={(sm) ? 300 : 350} gap={(sm) ? 6 : 12} cols={(md) ? 2 : 4}>
            {releasedMoviesList.map((item) => (
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
