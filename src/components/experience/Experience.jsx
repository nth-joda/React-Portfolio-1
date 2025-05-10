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
          <h3>Backend Development</h3>
          <div className="experience__content">
            {/* Skill: Java */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* Skill: Python */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* Skill: RabbitMQ */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>ElasticSearch</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* Skill: MySQL */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* Skill: Clickhouse */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Clickhouse</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* Skill: Clickhouse */}
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Clickhouse</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* ================= END OF BACK-END ================= */}
        <div className="experience__dataengineer">
          <h3>Data Engineer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Superset</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>MageAI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Airflow</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Design data pipelines</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>PowerBI</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>

        {/* ================= END OF DataEngineer ================= */}
        <div className="experience__others">
          <h3>Others</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>ELK stack</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
