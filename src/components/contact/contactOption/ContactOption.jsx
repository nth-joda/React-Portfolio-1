import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

import "./contactOption.css";
const ContactOption = React.memo((props) => {
  return (
    <article className="contact__option">
      {props.contact.contactType === "Email" && (
        <HiOutlineMail className="contact__option-icon" />
      )}

      {props.contact.contactType === "Facebook" && (
        <FaFacebookSquare className="contact__option-icon" />
      )}

      {props.contact.contactType === "Zalo" && (
        <SiZalo className="contact__option-icon" />
      )}

      <h4>{props.contact.contactType}</h4>
      <h5>{props.contact.detail}</h5>

      {props.contact.contactType === "Email" && (
        <a href={"mailto:" + props.contact.link} target="_blank">
          Send a message
        </a>
      )}

      {props.contact.contactType === "Facebook" && (
        <a href={props.contact.link} target="_blank">
          Go to "{props.contact.contactType}"
        </a>
      )}

      {props.contact.contactType === "Zalo" && (
        <a href={props.contact.link} target="_blank">
          Go to "{props.contact.contactType}"
        </a>
      )}
    </article>
  );
});
export default ContactOption;
