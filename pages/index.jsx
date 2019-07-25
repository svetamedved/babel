import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';
import Onboarding from '../components/onboarding';
import Layout from '../components/layout';

export default (props) => {
  return (
    <div>
    <Onboarding/>
    <Layout/>
    </div>
  );
}
