import React from "react";

const Coach = ({ name, skills, rating }) => (
  <div className="columns">
    <div className="column">Name: {name}</div>
    <div className="column">Skillset: {skills}</div>
    <div className="column">Rating: {rating}</div>
  </div>
);

export default Coach;
