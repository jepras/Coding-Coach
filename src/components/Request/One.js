import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default class One extends Component {
  render() {
    const { auth } = this.props;
    console.log(auth);
    return (
      <ul>
        {this.props.requests.map((request, i) => (
          <div>
            {auth === request.mail ? (
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

One.propTypes = {
  requests: PropTypes.array.isRequired
};
