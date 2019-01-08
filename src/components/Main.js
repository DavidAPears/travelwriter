import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Info from "./Info";
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
    const url = "http://localhost:3002/api/coffee-shops";
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
          <Route exact path="/info" component={Info} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
