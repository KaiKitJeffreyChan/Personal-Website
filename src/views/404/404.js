import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../pictures/Colorful.png";
import "./404.scss";


const NotFound = (props) => {
  return (
    <div
      className="page-404"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100vw 100vh",
        height: "100vh",
      }}>
      <div className="not-found-container">
        <div className="header">404 page not found</div>
        <button className="button">Return To Home</button>
      </div>
    </div>
  );
};

export default NotFound;
