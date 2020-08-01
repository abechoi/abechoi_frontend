import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Blogs from './components/Blogs';
import Docs from './components/Docs';
import About from './components/About';
import Projects from './components/Projects';
import projects from "./components/data/projects";
import AbeChoiApp from "./components/apps/AbeChoiApp";

const App = () => {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><About/></Route>
          <Route path="/blogs"><Blogs/></Route>
          <Route path="/docs"><Docs/></Route>
          <Route path="/projects"><Projects/></Route>
          
          <Route path={projects[0].url} render={(props) => <AbeChoiApp {...props} project={projects[0]} />} />
        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
