import React, { useEffect, useState } from 'react';
import Airtable from '../api/airtable';

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
