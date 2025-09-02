import * as React from "react"
import "./index.css"

const IndexPage = () => {
  return (
    <main className="container">
      <header className="header">
        <img src= "profile.JPEG" alt="Mrinalini" className="profile-pic" />
        <h1>Hi, I’m Mrinalini 👋</h1>
        <p>
          I’m a software engineer passionate about full stack development,
          distributed systems, and building scalable apps. I love working with
          Java, Spring Boot, React, and databases like PostgreSQL, MongoDB and MySQL.
        </p>
      </header>

      <section className="projects">
        <h2>Projects 🚀</h2>
        <ul>
          <li>
            <strong>Journaling Web App</strong> – Distraction-free journaling app
            with AI-powered sentiment analysis.
          </li>
        </ul>
      </section>

      <section className="links">
        <h2>Find me online 🌐</h2>
        <ul>
          <li>
            <a href="https://github.com/mrinalini-raghavendran19" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mrinalini-raghavendran-781428222/" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default IndexPage
