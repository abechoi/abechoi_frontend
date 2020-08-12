import React from 'react';
import projects from "./data/projects";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <section>
      <ul className="projects-grid">
        { projects.map((project) => (
          <ProjectCard project={project} key={project.id}/>
        ))}
      </ul>
    </section>
  );
}

export default Projects;