
import React, { useRef, useState } from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaFileSignature
} from 'react-icons/fa6';

import { DocusealForm } from '@docuseal/react';
import { siteConfig } from '../data/siteData';
import emailjs from '@emailjs/browser';
import FadeIn from './FadeIn';

export default function Contact() {
  const form = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const [statusMessage, setStatusMessage] = useState({
    type: '',
    text: ''
  });

  // EMAILJS CONTACT FORM
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      setStatusMessage({
        type: 'error',
        text: 'Email service is not configured. Please check your .env file.'
      });

      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(
      serviceID,
      templateID,
      form.current,
      publicKey
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);

        setStatusMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully.'
        });

        form.current.reset();
        setIsSubmitting(false);

        setTimeout(() => {
          setStatusMessage({ type: '', text: '' });
        }, 5000);
      })
      .catch((error) => {
        console.error('Email send failed:', error);

        setStatusMessage({
          type: 'error',
          text: 'Oops! Something went wrong. Please try again later.'
        });

        setIsSubmitting(false);
      });
  };

  // SOCIAL LINKS
  const socialLinks = [
    {
      name: 'WhatsApp',
      detail: `WhatsApp: ${siteConfig.phone}`,
      href: `https://wa.me/${siteConfig.whatsappRaw}`,
      icon: <FaWhatsapp />,
      className: 'whatsapp'
    },
    {
      name: 'Instagram',
      detail: '@aerosiqmarketingagency',
      href: siteConfig.socials.instagram,
      icon: <FaInstagram />,
      className: 'instagram'
    },
    {
      name: 'Facebook',
      detail: 'Facebook Profile',
      href: siteConfig.socials.facebook,
      icon: <FaFacebook />,
      className: 'facebook'
    },
    {
      name: 'TikTok',
      detail: '@aerosiqmarketingagency',
      href: siteConfig.socials.tiktok,
      icon: <FaTiktok />,
      className: 'tiktok'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* SECTION HEADER */}

        <FadeIn direction="up">
          <div className="contact-heading">
            <span className="contact-eyebrow">
              <span className="contact-dot" />
              LET'S CONNECT
            </span>

            <h2>
              Let's make something
              <span className="contact-serif"> remarkable.</span>
            </h2>

            <p>
              Have a vision for your business? Let's discuss how we can
              turn your ideas into meaningful digital growth.
            </p>
          </div>
        </FadeIn>

        {/* MAIN CONTACT LAYOUT */}

        <div className="contact-layout">

          {/* LEFT SIDE: CONTACT INFORMATION */}

          <FadeIn direction="right">
            <div className="contact-content">

              <div className="contact-intro">
                <span className="contact-small-label">
                  HAVE A PROJECT IN MIND?
                </span>

                <h3>
                  Your next big move
                  <br />
                  starts with a
                  <span className="contact-serif"> conversation.</span>
                </h3>

                <p>
                  Ready to scale your business? Reach out through any
                  of our channels. We're here to understand your goals,
                  explore opportunities, and help you dominate your market.
                </p>
              </div>

              {/* SOCIAL LINKS */}

              <div className="contact-links">
                <span className="contact-list-heading">
                  CONNECT WITH US
                </span>

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <span className={`contact-social-icon ${social.className}`}>
                      {social.icon}
                    </span>

                    <span className="contact-item-info">
                      <span className="contact-item-label">
                        {social.name}
                      </span>

                      <span className="contact-item-detail">
                        {social.detail}
                      </span>
                    </span>

                    <FaArrowUpRightFromSquare className="contact-external-icon" />
                  </a>
                ))}
              </div>

              {/* BOTTOM NOTE */}

              <div className="contact-note">
                <span className="contact-note-line" />
                <p>
                  Good partnerships begin with a simple conversation.
                </p>
              </div>

            </div>
          </FadeIn>

          {/* RIGHT SIDE: TOGGLE + CONTENT */}

          <FadeIn direction="left">
            <div className="contact-right">

              {/* TOGGLE NAVIGATION */}

              <div className="contact-toggle-wrapper">
                <span className="toggle-label">
                  HOW WOULD YOU LIKE TO CONNECT?
                </span>

                <div
                  className="contact-toggle"
                  role="tablist"
                  aria-label="Contact options"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'contact'}
                    className={`toggle-option ${
                      activeTab === 'contact' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('contact')}
                  >
                    <FaEnvelope />
                    <span>Contact Us</span>
                  </button>

                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === 'agreement'}
                    className={`toggle-option ${
                      activeTab === 'agreement' ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab('agreement')}
                  >
                    <FaFileSignature />
                    <span>Sign Agreement</span>
                  </button>
                </div>
              </div>

              {/* CONTACT FORM VIEW */}

              {activeTab === 'contact' && (
                <div
                  className="contact-form-card"
                  role="tabpanel"
                >
                  <div className="form-heading">
                    <div>
                      <span className="form-eyebrow">
                        START A CONVERSATION
                      </span>

                      <h3>Schedule a Free Consultation</h3>
                    </div>

                    <span className="form-heading-icon">
                      <FaEnvelope />
                    </span>
                  </div>

                  <p className="form-description">
                    Tell us a little about your project. We'll get back
                    to you to discuss how we can help.
                  </p>

                  {/* EMAILJS FORM */}

                  <form ref={form} onSubmit={handleSubmit}>

                    <div className="form-group">
                      <label htmlFor="contact-name">Full Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-phone">Phone Number</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-message">Project Details</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="4"
                        placeholder="Tell us about your goals, ideas, or project..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* SUCCESS / ERROR MESSAGE */}

                    {statusMessage.text && (
                      <div
                        role="status"
                        aria-live="polite"
                        className={`contact-status ${statusMessage.type}`}
                      >
                        {statusMessage.text}
                      </div>
                    )}

                    {/* SUBMIT BUTTON */}

                    <button
                      type="submit"
                      className="contact-submit"
                      disabled={isSubmitting}
                    >
                      <span>
                        {isSubmitting
                          ? 'Sending your message...'
                          : 'Send Message'}
                      </span>

                      <span className="submit-icon">
                        {isSubmitting ? '⏳' : '↗'}
                      </span>
                    </button>

                  </form>
                </div>
              )}

              {/* AGREEMENT VIEW */}

              {activeTab === 'agreement' && (
                <div
                  className="agreement-card"
                  role="tabpanel"
                >
                  <div className="agreement-heading">
                    <div className="agreement-heading-icon">
                      <FaFileSignature />
                    </div>

                    <div>
                      <span className="agreement-eyebrow">
                        CLIENT ONBOARDING
                      </span>

                      <h3>Review & Sign Agreement</h3>
                    </div>
                  </div>

                  <p className="agreement-description">
                    Ready to get started? Review your Marketing Services
                    Agreement and complete the signing process securely online.
                  </p>

                  <div className="agreement-divider">
                    <span />
                    <span>MARKETING SERVICES AGREEMENT</span>
                    <span />
                  </div>

                  {/* DOCUSEAL EMBEDDING */}

                  <div className="docuseal-wrapper">
                    <DocusealForm
                      src="https://docuseal.com/d/dCeHkvbBaAt9uX"
                    />
                  </div>

                  <div className="agreement-footer">
                    <span className="agreement-secure-dot" />
                    Secure online agreement process
                  </div>
                </div>
              )}

            </div>
          </FadeIn>

        </div>
      </div>

      {/* COMPONENT CSS */}

      <style>{`
        .contact-section {
          --contact-accent: var(--accent, #ed941c);
          --contact-text: var(--text-color, #191919);
          --contact-muted: var(--muted-color, #77736d);
          --contact-border: var(--border-color, #e9e5dd);
          --contact-card: var(--card-bg, #ffffff);

          width: 100%;
          padding: 100px 24px;
          background: var(--bg-color, #faf9f6);
          border-top: 1px solid var(--contact-border);
          overflow: hidden;
        }

        .contact-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }

        /* SECTION HEADER */

        .contact-heading {
          max-width: 750px;
          margin-bottom: 65px;
        }

        .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          color: var(--contact-accent);
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 2px;
        }

        .contact-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--contact-accent);
          box-shadow: 0 0 0 4px rgba(237, 148, 28, 0.12);
        }

        .contact-heading h2 {
          margin: 0 0 17px;
          color: var(--contact-text);
          font-size: clamp(34px, 5vw, 55px);
          font-weight: 650;
          letter-spacing: -2px;
          line-height: 1.13;
        }

        .contact-serif {
          color: var(--contact-accent);
          font-family: Georgia, serif;
          font-weight: 400;
          font-style: italic;
        }

        .contact-heading > p {
          max-width: 580px;
          margin: 0;
          color: var(--contact-muted);
          font-size: 15px;
          line-height: 1.85;
        }

        /* MAIN LAYOUT */

        .contact-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 55px;
          align-items: start;
        }

        .contact-content {
          padding: 10px 0;
        }

        /* LEFT CONTENT */

        .contact-small-label,
        .contact-list-heading {
          display: block;
          color: var(--contact-accent);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.8px;
        }

        .contact-intro h3 {
          margin: 20px 0 18px;
          color: var(--contact-text);
          font-size: clamp(28px, 3vw, 38px);
          font-weight: 650;
          letter-spacing: -1.4px;
          line-height: 1.25;
        }

        .contact-intro > p {
          max-width: 420px;
          margin: 0;
          color: var(--contact-muted);
          font-size: 14px;
          line-height: 1.95;
        }

        .contact-links {
          margin-top: 45px;
        }

        .contact-list-heading {
          margin-bottom: 18px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 14px 12px;
          margin-bottom: 8px;
          text-decoration: none;
          border: 1px solid transparent;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: var(--contact-card);
          border-color: var(--contact-border);
          transform: translateX(5px);
        }

        .contact-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          border-radius: 50%;
          color: var(--contact-accent);
          background: rgba(237, 148, 28, 0.09);
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-social-icon {
          color: #fff;
          background: var(--contact-accent);
          transform: scale(1.06);
        }

        .contact-item-info {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .contact-item-label {
          color: var(--contact-text);
          font-size: 13px;
          font-weight: 700;
        }

        .contact-item-detail {
          color: var(--contact-muted);
          font-size: 12px;
          overflow-wrap: anywhere;
        }

        .contact-external-icon {
          color: var(--contact-muted);
          font-size: 11px;
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-external-icon {
          color: var(--contact-accent);
          opacity: 1;
        }

        .contact-note {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 35px;
          padding-top: 20px;
          border-top: 1px solid var(--contact-border);
        }

        .contact-note-line {
          width: 25px;
          height: 2px;
          flex-shrink: 0;
          background: var(--contact-accent);
        }

        .contact-note p {
          margin: 0;
          color: var(--contact-muted);
          font-family: Georgia, serif;
          font-size: 13px;
          font-style: italic;
        }

        /* RIGHT SIDE */

        .contact-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
        }

        /* TOGGLE */

        .contact-toggle-wrapper {
          padding: 18px;
          background: var(--contact-card);
          border: 1px solid var(--contact-border);
          border-radius: 14px;
        }

        .toggle-label {
          display: block;
          margin: 0 0 12px 4px;
          color: var(--contact-muted);
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 1.5px;
        }

        .contact-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7px;
          padding: 5px;
          background: var(--bg-color, #faf9f6);
          border: 1px solid var(--contact-border);
          border-radius: 10px;
        }

        .toggle-option {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 47px;
          padding: 10px;
          color: var(--contact-muted);
          background: transparent;
          border: 1px solid transparent;
          border-radius: 7px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .toggle-option svg {
          font-size: 14px;
        }

        .toggle-option:hover:not(.active) {
          color: var(--contact-text);
          background: rgba(237, 148, 28, 0.06);
        }

        .toggle-option.active {
          color: #171717;
          background: var(--contact-accent);
          border-color: var(--contact-accent);
          box-shadow: 0 3px 10px rgba(237, 148, 28, 0.17);
        }

        /* CONTENT CARDS */

        .contact-form-card,
        .agreement-card {
          padding: 32px;
          background: var(--contact-card);
          border: 1px solid var(--contact-border);
          border-radius: 18px;
          box-shadow: 0 8px 30px rgba(25, 25, 25, 0.025);
          animation: contactPanelIn 0.35s ease both;
        }

        @keyframes contactPanelIn {
          from {
            opacity: 0;
            transform: translateY(9px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .form-eyebrow,
        .agreement-eyebrow {
          display: block;
          margin-bottom: 9px;
          color: var(--contact-accent);
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 1.7px;
        }

        .form-heading h3,
        .agreement-heading h3 {
          margin: 0;
          color: var(--contact-text);
          font-size: 21px;
          font-weight: 700;
          letter-spacing: -0.6px;
        }

        .form-heading-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 39px;
          height: 39px;
          flex-shrink: 0;
          color: var(--contact-accent);
          background: rgba(237, 148, 28, 0.09);
          border-radius: 50%;
          font-size: 14px;
        }

        .form-description,
        .agreement-description {
          margin: 13px 0 25px;
          color: var(--contact-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        /* FORM FIELDS */

        .form-group {
          margin-bottom: 19px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: var(--contact-text);
          font-size: 12px;
          font-weight: 650;
        }

        .form-group input,
        .form-group textarea {
          display: block;
          width: 100%;
          padding: 14px 15px;
          color: var(--contact-text);
          background: var(--bg-color, #faf9f6);
          border: 1px solid var(--contact-border);
          border-radius: 9px;
          outline: none;
          font-family: inherit;
          font-size: 13px;
          transition: all 0.25s ease;
          box-sizing: border-box;
        }

        .form-group input {
          height: 49px;
        }

        .form-group textarea {
          min-height: 115px;
          resize: vertical;
          line-height: 1.7;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #aaa69e;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--contact-accent);
          background: var(--contact-card);
          box-shadow: 0 0 0 3px rgba(237, 148, 28, 0.09);
        }

        .form-group input:disabled,
        .form-group textarea:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        /* STATUS */

        .contact-status {
          padding: 13px 15px;
          margin-bottom: 17px;
          border-radius: 9px;
          font-size: 12px;
          line-height: 1.6;
        }

        .contact-status.success {
          color: #155724;
          background: #d4edda;
          border: 1px solid #c3e6cb;
        }

        .contact-status.error {
          color: #721c24;
          background: #f8d7da;
          border: 1px solid #f5c6cb;
        }

        /* SUBMIT BUTTON */

        .contact-submit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          width: 100%;
          min-height: 54px;
          padding: 7px 8px 7px 20px;
          color: #fff;
          background: var(--contact-text);
          border: 1px solid var(--contact-text);
          border-radius: 9px;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact-submit:hover:not(:disabled) {
          color: #171717;
          background: var(--contact-accent);
          border-color: var(--contact-accent);
        }

        .contact-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .submit-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          color: #171717;
          background: var(--contact-accent);
          border-radius: 7px;
          font-size: 20px;
          transition: all 0.3s ease;
        }

        .contact-submit:hover:not(:disabled) .submit-icon {
          background: #fff;
          transform: rotate(45deg);
        }

        /* AGREEMENT */

        .agreement-heading {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .agreement-heading-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          color: var(--contact-accent);
          background: rgba(237, 148, 28, 0.1);
          border: 1px solid rgba(237, 148, 28, 0.2);
          border-radius: 12px;
          font-size: 18px;
        }

        .agreement-heading h3 {
          font-size: 19px;
        }

        .agreement-description {
          margin: 17px 0 22px;
        }

        .agreement-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 22px 0;
          color: var(--contact-muted);
          font-size: 8px;
          font-weight: 750;
          letter-spacing: 1.2px;
          white-space: nowrap;
        }

        .agreement-divider span:first-child,
        .agreement-divider span:last-child {
          height: 1px;
          flex: 1;
          background: var(--contact-border);
        }

        .docuseal-wrapper {
          width: 100%;
          min-height: 500px;
          overflow: hidden;
          border: 1px solid var(--contact-border);
          border-radius: 10px;
          background: var(--contact-card);
        }

        .agreement-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 18px;
          color: var(--contact-muted);
          font-size: 10px;
          letter-spacing: 0.3px;
        }

        .agreement-secure-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #3d9b68;
          box-shadow: 0 0 0 3px rgba(61, 155, 104, 0.1);
        }

        /* RESPONSIVE */

        @media (max-width: 950px) {
          .contact-layout {
            grid-template-columns: 1fr 1.1fr;
            gap: 30px;
          }

          .contact-form-card,
          .agreement-card {
            padding: 24px;
          }

          .contact-intro h3 {
            font-size: 30px;
          }
        }

        @media (max-width: 720px) {
          .contact-section {
            padding: 75px 20px;
          }

          .contact-heading {
            margin-bottom: 40px;
          }

          .contact-layout {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .contact-content {
            padding: 0;
          }

          .contact-intro h3 {
            font-size: 34px;
          }

          .contact-links {
            margin-top: 30px;
          }

          .contact-note {
            margin-top: 25px;
          }

          .contact-form-card,
          .agreement-card {
            padding: 25px;
          }
        }

        @media (max-width: 420px) {
          .contact-section {
            padding: 60px 15px;
          }

          .contact-heading h2 {
            font-size: 34px;
            letter-spacing: -1.3px;
          }

          .contact-intro h3 {
            font-size: 29px;
          }

          .contact-form-card,
          .agreement-card {
            padding: 19px;
            border-radius: 14px;
          }

          .form-heading h3,
          .agreement-heading h3 {
            font-size: 17px;
          }

          .toggle-option {
            gap: 6px;
            padding: 9px 5px;
            font-size: 11px;
          }

          .agreement-divider {
            font-size: 7px;
            letter-spacing: 0.7px;
            gap: 6px;
          }

          .docuseal-wrapper {
            min-height: 450px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-item,
          .contact-social-icon,
          .contact-submit,
          .submit-icon {
            transition: none;
          }

          .contact-form-card,
          .agreement-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
