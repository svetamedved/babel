import React, { useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import Link from 'next/link';
import { ceil } from 'mathjs'
import Airtable from '../api/airtable';


function Products() {
  const [products, setProducts] = useState(null);
  const airtable = new Airtable('Products');

  useEffect(() => {
    airtable.listData(setProducts);
  });

  return (
    !products ? (<Col sm={12}>Loading...</Col>) : (
      products.map(item => (
        <Col sm={ceil(products.length / 12)}>
          <Link href={{ pathname: '/editor', query: { projectId: item.id } }}>
            <a>{item.get('Name')}</a>
          </Link>
        </Col>
      ))
    )
  );
}

export default Products;
