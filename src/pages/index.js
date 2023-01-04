import * as React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const IndexPage = () => {
  let jargon = Math.random().toString(36).substring(2, 7).concat(" is obviously a word");
  
  return (
    <div>
      <Navbar pageTitle={jargon} />
      <div className="mx-auto max-w-4xl align-content">
        <h1 className="sm:text-7xl text-3xl font-bold pl-3 pb-3 text-center">JESSE. DOKA.</h1>
        <p className="pl-3 pb-3 sm:text-5xl text-center">
          I'm a student currently studying a bachelors degree at <a className="sm:text-5xl" href="https://ncl.ac.uk"> Newcastle University</a>. I've always been interested in computers, and I've always loved the process of creating software, from planning to building it.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default IndexPage;