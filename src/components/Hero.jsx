import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import CodeWindow from './CodeWindow'

export default function Hero({ theme, themes, onThemeChange }) {
  const [copied, setCopied] = useState(false)

  function copyInstall() {
    navigator.clipboard.writeText('ext install HectorMendoza.vibe-theme').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Ambient glow blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          key={theme.id + '-blob1'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ background: theme.accent }}
          className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-[160px] opacity-15"
        />
        <motion.div
          key={theme.id + '-blob2'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          style={{ background: theme.secondary }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[180px] opacity-10"
        />
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ borderColor: `${theme.accent}35`, color: theme.accent }}
        className="mb-8 flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
      >
        <span
          style={{ background: theme.accent }}
          className="w-1.5 h-1.5 rounded-full"
        />
        8 dark themes · v0.0.2 · free forever
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-center font-bold tracking-tight leading-[1.05] max-w-4xl"
        style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
      >
        Code in your{' '}
        <AnimatePresence mode="wait">
          <motion.span
            key={theme.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            style={{ background: theme.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            vibe.
          </motion.span>
        </AnimatePresence>
      </motion.h1>

      {/* Sub */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 text-center text-white/50 max-w-xl leading-relaxed"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
      >
        A family of 8 meticulously crafted dark themes for VS Code & Cursor —
        built around the design trends that define 2026.
      </motion.p>

      {/* CTA row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm sm:max-w-none"
      >
        <a
          href="https://marketplace.visualstudio.com/items?itemName=HectorMendoza.vibe-theme"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: theme.accent }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3
                     text-sm font-semibold text-black hover:opacity-90 active:scale-95 transition-all duration-150 shadow-lg"
        >
          Install from Marketplace
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <button
          onClick={copyInstall}
          style={{ borderColor: `${theme.accent}30`, color: 'white' }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border
                     px-5 py-3 text-xs sm:text-sm font-mono hover:bg-white/5 active:scale-95 transition-all duration-150"
        >
          {copied ? '✓ Copied!' : 'ext install HectorMendoza.vibe-theme'}
        </button>
      </motion.div>

      {/* Theme pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Pick a theme to preview"
      >
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => onThemeChange(t)}
            style={
              theme.id === t.id
                ? { background: t.accent, color: '#000', boxShadow: `0 0 24px ${t.accent}55` }
                : { borderColor: `${t.accent}30`, color: `${t.accent}cc` }
            }
            className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-all duration-300
                        hover:scale-105 active:scale-95 ${theme.id === t.id ? '' : 'bg-transparent hover:bg-white/5'}`}
            aria-pressed={theme.id === t.id}
          >
            {t.label}
          </button>
        ))}
      </motion.div>

      {/* Code window preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 w-full max-w-xl"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <CodeWindow theme={theme} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-20 flex flex-col items-center gap-2 text-white/25 text-xs"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        scroll to explore
      </motion.div>
    </section>
  )
}
