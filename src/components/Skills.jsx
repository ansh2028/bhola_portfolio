import React from 'react'

const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend Development",
            skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design", "Vite"]
        },
        {
            category: "Backend & Databases",
            skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "SQL"]
        },
        {
            category: "Tools & Workflow",
            skills: ["Git", "GitHub", "VS Code", "Postman", "npm / yarn"]
        }
    ]

    return (
        <section className="tab-content skills-section">
            <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>
            <p className="section-subtitle">Technologies and tools I use to bring ideas to life.</p>

            <div className="skills-grid">
                {skillCategories.map((cat, idx) => (
                    <div className="skill-card" key={idx}>
                        <h3>{cat.category}</h3>
                        <div className="skill-badges">
                            {cat.skills.map((skill, sIdx) => (
                                <span className="skill-badge" key={sIdx}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
