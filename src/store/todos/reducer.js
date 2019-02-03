import { Actions } from "./actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [
        ...state,
        {
          ...action.payload,
          completed: false,
          edit: false,
        },
      ];
    case Actions.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
    case Actions.REMOVE_TODO:
      return state.filter(todo => {
        return todo.id !== action.payload.id;
      });
    case Actions.CHANGE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text, edit: false };
        }

        return todo;
      });
    case Actions.EDIT_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, edit: true };
        }

        return { ...todo, edit: false };
      });
    default:
      return state;
  }
};

export default todos;
