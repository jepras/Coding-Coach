import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default class OneAllClosed extends Component {
  render() {
    return (
      <ul>
        {this.props.requests.map((request, i) => (
          <div>
            {request.status === "closed" ? (
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

OneAllClosed.propTypes = {
  requests: PropTypes.array.isRequired
};
