export default function Footer({ theme }) {
  return (
    <footer
      style={{ borderTopColor: `${theme.accent}12` }}
      className="border-t px-6 py-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
        {/* Left — logo + credit */}
        <div className="flex items-center gap-3">
          <a
            href="https://hectormendoza.me"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hector Mendoza personal site"
            className="opacity-50 hover:opacity-90 transition-opacity duration-200"
          >
            <img
              src="/logo.svg"
              alt="HM"
              width={22}
              height={22}
              style={{ filter: 'invert(1)' }}
            />
          </a>
          <span>
            Made by{' '}
            <a
              href="https://hectormendoza.me"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.accent }}
              className="font-medium hover:opacity-80 transition-opacity"
            >
              Hector Mendoza
            </a>
            {' '}· MIT License
          </span>
        </div>

        {/* Right — links */}
        <div className="flex items-center gap-5">
          <a
            href="https://hectormendoza.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Portfolio ↗
          </a>
          <a
            href="https://github.com/hector-mendoza/vibe-theme"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://github.com/hector-mendoza/vibe-theme/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Changelog ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
