import React from "react";
import CV from "../../../assets/NguyenTrungHau_SoftwareEngineer.pdf";

import "./cta.css";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" target="_blank" rel="noopener noreferrer">
        View CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
