import React, { Fragment, useEffect, useState } from "react";
import SingleLineImageList from "../../common/components/SingleLineImageList";
import Header from "../../common/header/Header";
import "./Home.css";

export default function Home() {
  const [upcomingMoviesList, setUpcomingMoviesList] = useState([]);

  useEffect(() => {
    async function getUpcomingMoviesList() {
      const rawResponse = await fetch(
        "http://localhost:8085/api/v1/movies?page=1&limit=10"
      );
      const data = await rawResponse.json();
      setUpcomingMoviesList(data.movies);
    }
    getUpcomingMoviesList();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="home-header">
        <div className="home-header-text">Upcoming Movies</div>
      </div>
      <SingleLineImageList movieData={upcomingMoviesList} />
    </Fragment>
  );
}
