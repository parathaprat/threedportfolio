import React from "react";

import { resumeUrl } from "../constants";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ResumeIcon,
} from "./SocialIcons";

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

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 mt-6">
      <div className="footer">
        <div className="footer-container">
          <div>
            <p className="font-satoshi font-bold text-white text-lg">
              Prathamesh Dongritot
            </p>
            <p className="text-sm text-slate-400">
              MS Computer Engineering @ Virginia Tech · Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/[0.06] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2 text-xs text-slate-500">
          <p>© {year} Prathamesh Dongritot. All rights reserved.</p>
          <p>Built with React · Three.js · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
