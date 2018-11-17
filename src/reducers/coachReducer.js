/* eslint-disable default-case */
const coaches = (state = [], action) => {
  switch (action.type) {
    case "ADD_COACH":
      return [
        ...state,
        {
          name: action.name,
          skills: action.skills,
          rating: action.rating,
          id: action.id
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

export default coaches;
