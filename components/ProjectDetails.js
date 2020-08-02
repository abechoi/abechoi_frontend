import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import AppContent from "./AppContent";
import AbeChoiApp from "./apps/AbeChoiApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
        <div style={{ display: 'flex', marginTop: 10 }}>
          <p className="date" style={{ marginTop: 5 }}>{project.createdAt}</p>
          <a className="github-md" href="https://github.com/abechoi/abechoi_frontend" target="__blank">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ width: 20, height: 20 }}/>
            <div className="github-md-text"><strong>View Repo</strong></div>
          </a>
        </div>
        
        <h3 className="table-header">Table of Contents</h3>
  
        <ol className="table-of-contents">
          {sections.map(section => (
            <li className="app-link" key={sectionIndex(section)}>
              <Link  to={ "/abechoi#section" + (sectionIndex(section)) }
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