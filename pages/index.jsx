import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Airtable from '../api/airtable';
import { Button, Container, Row, Col } from 'reactstrap';
import Products from '../components/products';
import Example from '../components/popover';
import Link from 'next/link';

export default () => {
  const [products, setProducts] = useState(null);
  const airtable = new Airtable('Products');
  useEffect(() => {
    airtable.listData(setProducts);
  });

  return (
      !products ? (
        <div>Loading...</div>) : (
          <Container Fluid>
          products.map(item => (
            <Col sm='3'> key={item.get('Name')}>
              <Button>
              <Link href={{ pathname: '/editor', query: { projectId: item.id } }}>
                <a>{item.get('Name')}</a>
              </Link>
              </Button>
            </Col>
          </Container>
        )
      )
    )
  }

  );
}


    /*<Container fluid>
      <Row>
      <Col sm="3">
        <Products/>

        <Example/>
      </Row>
    </Container>*/
//   );
// };
