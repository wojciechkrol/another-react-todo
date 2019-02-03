import { Filters, Actions } from "./actions";

const filter = (state = Filters.SHOW_ALL, action) => {
  switch (action.type) {
    case Actions.SET_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default filter;
