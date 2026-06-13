export default function Footer({ theme }) {
  return (
    <footer
      style={{ borderTopColor: `${theme.accent}12` }}
      className="border-t px-6 py-10 text-center text-white/25 text-xs"
    >
      <p>
        Made by{' '}
        <a
          href="https://github.com/hector-mendoza"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.accent }}
          className="hover:opacity-80 transition-opacity font-medium"
        >
          Hector Mendoza
        </a>
        {' '}· MIT License ·{' '}
        <a
          href="https://github.com/hector-mendoza/vibe-theme"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/50 transition-colors"
        >
          GitHub
        </a>
      </p>
    </footer>
  )
}
