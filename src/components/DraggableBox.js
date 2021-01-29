import react, { useState, useEffect } from "react"
import Draggable from 'react-draggable';
import { Window, TitleBar, Text } from 'react-desktop/macOs';
import styled from 'styled-components';
import ProjectConent from './ProjectsContent';
import EmailContent from "./EmailContent";
import { Resizable, ResizableBox } from 'react-resizable';

function MyProjectWindow(props) {

    var windowHeight = "500px";
    var windowWidth = "400px";

    const onMaximizeClick = () =>{
        console.log("hi")
    }

    return(
        <>
    
            <Draggable bounds="body">
                <TextBox>
                    <Resizable>
                        <Window
                            
                            height= {windowHeight}
                            width = {windowWidth}
                            padding="10px">
                            <TitleBar
                                title= "My Projects"
                                controls
                                onCloseClick = {props.toggleAppear}
                                onMinimizeClick={props.toggleAppear}
                                onMaximizeClick={onMaximizeClick}
                            />
                            <ProjectConent>
                            </ProjectConent>
                        </Window>

                    </Resizable>
                </TextBox>
            </Draggable>

        </>
    );
}

function MyEmailWindow() {

    var windowHeight = "500px";
    var windowWidth = "400px";

    const onCloseClick = () =>{
        console.log("close window")
    }
    const onMinimizeClick = () =>{
        console.log("minmize window")
    }
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
                        padding="10px">
                        <TitleBar
                            title= "My Projects"
                            controls
                            onCloseClick = {onCloseClick}
                            onMinimizeClick={onMinimizeClick}
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

export {MyProjectWindow, MyEmailWindow};