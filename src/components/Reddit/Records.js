import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Records extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((record, i) => (
          <li key={i}>{record.Title}</li>
        ))}
      </ul>
    );
  }
}

Records.propTypes = {
  posts: PropTypes.array.isRequired
};
