import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import AppContent from "./AppContent";
import AbeChoiApp from "./apps/AbeChoiApp";

const ProjectDetails = ({project}) => {

  const sections = project.sections;

  const sectionIndex = (section) => {
    return sections.indexOf(section) + 1;
  }

  return (
    <section>
      <div className="project-details">

        <div className="project-demo">
          <AbeChoiApp />
        </div>

        <h1 className="title">{project.title}</h1>
        <p className="date">{project.createdAt}</p>
        <h3 className="table-header">Table of Contents</h3>
  
        <ol className="table-of-contents">
          {sections.map(section => (
            <li className="app-link">
              <Link  to={ "/abechoi#section" + (sectionIndex(section)) } key={sectionIndex(section)}
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}>{ section.title }</Link>
            </li>
          ))}
        </ol>

        { sections.map(section => (
          <AppContent title={section.title} key={sectionIndex(section)}
          content={section.content} id={ "section" + (sectionIndex(section)) } />
        ))}

      </div>
    </section>
  )
}

export default ProjectDetails;