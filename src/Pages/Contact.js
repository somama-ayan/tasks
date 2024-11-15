import React from 'react'
import './Styles/Contact.css'
const Contact = () => {
    return (
        <div className="contact-form container">
<section id='ContactSection'>
<h1>Let’s get in touch!</h1>
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
      <button className="submit-button">
        SUBMIT <span>→</span>
      </button>
          </section>
        </div>
    )
}

export default Contact
