import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import Products from '../components/products';
import Navigation from '../components/navbar';

export default () => {
  const rowStyle = {
    margin: '0 0 25px'
  };

  const h1Style = {
    margin: '0 0 25px'
  };

  return (
    <Container fluid>
      <Row style={rowStyle}>
        <Col>
          <Navigation title="Babelfish" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 align="center" style={h1Style}>Choose your product</h1>
        </Col>
      </Row>
      <Row>
        <Products/>
      </Row>
    </Container>
  );
};
