import React, { Component } from "react";
import { Route } from "react-router-dom";
/* 
import "./App.scss"; */
import "bulma/css/bulma.css";
import "./scss/style.scss";
import "./js/main.js";
import Home from "./components/Home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Request from "./components/Request/Request";
import CoachStart from "./components/Coaches/CoachStart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/createcoach" component={CoachStart} />
        <Route path="/request/:id" component={Request} />
      </div>
    );
  }
}

export default App;
