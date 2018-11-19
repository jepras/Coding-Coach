/* eslint-disable default-case */
const requests = (
  state = {
    req: []
  },
  action
) => {
  switch (action.type) {
    case "ADD_REQUEST":
      return {
        ...state,
        req: state.req.push([action.req])
      };

    case "UPDATE_COACH":
      return [
        ...state
        // to be completed
      ];
    case "DELETE_COACH":
      return [
        ...state
        // to be completed
      ];
    default:
      return state;
  }
};

export default requests;
