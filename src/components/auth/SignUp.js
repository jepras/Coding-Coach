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
        <section className="">
          <div className="hero-inner columns is-mobile">
            <div className="hero-copy text-center column is-half is-offset-one-quarter">
              <form
                attribute="netlify"
                className="white"
                onSubmit={this.handleSubmit}
              >
                <h1 className="hero-title mt-0 is-revealing">Sign Up</h1>
                <div className="field">
                  <div className="control">
                    <input
                      placeholder="Email"
                      className="input"
                      type="email"
                      id="email"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <input
                    placeholder="Password"
                    className="control input"
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    placeholder="First name"
                    className="control input"
                    type="text"
                    id="firstName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <input
                    placeholder="Last name"
                    className="control input"
                    type="text"
                    id="lastName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <button className="button button-primary button-shadow">
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
