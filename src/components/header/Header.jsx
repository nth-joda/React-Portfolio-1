import React from "react";
import CTA from "./cta/CTA";
import "./header.css";
import ME from "../../assets/cv_avt.png";
import HeaderSocials from "./headerSocials/HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Hau NT</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <img src={ME} alt="avatar" />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
