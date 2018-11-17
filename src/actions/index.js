export const addRequest = (
  name,
  title,
  issue,
  date,
  tech,
  link,
  email,
  open
) => {
  return {
    type: "ADD_REQUEST",
    title,
    issue,
    name,
    date,
    tech,
    link,
    email,
    open
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
