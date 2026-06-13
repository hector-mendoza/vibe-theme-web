import { useState } from 'react'
import { motion } from 'framer-motion'

const STEPS = [
  {
    step: '01',
    title: 'Open VS Code',
    detail: 'Launch VS Code or Cursor. Works with any version ≥ 1.120.',
  },
  {
    step: '02',
    title: 'Open Quick Open',
    detail: (
      <>
        Press <kbd className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-white/10 text-white">Ctrl+P</kbd>
        {' '}(Windows) or{' '}
        <kbd className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-white/10 text-white">⌘P</kbd>
        {' '}(Mac) to open Quick Open.
      </>
    ),
  },
  {
    step: '03',
    title: 'Run the command',
    detail: (
      <>
        Type{' '}
        <code className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/10 text-white">
          ext install HectorMendoza.vibe-theme
        </code>
        {' '}and press Enter.
      </>
    ),
  },
  {
    step: '04',
    title: 'Pick your theme',
    detail: 'Open Command Palette → Preferences: Color Theme → select any Vibe variant.',
  },
]

export default function InstallSection({ theme }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText('ext install HectorMendoza.vibe-theme').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="install" className="px-6 py-28 max-w-7xl mx-auto">
      <div className="reveal text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">
          Get Started
        </p>
        <h2 className="font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
          Up in 30 seconds.
        </h2>
        <p className="mt-4 text-white/40 max-w-md mx-auto leading-relaxed">
          No configuration. No tokens. No build step. Just install and code.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {STEPS.map((s, i) => (
          <div
            key={s.step}
            className="reveal rounded-2xl p-6 border"
            style={{
              borderColor: `${theme.accent}15`,
              background: `${theme.surface}60`,
              animationDelay: `${i * 0.06}s`,
            }}
          >
            <div
              style={{ color: theme.accent, borderColor: `${theme.accent}25` }}
              className="w-9 h-9 rounded-xl border flex items-center justify-center text-xs font-mono font-bold mb-4"
            >
              {s.step}
            </div>
            <h3 className="font-semibold text-white text-sm mb-2">{s.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{s.detail}</p>
          </div>
        ))}
      </div>

      {/* CTA card */}
      <motion.div
        className="reveal rounded-3xl p-10 border text-center overflow-hidden relative"
        style={{ borderColor: `${theme.accent}25`, background: `${theme.bg}` }}
      >
        {/* Ambient */}
        <div
          aria-hidden="true"
          style={{ background: theme.accent }}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        />

        <h3 className="relative font-bold text-white mb-3" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
          Ready to set your vibe?
        </h3>
        <p className="relative text-white/40 mb-8 max-w-sm mx-auto">
          Free. Open source. Available for VS Code and Cursor.
        </p>

        <div className="relative flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=HectorMendoza.vibe-theme"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: theme.accent }}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-black
                       hover:opacity-90 active:scale-95 transition-all duration-150 shadow-lg"
          >
            Install on Marketplace
          </a>
          <button
            onClick={copy}
            style={{ borderColor: `${theme.accent}30` }}
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-mono text-white/70
                       hover:text-white hover:bg-white/5 active:scale-95 transition-all duration-150"
          >
            {copied
              ? <><span style={{ color: theme.secondary }}>✓</span> Copied!</>
              : 'ext install HectorMendoza.vibe-theme'}
          </button>
        </div>

        <div className="relative mt-8 flex items-center justify-center gap-6 text-white/25 text-xs">
          <a
            href="https://github.com/hector-mendoza/vibe-theme"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            GitHub ↗
          </a>
          <span>·</span>
          <a
            href="https://github.com/hector-mendoza/vibe-theme/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Changelog ↗
          </a>
          <span>·</span>
          <a
            href="https://github.com/hector-mendoza/vibe-theme/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Issues ↗
          </a>
        </div>
      </motion.div>
    </section>
  )
}
