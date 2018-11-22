import base from "../config/airtableConfig";

export const REQUEST_RECORD = "REQUEST_RECORD";
export const RECEIVE_RECORD = "RECEIVE_RECORD";
export const SELECT_ROW = "SELECT_ROW";
export const INVALIDATE_ROW = "INVALIDATE_ROW";

export function selectRow() {
  return {
    type: SELECT_ROW
  };
}

export function invalidateRow() {
  return {
    type: INVALIDATE_ROW
  };
}

function requestRecords() {
  return {
    type: REQUEST_RECORD
  };
}

function receiveRecord(record) {
  return {
    type: RECEIVE_RECORD,
    posts: record,
    receiveddAt: Date.now()
  };
}

function receiveRecords(records) {
  console.log(records);
  console.log(records.map(record => record.fields));
  return {
    type: RECEIVE_RECORD,
    // WHAT?!!? Why call child?
    posts: records.map(record => record.fields),
    /*     id: records.map(record => record.id),
     */ receivedAt: Date.now()
  };
}

export function fetchRecord(id) {
  return dispatch => {
    dispatch(requestRecords());

    return base("Requests").find(id, function(err, record) {
      if (err) {
        console.error(err);
        return;
      }
      dispatch(receiveRecord(record.fields));
    });
  };
}

export function updateRecord(assigned, id) {
  console.log(assigned);
  return dispatch => {
    return base("Requests").update(
      id,
      { helper: assigned, status: "undergoing" },
      function(err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(record.get("helper"));
      }
    );
  };
}

export function fetchRecords() {
  return dispatch => {
    dispatch(requestRecords());

    // find 3 records
    return base("Requests")
      .select({
        maxRecords: 30,
        view: "Grid view"
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function(record) {
            console.log("Retrieved", record.get("Name"));
          });
          fetchNextPage();
          dispatch(receiveRecords(records));
          console.log(records);
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };
}

function shouldFetchRecords(state) {
  // changed from postsBySubreddit to just posts
  const records = state.recordsByRow;
  if (!records) {
    return true;
  } else if (records.isFetching) {
    return false;
  } else {
    return records.didInvalidate;
  }
}

export function fetchRecordsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchRecords(getState())) {
      return dispatch(fetchRecords());
    }
  };
}
