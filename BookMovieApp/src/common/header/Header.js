import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";

const Header = () => {
  const buttonName = "Login"; // variable based on the access token value
  return (
    <div className="header">
      <img id='logo' src={Logo} alt="Book Movie App Logo" />
      <Button className="nav-btn" variant="contained">
        {buttonName}
      </Button>
      {/* should always be displayed in the header when a user clicks on a released movie */}
      {/* <Button className="nav-btn" variant="contained" color="primary">
        Book Show
      </Button> */}
    </div>
  );
};

export default Header;
