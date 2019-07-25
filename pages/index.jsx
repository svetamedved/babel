import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';
import Onboarding from '../components/onboarding';

export default () => {
  return (
    <div>
      <Button color="danger">Danger!</Button>
      <Onboarding />
    </div>
  );
};
