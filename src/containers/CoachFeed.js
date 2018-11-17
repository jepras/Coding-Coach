import { connect } from "react-redux";
import CoachList from "../components/Coaches/CoachList";

const mapStateToProps = state => {
  return {
    coaches: state.coaches
  };
};

const CoachFeed = connect(
  mapStateToProps,
  null
)(CoachList);

export default CoachFeed;
