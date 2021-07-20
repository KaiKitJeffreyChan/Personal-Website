import { useState, useEffect } from "react";
import styled from "styled-components";
import "./ProjectContent.css";

const ProjectContent = (props) => {
  const [titles, setTitles] = useState([
    "McMaster Course API",
    "Online Live Chat Application",
    "Course Automation",
    "Spotify Player",
    "Hack the North App",
    "Stickfall LibGDX Game",
  ]);

  const thisWasClicked = (title) => {
    console.log(title);
    props.setCurrentProject(title);
  };

  return (
    <SideBar>
      <List>
        <Label>Projects</Label>
        {titles.map((title) => (
          <Title
            className="titles"
            key={title}
            onClick={() => thisWasClicked(title)}
          >
            {title}
          </Title>
        ))}
      </List>
    </SideBar>
  );
};

const SideBar = styled.div`
  width: 30%;
  height: 567px;
  border-top: 1px solid rgb(40, 40, 40);
  background-color: rgb(80, 80, 80);
  word-wrap: break-word;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0px;
`;

const Title = styled.li`
  font-size: 14px;
  color: rgb(160, 160, 160);
  /* border: 1px solid white; */
  font-weight: bold;

  padding: 0.5em 1.25em;
`;

const Label = styled.li`
  font-size: 12px;
  color: rgb(160, 160, 160);
  font-weight: bold;
  /* padding: 5px 0px 5px 10px; */
  padding-left: 10px;
  padding-top: 5px;
`;

export default ProjectContent;
