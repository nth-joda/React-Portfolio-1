import React from "react";

import PORTFO1 from "../../assets/portfolio1.jpg";
import PORTFO2 from "../../assets/portfolio2.jpg";
import PORTFO3 from "../../assets/portfolio3.jpg";
import PORTFO4 from "../../assets/portfolio4.jpg";
import PORTFO5 from "../../assets/portfolio5.png";
import PORTFO6 from "../../assets/portfolio6.jpg";

import "./portfolio.css";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={PORTFO1} alt="" />
          </div>
          <h3>This is portfolio item title 1</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={PORTFO2} alt="" />
          </div>
          <h3>This is portfolio item title 2</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={PORTFO3} alt="" />
          </div>
          <h3>This is portfolio item title 3</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={PORTFO4} alt="" />
          </div>
          <h3>This is portfolio item title 4</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={PORTFO5} alt="" />
          </div>
          <h3>This is portfolio item title 5</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={PORTFO6} alt="" />
          </div>
          <h3>This is portfolio item title 6</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
