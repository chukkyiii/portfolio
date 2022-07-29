import * as React from 'react';
import Navbar from '../components/navbar';

const IndexPage = () => {
  let jargon = Math.random().toString(36).substring(2, 7).concat("Is obviosly a Word");
  return (
    <div>
      <Navbar pageTitle={jargon} />
      <div className="mx-auto max-w-xl">
        <h1 className="inline-block bg-sky-800 text-sky-300 text-2xl px-2 mb-5 rounded-full uppercase font-semibold tracking-wide">
          About Me
        </h1>
        <p className="pl-3">
          Jesse is a Computer Science student at Newcastle University with a
          passion for building digital services. He loves the process of
          creating software, from planning, to development, to deployment. He is
          currently working on a project called{" "}
          <span className="text-amber-500">Vendor</span>, and has worked on
          projects like Reacton.
        </p>
      </div>
    </div>
  );
}

export default IndexPage;