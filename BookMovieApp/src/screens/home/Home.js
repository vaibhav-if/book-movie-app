import React, { Fragment, useEffect, useState } from "react";
import ReleasedMoviesGrid from "../../common/components/ReleasedMoviesGrid";
import UpcomingMoviesGrid from "../../common/components/UpcomingMoviesGrid";
import Header from "../../common/header/Header";
import "./Home.css";

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    async function getMoviesList() {
      const rawResponse = await fetch(
        "http://localhost:8085/api/v1/movies?page=1&limit=10"
      );
      const data = await rawResponse.json();
      setMoviesList(data.movies);
    }
    getMoviesList();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="home-header">
        <div className="home-header-text">Upcoming Movies</div>
      </div>
      <UpcomingMoviesGrid movieData={moviesList} />
      <div className="flex-container">
        <div className="released-movie-grid">
          <ReleasedMoviesGrid movieData={moviesList} />
        </div>
        <div className="movies-filter"></div>
      </div>
    </Fragment>
  );
}
