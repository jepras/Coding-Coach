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

function receiveRecords(records) {
  records.map(record => console.log(record.fields));
  return {
    type: RECEIVE_RECORD,
    // WHAT?!!? Why call child?
    posts: records.map(record => record.fields),
    receivedAt: Date.now()
  };
}

export function fetchRecords() {
  return dispatch => {
    // config airtable
    var Airtable = require("airtable");
    Airtable.configure({
      endpointUrl: "https://api.airtable.com",
      apiKey: "key18X8fJ9bFspylW"
    });
    var base = Airtable.base("appWHoHTmxTUmS5Ce");

    dispatch(requestRecords());

    // find 3 records
    return base("Requests")
      .select({
        maxRecords: 3,
        view: "Grid view"
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function(record) {
            console.log("Retrieved", record.get("Name"));
          });
          fetchNextPage();
          console.log(records);
          dispatch(receiveRecords(records));
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    /*   .then(records => console.log(records))
      .then(response => console.log(response))
      .then(response => response.json())
      .then(json => dispatch(receiveRecords(json)))
      .then(json => console.log(json)); */
    /* 
    return (
      fetch(`https://www.reddit.com/r/${row}.json`)
        // What does this line do?
        .then(response => response.json())
        .then(json => dispatch(receiveRecords(row, json)))
        .then(json => console.log(json))
    ); */
  };
}

function shouldFetchRecords(state) {
  console.log(state.recordsByRow);
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
