import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
  const { projectData } = props;
  return (
    <div>
      <div className="project-card">
        <Link to={`/project/${projectData.id}`}>
          <img alt="projectData" src={projectData.image} />
          <h3 className="project-card-title">{projectData.title}</h3>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
