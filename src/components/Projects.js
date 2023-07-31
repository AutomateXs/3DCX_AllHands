import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../data/projectData";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="section-title-and-intro">
        <div className="section-title">
          <h3>Projects</h3>
          <div className="title-underline"></div>
        </div>
        {/* <p className="section-intro">
          We believe that technology should work in the background, allowing you
          to focus on the things that matter most.
        </p> */}
      </div>
      <div className="card-container">
        {projectData.map(data=>  <ProjectCard key={data.id} info={data}/>)}
      </div>
    </div>
  );
};

export default Projects;