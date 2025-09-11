import "./About.css"


const About: React.FC = () => {
  return (
   <section className="about" id="about">
      <div className="about-img">
        <img src="/src/assets/images/hero img.png" alt="profile" />
      </div>
      <div className="about-content">
        <h2 className="heading">ABOUT<span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p>
          Hi, I'm <strong>Favour Mmesomachi, a frontend developer</strong> with
          a degree in Computer Science and hands-on training from
          <strong>Genesys Tech Academy, Enugu, Nigeria.</strong> I specialize in
          building responsive, user-focused web interfaces using
          <strong>, CSS, JavaScript, Tailand and React.js.</strong> With a
          strong eye for design and attention to detail, I enjoy turning ideas
          into clean, functional code. I’m passionate about creating great user
          experiences and always eager to learn and grow in a collaborative
          environment.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
};

export default About;
