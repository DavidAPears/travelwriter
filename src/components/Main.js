import React, { Component } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Splash from "./Splash";
import Writing from "./Writing";
import Map from "./Map";
import ArticlesMap from "./ArticlesMap";
import ArticleMarker from "./ArticleMarker";
import ArticleMapContainer from "./ArticleMapContainer";
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
          <Route path="/map" component={Map} />
          <Route path="/articlesmap" component={ArticlesMap} />
          <Route path="/articlemarker" component={ArticleMarker} />
          <Route path="/articlemapcontainer" component={ArticleMapContainer} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
