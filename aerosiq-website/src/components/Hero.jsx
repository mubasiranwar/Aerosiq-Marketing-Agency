export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        <div className="hero-text">
          <h1>We Build <br /><span className="serif-italic text-accent">Brands</span> that<br />Stand Out</h1>
          <p>Easily connect your SEO-optimized content to your marketing efforts — helping you stay consistent, save time, and grow faster across all digital platforms.</p>
          <a href="#services" className="btn">Explore Services <div className="btn-icon">↗</div></a>
        </div>
        
        <div className="hero-graph-container">
          <div className="graph-card">
            <div className="graph-top">
              <span className="graph-title">Campaign growth</span>
              <span className="graph-badge">+400% ROI</span>
            </div>
            <div className="graph-bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar bar-accent"></div>
            </div>
            <div className="graph-bottom">Strategy → Content → Convert</div>
            <div className="graph-experience-circle">
              <h3>3+</h3>
              <p>years of<br />experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}