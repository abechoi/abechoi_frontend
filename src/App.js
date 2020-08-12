import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Blogs from './components/Blogs';
import Docs from './components/Docs';
import About from './components/About';
import Projects from './components/Projects';
import projects from "./components/data/projects";
import ProjectDetails from "./components/ProjectDetails";

const App = () => {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Switch>
        
          <Route exact path="/">
            <Redirect to="/projects"/>
          </Route>
          <Route path="/projects" render={() => <Projects/>} />
          <Route path="/blogs" render={() => <Blogs/>} />
          <Route path="/docs" render={() => <Docs/>} />
          <Route path="/about" render={() => <About/>} />

          {projects.map(project => (
            <Route path={project.url} render={(props) => <ProjectDetails {...props} project={project} />} />
          ))}
          
        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
