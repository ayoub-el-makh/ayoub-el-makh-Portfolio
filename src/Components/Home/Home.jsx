import { useState } from "react";
import "./Home.css";
import { useEffect } from "react";
import programmer from '../../images/programmer3.png';
// import { Link } from "react-router-dom";

const Home = () => {
  const [animate, setAnimate] = useState("Ayoub El Makhtoum");
  useEffect(() => {
    const arr = ["Web Developper", "Ayoub El Makhtoum"];
    let index = 0;
    const duration = setInterval(() => {
      setAnimate(arr[index]);
      index++;
      if (index > 1) {
        index = 0;
      }
    }, 5000);
    return () => {
      clearInterval(duration);
    };
  }, []);
  return (
    <div className="home-container">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="information">
        <h1>Hello 👋</h1>
        <div>
          <span> I'm</span>
          <h2>{animate}</h2>
        </div>
        <p>Someone who wants to achieve a lot of goals</p>
        <button>DOWNLOAD CV  <i class="fa-solid fa-down-long"></i></button>
      </div>
      <div className="Programmer">
        <img src={programmer} alt="" />
      </div>
      <div className="social-media">
        <div>
          <a
            href="https://www.facebook.com/ayoub.elmakhtoum.165"
            target="_blanc"
            title="facebook"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/ayoub_el_makh/" title="instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/ayoub-el-makh" title="github">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
