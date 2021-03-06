import authReducer from "./authReducer";
import requestReducer from "./requestReducer";
import coachReducer from "./coachReducer";
import postsBySubreddit from "./postReducer";
import selectedSubreddit from "./asyncReducer";
import airtableRecord from "./airtableReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  // firestoreReducer syncs data in database to firestore
  firestore: firestoreReducer,
  // for login
  firebase: firebaseReducer,
  requests: requestReducer,
  coaches: coachReducer,
  postsBySubreddit,
  selectedSubreddit,
  airtableRecord
});

export default rootReducer;

// the key name will be the data property on the state object
