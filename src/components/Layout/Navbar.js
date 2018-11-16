import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <NavLink to="/" className="navbar-item">
              <p>Coding Coach</p>
            </NavLink>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <NavLink to="coachlist" className="navbar-item">
                Coaches
              </NavLink>

              <NavLink to="studentlist" className="navbar-item">
                Students
              </NavLink>
              <NavLink to="request" className="navbar-item">
                Request
              </NavLink>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <NavLink to="register" className="button is-primary">
                    <strong>Sign up</strong>
                  </NavLink>
                  <NavLink to="login" className="button is-light">
                    Log in
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
