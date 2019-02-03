export const Actions = {
  ADD_TODO: "ADD_TODO",
  SET_FILTER: "SET_FILTER",
  TOGGLE_TODO: "TOGGLE_TODO",
};

export const Filters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const setFilter = filter => ({
  type: Actions.SET_FILTER,
  payload: {
    filter,
  },
});
