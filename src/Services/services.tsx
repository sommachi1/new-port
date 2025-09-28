import "../Services/services.css"
import { motion } from "framer-motion";
import { DiCode } from "react-icons/di";
import { IoStorefrontOutline } from "react-icons/io5";
import { GrOptimize } from "react-icons/gr";
const Services: React.FC = () => {
  return (
    <motion.section className="services" id="services"
    
    initial={{ opacity: 0, x: -100 }}       // hidden (fade out + slide down)
  whileInView={{ opacity: 1, x: 0 }}    // visible (fade in + slide up)
  transition={{ duration: 0.8, ease: "easeOut" }} // animation timing
  viewport={{ once: true }}             // animates only once when visible
    >
      
      <h2 className="skill-h2">My<span>Services</span></h2>

        <div className="services-container">
          <div className="services-box">
          <IoStorefrontOutline className="fa-solid" />
          <h3>E-COMMERCE MANAGER</h3>
          <p>I help businesses set up, manage, and optimize their online stores for growth. From product listings and inventory management to payment integration and customer experience,
             I ensure your e-commerce platform runs smoothly and drives consistent sales.</p>
          </div>

          <div className="services-box">
           <DiCode  className="fa-solid"/>
          <h3>WEB DEV</h3>
          <p>I build responsive, high-performance websites using modern technologies like HTML, CSS, JavaScript, and React. 
            Whether it's a personal portfolio, a business landing page, or a fully interactive web app, I develop scalable, SEO-friendly sites that work seamlessly across all devices.</p>
          </div>

          <div className="services-box">
          <GrOptimize className="fa-solid"/>
          <h3>SEO OPTIMIZATION</h3>
          <p>I I optimize websites to rank higher on search engines, 
            improve visibility, and drive organic traffic. From keyword research to on-page and off-page SEO, I help businesses attract the right audience and grow online presence. </p>
          </div>
        </div>
      </motion.section>
  );
};

export default Services;
