import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <h2>Address</h2>
        <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>

        <h2>Phone</h2>
        <p>+1 (123) 456-7890</p>

        <h2>Email</h2>
        <p><a href="mailto:info@springdale.edu">info@springdale.edu</a></p>
      </div>

      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      <div className="map">
        <h2>Find Us</h2>
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093667!2d144.9537353153153!3d-37.8162797797515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d0a54b4b7e0b!2sDummy+Address!5e0!3m2!1sen!2sau!4v1532588725635"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="School Location"
            ></iframe>
          </div>
          <p>
            Address: Springdale Public School, 123 Lane, Cityvilla, State, ZIP Code<br />
            Phone: +1 (123) 456-7890<br />
            Email: info@springdale.edu
          </p>
      </div>
  );
};

export default ContactUs;
