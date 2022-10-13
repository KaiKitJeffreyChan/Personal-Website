import React from "react";
import image from "../../pictures/Colorful.png";
import { Link } from "react-router-dom";
import "./404.scss";

const NotFound = (props) => {
  return (
    <div
      className="page-404"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100vw 100vh",
        height: "100vh",
      }}
    >
      <div className="not-found-container">
        <div className="header">404 Page Not Found</div>

        <Link className="link" to="/main">Return To Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
