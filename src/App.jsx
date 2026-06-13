import { useState, useEffect } from 'react'
import { themes } from './data/themes'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ThemeGallery from './components/ThemeGallery'
import Features from './components/Features'
import InstallSection from './components/InstallSection'
import Footer from './components/Footer'

export default function App() {
  const [activeTheme, setActiveTheme] = useState(themes[0])

  // Sync body background to active theme for seamless full-page feel
  useEffect(() => {
    document.body.style.transition = 'background-color 0.6s ease'
    document.body.style.backgroundColor = activeTheme.bg
  }, [activeTheme])

  return (
    <div style={{ color: activeTheme.text }}>
      <Nav accent={activeTheme.accent} />
      <Hero
        theme={activeTheme}
        themes={themes}
        onThemeChange={setActiveTheme}
      />
      <ThemeGallery
        themes={themes}
        activeTheme={activeTheme}
        onThemeChange={setActiveTheme}
      />
      <Features theme={activeTheme} />
      <InstallSection theme={activeTheme} />
      <Footer theme={activeTheme} />
    </div>
  )
}
