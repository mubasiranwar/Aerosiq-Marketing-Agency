import { servicesData } from '../data/siteData';
import FadeIn from './FadeIn';

export default function Services() {
  return (
    <section id="services" className="section-padding container">
      <FadeIn>
        <div className="services-header">
          <div className="text-accent" style={{ marginBottom: '10px', fontSize: '12px', letterSpacing: '2px' }}>• OUR SERVICES</div>
          <h2>We Deliver <span className="serif-italic">—</span> Comprehensive Solutions to help businesses Grow and thrive.</h2>
        </div>
      </FadeIn>

      <div className="services-grid">
        <div className="services-list-wrapper">
          {servicesData.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <article className="service-item">
                <div className="service-item-header">
                  <span className="service-number">{service.id}</span>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-desc">{service.desc}</p>
                <div className="service-features">
                  {service.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="left" delay={0.2}>
          <div className="services-visual-wrapper">
            <div className="visual-box">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Aerosiq Marketing analytics" loading="lazy" />
              <div className="play-button">▶</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}