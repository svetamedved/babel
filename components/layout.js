import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Layout extends Component {
  constructor() {
    super();
  }
  render () {
    return (
      <Container fluid>
        <Row>
          <Col>
            Some text
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Layout;

