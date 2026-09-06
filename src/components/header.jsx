import React, { useState } from 'react'
import '../css/header.css'

const Header = ({ activeTab, setActiveTab }) => {
    const [nameText, setNameText] = useState('ANSH BHOLA')

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
       
        { id: 'resume', label: 'Resume' },
        { id: 'about', label: 'About Me' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <div className='header'>
            <div className='header-brand'>
                <img id="logo" src="/passport photo.jpeg" alt="Logo" />
                <div className='brand-text'>
                    <h1
                        id='name'
                        onMouseEnter={() => setNameText('Crazzyyy Ideas means ANSH')}
                        onMouseLeave={() => setNameText('ANSH BHOLA')}
                        onClick={() => setActiveTab && setActiveTab('home')}
                    >
                        {nameText}
                    </h1>
                    <span id='role'>Full Stack • Developer </span>
                </div>
            </div>
            <ul id='navigation-links'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className={activeTab === item.id ? 'active' : ''}
                        onClick={() => setActiveTab && setActiveTab(item.id)}
                    >
                        <a href={`#${item.id}`} onClick={(e) => e.preventDefault()}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Header