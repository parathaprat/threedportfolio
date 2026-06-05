import React from "react";

import { skills, skillCategories, education, resumeUrl } from "../constants";
import CTA from "../components/CTA";
import ExperienceTimeline from "../components/ExperienceTimeline";

const stats = [
  { value: "8+", label: "Roles & Internships" },
  { value: "1M+", label: "Users Reached" },
  { value: "2", label: "Publications" },
  { value: "10+", label: "Projects Shipped" },
];

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="h-5 w-1.5 rounded-full bg-gradient-to-b from-[#818cf8] to-[#22d3ee]" />
    <h3 className="subhead-text">{children}</h3>
  </div>
);

const SkillPill = ({ skill }) => (
  <span className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-violet-400/40 transition">
    <span className="w-6 h-6 rounded-md bg-white/90 flex items-center justify-center shrink-0">
      <img src={skill.imageUrl} alt={skill.name} className="w-4 h-4 object-contain" />
    </span>
    <span className="text-sm text-slate-200 font-satoshi">{skill.name}</span>
  </span>
);

const About = () => {
  return (
    <section className="max-container">
      {/* ---------------------------- Hero ---------------------------- */}
      <div className="fade-up">
        <span className="chip mb-5 !inline-flex items-center gap-2 max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)] shrink-0" />
          Open to SWE · MTS · AI · Backend · Mobile · Full-Stack roles
        </span>
        <h1 className="head-text mt-2">
          Hi, I'm{" "}
          <span className="blue-gradient_text font-bold drop-shadow">
            Prathamesh
          </span>{" "}
          👋
        </h1>

        <p className="mt-5 max-w-5xl text-slate-300 font-satoshi leading-relaxed">
          I'm a Master of Science in Computer Engineering student at{" "}
          <span className="text-white font-semibold">Virginia Tech</span> and a
          Computer Science &amp; Engineering graduate from{" "}
          <span className="text-white font-semibold">NIT Karnataka</span>,
          Surathkal. I build across the stack, from features used by{" "}
          <span className="text-white font-semibold">1M+ people</span> at Amazon,
          to cloud-to-on-prem migrations serving{" "}
          <span className="text-white font-semibold">8,000+ students</span>, to
          AI-driven tools and decentralized identity systems. I love turning
          complex problems into simple, elegant, well-engineered products.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn">
            View Resume
          </a>
          <a
            href="https://github.com/parathaprat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/prathamesh-dongritot-8b7575211/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* --------------------------- Stats ---------------------------- */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 fade-up">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-5 text-center">
            <p className="text-3xl font-extrabold accent-gradient font-satoshi">
              {s.value}
            </p>
            <p className="mt-1 text-xs text-slate-400 font-satoshi">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ------------------------- Education -------------------------- */}
      <div className="pt-16">
        <SectionLabel>
          <span className="blue-gradient_text">Education</span>
        </SectionLabel>
        <div className="grid md:grid-cols-2 gap-5">
          {education.map((edu) => (
            <div key={edu.school} className="glass-card p-6 flex items-start gap-4">
              <div
                className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden"
                style={{ background: edu.iconBg }}
              >
                <img
                  src={edu.icon}
                  alt={edu.school}
                  className="w-[78%] h-[78%] object-contain"
                />
              </div>
              <div>
                <h4 className="text-white font-satoshi font-bold text-lg leading-snug">
                  {edu.school}
                </h4>
                <p className="text-slate-300 text-sm mt-1 font-satoshi">
                  {edu.degree}
                </p>
                <p className="text-slate-500 text-xs mt-2 font-satoshi">
                  {edu.location} · {edu.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------ Experience -------------------------- */}
      <div className="pt-16">
        <SectionLabel>
          Work <span className="blue-gradient_text">Experience</span>
        </SectionLabel>
        <p className="-mt-4 mb-8 max-w-2xl text-slate-400 font-satoshi text-sm">
          From research labs to Big Tech, here's the journey and the impact
          along the way.
        </p>

        <ExperienceTimeline />
      </div>

      {/* --------------------------- Skills --------------------------- */}
      <div className="pt-16">
        <SectionLabel>
          Tech <span className="blue-gradient_text">Stack</span>
        </SectionLabel>

        <div className="glass rounded-2xl divide-y divide-white/5">
          {skillCategories.map((category) => (
            <div
              key={category}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 p-5 sm:px-7"
            >
              <h4 className="sm:w-40 shrink-0 text-slate-400 font-satoshi font-semibold text-sm pt-1.5">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {skills
                  .filter((skill) => skill.type === category)
                  .map((skill) => (
                    <SkillPill key={skill.name} skill={skill} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-white/10 mt-16" />

      <CTA />
    </section>
  );
};

export default About;
