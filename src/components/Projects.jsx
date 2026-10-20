import React, { useState } from 'react'

const projectList = [
    {
        id: "legal-ai",
        role: "Full-Stack Developer",
        title: "LegalAI — Indian Legal Assistant",
        tagline: "AI-powered chat for understanding Indian law in plain language.",
        description: "Built a full-stack AI legal assistant enabling users to understand complex Indian legal procedures (IPC/BNS/CrPC) through a real-time streaming chat interface.",
        bullets: [
            "Integrated Google Gemini AI (gemini-2.0-flash) with SSE streaming for low-latency legal explanations — FIR interpretation, bail eligibility & rights analysis.",
            "PDF document analysis via pdf-parse + Multer: drag-and-drop FIRs, court notices, and contracts for AI-driven contextual breakdown.",
            "Secure JWT authentication with bcrypt password hashing and protected API routes.",
            "ChatGPT-inspired responsive UI with one-click copy, quick-action prompts, deployed via Vite production build."
        ],
        tech: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Google Gemini AI", "SSE", "JWT", "Multer", "pdf-parse"],
        github: "https://github.com/ansh2028",
        video: "/LegalAi.mp4"
    },
    {
        id: "decor-joy",
        role: "Frontend Developer — Client Project",
        title: "Decor Joy Gurgaon",
        tagline: "Production React frontend for a real Gurugram event decoration business.",
        description: "Developed a production-ready React 19 + Vite frontend for a Gurugram-based event decoration business with mobile-first UI and advanced frontend features.",
        bullets: [
            "9 fully functional pages: multi-step inquiry form, product catalogue with live search autocomplete, filterable gallery & SEO-optimized locality landing pages.",
            "TanStack Query v5 for server state management with caching, background refetching & optimistic updates; Axios for RESTful API communication.",
            "Wishlist system (Context API + localStorage), WhatsApp CTA, cookie consent banner, toast notifications & Sentry error monitoring.",
            "SSR-readiness via entry-server.jsx, static prerender pipeline & per-page dynamic <meta> tags for improved SEO."
        ],
        tech: ["React 19", "Vite", "React Router v7", "TanStack Query v5", "Axios", "Vanilla CSS", "Node.js", "Express", "Sentry"],
        github: "https://github.com/ansh2028",
        // ▶ DROP YOUR VIDEO PATH HERE when ready, e.g.: video: "/videos/decorjoy-demo.mp4"
        video: "/decor_site.mp4"
    },
    {
        id: "resume-ai",
        role: "Full-Stack Developer",
        title: "ResumeAI — AI Resume & Interview Prep",
        tagline: "AI-powered resume tailoring and interview preparation platform.",
        description: "Built a full-stack AI resume tool with feature-driven architecture, generating ATS-optimized resumes and personalized interview prep reports using Google Gemini.",
        bullets: [
            "Gemini AI with structured JSON schema (Zod-style enforcement) generates match scores, technical/behavioral Q&As, skill gap analysis & day-by-day prep roadmaps.",
            "AI resume tailoring pipeline: Gemini produces ATS-optimized HTML resumes → Puppeteer renders downloadable A4 PDFs via headless browser.",
            "Multi-model AI fallback system auto-switches between Gemini versions on 503/failure for high availability.",
            "Secure auth: JWT in HTTP-only cookies, bcrypt hashing, token blacklisting in MongoDB to fully invalidate sessions & prevent replay attacks."
        ],
        tech: ["React 19", "Node.js", "Express", "MongoDB Atlas", "Google Gemini AI", "Puppeteer", "JWT", "bcrypt", "Zod"],
        github: "https://github.com/ansh2028",
        video: "/ResumeAi.mp4"
    }
]

const ProjectCard = ({ proj }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="project-card" id={`project-${proj.id}`}>
            {/* Role badge */}
            <span className="project-role-badge">{proj.role}</span>

            {/* Video / placeholder */}
            <div className="project-video-wrap">
                {proj.video ? (
                    <video
                        className="project-video"
                        src={proj.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : (
                    <div className="project-video-placeholder">
                        <span className="video-placeholder-icon">▶</span>
                        <span className="video-placeholder-text">Demo video coming soon</span>
                    </div>
                )}
            </div>

            <h3>{proj.title}</h3>
            <p className="project-tagline">{proj.tagline}</p>
            <p className="project-desc">{proj.description}</p>

            {/* Collapsible bullets */}
            <ul className={`project-bullets ${expanded ? 'expanded' : ''}`}>
                {proj.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                ))}
            </ul>
            <button
                className="project-toggle-btn"
                onClick={() => setExpanded(e => !e)}
                aria-expanded={expanded}
            >
                {expanded ? '↑ Show less' : '↓ Show highlights'}
            </button>

            <div className="tech-tags">
                {proj.tech.map((t, i) => (
                    <span className="tag" key={i}>{t}</span>
                ))}
            </div>

            <div className="project-actions">
                <a href={proj.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub →
                </a>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section className="tab-content projects-section">
            <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
            <p className="section-subtitle">Real-world full-stack & AI products I've designed, built, and shipped.</p>

            <div className="projects-grid">
                {projectList.map((proj) => (
                    <ProjectCard key={proj.id} proj={proj} />
                ))}
            </div>
        </section>
    )
}

export default Projects
