import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Records extends Component {
  render() {
    return (
      <ul>
        {this.props.records.map((record, i) => (
          <li key={i}>{record.title}</li>
        ))}
      </ul>
    );
  }
}

Records.propTypes = {
  records: PropTypes.array.isRequired
};
