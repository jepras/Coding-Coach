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
      var tis = Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt,
        id: action.id
      });
      console.log(action.posts);
      console.log(action.id);
      return tis;
    default:
      return state;
  }
}

export default posts;
