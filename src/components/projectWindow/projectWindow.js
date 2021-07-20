import { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import ProjectContent from "./ProjectContent";
import ProjectCard from "./ProjectCard";

const Window = (props) => {
  const [currentProject, setCurrentProject] = useState("");
  const minimizePressed = () => {
    console.log("minimizePressed");
    // setWindowStage("MINIMIZED");
  };
  const maximizePressed = () => {
    console.log("maximizePressed");
    // setWindowStage("MAXIMIZED");
  };

  return (
    <Draggable bounds="parent" handle="section" id="main">
      <MacWindow>
        <section>
          <TopBarComponent>
            <RedCircle onClick={props.toggleProject} />
            <YellowCircle onClick={minimizePressed} />
            <GreenCircle onClick={maximizePressed} />
            <Description>My Projects</Description>
          </TopBarComponent>
        </section>
        <ProjectContent setCurrentProject={setCurrentProject} />
        <ProjectCard currentProject={currentProject} />
      </MacWindow>
    </Draggable>
  );
};

//NOTE for sidebar heigh, get state for window heigh and subtract by const of 2rem

const MacWindow = styled.div`
  height: 600px;
  width: 700px;
  background-color: rgb(36, 36, 36);
  border-radius: 7px;
  border: 1px solid grey;
`;

const TopBarComponent = styled.div`
  width: 100%;
  background-color: rgb(60, 60, 60);
  border-radius: 7px 7px 0 0;
  height: 2rem;
  text-align: center;
`;

const RedCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgb(255, 96, 92);
  margin-top: 10px;
  margin-left: 10px;
  float: left;
`;

const YellowCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgb(255, 189, 68);
  margin-left: 8px;
  margin-top: 10px;
  float: left;
`;

const GreenCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgb(0, 202, 78);
  margin-left: 8px;
  margin-top: 10px;
  float: left;
`;

const Description = styled.p`
  color: grey;
  margin-right: 100px;
  padding-top: 8px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export default Window;
