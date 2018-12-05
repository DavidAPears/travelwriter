import React, { Component } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Splash from "./Splash";
import Writing from "./Writing";
import Map from "./Map";
import MapView from '../containers/MapView.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
const Request = require('../helpers/request.js');


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cafes: []
    }
  }

  componentDidMount() {
    const url = "http://localhost:3001/api/coffee-shops";
    fetch(url)
    .then((res) =>
      res.json()

    )
    .then((data) =>{
      this.setState({
        cafes: data
      })
       console.log(this.state.cafes);
    })
    .catch((err)=>{
      console.error(err);
    });
  }


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
          <Route path="/map2" render={() => (<MapView shopData={this.state.cafes} />)}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
