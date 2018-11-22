import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRecordsIfNeeded } from "../actions/airtableActions";
import Records from "../components/Reddit/Records";

class Airtable extends Component {
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
    const { posts, isFetching } = this.props;
    return (
      <div>
        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Records posts={posts} />
          </div>
        )}
        <p>{posts.length}</p>
      </div>
    );
  }
}

Airtable.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  const { airtableRecord } = state;
  console.log(airtableRecord);

  return {
    posts: airtableRecord.items ? airtableRecord.items : [],
    isFetching: airtableRecord.isFetching,
    lastUpdated: airtableRecord.lastUpdated
  };
}

export default connect(mapStateToProps)(Airtable);
