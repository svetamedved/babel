import { useRouter } from 'next/router';
import React from 'react';
import Project from '../components/project';

export default (props) => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div>
      <Project projectId={projectId} />
      <a href="/">Back</a>
    </div>
  );
};
