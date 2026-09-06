import React from "react";
import "../css/home.css";

const Home = ({ setActiveTab }) => {
  return (
    <section className="home-section">
      <div className="home-content">

        <p className="home-intro">Hello, I'm</p>

        <h1>
          Ansh <span>Bhola</span>
        </h1>

        <h2>Full Stack Software Developer</h2>

        <p className="home-description">
          I build modern web applications and digital experiences,
          turning ideas into clean, functional, and scalable solutions.
        </p>

        <div className="home-buttons">
          <a
            href="#projects"
            className="home-btn primary"
            onClick={(e) => {
              e.preventDefault();
              if (setActiveTab) setActiveTab('projects');
            }}
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="home-btn secondary"
            onClick={(e) => {
              e.preventDefault();
              if (setActiveTab) setActiveTab('contact');
            }}
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Home;