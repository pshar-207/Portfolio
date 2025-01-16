import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="Contact-container">
        <div className="Contact-Heading-container">
          <span>CONTACT</span>
        </div>
        <form action="">
          <div className="form-container">
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL"
              required
            />
            <input
              type="tel"
              name="Phone"
              pattern="[0-9]{10}"
              placeholder="PHONE NUMBER"
            />
            <textarea name="message" placeholder="YOUR MESSAGE" required />
          </div>
          <div className="form-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
