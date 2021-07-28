import React from "react";
import emailjs from "emailjs-com";
import "./Email.css";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_fs80mdp",
      "template_pqzb4eo",
      e.target,
      "user_BXSvTKrdFriWWsW8WpYxi"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

const EmailContent = () => {
  return (
    <form onSubmit={sendEmail}>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          id="name"
          name="name"
          required
        />
        <label for="name" className="form__label">
          From:
        </label>
      </div>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          id="subject"
          name="subject"
          required
        />
        <label for="name" className="form__label">
          Subject:
        </label>
      </div>
      <div className="form__group blank_box">
        <textarea
          className="blank_box"
          rows="4"
          cols="50"
          name="message"
          required
        ></textarea>
      </div>
      <button className="submit_button" variant="contained" type="submit">
        ➣
      </button>
    </form>
  );
};

export default EmailContent;
