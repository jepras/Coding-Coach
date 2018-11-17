import { connect } from "react-redux";
import RequestList from "../components/Request/RequestList";

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(ownProps);

  return {
    requests: state.requests,
    id: id
  };
};

const RequestFeed = connect(
  mapStateToProps,
  null
)(RequestList);

export default RequestFeed;
