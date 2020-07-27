import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Blogs from './components/Blogs';
import Docs from './components/Docs';
import About from './components/About';
import Projects from './components/Projects';

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
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
