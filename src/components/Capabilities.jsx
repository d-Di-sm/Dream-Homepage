const SERVICES = [
  {
    num: '01',
    title: 'Immersive\nExperiences',
    desc: 'Multisensory environments that transport, inspire, and provoke — from spatial narratives to interactive installations.',
  },
  {
    num: '02',
    title: 'Digital\nArchitecture',
    desc: 'Computational design systems that extend the boundaries of form and space — built for the screen, designed for the imagination.',
  },
  {
    num: '03',
    title: 'Real-Time\nVisualization',
    desc: 'Photorealistic renders and live rendering engines that bring architecture to life before a single stone is laid.',
  },
  {
    num: '04',
    title: 'Interactive\nEnvironments',
    desc: 'Dynamic platforms where users shape the space — intelligent environments that respond, evolve, and feel alive.',
  },
]

export default function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="capabilities-meta">
        <span className="label">02 / Capabilities</span>
        <div className="rule" />
      </div>
      <h2 className="capabilities-heading">What We Create</h2>

      <div className="capabilities-grid">
        {SERVICES.map(({ num, title, desc }) => (
          <div key={num} className="cap-item">
            <span className="cap-num">{num}</span>
            <div className="cap-rule" />
            <h3 className="cap-title">{title}</h3>
            <p className="cap-desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
