import "./SideNavigation.css";
import logo from "../../images/logo.jpg";

const SideNavigation = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="details">
        <h1>Ayoub El Makhtoum</h1>
        <span>WEB DEVELOPPER</span>
        <span> IN MOROCCO</span>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="/HOME">HOME</a>
          </li>
          <li>
            <a href="/ABOUT">ABOUT</a>
          </li>
          <li>
            <a href="/SERVICES">SERVICES</a>
          </li>
          <li>
            <a href="/SKILLS">SKILLS</a>
          </li>
          <li>
            <a href="/PROJECTS">PROJECTS</a>
          </li>
          <li>
            <a href="/CONTACT">CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="nav-footer">
        <span>© Copyright © {new Date().getFullYear()} All rights reserved | This Portfolio is made with ❤️
        by</span> <strong>AYOUB</strong>
      </div>
    </div>
  );
};

export default SideNavigation;
