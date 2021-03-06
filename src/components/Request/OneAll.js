import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default class OneAll extends Component {
  render() {
    return (
      <ul>
        {this.props.requests.map((request, i) => (
          <div>
            {request.status === "open" ? (
              <li key={i}>
                <NavLink to={"/request/" + request.recordid}>
                  {request.title}
                </NavLink>{" "}
              </li>
            ) : null}
          </div>
        ))}
      </ul>
    );
  }
}

OneAll.propTypes = {
  requests: PropTypes.array.isRequired
};
