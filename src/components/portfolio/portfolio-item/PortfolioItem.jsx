import React from "react";

import "./portfolioItem.css";
const PortfolioItem = React.memo((props) => {
  return (
    <div>
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={props.data.image} alt="" />
        </div>
        {props.data.date && <h5 className="project_date">{props.data.date}</h5>}

        <h3>{props.data.title}</h3>
        {props.data.desc && <p className="port_desc">{props.data.desc}</p>}
        <div className="portfolio__item-cta">
          {props.data.github && (
            <a
              href={props.data.github}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
          )}
          {props.data.demo && (
            <a
              href={props.data.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          )}
        </div>
      </article>
    </div>
  );
});

export default PortfolioItem;
