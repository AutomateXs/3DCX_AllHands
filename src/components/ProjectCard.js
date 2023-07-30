import React from "react";
import projectData from "../data/projectData";
import { IMAGE_URL } from "../utils/constants";

const ProjectCard = (props) => {
  const { projectTitle, projects } = props.info;
  if (Array.isArray(projects) && projects.length === 1) {
    const { projectName, description, imageSrc } = projects[0];
    let arr = [];
    let index = 0;
    for (let i = 0, j = 0; i < description.length; i++) {
      if (description[i] === "\n") {
        arr[index++] = description.substring(j, i);
        j = i + 2;
        i++;
      }
    }
    return (
      <div className="card project-card">
        <div className="project-card-left-section">
          <img
            src={IMAGE_URL+imageSrc}
            alt=""
          />
        </div>
        <div className="project-card-right-section">
          <h2>{projectName}</h2>
          <div className="project-desc">
            {arr.map((descInfo) => (
              <span>
                {descInfo}
                <br />
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-multiple-projects">
        <h1>{projectTitle}</h1>
        {projects.map((project) => {
          const { projectName, description, imageSrc } = project;
          let arr = [];
          let index = 0;
          for (let i = 0, j = 0; i < description.length; i++) {
            if (description[i] === "\n") {
              arr[index++] = description.substring(j, i);
              j = i + 2;
              i++;
            }
          }

          return (
            <div className="card project-card">
              <div className="project-card-left-section">
                <img
                  src="https://static.wixstatic.com/media/65441d_fa2ecebda28246dc84beb098827bcfa5~mv2.jpg/v1/crop/x_10,y_0,w_228,h_65/fill/w_319,h_91,al_c,lg_1,q_80,enc_auto/APEXimagegen_o1.jpg"
                  alt=""
                />
              </div>
              <div className="project-card-right-section">
                <h2>{projectName}</h2>
                <div className="project-desc">
                  {arr.map((descInfo) => (
                    <span>
                      {descInfo}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default ProjectCard;
