import "../Header/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* <div className="header-container"> */}
        <h1 className="logo">SD.</h1>
        <i className="fa-solid fa-bars" id="menu-icon"></i>
        {/* <div className="nav-container"> */}
        <nav className="navbar" id="mobile-menu">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#skills-container">Skills</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
        {/* </div> */}
        <div>
          {" "}
          <button className="fm">Get-in-Touch</button>
        </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
