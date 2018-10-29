import React, { Component } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Visited from "./Visited";
import Splash from "./Splash";
import Writing from "./Writing";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
  
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/splash" component={Splash} />
          <Route path="/writing" component={Writing} />
          <Route path="/visited" component={Visited} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
