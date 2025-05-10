import React from "react";
import "./about.css";

import { FaAward, FaUserFriends } from "react-icons/fa";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { IoMdSchool } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

import ME from "../../assets/cover_pic.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="my avt" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 years</small>
            </article>

            <article className="about__card">
              <IoMdSchool className="about__icon" />
              <h5>Education</h5>
              <small>3.82/4.00 GPA</small>
            </article>

            <article className="about__card">
              <CgMenuGridO className="about__icon" />
              <h5>Fields</h5>
              <small>Web, Game</small>
            </article>
          </div>
          <p>
            Experienced Backend Developer with over 3 years of expertise in
            designing and building scalable, high-performance systems. Proven
            strength in high-concurrency environments and a solid grasp of core
            computer science principles. Passionate about backend optimization,
            with a growing interest in frontend technologies and AI. Eager to
            leverage full-stack skills to craft innovative, user-focused
            solutions.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
