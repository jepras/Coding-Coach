import coaches from "./coachReducer";
import fetch from "./fetch";

import { combineReducers } from "redux";

const logApp = combineReducers({
  coaches,
  fetch
});

export default logApp;
