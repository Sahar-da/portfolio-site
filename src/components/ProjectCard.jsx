import React, { useState } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, images, description, onImageClick }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <div className="project-gallery">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          onClick={() => onImageClick(images[index])}
          style={{ cursor: "pointer" }}
        />
        {images.length > 1 && (
          <div className="next-link" onClick={handleNext}>
            Next &gt;
          </div>
        )}
      </div>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
