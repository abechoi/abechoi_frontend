import React from "react";
import { Link } from "react-router-dom";


const ProjectCard = ({ project }) => {

  return (
    <Link to={project.url}>
      <li className="project-card" key={project.id}>
          <img className="projects-thumbnail" src={ require(project.thumbnail+"") } alt="projects-thumbnail"/>
          <h1 className="projects-title">{ project.title }</h1>
          <p>{ project.createdAt }</p>
          <p>{ project.info }</p>
      </li>
    </Link>
  )
}

export default ProjectCard;