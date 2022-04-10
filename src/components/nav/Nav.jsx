import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineBadge } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { RiUserStarLine, RiServiceLine } from "react-icons/ri";

import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  // const switchActiveState = (activeState) => {
  //   setActiveState(activeState);
  // };

  return (
    <nav>
      <a
        className={activeNav === "#" ? "active" : ""}
        onClick={() => {
          setActiveNav("#");
        }}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <MdOutlineBadge />
      </a>
      <a
        onClick={() => {
          setActiveNav("#experience");
        }}
        className={activeNav === "#experience" ? "active" : ""}
        href="#experience"
      >
        <RiUserStarLine />
      </a>
      <a
        onClick={() => {
          setActiveNav("#services");
        }}
        className={activeNav === "#services" ? "active" : ""}
        href="#services"
      >
        <RiServiceLine />
      </a>
      <a
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
        href="#contact"
      >
        <GiRotaryPhone />
      </a>
    </nav>
  );
};

export default Nav;
