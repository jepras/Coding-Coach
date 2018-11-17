import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import "bulma/css/bulma.css";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home";
import CoachList from "./components/Coaches/CoachList";
import StudentList from "./components/Students/StudentList";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/coachlist" component={CoachList} />
          <Route path="/studentlist" component={StudentList} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default Main;
