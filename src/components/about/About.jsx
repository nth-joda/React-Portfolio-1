import React from "react";
import "./about.css";

import { FaAward, FaUserFriends } from "react-icons/fa";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { IoMdSchool } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

import ME from "../../assets/portfo11.jpg";

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
              <small>6+ Months Internship</small>
            </article>

            <article className="about__card">
              <IoMdSchool className="about__icon" />
              <h5>Education</h5>
              <small>3.82/4.00 GPA</small>
            </article>

            <article className="about__card">
              <CgMenuGridO className="about__icon" />
              <h5>Fields</h5>
              <small>Web, AI/ML, Mobile/Desktop</small>
            </article>
          </div>
          <p>
            I am a student at University of Science in Ho Chi Minh city,
            majoring in Computer Science, and having experience of working with
            web development and AI/ML applications. As an under-graduated
            student, I am always open to study and work on new technologies and
            environments. I am aiming to be a full-stack developer on
            graduation.
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
