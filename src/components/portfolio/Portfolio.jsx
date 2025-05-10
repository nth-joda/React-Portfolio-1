import React from "react";

import PORTFO1 from "../../assets/admin_dashboard_preview.png";
import PORTFO2 from "../../assets/nghe_ngong_preview.png";
import PORTFO3 from "../../assets/famifilm_preview.png";
import PortfolioItem from "./portfolio-item/PortfolioItem";
import PORTO10 from "../../assets/research10.webp";
import PORTO11 from "../../assets/research11.webp";

import "./portfolio.css";

const data = [
  {
    id: 10,
    image: PORTO10,
    title: "[Research] CNN model recognizing handwriting digits and letters",
    desc: "Develop an image classification system based on CNN, achieving 98% accuracy on a custom dataset. Deploy the model using Flask for integration with a web application.",
    date: "Nov 2024",
  },
  {
    id: 11,
    image: PORTO11,
    title: "[Research] CNN model detecting and recognizing traffic sign",
    desc: "Built a convolutional neural network (CNN) model to detect and recognize traffic signs from images. Utilized a custom or publicly available dataset and enhanced it using Ke...",
    date: "Nov 2024",
  },
  {
    id: 1,
    image: PORTFO1,
    title: "[School] Admin dashboard with color themes",
    desc: "HTML, CSS, Javascript, react-apexcharts, boxicons, etc.",
    github: "https://github.com/nth-joda/admin-dashboard",
    demo: "https://nth-joda.github.io/admin-dashboard/",
    date: "Oct 2022",
  },

  {
    id: 2,
    image: PORTFO2,
    title:
      "[School] Nghe Ngong - A search engine for Vietnamese news, having a similar to google looking",
    github: "https://github.com/ththanh18/cs419-project-fe",
    demo: "https://nghe-ngong.vercel.app/",
    date: "June 2021",
  },

  {
    id: 3,
    image: PORTFO3,
    desc: "Default account: {admin@gmail.com} - {admin123}",
    title: "[School] FamiFilm - Film management for family members",
    github: "https://github.com/nth-joda/fami-web",
    demo: "https://fami-web.vercel.app/",
    date: "May 2021",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Research</h2>

      <div className="container portfolio__container">
        {data.map((item) => (
          <PortfolioItem data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
