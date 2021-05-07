import react, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { Window, TitleBar, Text } from "react-desktop/macOs";
import styled from "styled-components";
import ProjectConent from "./ProjectsContent";
import EmailContent from "./EmailContent";
import { Resizable, ResizableBox } from "react-resizable";

function MyProjectWindow(props) {
  var windowHeight = "601px";
  var windowWidth = "600px";

  const onMaximizeClick = () => {
    console.log("hi");
  };

  return (
    <>
      <Draggable bounds="body">
        <TextBox>
          <Window height={windowHeight} width={windowWidth} padding="10px">
            <TitleBar
              title="My Projects"
              controls
              onCloseClick={props.toggleProject}
              onMinimizeClick={props.toggleProject}
              onMaximizeClick={onMaximizeClick}
            />
            <ProjectConent></ProjectConent>
          </Window>
        </TextBox>
      </Draggable>
    </>
  );
}

const TextBox = styled.div`
  position: absolute;
  align-items: flex-start;
  justify-content: flex-start;
  top: 5%;
  left: 0%;
`;

export default MyProjectWindow;
