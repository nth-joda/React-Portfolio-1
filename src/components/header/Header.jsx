import React from "react";
import CTA from "./cta/CTA";
import "./header.css";
import ME from "../../assets/portfo1.jpg";
import HeaderSocials from "./headerSocials/HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Hau NT</h1>
        <div className="text-light textwritter">
          <div>
            <p>a Software Engineer</p>
          </div>
        </div>
        <CTA />
        <div className="header__social">
          <HeaderSocials />
        </div>
        <img src={ME} alt="avatar" className="me" />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
