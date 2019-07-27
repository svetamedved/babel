import React, { useEffect, useState } from 'react';
import { Button, Row, Col } from 'reactstrap';
import Link from 'next/link';
import Airtable from '../api/airtable';


const Products = () => {
  const [products, setProducts] = useState(null);
  const airtable = new Airtable('Products');

  useEffect(() => {
    if (!products)
    {
      airtable.listData(setProducts);
    }
  });

  const routeChange = (roductId) => {
    window.location = '/editor?productId=' + roductId
  };

  const buttonStyle = {
    width: '100%',
    height: '100px',
    margin: '0 0 25px'
  };


  return (
    !products ? (
      <Col>Loading...</Col>) : (
      products.map(item => (
        <Col sm="3" key={item.get('Name')}>
          <Button
            style={buttonStyle}
            outline
            color="secondary"
            onClick={() => routeChange(item.id)}
          >
            {item.get('Name')}
          </Button>
        </Col>
      )))
  );
};

export default Products;
