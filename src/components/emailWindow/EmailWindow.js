// import { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import EmailContent from "./EmailContent";
import "./Email.css";

const EmailWindow = ({ toggleEmail, bringFrontEmail, currentlyPressed }) => {
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
      <MacWindow onClick={bringFrontEmail} currentlyPressed={currentlyPressed}>
        <section>
          <TopBarComponent>
            <RedCircle className="redButton" onClick={toggleEmail} />
            <YellowCircle className="yellowButton" onClick={minimizePressed} />
            <GreenCircle className="greenButton" onClick={maximizePressed} />
            <Description>Contact</Description>
          </TopBarComponent>
        </section>
        <EmailContent></EmailContent>
      </MacWindow>
    </Draggable>
  );
};

//NOTE for sidebar heigh, get state for window heigh and subtract by const of 2rem

const MacWindow = styled.div`
  height: 600px;
  width: 700px;
  right: 0;
  top: 5;
  background-color: rgb(36, 36, 36);
  border-radius: 7px;
  border: 1px solid grey;
  float: right;
  position: fixed;
  z-index: ${({ currentlyPressed }) =>
    currentlyPressed === "Email" ? "200" : "10"};
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
  margin-left: 30px;
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

export default EmailWindow;
