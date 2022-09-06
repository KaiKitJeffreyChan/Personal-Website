import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "./Clock";
import "./Navbar.scss";

const MainNav = ({ currentlyPressed }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          className="apple"
          src="https://img.icons8.com/metro/26/ffffff/mac-os.png"
          width="15px"
          height="15px"
        />
        <div className="current-tab">{currentlyPressed}</div>
      </div>
      <div className="navbar-right">
        <img
          className="sound"
          src="https://img.icons8.com/ios-filled/50/ffffff/room-sound.png"
          width="13px"
          height="13px"
        />
        <img
          className="wifi"
          src="https://img.icons8.com/android/24/ffffff/wifi.png"
          width="16px"
          height="16px"
        />
        <Clock />
      </div>
    </div>
  );
};

export default MainNav;
