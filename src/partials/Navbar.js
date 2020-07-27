import React from "react";
import { NavLink } from "react-router-dom";

// npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome
// npm i -S @fortawesome/free-brands-svg-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const links = [
  {id: 1, name: 'Github', icon: faGithub, size: '3x', link: 'https://github.com/abechoi'},
  {id: 2, name: 'Codepen', icon: faCodepen, size: '3x', link: 'https://codepen.io/collection/DjaJdx'},
  {id: 3, name: 'LinkedIn', icon: faLinkedin, size: '3x', link: 'https://linkedin.com/in/abrahamjchoi'},
];

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="/">
          <div className="logo-first">ABE</div>
          <div className="logo-last">CHOI</div>
        </a>
      </div>
      <ul className="site-links">
        <li><NavLink to="/projects" className="project-link">PROJECTS</NavLink></li>
        <li><NavLink to="/docs" className="docs-link">DOCS</NavLink></li>
        <li><NavLink to="/blogs" className="blogs-link">BLOGS</NavLink></li>
        <li><NavLink exact to="/" className="about-link">ABOUT</NavLink></li>
      </ul>
      <ul className="social-links">
        { links.map(link => {
          return (
            <li key={link.id}>
              <a  href={link.link} target="__blank">
                <FontAwesomeIcon  className="social-link" icon={link.icon} size={link.size}/>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;