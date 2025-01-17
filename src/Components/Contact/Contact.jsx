import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_r6o7688",
        "template_eajs00c",
        formData,
        "SWw3omDkaMyuW3FLn"
      )
      .then(
        (response) => {
          console.log("Success", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="Contact-container">
        <div className="Contact-Heading-container">
          <span>CONTACT</span>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="YOUR MESSAGE"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-button">
            <button type="submit">Submit</button>
          </div>
        </form>
        <p className="message-status">{status}</p>
      </div>
    </>
  );
}
