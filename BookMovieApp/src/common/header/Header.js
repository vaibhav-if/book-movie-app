import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import ActionButton from "../components/ActionButton";

export default function Header() {
  return (
    <div className="header">
      <img id="logo" src={Logo} alt="Book Movie App Logo" />
      <ActionButton
        className="nav-btn"
        variant="contained"
        color="default"
        buttonName="Login"
      />
      {/* should always be displayed in the header when a user clicks on a released movie */}
      {/* <ActionButton
        className="nav-btn"
        variant="contained"
        color="primary"
        buttonName="Book Show"
      /> */}
    </div>
  );
}
