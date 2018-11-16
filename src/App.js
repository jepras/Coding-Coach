import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import "bulma/css/bulma.css";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home";
import CoachList from "./components/Coaches/CoachList";
import StudentList from "./components/Students/StudentList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/coachlist" component={CoachList} />
          <Route path="/studentlist" component={StudentList} />
        </Switch>
      </div>
    );
  }
}

export default App;
