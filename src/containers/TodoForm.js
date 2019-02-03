import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { changeTodo } from "../store/todos/actions";

class TodoForm extends React.Component {
  state = {
    name: "",
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const { todo } = this.props;

    if (this.state.name) {
      if (todo !== null) {
        this.props.onChangeTodo(todo.id, this.state.name);
      } else {
        this.props.onAddTodo(this.state.name);
      }
    }

    this.setState({
      name: "",
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.todo !== this.props.todo && this.props.todo !== null) {
      this.setState({
        name: this.props.todo.text,
      });
    }
  }

  render() {
    const { onAddTodo, todo, onChangeTodo, ...rest } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <InputGroup {...rest}>
          <FormControl
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="Your task name..."
          />
          <InputGroup.Append>
            <Button type="submit">{todo !== null ? "Edit" : "Add"}</Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
    );
  }
}

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  todo: PropTypes.any,
};

const mapStateToProps = ({ todos }) => ({
  todo:
    todos.find(todo => {
      return todo.edit === true;
    }) || null,
});

const mapDispatchToProps = dispatch => ({
  onChangeTodo: (id, text) => dispatch(changeTodo(id, text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoForm);
