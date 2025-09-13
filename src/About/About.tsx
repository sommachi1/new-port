import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      {/* Section Title & Heading */}
      <h2 className="about-h2">About<span>Me</span></h2>
      <h3 className="section-heading">Frontend Developer</h3>

      {/* Flex Container */}
      <div className="about-container">
        {/* Left Side: Text */}
        <div className="about-text">
          <p>
            Hi, I’m Favour Mmesoma — a frontend developer with a focus on
            creating responsive websites and e-commerce platforms that are fast,
            modern, and user-friendly.</p>
            
            <p> I completed an intensive Frontend Development Program at Genesys Tech Academy, where I gained hands-on
            experience building real-world projects with JavaScript, React, TypeScript, and CSS.</p>
            
            <p>
            I help businesses bring their ideas online by
            delivering clean, scalable, and visually appealing web solutions
            that engage customers and drive growth.
          </p>
          <button className="about-btn">Learn More</button>
        </div>

        {/* Right Side: Image */}
        <div className="about-image">
          <img src="/src/assets/images/hero img.png" alt="About Me" />
        </div>
      </div>
    </section>
  );
};

export default About;
