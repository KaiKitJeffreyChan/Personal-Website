import Draggable from "react-draggable";
import { Window, TitleBar } from "react-desktop/macOs";
import styled from "styled-components";

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
