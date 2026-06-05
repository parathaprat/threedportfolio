import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";

import HeroOrb from "../models/HeroOrb";
import { resumeUrl } from "../constants";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ResumeIcon,
} from "../components/SocialIcons";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/parathaprat",
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prathamesh-dongritot-8b7575211/",
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:prathamesh6550@gmail.com",
    Icon: MailIcon,
    external: false,
  },
  {
    label: "Resume",
    href: resumeUrl,
    Icon: ResumeIcon,
    external: true,
  },
];

const Home = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Desktop: large orb anchored to the right of the viewport */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <Canvas
            className="!absolute inset-0"
            camera={{ position: [0, 0, 6], fov: 42, near: 0.1, far: 100 }}
            dpr={[1, 1.8]}
            gl={{ alpha: true, antialias: true }}
          >
            <Suspense fallback={null}>
              <HeroOrb position={[2.0, 0.1, 0]} scale={1.55} />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* legibility scrim */}
      <div
        className={`absolute inset-0 ${
          isMobile
            ? "bg-gradient-to-b from-[#05060f] via-[#05060f]/60 to-transparent"
            : "bg-gradient-to-r from-[#05060f] via-[#05060f]/70 to-transparent"
        }`}
      />

      {/* hero copy */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 min-h-screen flex flex-col justify-start md:justify-center pt-24 md:pt-0 pb-12 md:pb-0">
        <div className="max-w-2xl">
          <span className="chip mb-5 sm:mb-6 fade-up !inline-flex items-center gap-2 max-w-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)] shrink-0" />
            Available for SWE / MTS / AI / Backend / Mobile / Full-Stack roles
          </span>

          <h1
            className="fade-up text-[1.7rem] leading-[1.12] sm:text-7xl sm:leading-[1.05] font-black font-satoshi tracking-tight text-white"
            style={{ animationDelay: "0.05s" }}
          >
            Prathamesh
            <br />
            <span className="shimmer-text">Dongritot</span>
          </h1>

          <p
            className="fade-up mt-4 sm:mt-6 text-sm sm:text-xl text-slate-200 font-satoshi font-medium"
            style={{ animationDelay: "0.12s" }}
          >
            Software Engineer · MS Computer Engineering @ Virginia Tech ·
            ex-Amazon
          </p>

          <p
            className="fade-up mt-3 sm:mt-4 max-w-xl text-[13px] sm:text-base text-slate-400 font-satoshi leading-relaxed"
            style={{ animationDelay: "0.18s" }}
          >
            I design and ship performant products across web, mobile, AI, and
            cloud, from features used by a million people to large-scale systems
            serving thousands of students and admin staff.
          </p>

          <div
            className="fade-up mt-6 sm:mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "0.24s" }}
          >
            <Link to="/projects" className="btn">
              View Projects
            </Link>
            <Link to="/about" className="btn-ghost">
              About Me
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get in Touch
            </Link>
          </div>

          <div
            className="fade-up mt-6 sm:mt-9 flex items-center gap-2"
            style={{ animationDelay: "0.3s" }}
          >
            {socials.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="w-11 h-11 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/[0.06] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon className="w-[22px] h-[22px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile: contained orb accent below the text (fully visible) */}
        {isMobile && (
          <div className="mt-8 h-[240px] w-full shrink-0">
            <Canvas
              camera={{ position: [0, 0, 6], fov: 42, near: 0.1, far: 100 }}
              dpr={[1, 2]}
              gl={{ alpha: true, antialias: true }}
            >
              <Suspense fallback={null}>
                <HeroOrb
                  position={[0, 0, 0]}
                  scale={0.92}
                  sparkleScale={4}
                  sparkleCount={28}
                />
              </Suspense>
            </Canvas>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
