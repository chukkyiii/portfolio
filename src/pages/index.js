import * as React from 'react';
import Navbar from '../components/navbar';

const IndexPage = () => {
  let jargon = Math.random().toString(36).substring(2, 7).concat("Is obviosly a Word");
  return (
    <div>
      <Navbar pageTitle={jargon}/>
    </div>
  );
}

export default IndexPage;