import React, { useState, useEffect, useRef } from 'react'
import '../css/app.css'

import Header from './header.jsx'
import Home from './Home.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Resume from './Resume.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Triangle3DBackground from './Triangle3DBackground.jsx'

export const NAV_TABS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'about', label: 'About Me' },
  { id: 'contact', label: 'Contact' }
]

const App = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [slideDirection, setSlideDirection] = useState('right')

  const currentIndex = NAV_TABS.findIndex(tab => tab.id === activeTab)
  const prevTab = currentIndex > 0 ? NAV_TABS[currentIndex - 1] : null
  const nextTab = currentIndex < NAV_TABS.length - 1 ? NAV_TABS[currentIndex + 1] : null

  const changeTab = (targetTabId) => {
    if (targetTabId === activeTab) return
    const targetIndex = NAV_TABS.findIndex(tab => tab.id === targetTabId)
    if (targetIndex !== -1) {
      setSlideDirection(targetIndex > currentIndex ? 'right' : 'left')
      setActiveTab(targetTabId)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goToNext = () => {
    if (currentIndex < NAV_TABS.length - 1) {
      changeTab(NAV_TABS[currentIndex + 1].id)
    }
  }

  const goToPrev = () => {
    if (currentIndex > 0) {
      changeTab(NAV_TABS[currentIndex - 1].id)
    }
  }

  // Keyboard navigation for arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = document.activeElement?.tagName?.toUpperCase()
      if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement?.isContentEditable) {
        return
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex])

  // Mouse wheel and trackpad scroll navigation
  const isWheelLockedRef = useRef(false)
  const wheelAccumulatorRef = useRef(0)
  const wheelResetTimeoutRef = useRef(null)

  useEffect(() => {
    const handleWheel = (e) => {
      const tag = document.activeElement?.tagName?.toUpperCase()
      if (tag === 'INPUT' || tag === 'TEXTAREA' || document.activeElement?.isContentEditable) {
        return
      }

      if (isWheelLockedRef.current) return

      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = window.innerHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      const isScrollable = scrollHeight > clientHeight + 40
      const isAtTop = scrollTop <= 15
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 25

      wheelAccumulatorRef.current += e.deltaY

      clearTimeout(wheelResetTimeoutRef.current)
      wheelResetTimeoutRef.current = setTimeout(() => {
        wheelAccumulatorRef.current = 0
      }, 200)

      const threshold = 45

      if (wheelAccumulatorRef.current > threshold) {
        // Scrolling DOWN -> next page
        if (!isScrollable || isAtBottom) {
          if (currentIndex < NAV_TABS.length - 1) {
            isWheelLockedRef.current = true
            wheelAccumulatorRef.current = 0
            goToNext()
            setTimeout(() => {
              isWheelLockedRef.current = false
            }, 750)
          }
        }
      } else if (wheelAccumulatorRef.current < -threshold) {
        // Scrolling UP -> previous page
        if (!isScrollable || isAtTop) {
          if (currentIndex > 0) {
            isWheelLockedRef.current = true
            wheelAccumulatorRef.current = 0
            goToPrev()
            setTimeout(() => {
              isWheelLockedRef.current = false
            }, 750)
          }
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => {
      window.removeEventListener('wheel', handleWheel)
      clearTimeout(wheelResetTimeoutRef.current)
    }
  }, [currentIndex])

  // Touch swipe support for mobile
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = e.changedTouches[0].clientY - touchStartY.current

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
      if (deltaX < 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }
    touchStartX.current = null
    touchStartY.current = null
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={changeTab} />
      case 'projects':
        return <Projects />
      case 'skills':
        return <Skills />
      case 'resume':
        return <Resume />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return <Home setActiveTab={changeTab} />
    }
  }

  return (
    <div 
      className={`app-root ${activeTab === 'home' ? 'home-active' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Triangle3DBackground />
      <Header activeTab={activeTab} setActiveTab={changeTab} />

      {/* Floating Left Arrow Button */}
      {prevTab && (
        <button
          className='nav-arrow-btn nav-arrow-left'
          onClick={goToPrev}
          aria-label={`Previous: ${prevTab.label}`}
          title={`Previous: ${prevTab.label} (Left Arrow)`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className='arrow-tooltip tooltip-left'>
            <span className='arrow-key-hint'>←</span> {prevTab.label}
          </span>
        </button>
      )}

      {/* Floating Right Arrow Button */}
      {nextTab && (
        <button
          className='nav-arrow-btn nav-arrow-right'
          onClick={goToNext}
          aria-label={`Next: ${nextTab.label}`}
          title={`Next: ${nextTab.label} (Right Arrow)`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className='arrow-tooltip tooltip-right'>
            {nextTab.label} <span className='arrow-key-hint'>→</span>
          </span>
        </button>
      )}

      <main className='app-container'>
        <div
          key={activeTab}
          className={`page-slide-wrapper ${slideDirection === 'right' ? 'slide-from-right' : 'slide-from-left'}`}
        >
          {renderTabContent()}
        </div>
      </main>
    </div>
  )
}

export default App