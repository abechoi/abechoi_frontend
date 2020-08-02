import React from "react";
import { Link } from "react-router-dom";


const ProjectCard = ({ project }) => {

  return (
    <Link to={project.url}>
      <li className="project-card" key={project.id}>
          <img className="projects-thumbnail" src={ require(project.thumbnail+"") } alt="projects-thumbnail"/>
          <h1 className="projects-title">{ project.title }</h1>

          <div style={{ display: 'flex', marginTop: 5 }}>
          <p className="date">{project.createdAt}</p>
          <a className="github-button" href="https://github.com/abechoi" data-color-scheme="no-preference: light; light: light; dark: light;" aria-label="Follow @abechoi on GitHub">
            View Repo
          </a>
          </div>
     
          <p>{ project.info }</p>
      </li>
    </Link>
  )
}

export default ProjectCard;