import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import App from "./App";

import promise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

import * as serviceWorker from "./serviceWorker";

import "babel-polyfill";

import { fetchRecords, fetchRecordsIfNeeded } from "./actions/airtableActions";

let middleware = applyMiddleware(
  thunk.withExtraArgument({ getFirebase, getFirestore }),
  promise,
  logger
);

let store = createStore(
  rootReducer,
  compose(
    middleware,
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      userProfile: "users",
      attachAuthIsReady: true
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

/* store.dispatch(selectSubreddit("reactjs"));
 */
// DELETED: store.dispatch(fetchRecords()).then(() => console.log(store.getState()));
store.dispatch(fetchRecords());
/*   .then(() => console.log(store.getState()));
 */
/* store.dispatch(fetchRecordsIfNeeded());
 */ // wait for firebase to be ready before rendering
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
