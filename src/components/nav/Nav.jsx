import React, { useState, useCallback } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineBadge } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { RiUserStarLine } from "react-icons/ri";

import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const handleSetActiveNav = useCallback((nav) => setActiveNav(nav), []);

  return (
    <nav>
      <a
        className={activeNav === "#" ? "active" : ""}
        onClick={() => handleSetActiveNav("#")}
        href="#"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => handleSetActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <MdOutlineBadge />
      </a>
      <a
        onClick={() => handleSetActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        href="#experience"
      >
        <RiUserStarLine />
      </a>
      {/* <a
        onClick={() => {
          setActiveNav("#services");
        }}
        className={activeNav === "#services" ? "active" : ""}
        href="#services"
      >
        <RiServiceLine />
      </a> */}
      <a
        onClick={() => handleSetActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        href="#contact"
      >
        <GiRotaryPhone />
      </a>
    </nav>
  );
};

export default Nav;
