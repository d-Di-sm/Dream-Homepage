export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <span className="footer-logo">DREAM</span>
          <span className="footer-tagline">Beyond Visualization</span>
        </div>
        <div>
          <a href="mailto:hello@dreamstudio.io" className="footer-cta">
            Start a Project →
          </a>
          <span className="footer-email">hello@dreamstudio.io</span>
        </div>
      </div>

      <div className="footer-rule" />

      <div className="footer-bottom">
        <span className="footer-copy">© 2024 DREAM. All rights reserved.</span>
        <span className="footer-links">Instagram  ·  LinkedIn  ·  Pinterest</span>
      </div>
    </footer>
  )
}
