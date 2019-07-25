import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';


class Layout extends Component {
  constructor() {
    super();
  }
  render () {
    return (
      <Container fluid>
        <Row>
          <Col sm="4">
            Some text
          </Col>
          <Col sm="4">
            Some text
          </Col>
          <Col sm="4">
            Some text
          </Col>
          <Col sm="4">
            Some text
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Layout;

