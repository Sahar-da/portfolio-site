import React from 'react';
import sahar from './assets/sahar.jpg'; 
import './About.css'; // we’ll create this next

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={sahar} alt="Sahar Khuri Dakwar" className="about-photo" />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, I’m Sahar Khuri Dakwar — a Software Engineering Technician student at Centennial College with a passion for both web and software development. I enjoy building clean, user-friendly applications and continuously learning new technologies. Originally from Israel, I’m a dedicated mom of two, balancing life and code with determination and purpose. My goal is to become a professional developer and make a real impact through meaningful software.
          </p>
          <div className="resume-section">
  <h3>📄 Resume</h3>
  <p>If you'd like to know more about my experience, feel free to download my resume below.</p>
  <a 
    href="/SAHAR_KHURI_DAKWAR_Resume.pdf" 
    download 
    className="resume-button"
    target="_blank" 
    rel="noopener noreferrer"
  >
    ⬇ Download My Resume (PDF)
  </a>
</div>
        </div>
      </div>
    </div>
    
  );
}

export default About;
