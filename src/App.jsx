import { useState, useEffect, useCallback } from 'react'
import { themes } from './data/themes'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ThemeGallery from './components/ThemeGallery'
import Features from './components/Features'
import InstallSection from './components/InstallSection'
import Footer from './components/Footer'

export default function App() {
  const [activeTheme, setActiveTheme] = useState(themes[0])
  const [loading, setLoading] = useState(true)

  const handleLoaderDone = useCallback(() => setLoading(false), [])

  useEffect(() => {
    document.body.style.transition = 'background-color 0.6s ease'
    document.body.style.backgroundColor = activeTheme.bg
  }, [activeTheme])

  return (
    <>
      {loading && <Loader onDone={handleLoaderDone} />}

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
    </>
  )
}
