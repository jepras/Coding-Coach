import authReducer from "./authReducer";
import requestReducer from "./requestReducer";
import coachReducer from "./coachReducer";
import postReducer from "./postReducer";
import asyncReducer from "./asyncReducer";
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
  async: asyncReducer,
  posts: postReducer
});

export default rootReducer;

// the key name will be the data property on the state object
