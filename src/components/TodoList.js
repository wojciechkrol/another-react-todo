import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { ListGroup } from "react-bootstrap";

const TodoList = ({ todos, ...props }) => {
  return (
    <ListGroup>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <Todo
            key={index}
            {...todo}
            onTodoClick={() => props.onTodoClick(todo.id)}
            onTodoEdit={() => props.onTodoEdit(todo.id)}
            onTodoRemove={() => props.onTodoRemove(todo.id)}
          />
        ))
      ) : (
        <ListGroup.Item variant="primary">List is empty.</ListGroup.Item>
      )}
    </ListGroup>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  onTodoClick: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
};

export default TodoList;
