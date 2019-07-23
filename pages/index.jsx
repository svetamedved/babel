import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';

export default (props) => {
  return (
    <div>
    <Button color="danger">Danger!</Button>
    </div>
  );
}

const PreferredExample = (props) => {
  return (
    <p>
      This is a <a href="#" id="TooltipExample">tooltip</a> example.
      <Tooltip target="TooltipExample">
        <TooltipContent/>
      </Tooltip>
    </p>
  );
}
