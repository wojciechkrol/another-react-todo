import "react-bootstrap";
import React, { Component } from "react";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import FilterList from "./containers/FilterList";
import { Container, Row, Col, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col style={{ marginTop: 20 }} md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Header as="h3" className="text-center">
                Another React Todo
              </Card.Header>
              <Card.Body>
                <AddTodo className="pb-3" />
                <Row>
                  <Col className="col-auto ml-auto mt-2 mb-2">
                    <FilterList variant="outline-secondary" size="sm" />
                  </Col>
                </Row>
                <VisibleTodoList />
              </Card.Body>
              <Card.Footer as="small" className="text-center">
                <a href="https://github.com/wojciechkrol">Wojciech Król</a> @
                2019 | <code>Made while learning React + Redux</code>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
