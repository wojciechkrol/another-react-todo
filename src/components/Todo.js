import React from "react";
import PropTypes from "prop-types";
import { ListGroup, FormCheck, Row, Col, Button } from "react-bootstrap";

const Todo = ({ onTodoClick, onTodoEdit, onTodoRemove, completed, text }) => {
  return (
    <ListGroup.Item variant={completed ? "success" : ""}>
      <Row>
        <Col className="col-auto mr-auto">
          <FormCheck
            type="checkbox"
            checked={completed}
            onChange={onTodoClick}
            label={text}
          />
        </Col>
        <Col className="col-auto">
          <Button variant="link" className="py-0" onClick={onTodoEdit}>
            Edit
          </Button>

          <Button
            variant="link"
            className="py-0 text-danger"
            onClick={onTodoRemove}
          >
            Remove
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
