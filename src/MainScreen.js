import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import MainNav from "./components/navbar/Navbar";
import image from "./pictures/Colorful.png";
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

const MainScreen = () => {
  // const [height, width] = useWindowSize();
  const [Project, setProject] = useState(false);
  const [Email, setEmail] = useState(false);
  const [openWindows, setOpenWindows] = useState([]);

  useEffect(() => console.log(openWindows), [openWindows]);

  const toggleEmail = () => {
    if (openWindows.includes("Email")) {
      const idx = openWindows.indexOf("Email");
      openWindows.splice(idx, 1);
    } else {
      setOpenWindows((openWindows) => ["Email", ...openWindows]);
    }
    setEmail(!Email);
  };

  const toggleProject = () => {
    if (openWindows.includes("Project")) {
      const index = openWindows.indexOf("Project");
      openWindows.splice(index, 1);
    } else {
      setOpenWindows((openWindows) => ["Project", ...openWindows]);
    }
    setProject(!Project);
  };

  const bringFrontProject = () => {
    const index = openWindows.indexOf("Project");
    openWindows.splice(index, 1);
    setOpenWindows((openWindows) => ["Project", ...openWindows]);
  };

  const bringFrontEmail = () => {
    const idx = openWindows.indexOf("Email");
    openWindows.splice(idx, 1);
    setOpenWindows((openWindows) => ["Email", ...openWindows]);
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
        <EmailWindow
          toggleEmail={toggleEmail}
          bringFrontEmail={bringFrontEmail}
          className="email"
        />
      ) : null}
      {Project ? (
        <ProjectWindow
          toggleProject={toggleProject}
          bringFrontProject={bringFrontProject}
        />
      ) : null}

      <div id="bottomBar">
        <Bottom toggleProject={toggleProject} toggleEmail={toggleEmail} />
      </div>
    </div>
  );
};

export default MainScreen;
