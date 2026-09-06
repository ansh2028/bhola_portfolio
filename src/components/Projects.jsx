import React from 'react'

const Projects = () => {
    const projectList = [
        {
            title: "AI-Powered Portfolio",
            description: "Modern, responsive portfolio website built with React, Vite, and custom CSS animations.",
            tech: ["React", "Vite", "CSS3", "JavaScript"],
            link: "#"
        },
        {
            title: "Full-Stack Web App",
            description: "End-to-end web application with secure authentication, API integrations, and database management.",
            tech: ["Node.js", "Express", "MongoDB", "React"],
            link: "#"
        },
        {
            title: "Cloud Analytics Dashboard",
            description: "Real-time metrics visualizer with dynamic charts and responsive UI components.",
            tech: ["React", "Chart.js", "TailwindCSS", "REST API"],
            link: "#"
        }
    ]

    return (
        <section className="tab-content projects-section">
            <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
            <p className="section-subtitle">A showcase of the work and experiments I've built.</p>

            <div className="projects-grid">
                {projectList.map((proj, idx) => (
                    <div className="project-card" key={idx}>
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                        <div className="tech-tags">
                            {proj.tech.map((t, i) => (
                                <span className="tag" key={i}>{t}</span>
                            ))}
                        </div>
                        <a href={proj.link} className="project-link">View Project →</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
