import React from "react";
import { Link } from "react-router-dom";
import background from "../../pictures/wallpaper.jpg";
import selfie from "../../pictures/my_picture.jpg";

import "./introduction.scss";
const Introduction = () => {
  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100vw 100vh",
        height: "100vh",
      }}
    >
      <div className="login-container-content">
        <div className="user">
          <img className="image-icon" src={selfie}></img>
          <div className="name">Jeffrey Chan</div>
          <Link className="login-button" to="/">
            Login
          </Link>
        </div>

        <div className="bottom-buttons"></div>
      </div>
    </div>
  );
};

export default Introduction;