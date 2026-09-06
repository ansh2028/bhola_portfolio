import React, { useState } from 'react'
import '../css/about.css'

const formalParagraphs = [
  "I’m a relentlessly curious developer who enjoys pushing technology beyond the ordinary and turning ambitious ideas into real, working experiences. Currently in my fourth year at Gurugram University with a 7.5 CGPA, I’ve built my foundation through a strong academic journey, including a 91% score in Class 12 from SBS School, Karnal.",
  "I’m fluent in English, a native Hindi speaker, proficient in Urdu and Punjabi, and currently learning Russian.",
  "I don’t just write code—I experiment, break things, rebuild them better, and occasionally create things that probably shouldn’t work but somehow do. I’m driven by curiosity, obsessed with learning, and always looking for the next challenging problem worth solving.",
  "I’m currently exploring AI, machine learning, and backend development—and figuring out how to make them do weird, unexpected, and hopefully useful things.",
  "In short: I build, I break, I learn, and I build again."
]

const unfilteredParagraphs = [
  "Yo, I’m basically that crazy-ass developer who looks at a problem and goes, “Yeah, I can probably fuck with that.”",
  "I’m a fourth-year student at Gurugram University with a 7.5 CGPA, and I scored 91% in Class 12 from SBS School, Karnal. But honestly, numbers are just numbers. I’d rather spend my time building some insane shit, breaking it, staring at the screen like an idiot, fixing it, and then pretending I knew exactly what I was doing.",
  "I speak English fluently, Hindi is my native language, I know Urdu and Punjabi, and now I’m learning Russian—because apparently four languages weren’t enough.",
  "I’m exploring AI, machine learning, and backend development, constantly experimenting with new ideas and trying to make technology do weird, unexpected, and hopefully useful things. I love that “this probably shouldn’t work” moment right before I somehow make it work.",
  "And yeah, I’ve got another big goal too—I want to join the civil services and serve the country. I’ve already cleared the NDA written exam, so I guess I’m not just messing around with code.",
  "I’m not here to write boring code and call it a day. I’m here to build crazy things, solve ridiculous problems, learn whatever the hell interests me, and keep getting better.",
  "So yeah—welcome to my portfolio, motherfucker. Let’s build something awesome."
]

const About = () => {
  const [isUnfiltered, setIsUnfiltered] = useState(false)
  const paragraphs = isUnfiltered ? unfilteredParagraphs : formalParagraphs

  return (
    <section className="tab-content about-section">
      <div className="about-top-bar">
        <div className="about-header-titles">
          <h2 className="about-title">About Me</h2>
          <p className="section-subtitle">
            {isUnfiltered ? "The unfiltered, real-talk version" : "A glimpse into who I am and what drives me"}
          </p>
        </div>

        {/* Mode Toggle Switch */}
        <div className="mode-toggle-container">
          <div className="mode-toggle-pill">
            <div className={`pill-glider ${isUnfiltered ? 'glider-right' : 'glider-left'}`} />
            <button
              type="button"
              className={`pill-btn ${!isUnfiltered ? 'pill-active' : ''}`}
              onClick={() => setIsUnfiltered(false)}
            >
              Formal
            </button>
            <button
              type="button"
              className={`pill-btn ${isUnfiltered ? 'pill-active savage' : ''}`}
              onClick={() => setIsUnfiltered(true)}
            >
              <span className="element-badge">Br</span>eaking <span className="element-badge">Ba</span>d
            </button>
          </div>
        </div>
      </div>

      <div className="about-main-layout">
        <div className="about-content">
          {paragraphs.map((text, idx) => (
            <p
              key={idx}
              className={`about-para ${idx === paragraphs.length - 1 ? 'quote-para' : ''}`}
            >
              {text}
            </p>
          ))}
        </div>

        <div className={`about-id-card ${isUnfiltered ? 'savage-mode' : ''}`}>
          <img src="/id.png" alt="Ansh Bhola ID Card" />
        </div>
      </div>
    </section>
  )
}

export default About
