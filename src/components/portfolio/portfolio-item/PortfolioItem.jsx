import React from "react";

import "./portfolioItem.css";
const PortfolioItem = (props) => {
  return (
    <div>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={props.data.image} alt="" />
        </div>
        <h3>{props.data.title}</h3>
        <div className="portfolio__item-cta">
          <a
            href={props.data.github}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Github
          </a>
          <a
            href={props.data.demo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </div>
      </article>
    </div>
  );
};

export default PortfolioItem;
