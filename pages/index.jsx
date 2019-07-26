import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row } from 'reactstrap';
import Products from '../components/products';

function App() {
  return (
    <Container>
      <Row>
        <Products />
      </Row>
    </Container>
  );
}

export default App;
