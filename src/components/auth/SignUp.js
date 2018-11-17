import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../actions/authActions";
import Layout from "../Layout/Layout";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <Layout>
        <section className="container-sm">
          <div className="hero-inner">
            <div className="hero-copy text-center">
              <form
                attribute="netlify"
                className="white"
                onSubmit={this.handleSubmit}
              >
                <h5 className="hero-title mt-0 is-revealing">Sign Up</h5>
                <div className="input-field">
                  <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <input
                    placeholder="Password"
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <input
                    placeholder="First name"
                    type="text"
                    id="firstName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <input
                    placeholder="Last name"
                    type="text"
                    id="lastName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-field">
                  <button className="btn pink lighten-1 z-depth-0">
                    Sign Up
                  </button>
                  <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // set signUp props to response to signUp action from authActions
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
