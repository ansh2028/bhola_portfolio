import React from "react";
import "../css/resume.css";

const Resume = () => {
  return (
    <section className="tab-content resume-section">

      {/* Header */}
      <div className="resume-header">
        <h2 className="resume-title">
          My <span>Resume</span>
        </h2>

        <p className="section-subtitle">
          A summary of my education, experience, skills, and ambitions.
        </p>
      </div>

      {/* Education */}
      <div className="resume-block">
        <h3 className="resume-heading">
          <span className="heading-icon">🎓</span>
          Education
        </h3>

        <div className="resume-card">
          <div className="card-top">
            <div>
              <h4>Bachelor of Technology in Computer Science</h4>
              <span className="resume-date">2022 – Present</span>
            </div>

            <span className="status-badge">4th Year</span>
          </div>

          <p>Gurugram University</p>

          <p className="card-description">
            Currently pursuing my B.Tech in Computer Science with a focus on
            software development, web technologies, backend systems, AI, and
            machine learning.
          </p>

          <div className="card-tags">
            <span>CGPA: 7.5</span>
            <span>Computer Science</span>
            <span>Software Development</span>
          </div>
        </div>

        <div className="resume-card">
          <div className="card-top">
            <div>
              <h4>Class 12th — Science</h4>
              <span className="resume-date">Completed</span>
            </div>

            <span className="score-badge">91%</span>
          </div>

          <p>SBS School, Karnal</p>

          <p className="card-description">
            Completed senior secondary education with a strong academic
            foundation in science and technology.
          </p>
        </div>
      </div>


      {/* Experience */}
      <div className="resume-block">
        <h3 className="resume-heading">
          <span className="heading-icon">💻</span>
          Experience
        </h3>

        <div className="resume-card">
          <div className="card-top">
            <div>
              <h4>Tech Team Member & Head of Content Writing</h4>
              <span className="resume-date">SkillZen Community</span>
            </div>

            <span className="status-badge">Active</span>
          </div>

          <p className="card-description">
            Working as a member of the Tech Team at SkillZen Community while
            also leading the Content Writing Team.
          </p>

          <ul className="resume-list">
            <li>
              Working on several pages and features of the SkillZen website.
            </li>

            <li>
              Contributing to the development and improvement of the website.
            </li>

            <li>
              Collaborating with team members on technical projects and
              community initiatives.
            </li>

            <li>
              Leading the Content Writing Team and coordinating content
              creation.
            </li>

            <li>
              Planning, reviewing, and improving technical and community
              content.
            </li>
          </ul>
        </div>
      </div>


      {/* Technical Skills */}
      <div className="resume-block">
        <h3 className="resume-heading">
          <span className="heading-icon">⚡</span>
          Technical Skills
        </h3>

        <div className="skills-grid">

          <div className="skill-card">
            <span className="skill-number">01</span>
            <h4>Frontend</h4>
            <p>
              React.js, JavaScript, HTML5, CSS3, Responsive Design
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-number">02</span>
            <h4>Backend</h4>
            <p>
              Node.js, Express.js, REST APIs, Authentication
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-number">03</span>
            <h4>Database</h4>
            <p>
              MongoDB, SQL, Database Design
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-number">04</span>
            <h4>AI / ML</h4>
            <p>
              Artificial Intelligence, Machine Learning, Experimentation
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-number">05</span>
            <h4>Tools</h4>
            <p>
              Git, GitHub, Docker, Firebase
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-number">06</span>
            <h4>Problem Solving</h4>
            <p>
              Debugging, Logical Thinking, Algorithms, System Building
            </p>
          </div>

        </div>
      </div>


      {/* Achievements */}
      <div className="resume-block">
        <h3 className="resume-heading">
          <span className="heading-icon">🏆</span>
          Academic Highlights
        </h3>

        <div className="achievement-grid">

          <div className="achievement-card">
            <div className="achievement-number">91%</div>

            <div>
              <h4>Class 12th</h4>
              <p>SBS School, Karnal</p>
            </div>
          </div>

          <div className="achievement-card">
            <div className="achievement-number">7.5</div>

            <div>
              <h4>Current CGPA</h4>
              <p>Gurugram University</p>
            </div>
          </div>

        </div>
      </div>


      {/* Languages */}
      <div className="resume-block">
        <h3 className="resume-heading">
          <span className="heading-icon">🌐</span>
          Languages
        </h3>

        <div className="language-list">

          <div>
            <span>English</span>
            <b>Fluent</b>
          </div>

          <div>
            <span>Hindi</span>
            <b>Native</b>
          </div>

          <div>
            <span>Urdu</span>
            <b>Proficient</b>
          </div>

          <div>
            <span>Punjabi</span>
            <b>Proficient</b>
          </div>

          <div>
            <span>Russian</span>
            <b>Learning</b>
          </div>

        </div>
      </div>


      {/* Career Goal */}
      <div className="resume-block">
        <h3 className="resume-heading">
          <span className="heading-icon">🎯</span>
          Beyond Code
        </h3>

        <div className="goal-card">

          <h4>Future Goal</h4>

          <p>
            Alongside my journey in technology, I aspire to pursue a career
            in the Civil Services and contribute to the country. I believe
            technology, leadership, and public service can come together to
            create meaningful impact.
          </p>

          <div className="goal-line">
            <span>LEARN</span>
            <i>→</i>
            <span>BUILD</span>
            <i>→</i>
            <span>SERVE</span>
            <i>→</i>
            <span>IMPACT</span>
          </div>

        </div>
      </div>


      {/* Download */}
      <div className="resume-download">
        <a href="/ansh_resume.pdf" download>
          Download Full Resume <span>↓</span>
        </a>
      </div>

    </section>
  );
};

export default Resume;