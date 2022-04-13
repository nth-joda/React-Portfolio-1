import React from "react";

import PORTFO1 from "../../assets/portfolio1.jpg";
import PORTFO2 from "../../assets/portfolio2.jpg";
import PORTFO3 from "../../assets/portfolio3.jpg";
import PORTFO4 from "../../assets/portfolio4.jpg";
import PORTFO5 from "../../assets/portfolio5.png";
import PORTFO6 from "../../assets/portfolio6.jpg";
import PortfolioItem from "./portfolio-item/PortfolioItem";

import "./portfolio.css";

const data = [
  {
    id: 1,
    image: PORTFO1,
    title: "Lorem, ipsum dolor. PORTFOLIO TITLE NAME 1",
    github: "https://github.com",
    demo: "https://github.com",
  },

  {
    id: 2,
    image: PORTFO2,
    title: "Ipsum dolor sit amet. PORTFOLIO TITLE NAME 2",
    github: "https://github.com",
    demo: "https://github.com",
  },

  {
    id: 3,
    image: PORTFO3,
    title: "sit amet consectetur adipisicing elit. PORTFOLIO TITLE NAME 3",
    github: "https://github.com",
    demo: "https://github.com",
  },

  {
    id: 4,
    image: PORTFO4,
    title: "Commodi velit assumenda voluptates. PORTFOLIO TITLE NAME 4",
    github: "https://github.com",
    demo: "https://github.com",
  },

  {
    id: 5,
    image: PORTFO5,
    title: "Consectetur adipisicing elit. PORTFOLIO TITLE NAME 5",
    github: "https://github.com",
    demo: "https://github.com",
  },

  {
    id: 6,
    image: PORTFO6,
    title: "Ipsum provident dolorem enim modi aliquam. PORTFOLIO TITLE NAME 6",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => (
          <PortfolioItem data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
