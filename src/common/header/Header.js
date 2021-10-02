import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import LoginModal from "../components/LoginModal";
import Button from "@material-ui/core/Button";

export default function Header(props) {
  const bookShowClickHandler = () => {
    window.sessionStorage.getItem("access-token")
      ? props.movieId.history.push("/bookshow/" + props.movieId.match.params.id)
      : alert("Please Login First");
  };

  return (
    <div className="header">
      <img id="logo" src={Logo} alt="Book Movie App Logo" />
      <LoginModal />
      {props.isViewingDetails ? (
        <Button
          className="nav-btn"
          variant="contained"
          color="primary"
          onClick={bookShowClickHandler}
        >
          Book Show
        </Button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
