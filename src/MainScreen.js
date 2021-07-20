import React, { useState, useEffect } from "react";
import "./MainScreen.css";
// import styled from "styled-components";
import MainNav from "./components/navbar/Navbar";
import image from "./pictures/bg4.jpg";
import Bottom from "./components/bottomBar/Bottom";
import MyProjectWindow from "./components/projectWindow/ProjectWindow";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
}

function MainScreen() {
  // const [height, width] = useWindowSize();
  const [Project, setProject] = useState(false);
  const [Email, setEmail] = useState(false);

  const toggleEmail = () => setEmail(!Email);
  const toggleProject = () => setProject(!Project);

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100vw 100vh",
        height: "100vh",
      }}
      className="App"
    >
      <div id="topBar">
        <MainNav />
      </div>

      {Project ? <MyProjectWindow toggleProject={toggleProject} /> : null}
      {/* {Email ? <MyEmailWindow toggleEmail={toggleEmail} /> : null} */}

      <div id="bottomBar">
        <Bottom toggleProject={toggleProject} toggleEmail={toggleEmail} />
      </div>
    </div>
  );
}

export default MainScreen;
