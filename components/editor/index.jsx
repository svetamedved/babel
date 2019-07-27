import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import Airtable from '../../api/airtable';
import Tree from './tree'
import Megadraft from './megadraft'

export default (props) => {
  const h1Style = {
    margin: '0 0 25px'
  };

  return (
    <Container fluid>
      <Row>
        <Col>
        {!props.product ? (<p>Loading...</p>) : (
          <h1 align="center" style={h1Style}>New {props.product.get('Name')}</h1>
        )}
        </Col>
      </Row>
      <Row>
        <Col sm="4">
          <Tree />
        </Col>
        <Col sm="8">
          <Megadraft />
        </Col>
      </Row>
    </Container>
  );
};
