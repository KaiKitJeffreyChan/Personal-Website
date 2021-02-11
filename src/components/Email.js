import react, { useState, useEffect } from "react"
import Draggable from 'react-draggable';
import { Window, TitleBar, Text } from 'react-desktop/macOs';
import styled from 'styled-components';
import ProjectConent from './ProjectsContent';
import EmailContent from "./EmailContent";
import { Resizable, ResizableBox } from 'react-resizable';

function MyEmailWindow(props) {

    var windowHeight = "500px";
    var windowWidth = "400px";

    const onMaximizeClick = () =>{
        console.log("hi")
    }
    

    return(
        <>
            <Draggable bounds="body">
                <TextBox>
                    <Window
                        resizable 
                        height= {windowHeight}
                        width = {windowWidth}
                        >
                        <TitleBar
                            title= "Contact"
                            controls
                            onCloseClick = {props.toggleEmail}
                            onMinimizeClick={props.toggleEmail}
                            onMaximizeClick={onMaximizeClick}
                        />
                        <EmailContent>
                        </EmailContent>
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
`

export default MyEmailWindow