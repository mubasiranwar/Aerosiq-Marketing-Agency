// src/components/Footer.jsx
import { siteConfig } from '../data/siteData';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '20px' }}>
              <div className="logo-mark"></div> {siteConfig.name}
            </div>
            <p>We build brands that stand out. Digital marketing strategies designed for growth, engagement, and real results.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Industries</h4>
            <ul>
              <li><a href="#services">Restaurants</a></li>
              <li><a href="#services">Real Estate</a></li>
              <li><a href="#services">Automotive</a></li>
              <li><a href="#services">Education</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Connect</h4>
            <ul>
              <li><a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
              {/* 👈 Added TikTok Link Here */}
              <li><a href={siteConfig.socials.tiktok} target="_blank" rel="noreferrer">TikTok</a></li>
              <li><a href={`https://wa.me/${siteConfig.whatsappRaw}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>&copy; 2026 {siteConfig.name} Marketing Agency. All rights reserved.</div>
          <div>Designed for Growth. Built for Results.</div>
        </div>
      </div>
    </footer>
  );
}