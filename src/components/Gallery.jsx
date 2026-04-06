const PROJECTS = [
  {
    caption: 'Dream Church — Monterrey',
    type: 'landscape',
    images: [
      { src: '/images/ACCESO.jpg',    alt: 'Reception lobby' },
      { src: '/images/AUDITORIO.jpg', alt: 'Auditorium' },
      { src: '/images/PASILLO.jpg',   alt: 'Corridor & youth space' },
    ],
  },
  {
    caption: 'Residential Projects — Mexico',
    type: 'portrait',
    images: [
      { src: '/images/05.jpg', alt: 'Terracotta building exterior' },
      { src: '/images/06.jpg', alt: 'Residential interior courtyard' },
      { src: '/images/08.jpg', alt: 'Interior living space' },
    ],
  },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-meta">
        <span className="gallery-label">Selected Works</span>
        <div className="gallery-label-rule" />
      </div>

      {PROJECTS.map(({ caption, type, images }) => (
        <div key={caption} className="gallery-project">
          <p className="gallery-caption">{caption}</p>
          <div className={`gallery-grid gallery-grid-${type}`}>
            {images.map(({ src, alt }) => (
              <img
                key={src}
                className={`gallery-img-${type}`}
                src={src}
                alt={alt}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
