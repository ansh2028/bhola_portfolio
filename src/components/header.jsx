import React, { useState } from 'react'
import '../css/header.css'

const Header = ({ activeTab, setActiveTab }) => {
    const [nameText, setNameText] = useState('ANSH BHOLA')
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'resume', label: 'Resume' },
        { id: 'about', label: 'About Me' },
        { id: 'contact', label: 'Contact' }
    ]

    const handleNav = (id) => {
        if (setActiveTab) setActiveTab(id)
        setMenuOpen(false)
    }

    return (
        <div className='header'>
            <div className='header-brand'>
                <img id="logo" src="/passport photo.jpeg" alt="Logo" />
                <div className='brand-text'>
                    <h1
                        id='name'
                        onMouseEnter={() => setNameText('Crazzyyy Ideas means ANSH')}
                        onMouseLeave={() => setNameText('ANSH BHOLA')}
                        onClick={() => handleNav('home')}
                    >
                        {nameText}
                    </h1>
                    <span id='role'>Full Stack • Developer </span>
                </div>
            </div>

            {/* Desktop nav */}
            <ul id='navigation-links'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className={activeTab === item.id ? 'active' : ''}
                        onClick={() => handleNav(item.id)}
                    >
                        <a href={`#${item.id}`} onClick={(e) => e.preventDefault()}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Hamburger button (mobile only) */}
            <button
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                <span />
                <span />
                <span />
            </button>

            {/* Mobile dropdown */}
            {menuOpen && (
                <ul className='mobile-nav'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className={activeTab === item.id ? 'active' : ''}
                            onClick={() => handleNav(item.id)}
                        >
                            <a href={`#${item.id}`} onClick={(e) => e.preventDefault()}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Header