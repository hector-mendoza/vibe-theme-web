import { motion } from 'framer-motion'

export default function Nav({ accent }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ background: 'rgba(9,9,11,0.72)', borderBottomColor: `${accent}18` }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5
                 border-b backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-3">
        <span
          style={{ background: accent }}
          className="w-2 h-2 rounded-full"
          aria-hidden="true"
        />
        <span className="font-semibold text-sm tracking-wide text-white/90">
          Vibe Theme
        </span>
      </div>

      <div className="flex items-center gap-6 text-sm text-white/50">
        <a
          href="#themes"
          className="hover:text-white/90 transition-colors duration-200"
        >
          Themes
        </a>
        <a
          href="#install"
          className="hover:text-white/90 transition-colors duration-200"
        >
          Install
        </a>
        <a
          href="https://github.com/hector-mendoza/vibe-theme"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/90 transition-colors duration-200"
        >
          GitHub
        </a>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=HectorMendoza.vibe-theme"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: accent, borderColor: `${accent}40` }}
          className="px-4 py-1.5 rounded-full border text-xs font-medium
                     hover:opacity-80 transition-opacity duration-200"
        >
          Get it free
        </a>
      </div>
    </motion.nav>
  )
}
