import React, { Component } from "react";
import { Route } from "react-router-dom";
/* 
import "./App.scss";
import "bulma/css/bulma.css"; */
import "./scss/style.scss";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
