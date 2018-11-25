import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";
import HeaderIll from "./HeaderIll";

const Navbar = props => {
  const { auth } = props;

  return (
    <div>
      {auth.uid ? (
        <div>
          <HeaderIll />
          <header className="nav container">
            <nav className="navbar is-transparent">
              <div className="navbar-brand">
                <NavLink className="navbar-item" to="/">
                  <img
                    src="https://codingtutor.carrd.co/assets/images/image04.png?v98761388480451"
                    alt="Coding Coach"
                    width="50"
                    height="28"
                  />
                </NavLink>
                <div
                  className="navbar-burger burger"
                  data-target="navbarExampleTransparentExample"
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                  <NavLink className="navbar-item" to="/">
                    Home
                  </NavLink>
                  <NavLink className="navbar-item" to="/dashboard">
                    Dashboard
                  </NavLink>
                </div>

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="navbar-item has-dropdown is-hoverable">
                      <NavLink className="navbar-link" to="/profile">
                        Profile
                      </NavLink>
                      <div className="navbar-dropdown is-boxed">
                        <NavLink className="navbar-item" to="/profile">
                          Profile
                        </NavLink>

                        <hr className="navbar-divider" />

                        <NavLink
                          className="navbar-item is-active"
                          to="/"
                          onClick={props.signOut}
                        >
                          Logout
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      ) : (
        <HeaderIll />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
