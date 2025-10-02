import "../Projects/Projects.css"
import myImage from "../assets/images/crypt2.png";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
   <motion.section className="portfolio-section" id="portfolio"
     initial={{ opacity: 0, x: -100 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
     viewport={{ once: true }}
    >
      <div className="portfolio-container">
        <h2 className="skill-h2">Recent<span>Projects</span></h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        
        {/* ===== Project 1 ===== */}
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">CryptoTracker</h3>
          <p className="step-description">
            A crypto tracking platform that lets users monitor live prices, market caps,
            and trends using the CoinGecko API. The app features a clean, responsive UI with React and Material UI,
            making it fast and user-friendly. Future updates will include a P2P exchange, 
            market analysis tools, and an exchange calculator.
          </p>
        </div>
        <div className="step-img-box">
          <a 
            href="https://crypto-traccker.netlify.app/watchlist" 
            target="_blank" 
            rel="noopener noreferrer"
            className="image-card"
          >
            <img 
              src={myImage}
              alt="Example site" 
              className="step-img"
            />
            <div className="image-overlay">
              <span>View</span>
            </div>
          </a>
        </div>

        {/* ===== Project 2 (Extra class added) ===== */}
        <div className="step-img-box mobile-flip">
          <img
            src="./assets/images/socialimg.jpg" alt="Project 2"
          />
        </div>
        <div className="step-text-box mobile-flip">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">TechGadgets E-Commerce Store</h3>
          <p className="step-description">
            I developed a modern e-commerce website for browsing and purchasing tech gadgets. Built with React and TypeScript, 
            it features a responsive design, product catalog with category filtering, and a dynamic shopping cart. Future updates will include secure checkout, user accounts, and wishlist functionality.
          </p>
        </div>

        {/* ===== Project 3 ===== */}
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">Gaming AI</h3>
          <p className="step-description">
            GameGenius AI is an innovative gaming assistant powered by artificial intelligence, 
            designed to enhance your gaming experience. Whether you're stuck on a difficult level, 
            need strategic tips, or want real-time game analysis, GameGenius AI provides smart, 
            adaptive solutions to help you dominate the competition.
          </p>
        </div>
        <div className="step-img-box">
          <img
            src="./assets/images/gameimg.jpg" alt="Project 3"
          />
        </div>
        
      </div>
      <div className="see-g">
        <button className="see-more-btn">See More Projects</button>
      </div>
    </motion.section>
  );
};

export default Projects;
