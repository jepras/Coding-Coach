import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions/authActions";
import { Redirect } from "react-router-dom";
import Layout from "../Layout/Layout";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // calls signIn mapped to props & takes email/password from state.
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <Layout>
        <section>
          <div className="hero-inner columns is-mobile">
            <div className="hero-copy text-center column is-half is-offset-one-quarter">
              <form className="white" onSubmit={this.handleSubmit}>
                <h1 className="grey-text text-darken-3">Sign In</h1>
                <div className="field">
                  <input
                    placeholder="Email"
                    className="control input"
                    type="email"
                    id="email"
                    onChange={this.handleChange}
                  />
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
                  <button className="button button-primary button-shadow">
                    Login
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

// map dispatch to props, to get access to sign in action from auth actions
const mapDispatchToProps = dispatch => {
  return {
    // creds is equal to credentials in signIn action in authActions
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
