import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Hau NT
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        {/* <li>
          <a href="#services">Services</a>
        </li> */}

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://fb.com/nthau.2k" target="_blank">
          <FaFacebookSquare />
        </a>
        <a
          href="https://linkedin.com/in/hau-nguyen-trung-8a776a211"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/nth-joda" target="_blank">
          <FaGithubSquare />
        </a>
        <a href="https://zalo.me/0328289727" target="_blank">
          <SiZalo />
        </a>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
