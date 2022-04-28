import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import ContactOption from "./contactOption/ContactOption";
import "./contact.css";

const email_service_id = "service_kpeo4ci";
const email_template_id = "template_fla4syl";
const user_public_key = "jpI8UgiNE1WR5ecfL";

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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        email_service_id,
        email_template_id,
        form.current,
        user_public_key
      )
      .then(
        (result) => {
          console.log(result.text);
          emailjs.sendForm(
            email_service_id,
            email_template_id,
            form.current,
            user_public_key
          );
          alert("Message sent.");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-item">
            <label htmlFor="name">
              Your Name<span className="required-field">(*)</span>:
            </label>
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
              type="tel"
              name="phoneno"
              placeholder="Could I get your phone number ?"
            />
          </div>

          <div className="input-item">
            <label htmlFor="message">
              Your Message<span className="required-field">(*)</span>:
            </label>
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
