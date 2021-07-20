import React from "react";
// import styled from "styled-components";
import projectData from "./ProjectData";

const ProjectCard = (props) => {
  const currentSelectedProject = projectData.find(
    (project) => project.name === props.currentProject
  );

  return (
    <div>
      {currentSelectedProject.name}
      {currentSelectedProject.github}
      {currentSelectedProject.description}
    </div>
  );
};

// const CardContainer = styled.div`
//   float: right;
// `;
export default ProjectCard;
