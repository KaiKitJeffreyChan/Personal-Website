import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import "./DesktopContent.css";

const DesktopContent = () => {
  return (
    <div className="desktop">
      <Title>Hi, My Name Is Jeffrey Chan</Title>
      <TypeWriterCss>
        <h5>
          <Typewriter
            options={{
              strings: [
                "Problem Solver",
                "Creative",
                "I think lol",
                "Enthusiastic",
                "Innovative",
                "Gamer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h5>
      </TypeWriterCss>
      <ResumeButton
        href="/path/to/your/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
      >
        Resume
      </ResumeButton>
    </div>
  );
};

const Title = styled.h1`
  padding-left: 5%;
  padding-top: 5%;
  /* position: absolute;
    top: 10px;
    width: 100%;
    text-align: center;
    z-index: 100;
    display:block; */
`;

const ResumeButton = styled.div`
  margin-top: 20px;
  margin-left: 5%;
  font-size: 16px;
  height: 36px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #333;
  border: none;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const TypeWriterCss = styled.div`
  padding-left: 5%;
`;

export default DesktopContent;
