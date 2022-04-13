import React from "react";

// =========== "SWIPER" INSTALLATION =================

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// =========== END OF "SWIPER" INSTALLATION ===========

import AVTAR1 from "../../assets/avatar1.jpg";
import AVTAR2 from "../../assets/avatar2.jpg";
import AVTAR3 from "../../assets/avatar3.jpg";
import AVTAR4 from "../../assets/avatar4.jpg";
import Testimonial from "./testimonial/Testimonial";

import "./testimonials.css";

const data = [
  {
    id: 1,
    image: AVTAR1,
    name: "Jessie Bass",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non maiores voluptatem tempore, fugit consequuntur quo consectetur, beatae necessitatibus laudantium explicabo asperiores in eos sed ullam nam, aspernatur aperiam quidem tenetur.",
  },

  {
    id: 2,
    image: AVTAR2,
    name: "Claudia Summers",
    review:
      "Rope wonderful natural changing detail thing industry goose spell degree exact empty acres adult outer electricity tone planet share saw mouth bent former dirt",
  },

  {
    id: 3,
    image: AVTAR3,
    name: "Jerome Gonzales",
    review:
      "Throughout pine complex season fuel foreign obtain mine lot one depend making busy farmer warm natural sudden short recognize previous applied came plus bow",
  },

  {
    id: 4,
    image: AVTAR4,
    name: "Tony Ballard",
    review:
      "Blank immediately mark leather attached talk knife wind broke review active cotton porch cold continent bark shoe personal country chart onto wonderful game label",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Testimonial data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
