import { connect } from "react-redux";
import { toggleTodo, editTodo, removeTodo } from "../services/todos/actions";
import { Filters } from "../services/filter/actions";
import TodoList from "../components/TodoList";

const getTodoList = (todos, filter) => {
  switch (filter) {
    case Filters.SHOW_ALL:
      return todos;
    case Filters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed === true);
    case Filters.SHOW_ACTIVE:
      return todos.filter(todo => todo.completed === false);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  todos: getTodoList(state.todos, state.filter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
  onTodoEdit: id => dispatch(editTodo(id)),
  onTodoRemove: id => dispatch(removeTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
