import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have an opportunity or an idea at your company?{" "}
        <br className="sm:block hidden" />
        Let's build something great together!
      </p>
      <Link to="/contact" className="btn">
        Contact Me
      </Link>
    </section>
  );
};

export default CTA;
