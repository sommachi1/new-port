import "../Footer/Footer.css"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p> Copyright &copy; 2025 by @sommachidigitals | ALL Rights Reserved.</p>
      </div>

      <div className="social-media">
          <a href="https://github.com/sommachi1">  <FaGithub  className="fa-brands"/></a>
          <a href="https://www.linkedin.com/in/favour-mmesoma-11b3b0367/"> <FaLinkedin /></a>
          <a href="#"> <FaTiktok /></a>
          <a href="http://wa.me/07025286737"><FaWhatsapp /></a>
        </div>
      </footer>
  );
};

export default Footer;
