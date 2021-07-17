import React, { useState, useEffect } from "react";
import "./MainScreen.css";
// import styled from "styled-components";
import MainNav from "./components/navbar/Navbar";
import image from "./pictures/bg.jpg";
import Bottom from "./components/bottomBar/Bottom";
import MyProjectWindow from "./components/projects/Projects";
import MyEmailWindow from "./components/email/Email";

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
  const toggleProject = () => setProject(!Project);

  const [Email, setEmail] = useState(false);
  const toggleEmail = () => setEmail(!Email);

  return (
    <>
      <div className="App">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "100vw 100vh",
            height: "100vh",
          }}
        >
          <div id="topBar">
            {/* <MainNav>
              <Switch></Switch>
            </MainNav> */}
          </div>
          <div id="body">
            {Project ? <MyProjectWindow toggleProject={toggleProject} /> : null}
            {Email ? <MyEmailWindow toggleEmail={toggleEmail} /> : null}
          </div>

          <div id="bottomBar">
            <Bottom toggleProject={toggleProject} toggleEmail={toggleEmail} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainScreen;
