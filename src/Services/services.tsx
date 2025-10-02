import "../Services/services.css"
import { motion } from "framer-motion";
import { DiCode } from "react-icons/di";
import { IoStorefrontOutline } from "react-icons/io5";
import { GrOptimize } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";

const Services: React.FC = () => {
  const servicesContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = servicesContainerRef.current;
    if (!container) return;

    const autoScroll = setInterval(() => {
      if (window.innerWidth > 768 || isPaused) return;

      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % 3;
        
        // Use transform for smooth sliding
        if (container) {
          const translateX = -nextIndex * 100;
          container.style.transform = `translateX(${translateX}%)`;
        }
        
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(autoScroll);
  }, [isPaused]);

  // Handle hover pause
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <motion.section className="services" id="services"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="skill-h2">My<span>Services</span></h2>

      <div 
        className="services-wrapper"
        style={{ 
          overflow: 'hidden', 
          width: '100%',
          position: 'relative'
        }}
      >
        <div 
          className="services-container" 
          ref={servicesContainerRef}
          style={{ 
            display: 'flex',
            transition: 'transform 0.8s ease',
            transform: `translateX(-${currentIndex * 100}%)`
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="services-box">
            <IoStorefrontOutline className="fa-solid" />
            <h3>E-COMMERCE MANAGER</h3>
            <p>I help businesses set up, manage, and optimize their online stores for growth. From product listings and inventory management to payment integration and customer experience,
               I ensure your e-commerce platform runs smoothly and drives consistent sales.</p>
          </div>

          <div className="services-box">
            <DiCode className="fa-solid"/>
            <h3>WEB DEV</h3>
            <p>I build responsive, high-performance websites using modern technologies like HTML, CSS, JavaScript, and React. 
              Whether it's a personal portfolio, a business landing page, or a fully interactive web app, I develop scalable, SEO-friendly sites that work seamlessly across all devices.</p>
          </div>

          <div className="services-box">
            <GrOptimize className="fa-solid"/>
            <h3>SEO OPTIMIZATION</h3>
            <p>I optimize websites to rank higher on search engines, 
              improve visibility, and drive organic traffic. From keyword research to on-page and off-page SEO, I help businesses attract the right audience and grow online presence.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;