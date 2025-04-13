import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "./components/ProjectCard";
import Modal from "./components/Modal";

import slide1 from "./assets/freelance-slide1.png";
import slide2 from "./assets/freelance-slide2.png";
import slide3 from "./assets/freelance-slide3.png";
import slide4 from "./assets/freelance-slide4.png";

import rc1 from "./assets/r-cent-s-screenshot-1.png";
import rc2 from "./assets/r-cent-s-screenshot-2.png";
import rc3 from "./assets/r-cent-s-screenshot-3.png";

import order1 from "./assets/OrderManagementSystem-screenshot1.png";
import order2 from "./assets/OrderManagementSystem-screenshot2.png";
import order3 from "./assets/OrderManagementSystem-screenshot3.png";


const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="projects-page">
      <h2 className="section-title">Projects</h2>

      <ProjectCard
        title="Freelance Matching System"
        images={[slide1, slide2, slide3, slide4]}
        description="A collaborative software design project focused on building a freelance matching system.  
        We applied professional design patterns, created a clean user experience,  
        and practiced team collaboration."
        onImageClick={(img) => {
          setSelectedImage(img);
          setIsModalOpen(true);
        }}
      />

      <ProjectCard
        title="R-Cent-S "
        images={[rc1, rc2, rc3]}
        description="A social media web app designed for Centennial students to express feedback, share advice, and foster communication. The platform enables sign-in authentication, user interaction, and ideas for future improvements like private messaging and group features.
        Tools & Technologies: React.js, Node.js, Express.js, MongoDB, Postman for API testing, JWT for authentication, and Material-UI for styling."
        onImageClick={(img) => {
          setSelectedImage(img);
          setIsModalOpen(true);
        }}
      />
      <ProjectCard
  title="Order Management System"
  images={[order1, order2, order3]}
  description="This C# Windows Forms application allows users to manage customer orders.
   It supports viewing order details, adding items to a basket, and displaying order data from a SQL Server database.
    Technologies used: C#, Entity Framework, SQL Server, Windows Forms."
    onImageClick={(img) => {
        setSelectedImage(img);
        setIsModalOpen(true); }}
/>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage}
      />
    </div>
  );
};

export default Projects;
