import React, { useState } from 'react'
import '../css/contact.css'

const Contact = () => {
  const [showNumber, setShowNumber] = useState(false)

  return (
    <section className='contact-section'>
      <div className='contact-heading'>
        <h1>Contact with me</h1>
        <p className='contact-subtext'>Reach out through any platform below</p>
      </div>

      <div className='contact-grid'>

        <div 
          className='contact-card' 
          id='link-call' 
          onClick={() => setShowNumber(!showNumber)}
          style={{ cursor: 'pointer' }}
        >
          <div className='icon-circle'>
            <img src="/call.png" alt="Call" />
          </div>
          <span>{showNumber ? "9588552012" : "Call"}</span>
        </div>

        <a href="https://wa.me/9588552012" className='contact-card' id='link-whatsapp' target='_blank' rel='noreferrer'>
          <div className='icon-circle'>
            <img src="/whatsapp.png" alt="WhatsApp" />
          </div>
          <span>WhatsApp</span>
        </a>

        <a href="https://t.me/https_bhola_com" className='contact-card' id='link-telegram' target='_blank' rel='noreferrer'>
          <div className='icon-circle'>
            <img src="/telegramphoto.png" alt="Telegram" />
          </div>
          <span>Telegram</span>
        </a>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anshbhola10s@gmail.com&su=Hello" className='contact-card' id='link-mail' target='_blank' rel='noreferrer'>
          <div className='icon-circle'>
            <img src="/mail.png" alt="Mail" />
          </div>
          <span>Email</span>
        </a>

        <a href="https://www.linkedin.com/in/ansh-bhola-595a6a2b5?utm_source=share_via&utm_content=profile&utm_medium=member_android" className='contact-card' id='link-linkedin' target='_blank' rel='noreferrer'>
          <div className='icon-circle'>
            <img src="/linkedin.png" alt="LinkedIn" />
          </div>
          <span>LinkedIn</span>
        </a>

        <a href="https://github.com/ansh2028" className='contact-card' id='link-github' target='_blank' rel='noreferrer'>
          <div className='icon-circle'>
            <img src="/github.png" alt="GitHub" />
          </div>
          <span>GitHub</span>
        </a>

      </div>
    </section>
  )
}

export default Contact