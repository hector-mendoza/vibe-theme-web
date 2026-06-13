import { motion } from 'framer-motion'
import CodeWindow from './CodeWindow'

export default function ThemeGallery({ themes, activeTheme, onThemeChange }) {
  return (
    <section id="themes" className="px-6 py-28 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="reveal text-center mb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">
          All Themes
        </p>
        <h2 className="font-bold text-white leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Eight palettes,{' '}
          <span className="text-white/40">one vibe.</span>
        </h2>
        <p className="mt-4 text-white/40 max-w-lg mx-auto leading-relaxed">
          Each theme tells a visual story — from arid desert canyons to near-void AI aesthetics.
          Pick the one that matches your mood.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {themes.map((theme, i) => {
          const isActive = activeTheme.id === theme.id
          return (
            <motion.article
              key={theme.id}
              className="reveal"
              style={{ animationDelay: `${i * 0.04}s` }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => onThemeChange(theme)}
                className="w-full text-left group"
                aria-label={`Preview ${theme.label} theme`}
              >
                <div
                  style={{
                    borderColor: isActive ? theme.accent : `${theme.accent}20`,
                    boxShadow: isActive ? `0 0 40px ${theme.accent}20, 0 0 0 1px ${theme.accent}40` : undefined,
                  }}
                  className="rounded-2xl border overflow-hidden transition-all duration-500"
                >
                  {/* Code preview */}
                  <div className="pointer-events-none">
                    <CodeWindow theme={theme} />
                  </div>

                  {/* Card footer */}
                  <div
                    style={{ background: theme.surface, borderTopColor: `${theme.accent}15` }}
                    className="flex items-center justify-between px-5 py-4 border-t"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          style={{ background: theme.gradient }}
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        />
                        <span style={{ color: theme.text }} className="font-semibold text-sm">
                          {theme.label}
                        </span>
                        {isActive && (
                          <span
                            style={{ color: theme.accent, borderColor: `${theme.accent}40` }}
                            className="text-[10px] font-medium border rounded-full px-2 py-0.5 leading-none"
                          >
                            active
                          </span>
                        )}
                      </div>
                      <p style={{ color: `${theme.text}60` }} className="text-xs">
                        {theme.tagline}
                      </p>
                    </div>
                    <div
                      style={{ color: theme.accent }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-medium"
                    >
                      Preview →
                    </div>
                  </div>
                </div>
              </button>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
