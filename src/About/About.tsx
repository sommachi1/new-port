import React from "react";
import { motion } from "framer-motion";

import "./About.css";

const About: React.FC = () => {
  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, x: -100 }}       // hidden (fade out + slide left)
      whileInView={{ opacity: 1, x: 0 }}      // visible (fade in + slide in)
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Title & Heading */}
      <h2 className="about-h2">
        About<span>Me</span>
      </h2>
      <h3 className="section-heading">Frontend Developer</h3>

      {/* Flex Container */}
      <div className="about-container">
        {/* Left Side: Text */}
        <div className="about-text">
          <p>
            Hi, I’m Favour Mmesoma — a frontend developer with a focus on
            creating responsive websites and e-commerce platforms that are fast,
            modern, and user-friendly.
          </p>

          <p>
            I completed an intensive Frontend Development Program at Genesys
            Tech Academy, where I gained hands-on experience building
            real-world projects with JavaScript, React, TypeScript, and CSS.
          </p>

          <p>
            I help businesses bring their ideas online by delivering clean,
            scalable, and visually appealing web solutions that engage customers
            and drive growth.
          </p>
          <button className="about-btn">Learn More</button>
        </div>

        {/* Right Side: Image with string effect */}
        <div className="about-img-box">
  <div className="tag-rope">
    <div className="rope"></div>
    <div className="rope"></div>
  </div>
  <img
    src="/src/assets/images/hero img.png"
    alt="About Me"
    className="about-img"
  />
</div>


      </div>
    </motion.section>
  );
};

export default About;
