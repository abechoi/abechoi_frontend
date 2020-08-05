import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import AppContent from "./AppContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import CustomComponent from './CustomComponent';

const ProjectDetails = ({project}) => {

  const sections = project.sections;

  const sectionIndex = (section) => {
    return sections.indexOf(section) + 1;
  }

  return (
    <section>
      <div className="project-details">

        <div className="project-demo">
          <CustomComponent Demo={ project.demo }/>
        </div>
        
        <h1 className="project-title">{project.title}</h1>
        <div className="project-div" style={{ display: 'flex', marginTop: 10  }}>
          <p className="date" style={{ marginTop: 5 }}>{project.createdAt}</p>
          <a className="github-sm" href="https://github.com/abechoi/abechoi_frontend" target="__blank">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ width: 16, height: 16 }}/>
            <div className="github-sm-text"><strong>View Repo</strong></div>
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