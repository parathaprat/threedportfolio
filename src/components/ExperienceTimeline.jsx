import React from "react";
import { experiences } from "../constants";

const ExperienceRow = ({ exp }) => {
  const bullets = exp.points.filter(
    (p) => !/^technologies used/i.test(p.trim())
  );

  return (
    <div className="relative flex gap-4 sm:gap-6 items-start">
      {/* logo node sitting on the rail */}
      <span
        className="relative z-10 shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center overflow-hidden ring-4 ring-[#080a16]"
        style={{ background: exp.iconBg }}
      >
        <img
          src={exp.icon}
          alt={exp.company_name}
          className="w-[58%] h-[58%] object-contain"
        />
      </span>

      {/* detail card */}
      <div className="glass-card flex-1 min-w-0 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
          <div className="min-w-0">
            <h4 className="text-white font-satoshi font-bold text-base sm:text-lg leading-snug">
              {exp.title}
            </h4>
            <p className="blue-gradient_text font-satoshi font-semibold text-sm">
              {exp.company_name}
            </p>
          </div>
          <div className="sm:text-right shrink-0">
            <p className="text-slate-200 text-xs sm:text-sm font-satoshi font-medium whitespace-nowrap">
              {exp.date}
            </p>
            {exp.location && (
              <p className="text-slate-500 text-xs font-satoshi mt-0.5">
                {exp.location}
              </p>
            )}
          </div>
        </div>

        <ul className="mt-3 space-y-1.5 list-disc ml-4 font-satoshi">
          {bullets.map((point, i) => (
            <li
              key={i}
              className="text-slate-300/90 text-sm leading-relaxed pl-1"
            >
              {point}
            </li>
          ))}
        </ul>

        {exp.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {exp.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {/* vertical rail running through the logo nodes */}
      <div className="pointer-events-none absolute top-8 bottom-8 left-7 sm:left-8 w-0.5 bg-gradient-to-b from-violet-400/50 via-white/12 to-transparent" />

      <div className="flex flex-col gap-5">
        {experiences.map((exp) => (
          <ExperienceRow key={`${exp.company_name}-${exp.date}`} exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
