import "../Skills/Skills.css"



const Skills: React.FC = () => {
  return (
    <section className="skills-container" id="skills-container">
      <h2 className="skill-h2">My Tech<span>Stack</span></h2>
      <div className="skills-grid">
      
      <div className="skill-card">
        <img src="/src/assets/images/html.jpg" alt="HTML Logo" />
        <p>HTML</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "95%", background: "#e34c26"}}
          ></div>
        </div>
        <div className="percentage">95%</div>
      </div>

      
      <div className="skill-card">
        <img src="/src/assets/images/css.jpg" alt="CSS Logo" />
        <p>CSS</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
             style={{ width: "90%", background: "#264de4 "}}
          ></div>
        </div>
        <div className="percentage">90%</div>
      </div>

     
      <div className="skill-card">
        <img src="/src/assets/images/js.jpg" alt="JavaScript Logo" />
        <p>JAVASCRIPT</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "85%", background: "#f0db4f" }}
          ></div>
        </div>
        <div className="percentage">85%</div>
      </div>

      
      <div className="skill-card">
        <img src="/src/assets/images/tailwind.jpg" alt="Tailwind CSS Logo" />
        <p>TAILWIND</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
             style={{ width: "80%", background: "#38bdf8" }}
          ></div>
        </div>
        <div className="percentage">80%</div>
      </div>

     
      <div className="skill-card">
        <img src="/src/assets/images/react.jpg" alt="React Logo" />
        <p>REACT</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "90%", background: "#61dafb" }}
           
          ></div>
        </div>
        <div className="percentage">90%</div>
      </div>

      
      <div className="skill-card">
        <img src="/src/assets/images/git.png" alt="git"/>
         <p>Git</p>
          <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "85%", background: "#f1502f" }}
          ></div>
        </div>
        <div className="percentage">85%</div>
      </div>
     </div>
  </section>
  );
};

export default Skills;
