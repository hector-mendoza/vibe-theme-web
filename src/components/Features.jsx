const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.5 8H20l-5.3 3.9 2 6.1L11 14l-5.7 4 2-6.1L2 8h6.5L11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: '2026 Design Trends',
    body: 'Palettes sourced from the same design language powering the world\'s most acclaimed SaaS products, from SaaS dashboards to biophilic UIs.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Tuned for Readability',
    body: 'Every contrast ratio is deliberate. Syntax tokens, UI chrome, and line highlights are balanced for 8+ hour sessions without eye strain.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11h8M7 7h4M7 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Full TextMate Coverage',
    body: 'Keyword, string, type, function, operator, comment — every grammar scope is hand-assigned for consistent highlighting across any language.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 6h16M3 11h10M3 16h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Works with Cursor',
    body: 'Fully compatible with Cursor, the AI-first fork of VS Code. Same install, same experience, same vibe.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M19 11H3M11 3l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'One-click Install',
    body: 'Available on the VS Code Marketplace. No config, no tokens, no build step. Install and switch.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Open Source',
    body: 'Every token is visible on GitHub. Fork it, tweak it, ship your own variant. MIT licensed.',
  },
]

export default function Features({ theme }) {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="reveal text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">
          Why Vibe
        </p>
        <h2 className="font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
          Built with intention.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className="reveal rounded-2xl p-6 border transition-all duration-300 hover:border-opacity-60 group"
            style={{
              background: `${theme.surface}80`,
              borderColor: `${theme.accent}15`,
              animationDelay: `${i * 0.05}s`,
            }}
          >
            <div
              style={{ color: theme.accent }}
              className="mb-4 transition-transform duration-200 group-hover:scale-110 inline-block"
            >
              {f.icon}
            </div>
            <h3 className="font-semibold text-white mb-2 text-sm">{f.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
