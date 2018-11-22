import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRecordsIfNeeded } from "../../actions/airtableActions";
import One from "./One";
import OneAll from "./OneAll";
import Layout from "../Layout/Layout";

class Dashboard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchRecordsIfNeeded());
  }

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
    const { requests, isFetching, auth } = this.props;
    return (
      <Layout>
        <section>
          <div className="hero-inner columns is-mobile">
            <div className="hero-copy column is-half is-offset-one-quarter">
              <h1 className="title">Your open requests</h1>
              {isFetching && requests.length === 0 && <h2>Loading...</h2>}
              {!isFetching && requests.length === 0 && <h2>Empty.</h2>}
              {requests.length > 0 && (
                <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                  <One requests={requests} auth={auth} />
                </div>
              )}
              <hr />
              <h2 className="title">All open requests</h2>
              <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <OneAll requests={requests} />
              </div>
              <hr />
              {/* <h2 className="title">All closed requests</h2>
              <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                <One requests={requests} />
              </div> */}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

Dashboard.propTypes = {
  requests: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  const { airtableRecord } = state;
  const { firebase } = state;
  console.log(firebase.auth.email);

  return {
    requests: airtableRecord.items ? airtableRecord.items : [],
    isFetching: airtableRecord.isFetching,
    lastUpdated: airtableRecord.lastUpdated,
    auth: firebase.auth.email ? firebase.auth.email : null
  };
}

export default connect(mapStateToProps)(Dashboard);
