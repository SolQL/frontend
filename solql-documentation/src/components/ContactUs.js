import React from "react";

const ContactUs = ({h1, p}) => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h1>{h1}</h1>
        <div className="container-p-div">
          <p className="container-p">{p}</p>          
        </div>
      </div>

      <div className="contact-buttons">
        <a className="shayan-twitter" href="https://linktr.ee/sha256yan">Shayan - Technical Lead </a>
        <a className="manansh-twitter" href="https://linktr.ee/manansh">Manansh - Design & UX</a>
      </div>
    </div>
  );
};

export default ContactUs;
