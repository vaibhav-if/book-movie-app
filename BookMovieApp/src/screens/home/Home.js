import React, { Fragment } from "react";
import Header from "../../common/header/Header";
import "./Home.css";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <div className="home-header">
        <div className="home-header-text">Upcoming Movies</div>
      </div>
    </Fragment>
  );
}
