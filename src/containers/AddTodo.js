import { connect } from "react-redux";
import TodoForm from "../containers/TodoForm";
import { addTodo } from "../store/todos/actions";

const mapDispatchToProps = dispatch => ({
  onAddTodo: text => dispatch(addTodo(text)),
});

export default connect(
  null,
  mapDispatchToProps,
)(TodoForm);
