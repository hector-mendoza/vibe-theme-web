import { motion } from 'framer-motion'

export default function Nav({ accent }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ background: 'rgba(9,9,11,0.72)', borderBottomColor: `${accent}18` }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-4
                 border-b backdrop-blur-xl"
      aria-label="Main navigation"
    >
      {/* Left — HM logo + project name */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <a
          href="https://hectormendoza.me"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hector Mendoza — personal website"
          className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
        >
          <img
            src="/logo.svg"
            alt="HM"
            width={26}
            height={26}
            style={{ filter: 'invert(1)' }}
          />
        </a>

        <div
          aria-hidden="true"
          style={{ backgroundColor: `${accent}25` }}
          className="w-px h-4 flex-shrink-0"
        />

        <div className="flex items-center gap-2 min-w-0">
          <span
            style={{ background: accent }}
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            aria-hidden="true"
          />
          <span className="font-semibold text-sm tracking-wide text-white/90 whitespace-nowrap">
            Vibe Theme
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
        {/* Desktop-only text links */}
        <div className="hidden sm:flex items-center gap-6 text-sm text-white/50">
          <a href="#themes" className="hover:text-white/90 transition-colors duration-200">
            Themes
          </a>
          <a href="#install" className="hover:text-white/90 transition-colors duration-200">
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
        </div>

        {/* CTA — always visible */}
        <a
          href="https://marketplace.visualstudio.com/items?itemName=HectorMendoza.vibe-theme"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: accent, borderColor: `${accent}40` }}
          className="px-3 sm:px-4 py-1.5 rounded-full border text-xs font-medium whitespace-nowrap
                     hover:opacity-80 transition-opacity duration-200"
        >
          Get it free
        </a>
      </div>
    </motion.nav>
  )
}
