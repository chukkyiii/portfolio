import * as React from 'react';
import Navbar from '../components/navbar';

const IndexPage = () => {
  let jargon = Math.random().toString(36).substring(2, 7).concat("Is obviosly a Word");

  // list of projects
  const projects = [
    {
      title: "Vendor",
      Info: "Project info coming soon",
      url: "https://github.com/vendororg/vendor",
      new_status: false,
    },
  ];
  
  return (
    <div>
      <Navbar pageTitle={jargon} />
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold pl-3 pb-3">
          MY NAME IS JESSE.
        </h1>
        <p className="pl-3 pb-3">
          I'm a student currently studying at Newcastle
          University. I've always been interested in computers, 
          and I've always loved the process of creating software, from planning to building it.
        </p>
        <h1 className="pl-3 pb-3 text-xl"> Worked on and with: </h1>
        {/* badge */}
        {projects.map((project) => (
          <div class="overflow-hidden mx-3 leading-normal rounded-lg mb-4" role="alert">
            <p className="px-4 py-3 font-bold text-slate-100 bg-slate-800">
              {
                project.new_status ? (
                  <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    New
                  </span>
                ) : null 
              }
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
    </div>
  );
}

export default IndexPage;

