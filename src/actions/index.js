export const addRequest = state => {
  return {
    type: "ADD_REQUEST",
    name: state.name,
    tech: state.tech
  };
};

export const createCoach = (name, skills, rating) => {
  return {
    type: "CREATE_COACH",
    name,
    skills,
    rating
  };
};
export const updateEntry = (name, skills, rating) => {
  return {
    type: "UPDATE_ENTRY",
    name,
    skills,
    rating
  };
};

export const deleteEntry = (name, skills, rating) => {
  return {
    type: "DELETE_ENTRY",
    name,
    skills,
    rating
  };
};
