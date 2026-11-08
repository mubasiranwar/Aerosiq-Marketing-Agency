
// src/components/Footer.jsx
import { siteConfig } from '../data/siteData';
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
  FaArrowUpRightFromSquare,
  FaArrowRight
} from 'react-icons/fa6';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const industries = [
    'Restaurants',
    'Real Estate',
    'Automotive',
    'Education',
  ];

  const socialLinks = [
    {
      label: 'Instagram',
      href: siteConfig.socials.instagram,
      icon: <FaInstagram />,
    },
    {
      label: 'Facebook',
      href: siteConfig.socials.facebook,
      icon: <FaFacebook />,
    },
    {
      label: 'TikTok',
      href: siteConfig.socials.tiktok,
      icon: <FaTiktok />,
    },
    {
      label: 'WhatsApp',
      href: `https://wa.me/${siteConfig.whatsappRaw}`,
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <>
      <footer className="site-footer">
        <div className="footer-container">

          {/* Top CTA */}
          <div className="footer-top">
            <div className="footer-top-content">
              <span className="footer-eyebrow">
                LET'S BUILD SOMETHING GREAT
              </span>
              <h2>
                Ready to grow your <span>business?</span>
              </h2>
              <p>
                Let's turn your ideas into a digital presence that
                gets noticed and delivers real results.
              </p>
            </div>

            <a href="#contact" className="footer-cta">
              Let's Talk
              <FaArrowRight />
            </a>
          </div>

          <div className="footer-divider" />

          {/* Main Footer */}
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                <span className="footer-logo-mark" />
                <span>{siteConfig.name}</span>
              </a>

              <p className="footer-description">
                We build brands that stand out. Digital marketing
                strategies designed for growth, engagement, and
                real results.
              </p>

              <div className="footer-socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Explore</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="footer-links">
              <h4>Industries</h4>
              <ul>
                {industries.map((industry) => (
                  <li key={industry}>
                    <a href="#services">{industry}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="footer-links footer-connect">
              <h4>Get in Touch</h4>
              <p>
                Have a project in mind? We'd love to hear from you.
              </p>
              <a href="#contact" className="footer-contact-link">
                Start a conversation
                <FaArrowUpRightFromSquare />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} {siteConfig.name} Marketing
              Agency. All rights reserved.
            </p>

            <p className="footer-tagline">
              Designed for Growth. Built for Results.
            </p>

            <a href="#home" className="back-to-top">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        .site-footer {
          --footer-bg: #faf9f6;
          --footer-text: #20201e;
          --footer-muted: #77746e;
          --footer-accent: #ed941c;
          --footer-border: rgba(32, 32, 30, 0.10);

          background: var(--footer-bg);
          color: var(--footer-text);
          padding: 75px 0 0;
          font-family: inherit;
          border-top: 1px solid var(--footer-border);
        }

        .footer-container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        .footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          padding-bottom: 55px;
        }

        .footer-eyebrow {
          display: inline-block;
          color: var(--footer-accent);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .footer-top h2 {
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.12;
          letter-spacing: -1.8px;
          font-weight: 750;
          margin: 0 0 13px;
          color: var(--footer-text);
        }

        .footer-top h2 span {
          color: var(--footer-accent);
        }

        .footer-top-content > p {
          color: var(--footer-muted);
          font-size: 14px;
          line-height: 1.8;
          max-width: 480px;
          margin: 0;
        }

        .footer-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-shrink: 0;
          padding: 16px 24px;
          background: var(--footer-accent);
          color: #fff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          border-radius: 7px;
          transition: all 0.3s ease;
        }

        .footer-cta:hover {
          background: #d9810c;
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 8px 22px rgba(237, 148, 28, 0.2);
        }

        .footer-cta svg {
          transition: transform 0.3s ease;
        }

        .footer-cta:hover svg {
          transform: translateX(4px);
        }

        .footer-divider {
          height: 1px;
          background: var(--footer-border);
          width: 100%;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.7fr 0.8fr 0.9fr 1.2fr;
          gap: 55px;
          padding: 55px 0 50px;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: var(--footer-text);
          text-decoration: none;
          font-size: 21px;
          font-weight: 800;
          letter-spacing: -0.7px;
          margin-bottom: 20px;
        }

        .footer-logo-mark {
          width: 27px;
          height: 27px;
          display: inline-block;
          background: var(--footer-accent);
          border-radius: 7px 7px 7px 2px;
          transform: rotate(-5deg);
          position: relative;
        }

        .footer-logo-mark::after {
          content: '';
          position: absolute;
          width: 9px;
          height: 9px;
          background: var(--footer-bg);
          border-radius: 50%;
          right: 5px;
          top: 5px;
        }

        .footer-description {
          max-width: 290px;
          color: var(--footer-muted);
          font-size: 13px;
          line-height: 1.9;
          margin: 0 0 23px;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .footer-socials a {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--footer-border);
          border-radius: 50%;
          color: var(--footer-text);
          font-size: 14px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .footer-socials a:hover {
          color: #fff;
          background: var(--footer-accent);
          border-color: var(--footer-accent);
          transform: translateY(-3px);
        }

        .footer-links h4 {
          color: var(--footer-text);
          font-size: 13px;
          font-weight: 800;
          margin: 5px 0 23px;
          letter-spacing: 0.2px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-links li a {
          color: var(--footer-muted);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.25s ease, padding 0.25s ease;
        }

        .footer-links li a:hover {
          color: var(--footer-accent);
          padding-left: 4px;
        }

        .footer-connect > p {
          color: var(--footer-muted);
          font-size: 13px;
          line-height: 1.8;
          margin: 0 0 17px;
          max-width: 230px;
        }

        .footer-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--footer-accent);
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: gap 0.25s ease;
        }

        .footer-contact-link:hover {
          gap: 14px;
          color: #d9810c;
        }

        .footer-contact-link svg {
          font-size: 11px;
        }

        .footer-bottom {
          min-height: 72px;
          border-top: 1px solid var(--footer-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-bottom p {
          color: var(--footer-muted);
          font-size: 11px;
          line-height: 1.6;
          margin: 0;
        }

        .footer-tagline {
          font-weight: 600;
          letter-spacing: 0.2px;
        }

        .back-to-top {
          color: var(--footer-text);
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .back-to-top:hover {
          color: var(--footer-accent);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1.4fr 1fr 1fr;
            gap: 40px 30px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-description {
            max-width: 420px;
          }
        }

        @media (max-width: 600px) {
          .site-footer {
            padding-top: 52px;
          }

          .footer-container {
            width: min(100% - 36px, 480px);
          }

          .footer-top {
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 38px;
            gap: 23px;
          }

          .footer-top h2 {
            font-size: 34px;
            letter-spacing: -1.2px;
          }

          .footer-top-content > p {
            font-size: 13px;
          }

          .footer-cta {
            padding: 14px 20px;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 38px 22px;
            padding: 40px 0;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-connect {
            grid-column: 1 / -1;
          }

          .footer-links h4 {
            margin-bottom: 17px;
          }

          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            gap: 9px;
            padding: 20px 0;
          }

          .footer-bottom p {
            font-size: 10px;
          }

          .back-to-top {
            margin-top: 4px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-footer *,
          .site-footer *::before,
          .site-footer *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
