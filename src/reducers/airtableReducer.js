import {
  INVALIDATE_ROW,
  REQUEST_RECORD,
  RECEIVE_RECORD
} from "../actions/airtableActions";

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_ROW:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_RECORD:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_RECORD:
      console.log(action);

      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

function airtableRecord(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_ROW:
    case RECEIVE_RECORD:
    case REQUEST_RECORD:
      console.log(action);
      console.log(state[action]);
      return Object.assign({}, state, {
        [action]: posts(state[action], action)
      });

    default:
      return state;
  }
}

export default airtableRecord;
