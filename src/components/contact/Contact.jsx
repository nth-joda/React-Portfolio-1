import React from "react";

import ContactOption from "./contactOption/ContactOption";
import "./contact.css";

const contacts = [
  {
    id: 1,
    contactType: "Email",
    detail: "nthau.2k@gmail.com",
    link: "nthau.2k@gmail.com",
  },
  {
    id: 2,
    contactType: "Facebook",
    detail: "Nguyễn Trung Hậu",
    link: "https://fb.com/nthau2000",
  },
  {
    id: 3,
    contactType: "Zalo",
    detail: "Hau Nt",
    link: "https://zalo.me/0328289727",
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {contacts.map((item) => (
            <ContactOption contact={item} key={item.id} />
          ))}
        </div>
        {/* ============= END OF CONTACT OPTIONS ============= */}
        <form action="">
          <div className="input-item">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              name="name"
              placeholder="How Can I Call You ?"
              required
            />
          </div>
          <div className="input-item">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Could I get your email address ?"
              required
            />
          </div>

          <div className="input-item">
            <label htmlFor="phoneno">Your Phone Number:</label>
            <input
              type="number"
              name="phoneno"
              placeholder="Could I get your phone number ?"
            />
          </div>

          <div className="input-item">
            <label htmlFor="message">Your Message:</label>
            <textarea
              name="message"
              rows="7"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
