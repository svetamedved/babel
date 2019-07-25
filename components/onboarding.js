import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Link from 'next/link';
import Airtable from '../api/airtable'
import { Container, Row, Col } from 'reactstrap';

 class Example extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
      </Container>
    );
  }
}


function Onboarding() {
  const [products, setProducts] = useState(null);
  const airtable = new Airtable('Products');

  useEffect(() => {
    airtable.listData(setProducts)
  });

  return (
    <ul>
      {!products ? (
        <div>Loading...</div>) : (
        products.map(item => (
          <li key={item.get('Name')}>
            <Link href={{ pathname: '/editor', query: { projectId: item.id } }}>
              <a>{item.get('Name')}</a>
            </Link>
          </li>
        ))) }
    </ul>
  );
}

export default Onboarding;
