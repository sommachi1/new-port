import "../Hero/Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi, i am</h3>
        <h1>Favour Mmesomachi</h1>
        <h3>
          And i am a <span className="multiple-text"></span>
        </h3>
        <p>
          Welcome, i bring ideas to life on the web.Currently, I'm focused on
          building functional & responsive websites
        </p>
        <div className="social-media">
          <a href="https://github.com/sommachi1">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/favour-mmesoma-11b3b0367/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="http://wa.me/07025286737">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div>
          <a
            href="./assets/Favour_Mmesomachi_Tech_CV.pdf"
            className="btn"
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
