import {
  SparklesIcon,
  EyeIcon,
  CodeIcon,
  TerminalIcon,
  DownloadIcon,
  GithubIcon,
} from '@animateicons/react/lucide'

const FEATURES = [
  {
    Icon: SparklesIcon,
    title: '2026 Design Trends',
    body: "Palettes sourced from the same design language powering the world's most acclaimed SaaS products, from SaaS dashboards to biophilic UIs.",
  },
  {
    Icon: EyeIcon,
    title: 'Tuned for Readability',
    body: 'Every contrast ratio is deliberate. Syntax tokens, UI chrome, and line highlights are balanced for 8+ hour sessions without eye strain.',
  },
  {
    Icon: CodeIcon,
    title: 'Full TextMate Coverage',
    body: 'Keyword, string, type, function, operator, comment — every grammar scope is hand-assigned for consistent highlighting across any language.',
  },
  {
    Icon: TerminalIcon,
    title: 'Works with Cursor',
    body: 'Fully compatible with Cursor, the AI-first fork of VS Code. Same install, same experience, same vibe.',
  },
  {
    Icon: DownloadIcon,
    title: 'One-click Install',
    body: 'Available on the VS Code Marketplace. No config, no tokens, no build step. Install and switch.',
  },
  {
    Icon: GithubIcon,
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
        {FEATURES.map(({ Icon, title, body }, i) => (
          <div
            key={title}
            className="reveal rounded-2xl p-6 border transition-all duration-300 group cursor-default"
            style={{
              background: `${theme.surface}80`,
              borderColor: `${theme.accent}15`,
              animationDelay: `${i * 0.05}s`,
            }}
          >
            <div className="mb-4 inline-block">
              <Icon size={22} color={theme.accent} />
            </div>
            <h3 className="font-semibold text-white mb-2 text-sm">{title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
