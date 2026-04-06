const LINES = [
  'We design perception.',
  'Space is no longer static.',
  'Experience is the new architecture.',
]

export default function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <div className="manifesto-meta">
        <span className="manifesto-label">03 / Manifesto</span>
        <div className="manifesto-label-rule" />
      </div>

      {LINES.map((line, i) => (
        <div key={i}>
          <p className="manifesto-line">{line}</p>
          {i < LINES.length - 1 && (
            <div className="manifesto-divider" />
          )}
        </div>
      ))}
    </section>
  )
}
