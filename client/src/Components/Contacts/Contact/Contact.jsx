import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVenus,
  faMars,
  faGenderless,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Contact({ firstName, lastName, phone, gender, id }) {
  return (
    <div className="contact-conteiner" id={id}>
      <FontAwesomeIcon className="conteiner-user-img" icon={faUser} />
      <div className="contact-content">
        <p className="contact-title">
          {firstName} {lastName}
        </p>
        <p className="contact-phone">{phone}</p>
      </div>
      <div className="contact-gender">
        {gender ? (
          gender === "male" ? (
            <FontAwesomeIcon icon={faMars} />
          ) : (
            <FontAwesomeIcon icon={faVenus} />
          )
        ) : (
          <FontAwesomeIcon icon={faGenderless} />
        )}
      </div>
    </div>
  );
}
export default Contact;
