import "../Hero/Hero.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { ReactTyped } from "react-typed";


const Hero: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi, i am</h3>
        <h1>Favour Mmesomachi</h1>
       <h3>
        I am a{" "}
        <span className="typed-text">
          <ReactTyped
            strings={[
              "Frontend Developer",
              "Seo Specialist",
              "React Enthusiast",
              "Tech Explorer",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </span>
      </h3>
        <p>
          Welcome, i bring ideas to life on the web.Currently, I'm focused on
          building functional & responsive websites
        </p>
        <div className="social-media">
          <a href="https://github.com/sommachi1">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/favour-mmesoma-11b3b0367/">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaTiktok />
          </a>
          <a href="http://wa.me/07025286737">
           <FaWhatsapp />
          </a>
        </div>
        <div>
          <a
            href="./assets/Favour_Mmesomachi_Tech_CV.pdf"
            className="hero-btn"
            target="_blank"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
