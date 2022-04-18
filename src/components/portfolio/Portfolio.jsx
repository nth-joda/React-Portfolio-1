import React from "react";

import PORTFO1 from "../../assets/admin_dashboard_preview.png";
import PORTFO2 from "../../assets/nghe_ngong_preview.png";
import PORTFO3 from "../../assets/famifilm_preview.png";
import PortfolioItem from "./portfolio-item/PortfolioItem";

import "./portfolio.css";

const data = [
  {
    id: 1,
    image: PORTFO1,
    title:
      "Admin dashboard with color themes - HTML, CSS, Javascript, react-apexcharts, boxicons, etc.",
    github: "https://github.com/nth-joda/admin-dashboard",
    demo: "https://nth-joda.github.io/admin-dashboard/",
  },

  {
    id: 2,
    image: PORTFO2,
    title:
      "Nghe Ngong - A search engine for Vietnamese news, having a similar to google looking",
    github: "https://github.com/ththanh18/cs419-project-fe",
    demo: "https://nghe-ngong.vercel.app/",
  },

  {
    id: 3,
    image: PORTFO3,
    title:
      "FamiFilm - Film management for family members. Default account: {admin@gmail.com} - {admin123}",
    github: "https://github.com/nth-joda/fami-web",
    demo: "https://fami-web.vercel.app/",
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
