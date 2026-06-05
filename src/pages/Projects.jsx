import React from "react";

import { projects, publications } from "../constants";
import CTA from "../components/CTA";

const ArrowUpRight = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const ProjectCard = ({ project }) => (
  <div className="glass-card p-6 flex flex-col h-full">
    <div className="flex items-start justify-between">
      <div className="block-container w-12 h-12">
        <div className={`btn-back rounded-xl ${project.theme}`} />
        <div className="btn-front rounded-xl flex justify-center items-center">
          <img
            src={project.iconUrl}
            alt={project.name}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
      <span className="text-xs text-slate-500 font-satoshi pt-1">
        {project.date}
      </span>
    </div>

    <h4 className="mt-5 text-xl font-satoshi font-bold text-white">
      {project.name}
    </h4>
    <p className="text-sm accent-gradient font-satoshi font-semibold">
      {project.tagline}
    </p>

    <p className="mt-3 text-sm text-slate-400 leading-relaxed flex-1">
      {project.description}
    </p>

    <div className="mt-4 flex flex-wrap gap-2">
      {project.tags.map((t) => (
        <span key={t} className="chip">
          {t}
        </span>
      ))}
    </div>

    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-1.5 text-sm font-satoshi font-semibold text-blue-300 hover:text-white transition self-start"
    >
      View project
      <ArrowUpRight />
    </a>
  </div>
);

const PublicationCard = ({ pub }) => (
  <div className="glass-card p-6 flex flex-col h-full">
    <div className="flex items-center gap-3">
      <span className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] shadow-glow">
        📄
      </span>
      <span className="text-xs text-slate-500 font-satoshi">{pub.date}</span>
    </div>
    <h4 className="mt-4 text-base font-satoshi font-bold text-white leading-snug">
      {pub.title}
    </h4>
    <p className="mt-2 text-sm text-slate-400 font-satoshi flex-1">{pub.venue}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {pub.tags.map((t) => (
        <span key={t} className="chip">
          {t}
        </span>
      ))}
    </div>
  </div>
);

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="h-5 w-1.5 rounded-full bg-gradient-to-b from-[#818cf8] to-[#22d3ee]" />
    <h3 className="subhead-text">{children}</h3>
  </div>
);

const Projects = () => {
  return (
    <section className="max-container">
      {/* ---------------------------- Hero ---------------------------- */}
      <div className="fade-up">
        <span className="chip mb-5">Selected Work</span>
        <h1 className="head-text mt-2">
          Things I've{" "}
          <span className="blue-gradient_text font-bold drop-shadow">Built</span>
        </h1>
        <p className="mt-5 max-w-5xl text-slate-300 font-satoshi leading-relaxed">
          A curated collection spanning AI pipelines, browser extensions,
          full-stack web apps, decentralized systems, and games. Each one takes
          a real problem and turns it into something simple and well-engineered.
        </p>
      </div>

      {/* -------------------------- Projects -------------------------- */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {/* ------------------------ Publications ------------------------ */}
      <div className="mt-16">
        <SectionLabel>
          <span className="blue-gradient_text">Publications</span>
        </SectionLabel>
        <p className="-mt-4 mb-8 max-w-2xl text-slate-400 font-satoshi text-sm">
          Peer-reviewed research at the intersection of blockchain systems and
          optimization.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {publications.map((pub) => (
            <PublicationCard key={pub.title} pub={pub} />
          ))}
        </div>
      </div>

      <hr className="border-white/10 mt-12" />

      <CTA />
    </section>
  );
};

export default Projects;
