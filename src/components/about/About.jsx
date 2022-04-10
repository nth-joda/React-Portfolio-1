import React from "react";
import "./about.css";

import { FaAward, FaUserFriends } from "react-icons/fa";
import { AiTwotoneFolderOpen } from "react-icons/ai";

import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div class="about__me">
          <div class="about__me-img">
            <img src={ME} alt="my avt" />
          </div>
        </div>

        <div class="about__content">
          <div class="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUserFriends className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <AiTwotoneFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            facere temporibus quia, commodi ea dolores in assumenda rem ipsum
            provident mollitia! Quidem optio asperiores recusandae repudiandae
            quisquam, fugit debitis odio!
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
