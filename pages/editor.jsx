import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import { Button, Container, Row, Col } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import Editor from '../components/editor';
import Navigation from '../components/navbar';
import Popover from '../components/popover';
import Airtable from '../api/airtable';

export default (props) => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!product && productId) {
      const airtable = new Airtable('Products');
      airtable.findData(productId, setProduct);
    }
  });

  const rowStyle = {
    margin: '0 0 25px'
  };

  return (
    <Container fluid>
      <Row style={rowStyle}>
        <Col>
          <Navigation title="Babelfish" />
        </Col>
      </Row>
      {!product ?
        ("Loading...") :
        (
          <Row>
            <Editor product={product} />
            <Popover modal={true} product={product} />
          </Row>
        )}
    </Container>
  );
};
