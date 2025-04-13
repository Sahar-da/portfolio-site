import React from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

import animation1 from './assets/Animation1.json';
import animation2 from './assets/Animation2.json';
import animation3 from './assets/Animation3.json';

import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <h2 className="services-title">My Services</h2>

      <div className="service-card">
        <Lottie animationData={animation1} loop={true} className="lottie" />
        <div className="service-text">
          <h3>Web Development</h3>
          <p>I build modern, responsive websites using HTML, CSS, JavaScript, and React.</p>
        </div>
      </div>

      <div className="service-card">
        <Lottie animationData={animation2} loop={true} className="lottie" />
        <div className="service-text">
          <h3>Software Applications</h3>
          <p>From idea to implementation, I develop desktop and database apps using C#, Java, and SQL.</p>
        </div>
      </div>

      <div className="service-card">
        <Lottie animationData={animation3} loop={true} className="lottie" />
        <div className="service-text">
          <h3>Database Management</h3>
          <p>I design and manage databases using MongoDB, SQL Server, and Oracle tools.</p>
        </div>
      </div>

      <div className="contact-section">
  <Link to="/contact">
    <button className="contact-btn">Let’s Work Together</button>
  </Link>
</div>
    </div>
  );
};

export default Services;
