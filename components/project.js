import React, {useState, useEffect} from 'react';
import { Button } from 'reactstrap';
import Link from 'next/link';
import Airtable from '../api/airtable'
import { Container, Row, Col } from 'reactstrap';


function Project(props) {
  const [product, setProduct] = useState(null);
  const airtable = new Airtable('Products');

  useEffect(() => {
    airtable.findData(props.projectId, setProduct)
  });

  return (
    <div>
    {!product ? (<p>Loading...</p>) : (
      <p>My Project Is: {product.get('Name')}</p>
    )}
    </div>
  );
}

export default Project;
