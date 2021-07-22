import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import MainNav from "./components/navbar/Navbar";
import image from "./pictures/bg4.jpg";
import Bottom from "./components/bottomBar/Bottom";
import ProjectWindow from "./components/projectWindow/ProjectWindow";
import EmailWindow from "./components/emailWindow/EmailWindow";

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

  //___________________________________________________________
  const [openWindows, setOpenWindows] = useState([]);

  //add and remove elements in stack, take most recent to display
  //if a window wanst open, append to front.
  //only remove from array if you "open" and its already in array
  //___________________________________________________________

  const toggleEmail = () => {
    setEmail(!Email);
  };

  const toggleProject = () => {
    setProject(!Project);
  };

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
        <MainNav currentlyPressed={openWindows[0]} />
      </div>
      {Email ? (
        <EmailWindow toggleEmail={toggleEmail} className="email" />
      ) : null}
      {Project ? <ProjectWindow toggleProject={toggleProject} /> : null}

      <div id="bottomBar">
        <Bottom toggleProject={toggleProject} toggleEmail={toggleEmail} />
      </div>
    </div>
  );
}

export default MainScreen;
