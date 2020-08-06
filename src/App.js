import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Route exact path="/" render={() => <About/>} />
          <Route path="/blogs" render={() => <Blogs/>} />
          <Route path="/docs" render={() => <Docs/>} />
          <Route path="/projects" render={() => <Projects/>} />
          
          <Route path={projects[0].url} render={(props) => <ProjectDetails {...props} project={projects[0]} />} />
          <Route path={projects[1].url} render={(props) => <ProjectDetails {...props} project={projects[1]} />} />
        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
