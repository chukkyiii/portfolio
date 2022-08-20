import * as React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const IndexPage = () => {
  let jargon = Math.random().toString(36).substring(2, 7).concat(" is obviously a word");

  // list of projects
  const projects = [
    {
      title: "Vendor",
      Info: "Project info coming soon",
      url: "https://github.com/vendororg/vendor",
      new_status: true,
    },
    {
      title: "Reacton",
      Info: "Reaction Benchmarking",
      url: "https://github.com/chukkyiii/reacton",
      new_status: false,
    },
  ];

  const socials = [
    {
      name: "@chukky_iii",
      url: "https://twitter.com/chukky_iii",
      svg: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 \n" +
            "5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 \n" +
            "4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 \n" +
            "0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 \n" +
            "2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
    },
    {
      name: "@chukkyiii",
      url: "https://github.com/chukkyiii",
      svg: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 \n" +
            "11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 \n" +
            "1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 \n" +
            "1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 \n" +
            "2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 \n" +
            "1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" 
    },
    {
      name: "@JesseDoka",
      url: "https://www.linkedin.com/in/jesse-doka-697519212",
      svg: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 \n" +
            "19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 \n" +
            "1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.965v6.278z",
    },
    {
      name: "@jesse.doka",
      url: "https://www.instagram.com/jesse.doka/",
      svg: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 \n" +
            "4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 \n" +
            "0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 \n" +
            "1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 \n" + 
            "6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 \n" +
            "6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 \n" +
            "4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
  ];
  
  return (
    <div>
      <Navbar pageTitle={jargon} />
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold pl-3 pb-3">JESSE. DOKA.</h1>
        <p className="pl-3 pb-3">
          I'm a student currently studying a bachelors degree at Newcastle
          University. I've always been interested in computers, and I've always
          loved the process of creating software, from planning to building it.
        </p>
        <h1 className="pl-3 pb-3 text-xl"> What I have been working on: </h1>
        {/* badge */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden mx-3 leading-normal rounded-lg mb-4"
            role="alert"
          >
            <p className="px-4 py-3 font-bold text-slate-100 bg-slate-800">
              {project.new_status ? (
                <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  NEW
                </span>
              ) : null}
              <a href={project.url} className="text-white">
                {project.title}
              </a>
            </p>
            <p className="px-4 py-3 text-slate-700 bg-slate-100">
              {project.Info}
            </p>
          </div>
        ))}
      </div>
      {/* socials */}
      <div className="mx-auto max-w-xl">
        <h1 className="pl-3 pt-3 text-xl"> I Love: </h1>
        <div className="mx-12">
          <p>
            Art & photography, Listening to Music and playing the bass guitar,
            and Gaming (of course).
          </p>
        </div>
        <h1 className="pl-3 py-3 text-xl"> Socials: </h1>
        <div className="mx-12">
          {socials.map((social, index) => (
            <button key={index} className="mx-auto mb-9 max-w-2xl mr-3">
              <a href={social.url} className="text-white flex">
                <svg
                  className="w-6 h-6 mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.svg} />
                </svg>
                {/* line */}
                <span className="ml-2">{social.name}</span>
              </a>
            </button>
          ))}
        </div>
      </div>
      {/* <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-neutral-800"> */}
      <Footer />
      {/* </footer> */}
    </div>
  );
}

export default IndexPage;

