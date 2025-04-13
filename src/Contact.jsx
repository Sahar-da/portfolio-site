import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-page">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">You can fill out the form or contact me directly.</p>
      
          <div className="contact-options">
            <div className="contact-info">
              <p><strong>📞 Phone:</strong> 647-713-3471</p>
              <p><strong>📧 Email:</strong> sahar_khoury_92@hotmail.com</p>
              <p><strong>📍 Location:</strong> Scarborough, Ontario, Canada</p>
            </div>
      
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="6" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      );
};

export default Contact;
