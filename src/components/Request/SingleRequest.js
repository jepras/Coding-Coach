import React from "react";

const SingleRequest = ({ name, title, tech }) => (
  <div className="columns">
    <div className="column">Name: {name}</div>
    <div className="column">Tech: {tech}</div>
    <div className="column">Title: {title}</div>
  </div>
);

export default SingleRequest;
