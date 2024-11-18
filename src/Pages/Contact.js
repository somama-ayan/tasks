import React from "react";
import { useInView } from "react-intersection-observer";
import "./Styles/Contact.css";
const Contact = () => {
  const { ref: contactSectionRef, inView } = useInView({
    triggerOnce: false, // Allow re-triggering the animation
    threshold: 0.2, // Trigger when 20% of the section is visible
  });
  return (
    <div className="contact-form container">
      <section id="ContactSection" ref={contactSectionRef}>
        <h1 className={`text-center ${inView ? "animate-heading" : ""}`}>
          Let’s get in touch!
        </h1>

        <div className="form-inputs">
          <input
            type="text"
            required
            className="input-field"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            required
            className="input-field"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className="full-width">
          <input
            required
            className="input-field"
            placeholder="Tell us about your project."
            name="project"
          />
        </div>
        <div className="contact-btn">
          <button className="submit-button">
            SUBMIT <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
