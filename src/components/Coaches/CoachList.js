import React from "react";
import Coach from "./Coach";

const CoachList = ({ coaches }) => (
  <div>
    {coaches.map(coach => (
      <Coach key={coach.id} {...coach} />
    ))}
  </div>
);

export default CoachList;
