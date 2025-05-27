import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import "./headerSocials.css";
const HeaderSocials = () => {
  let icon_socials_size = 20;
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/hau-nguyen-trung-8a776a211"
        target="_blank"
      >
        <FaLinkedin size={icon_socials_size} />
      </a>
      <a href="https://github.com/nth-joda" target="_blank">
        <FaGithubSquare size={icon_socials_size} />
      </a>
    </div>
  );
};

export default React.memo(HeaderSocials);
