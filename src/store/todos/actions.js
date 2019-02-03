let todoID = 1;

export const Actions = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  CHANGE_TODO: "CHANGE_TODO",
  EDIT_TODO: "EDIT_TODO",
};

export const addTodo = text => ({
  type: Actions.ADD_TODO,
  payload: {
    id: todoID++,
    text,
  },
});

export const toggleTodo = id => ({
  type: Actions.TOGGLE_TODO,
  payload: {
    id,
  },
});

export const removeTodo = id => ({
  type: Actions.REMOVE_TODO,
  payload: {
    id,
  },
});

export const changeTodo = (id, text) => ({
  type: Actions.CHANGE_TODO,
  payload: {
    id,
    text,
  },
});

export const editTodo = id => ({
  type: Actions.EDIT_TODO,
  payload: {
    id,
  },
});
