import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import "./headerSocials.css";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="linkedin.com/in/hau-nguyen-trung-8a776a211" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/nth-joda" target="_blank">
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
