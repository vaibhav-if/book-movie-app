import React, { Fragment, useEffect, useState } from "react";
import FilterCard from "../../common/components/FilterCard";
import ReleasedMoviesGrid from "../../common/components/ReleasedMoviesGrid";
import UpcomingMoviesGrid from "../../common/components/UpcomingMoviesGrid";
import Header from "../../common/header/Header";
import "./Home.css";

export default function Home() {
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

  return (
    <Fragment>
      <Header />
      <div className="home-header">
        <div className="home-header-text">Upcoming Movies</div>
      </div>
      <UpcomingMoviesGrid movieData={upcomingMoviesList} />
      <div className="flex-container">
        <div className="released-movie-grid">
          <ReleasedMoviesGrid movieData={releasedMoviesList} />
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
