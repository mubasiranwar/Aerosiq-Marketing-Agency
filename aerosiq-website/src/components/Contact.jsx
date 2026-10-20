// src/components/Contact.jsx
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'; // 👈 Added FaTiktok
import { siteConfig } from '../data/siteData';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
  };

  return (
    <section id="contact" className="container">
      <div className="contact-section">
        <div className="contact-content">
          <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '1px' }}>• Get in touch</div>
          <h2>Have a Project <br />in Mind? <br /><span className="serif-italic">— Let's Talk.</span></h2>
          <p>Ready to scale your business? Reach out to us through any of our channels. We are here to help you dominate your market.</p>
          
          <div className="contact-info">
            <a href={`https://wa.me/${siteConfig.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaWhatsapp size={24} /> WhatsApp: {siteConfig.phone}
            </a>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaInstagram size={24} /> @aerosiqmarketingagency
            </a>
            <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaFacebook size={24} /> Facebook Profile
            </a>
            {/* 👈 Added TikTok Link Here */}
            <a href={siteConfig.socials.tiktok} target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaTiktok size={24} /> @aerosiqmarketingagency
            </a>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Schedule a Free Consultation</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <textarea rows="4" placeholder="Tell us about your project..." required></textarea>
            </div>
            <button type="submit" className="btn">Send Message <div className="btn-icon" style={{ background: 'var(--accent)', color: '#000' }}>↗</div></button>
          </form>
        </div>
      </div>
    </section>
  );
}