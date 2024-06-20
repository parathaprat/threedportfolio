// import React from "react";

// import { projects } from "../constants";
// import { Link } from "react-router-dom";
// import { arrow } from "../assets/icons";

// import CTA from "../components/CTA";

// const Projects = () => {
//   return (
//     <section className="max-container">
//       <h1 className="head-text">
//         My{" "}
//         <span className="blue-gradient_text font-semibold drop-shadow">
//           Projects
//         </span>
//       </h1>

//       <div className="mt-5 flex flex-col gap-3 text-slate-500">
//         <p className="font-satoshi font-semibold">
//           As an avid computer enthusiast, I have delved into various domains of
//           computer science during my formative years, actively learning through
//           the process of building. Explore my diverse range of projects,
//           showcasing innovative solutions and hands-on learning.
//         </p>
//       </div>

//       <div className="flex flex-wrap my-20 gap-16">
//         {projects.map((project) => (
//           <div className="lg:w-[400px] w-full" key={project.name}>
//             <div className="block-container w-12 h-12">
//               <div className={`btn-back rounded-xl ${project.theme}`} />
//               <div className="btn-front rounded-xl flex justify-center items-center">
//                 <img
//                   src={project.iconUrl}
//                   alt="Project Icon"
//                   className="w-1/2 h-1/2 object-contain"
//                 />
//               </div>
//             </div>
//             <div className="mt-5 flex flex-col">
//               <h4 className="text-2xl font-satoshi font-semibold"> </h4>
//               <p className="mt-2 text-slate-500 ">{project.description}</p>
//               <div className="mt-5 flex items-center gap-2 font-satoshi">
//                 <Link
//                   to={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="font-semibold text-blue-600"
//                 >
//                   Link
//                 </Link>
//                 <img
//                   src={arrow}
//                   alt="arrow"
//                   className="w-4 h-4 object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <hr className="border-slate-200" />
//       <CTA />
//     </section>
//   );
// };

// export default Projects;

import { Link } from "react-router-dom";

import CTA from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed font-satoshi font-semibold">
        As an avid computer enthusiast, I have delved into various domains of
        computer science during my formative years, actively learning through
        the process of building. Explore my diverse range of projects,
        showcasing innovative solutions and hands-on learning.
      </p>

      <div className="flex flex-wrap my-20 gap-16 font-satoshi font-normal">
        {projects.map((project) => (
          <div
            className="lg:w-[400px] w-full text-slate-800 font-satoshi"
            key={project.name}
          >
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-satoshi font-bold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500 font-satoshi font-normal">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-satoshi">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
