import "../Projects/Projects.css"

const Projects: React.FC = () => {
  return (
   <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <h2 className="skill-h2">Recent <span>Projects</span></h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">EduFlex
          </h3>
          <p className="step-description">
           EduFlex is your digital classNameroom for mastering new skills, leveling up your career,
            or simply learning something new for the love of it. From tech and business to design, marketing, and personal development – 
           we’ve got courses that meet real-world demands, taught by real-world experts.
          </p>
        </div>
        <div className="step-img-box">
          <img
            src="./assets/images/edufximg.jpg" alt="Project 1"
          />
        </div>

        
        <div className="step-img-box">
          <img
           src="./assets/images/socialimg.jpg" alt="Project 2"
          />
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Socialised</h3>
          <p className="step-description">
            Socialised isn’t just a page – it’s a whole vibe for everything social media.
             Whether you’re a content creator, a trend watcher,
             or just someone who loves staying in the loop, this is your go-to digital hub.
          </p>
        </div>

       
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
            src="./assets/images/gameimg.jpg" alt="Project 1"
          />
        </div>
        
      </div>
      <div className="see-g">
      <button className="see-more-btn">See More Projects</button>
    </div>
    </section>
  
  );
};

export default Projects;
