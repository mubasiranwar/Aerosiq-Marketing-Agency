import { servicesData } from '../data/siteData';

export default function Services() {
  return (
    <section id="services" className="section-padding container">
      <div className="services-header">
        <div className="text-accent" style={{ marginBottom: '10px', fontSize: '12px', letterSpacing: '2px' }}>• OUR SERVICES</div>
        <h2>We Deliver <span className="serif-italic">—</span> Comprehensive Solutions to help businesses Grow and thrive.</h2>
      </div>

      <div className="services-grid">
        <div className="services-list-wrapper">
          {servicesData.map((service) => (
            <article className="service-item" key={service.id}>
              <div className="service-item-header">
                <span className="service-number">{service.id}</span>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-desc">{service.desc}</p>
              <div className="service-features">
                {service.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="services-visual-wrapper">
          <div className="visual-box">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Aerosiq Marketing analytics" loading="lazy" />
            <div className="play-button">▶</div>
          </div>
        </div>
      </div>
    </section>
  );
}