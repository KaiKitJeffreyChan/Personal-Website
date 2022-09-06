import React from "react";
import styled from "styled-components";
import projectData from "./ProjectData";

const ProjectCard = (props) => {
  const currentSelectedProject = projectData.find(
    (project) => project.name === props.currentProject
  );

  return (
    <CardContainer>
      {currentSelectedProject ? (
        <div className="zoom">
          <Image className="fill">
            <img
              src={`${process.env.PUBLIC_URL}/projectImages/${currentSelectedProject.img}`}
              alt={currentSelectedProject.id}
            />
          </Image>
          <a
            href={currentSelectedProject.github}
            target="_blank"
            rel="noreferrer"
          >
            <TitleText href={currentSelectedProject.github}>
              {currentSelectedProject.name}
            </TitleText>
          </a>
          <hr style={{ color: "white" }}></hr>
          <Description>{currentSelectedProject.description}</Description>
        </div>
      ) : null}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  float: right;
  padding-top: 30px;
  padding-right: 44px;
  margin: 0;
`;

const Image = styled.div`
  border: 1px solid rgba(25, 25, 25);
  height: 350px;
  width: 400px;
  margin-bottom: 10px;
`;

const TitleText = styled.p`
  position: relative;
  text-align: left;
  padding-bottom: 0px;
  color: white;
  color: rgb(190, 190, 190);
`;

const Description = styled.div`
  height: 90px;
  width: 400px;
  font-size: 12px;
  /* border: 1px solid white; */
  word-wrap: break-word;
  float: right;
  color: rgb(190, 190, 190);
  position: fixed;
`;

export default ProjectCard;
