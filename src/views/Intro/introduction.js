import React from "react";
import { Link } from "react-router-dom";
import background from "../../pictures/Colorful.png";
import selfie from "../../pictures/penguin.png";

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
          <div className="image-container">
            <img className="image-icon" src={selfie}></img>
          </div>
          <div className="name">Jeffrey Chan</div>
          <Link className="login-button" to="/main">
            Login
          </Link>
        </div>

        <div className="bottom-buttons"></div>
      </div>
    </div>
  );
};

export default Introduction;
