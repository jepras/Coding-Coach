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
        <section className="container-sm">
          <div className="hero-inner">
            <div className="hero-copy text-center">
              <form className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
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
                  <button className="btn pink lighten-1 z-depth-0">
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
