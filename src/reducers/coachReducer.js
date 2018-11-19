/* eslint-disable default-case */
const requests = (state = [], action) => {
  switch (action.type) {
    case "ADD_COACH":
      return [
        ...state,
        {
          name: action.name
        }
      ];

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
