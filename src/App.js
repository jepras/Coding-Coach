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
import Airtable from "./containers/Airtable";
import Reddit from "./containers/Reddit";
import Dashboard from "./components/Request/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/createcoach" component={CoachStart} />
        <Route path="/request/:id" component={Request} />
        <Route path="/reddit" component={Reddit} />
        <Route path="/airtable" component={Airtable} />
      </div>
    );
  }
}

export default App;
