import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ project }) => {

  return (
    <Link to={project.url}>
      <li className="project-card" key={project.id}>
          <img className="projects-thumbnail" src={ require(project.thumbnail+"") } alt="projects-thumbnail"/>
          <h1 className="projects-title">{ project.title }</h1>

          <div style={{ display: 'flex', marginTop: 5 }}>
          <p className="date">{project.createdAt}</p>
          <a className="github-sm" href="https://github.com/abechoi/abechoi_frontend" target="__blank">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ width: 15, height: 15 }}/>
            <div className="github-sm-text"><strong>View Repo</strong></div>
          </a>
          </div>
     
          <p>{ project.info }</p>
      </li>
    </Link>
  )
}

export default ProjectCard;