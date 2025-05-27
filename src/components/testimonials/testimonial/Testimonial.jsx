import React from "react";
import "./testimonial.css";
const Testimonial = React.memo((props) => {
  return (
    <article className="testimonial">
      <div className="client__avatar">
        <img src={props.data.image} alt="client's avatar" />
      </div>
      <h5 className="client__name">{props.data.name}</h5>
      <small className="client__review">{props.data.review}</small>
    </article>
  );
});

export default Testimonial;
