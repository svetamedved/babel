import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'react';
import App, { Container } from 'next/app';
import { Button } from 'reactstrap';
import Link from 'next/link';
import Airtable from '../api/airtable'
import Project from '../components/project'

export default (props) => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div>
    <Project projectId={projectId}/>
    <a href="/">Back</a>
    </div>
  );
}
