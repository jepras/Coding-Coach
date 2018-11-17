let nextEntryId = 0;

export const createCoach = (name, skills, rating) => {
  return {
    type: "ADD_COACH",
    id: nextEntryId++,
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
