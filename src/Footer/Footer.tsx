import "../Footer/Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p> Copyright &copy; 2025 by @sommachidigitals | ALL Rights Reserved.</p>
      </div>

      <div className="social-media">
          <a href="https://github.com/sommachi1"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/favour-mmesoma-11b3b0367/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#"><i className="fa-brands fa-tiktok"></i></a>
          <a href="http://wa.me/07025286737"><i className="fa-brands fa-whatsapp"></i></a>
        </div>

      <div className="footer-iconTop">
        <a href="#home"><i className="fa-solid fa-angle-up"></i></a>
        </div>
      </footer>
  );
};

export default Footer;
