import { React, useRef } from "react";
import "../css/Contact.css"
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gyqydyl', 'template_pux1qmu', form.current, 'zUr1u_AsPJ07u7q0W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Contact">
      <div className="c-left">
        <p className="c-text1">Contact</p>
        <p className="c-text2">me</p>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
        
          <input placeholder="email" className="c-email-input" type="text" name="user_email" />
          <input placeholder="name" className="c-name-input" type="text" name="user_name" />
          <textarea placeholder="message" className="c-msg-input" name="message" />
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
