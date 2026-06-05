import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-4 inset-x-0 z-50 px-3 sm:px-6">
      <div className="nav-shell max-w-7xl mx-auto rounded-2xl px-5 sm:px-7 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2.5 group">
          <span className="w-9 h-9 rounded-xl logo flex items-center justify-center font-satoshi font-extrabold text-white text-sm shadow-glow transition-transform duration-300 group-hover:scale-105">
            PD
          </span>
          <span className="hidden sm:block font-satoshi font-bold text-white tracking-tight">
            Prathamesh{" "}
            <span className="font-medium text-slate-300">Dongritot</span>
          </span>
        </NavLink>

        <nav className="flex items-center sm:gap-7 gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `nav-link ${
                  isActive
                    ? "is-active text-white"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
