import React from "react";
import { connect } from "react-redux";
import { createCoach } from "../actions";

let CreateCoach = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(createCoach(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit" className="button">
          Add coach
        </button>
      </form>
    </div>
  );
};

CreateCoach = connect()(CreateCoach);

export default CreateCoach;
