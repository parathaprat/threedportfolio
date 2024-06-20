import React from "react";

import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have an opportunity at your company? <br className="sm:block hidden" />
        Let's build together!
      </p>
      <Link to="/contact" className="btn">
        Contact Me
      </Link>
    </section>
  );
};

export default CTA;
