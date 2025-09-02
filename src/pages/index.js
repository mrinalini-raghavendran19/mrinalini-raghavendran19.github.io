import * as React from "react"

const IndexPage = () => {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#663399" }}>
        Hi, I’m Mrinalini 👋
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        I’m a software engineer passionate about backend development,
        distributed systems, and building scalable apps. I love working with
        Java, Spring Boot, React, and databases like PostgreSQL and DynamoDB.
      </p>

      <h2>Projects 🚀</h2>
      <ul>
        <li><strong>Distributed Task Scheduler</strong> – A system for scheduling tasks with intelligent prioritization.</li>
        <li><strong>Journaling Web App</strong> – Distraction-free journaling app with AI-powered sentiment analysis.</li>
        <li><strong>Leaderboard Feature</strong> – Built for an NGO platform to track volunteer hours.</li>
      </ul>

      <h2>Find me online 🌐</h2>
      <ul>
        <li><a href="https://github.com/mrinalini" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com/in/mrinalini" target="_blank" rel="noreferrer">LinkedIn</a></li>
      </ul>
    </main>
  )
}

export default IndexPage
