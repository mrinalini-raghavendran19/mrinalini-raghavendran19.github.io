import * as React from "react";
import "./index.css";

const IndexPage = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="app">
      {/* Sidebar Hamburger Menu */}
      <nav className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        <ul>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#links" onClick={() => setMenuOpen(false)}>Find me online</a></li>
        </ul>
      </nav>

      {/* Hamburger icon */}
      <button className="hamburger" onClick={() => setMenuOpen(true)}>
        ☰
      </button>

      <main className="container">
        <header className="header">
          <header className="header">
            <img src='/images/profile.JPEG' alt="Mrinalini" className="profile-pic" />
            <h1>Hi, I am Mrinalini</h1>
            <p className="description">
              I’m a sofwtare engineer passionate about full stack development,
              distributed systems, and building scalable apps. I love working
              with Java, Spring Boot, React, and databases like PostgreSQL,
              MongoDB, and MySQL.
            </p>
          </header>

        </header>

        <section id="projects" className="projects">
          <h2>Projects 🚀</h2>
          <ul>
            <li className="project-item">
              <strong>Journaling Web App</strong> – Distraction-free journaling app
              with AI-powered sentiment analysis.
            </li>
            <li className="project-item">
              <strong>Recipe Recommendation Android App</strong> – App to recommend recipes to users using 
              collaborative filtering
            </li>
          </ul>
        </section>

        <section id="links" className="links">
          <h2>Find me online 🌐</h2>
          <ul className="links-list">
            <li>
              <a href="https://github.com/mrinalini-raghavendran19" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mrinalini-raghavendran-781428222/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
