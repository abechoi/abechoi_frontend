import React from "react";

const projects = [];

const Projects = () => {

  return projects.length ? (
    <section className="projects-section">
      <div>
        { projects.map(project => (
          <h3>{ project.title }</h3>
        ))}
      </div>
    </section>
  ) : (
    <section className="empty-section">
      <h3>Projects are coming soon!</h3>
    </section>
  );
}

export default Projects;