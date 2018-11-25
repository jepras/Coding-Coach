import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
/* import { fetchRecordsIfNeeded } from "../../actions/airtableActions";
import One from "./One";
import OneAll from "./OneAll"; */
import Layout from "./Layout";
import { NavLink } from "react-router-dom";

class Profile extends Component {
  /* componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchRecordsIfNeeded());
  } */

  /* componentDidUpdate(prevProps) {
    if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = this.props;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit));
    this.props.dispatch(fetchPostsIfNeeded(nextSubreddit));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  } */

  render() {
    const { profile } = this.props;
    return (
      <Layout>
        <section>
          <div className="hero-inner columns is-mobile">
            <div className="hero-copy column is-half is-offset-one-quarter">
              <h1 className="title">Profile page</h1>
              <p>
                Welcome {profile.fullName}! Your current mail is {profile.mail}.
              </p>
              <p>You are signed up as a {profile.type}</p>
              <hr />
              {profile.type === "coach" ? (
                <NavLink
                  className="button button-primary button-shadow"
                  to="/dashboard"
                >
                  {" "}
                  Look for open requests!
                </NavLink>
              ) : (
                <NavLink
                  className="button button-primary button-shadow"
                  to="/dashboard"
                >
                  See your open requests
                </NavLink>
              )}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

Profile.propTypes = {
  requests: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  const { airtableRecord } = state;
  const profile = state.firebase.profile;

  return {
    requests: airtableRecord.items ? airtableRecord.items : [],
    isFetching: airtableRecord.isFetching,
    lastUpdated: airtableRecord.lastUpdated,
    profile: profile
  };
}

export default connect(mapStateToProps)(Profile);
