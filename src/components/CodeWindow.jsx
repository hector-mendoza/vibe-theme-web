import { memo } from 'react'

const SNIPPETS = {
  'mood-mode-dark': [
    { type: 'keyword', text: 'const ' },
    { type: 'fn', text: 'dashboard' },
    { type: 'plain', text: ' = ' },
    { type: 'keyword', text: 'async ' },
    { type: 'paren', text: '() => {' },
    { type: 'newline' },
    { type: 'indent' },
    { type: 'keyword', text: 'const ' },
    { type: 'plain', text: 'data ' },
    { type: 'op', text: '= ' },
    { type: 'keyword', text: 'await ' },
    { type: 'fn', text: 'fetch' },
    { type: 'paren', text: '(' },
    { type: 'string', text: '"/api/metrics"' },
    { type: 'paren', text: ')' },
    { type: 'newline' },
    { type: 'indent' },
    { type: 'keyword', text: 'return ' },
    { type: 'fn', text: 'render' },
    { type: 'paren', text: '(' },
    { type: 'plain', text: 'data' },
    { type: 'paren', text: ')' },
    { type: 'newline' },
    { type: 'paren', text: '}' },
  ],
  'ai-iridescence': [
    { type: 'keyword', text: 'interface ' },
    { type: 'type', text: 'AIResponse' },
    { type: 'paren', text: ' {' },
    { type: 'newline' },
    { type: 'indent' },
    { type: 'plain', text: 'model' },
    { type: 'op', text: ': ' },
    { type: 'type', text: 'string' },
    { type: 'newline' },
    { type: 'indent' },
    { type: 'plain', text: 'tokens' },
    { type: 'op', text: ': ' },
    { type: 'type', text: 'number' },
    { type: 'newline' },
    { type: 'indent' },
    { type: 'plain', text: 'iridescent' },
    { type: 'op', text: ': ' },
    { type: 'type', text: 'boolean' },
    { type: 'newline' },
    { type: 'paren', text: '}' },
  ],
  default: [
    { type: 'comment', text: '// install & apply in seconds' },
    { type: 'newline' },
    { type: 'keyword', text: 'import ' },
    { type: 'paren', text: '{' },
    { type: 'plain', text: ' theme ' },
    { type: 'paren', text: '}' },
    { type: 'keyword', text: ' from ' },
    { type: 'string', text: '"vibe-theme"' },
    { type: 'newline' },
    { type: 'newline' },
    { type: 'keyword', text: 'const ' },
    { type: 'plain', text: 'editor ' },
    { type: 'op', text: '= ' },
    { type: 'keyword', text: 'new ' },
    { type: 'fn', text: 'Editor' },
    { type: 'paren', text: '({' },
    { type: 'newline' },
    { type: 'indent' },
    { type: 'plain', text: 'theme' },
    { type: 'op', text: ': ' },
    { type: 'string', text: '"vibe"' },
    { type: 'newline' },
    { type: 'paren', text: '})' },
  ],
}

function tokenColor(type, accent, secondary, text, muted) {
  switch (type) {
    case 'keyword': return accent
    case 'fn': return secondary
    case 'string': return '#86efac'
    case 'comment': return muted
    case 'type': return secondary
    case 'op': return `${text}90`
    case 'paren': return `${text}cc`
    default: return text
  }
}

const CodeWindow = memo(function CodeWindow({ theme }) {
  const { bg, surface, accent, secondary, text, muted, label } = theme
  const tokens = SNIPPETS[theme.id] || SNIPPETS.default

  return (
    <div
      style={{ background: bg, borderColor: `${accent}20` }}
      className="rounded-2xl overflow-hidden border shadow-2xl w-full rounded-b-none"
    >
      {/* Title bar */}
      <div
        style={{ background: surface, borderBottomColor: `${accent}15` }}
        className="flex items-center gap-2 px-4 py-3 border-b"
      >
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <span className="w-3 h-3 rounded-full bg-green-400/70" />
        <span
          style={{ color: `${text}50` }}
          className="ml-3 text-xs font-mono"
        >
          {label.toLowerCase().replace(/ /g, '-')}.ts
        </span>
      </div>

      {/* Code body */}
      <div className="p-5 code-block">
        <div className="flex gap-4">
          {/* Line numbers */}
          <div style={{ color: muted }} className="select-none text-right leading-7">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          {/* Code */}
          <div style={{ color: text }} className="leading-7 flex-1 overflow-hidden">
            {tokens.map((tok, i) => {
              if (tok.type === 'newline') return <br key={i} />
              if (tok.type === 'indent') return <span key={i}>&nbsp;&nbsp;</span>
              return (
                <span key={i} style={{ color: tokenColor(tok.type, accent, secondary, text, muted) }}>
                  {tok.text}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
})

export default CodeWindow
