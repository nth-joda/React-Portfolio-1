import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

import "./experience.css";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {/* Skill: HTML */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* Skill: CSS */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* Skill: Javascript */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* Skill: Java */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* Skill: Tailwind */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* Skill: React */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* ================= END OF FRONT-END ================= */}
        <div className="experience__backend">
          {/* TODO: The same as front-end */}
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              {/* Skill: Python */}
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              {/* Skill: CSS */}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article> */}

              {/* Skill: Javascript */}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article> */}

              {/* Skill: Bootstrap */}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article> */}

              {/* Skill: Tailwind */}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article> */}

              {/* Skill: React */}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icons" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
