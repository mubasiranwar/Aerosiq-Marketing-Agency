export default function About() {
  return (
    <section id="about" className="section-padding container" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="about-grid">
        <div className="about-content">
          <div className="text-accent" style={{ marginBottom: '10px', fontSize: '12px' }}>• ABOUT AEROSIQ</div>
          <h2 className="section-title">We are Aerosiq <span className="serif-italic">—</span> Your Digital Growth Partners.</h2>
          <p>Aerosiq Marketing Agency is a results-driven digital marketing firm dedicated to elevating brands. We don't just run campaigns; we engineer digital experiences that connect, convert, and scale.</p>
          <p>With a proven track record across diverse sectors—from the culinary world to real estate and automotive—we understand that every industry requires a unique voice and a tailored strategy.</p>
          <p>Our team combines data-driven insights with bold creative design to ensure your brand doesn't just blend in, but stands out in a crowded digital landscape.</p>
          <div style={{ marginTop: '40px' }}>
            <a href="#contact" className="btn" style={{ background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>
              Discover Our Story <div className="btn-icon" style={{ background: 'var(--accent)', color: '#000' }}>↗</div>
            </a>
          </div>
        </div>
        <div className="about-image">
          <div className="about-badge">
            <div className="stat-circle" style={{ position: 'relative', top: 0, right: 0, width: '120px', height: '120px' }}>
              <h3 className="text-accent" style={{ fontSize: '2rem' }}>100%</h3>
              <span>Client<br />Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}