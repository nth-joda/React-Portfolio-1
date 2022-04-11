import React from "react";
import { MdOutlineCheck } from "react-icons/md";

import "./services.css";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div class="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <MdOutlineCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit.</p>
            </li>

            <li>
              <MdOutlineCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <MdOutlineCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <MdOutlineCheck className="service__list-icons" />
              <p>Consectetur adipisicing elit. Velit, qui?</p>
            </li>

            <li>
              <MdOutlineCheck className="service__list-icons" />
              <p>Consectetur dicta, doloremque suscipit sint?</p>
            </li>
          </ul>
        </article>

        {/* =================== END OF UI/UX Design =================== */}

        <article className="service">
          <div class="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <MdOutlineCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit.</p>
            </li>

            <li>
              <MdOutlineCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <MdOutlineCheck className="service__list-icons" />
              <p>Consectetur adipisicing elit. Velit, qui?</p>
            </li>

            <li>
              <MdOutlineCheck className="service__list-icons" />
              <p>Consectetur dicta, doloremque suscipit sint?</p>
            </li>
          </ul>
        </article>

        {/* =================== END OF Web Development =================== */}

        <article className="service">
          <div class="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <MdOutlineCheck className="service__list-icons" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>

            <li>
              <MdOutlineCheck className="service__list-icons" />
              <p>Consectetur adipisicing elit. Velit, qui?</p>
            </li>

            <li>
              <MdOutlineCheck className="service__list-icons" />
              <p>Consectetur dicta, doloremque suscipit sint?</p>
            </li>
          </ul>
        </article>

        {/* =================== END OF Content Creation =================== */}
      </div>
    </section>
  );
};

export default Services;
