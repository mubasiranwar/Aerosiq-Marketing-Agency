import { useRef, useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { siteConfig } from '../data/siteData';
import emailjs from '@emailjs/browser';
import FadeIn from './FadeIn';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    // Pulling keys securely from .env file
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Safety check to ensure keys are set
    if (!serviceID || !templateID || !publicKey) {
      setStatusMessage({ 
        type: 'error', 
        text: 'Email service is not configured. Please check your .env file.' 
      });
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          setStatusMessage({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
          form.current.reset(); // Clear the form
          setIsSubmitting(false);
          
          // Clear success message after 5 seconds
          setTimeout(() => setStatusMessage({ type: '', text: '' }), 5000);
      }, (error) => {
          console.error('Email send failed:', error.text);
          setStatusMessage({ type: 'error', text: 'Oops! Something went wrong. Please try again later.' });
          setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="container">
      <div className="contact-section">
        
        {/* Left Side - Contact Info */}
        <FadeIn direction="right">
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
            <a href={siteConfig.socials.tiktok} target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaTiktok size={24} /> @aerosiqmarketingagency
            </a>
          </div>
        </div>
        </FadeIn>
        
        {/* Right Side - Form */}
        <FadeIn direction="left">
        <div className="contact-form">
          <h3>Schedule a Free Consultation</h3>
          
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Full Name" required disabled={isSubmitting} />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email Address" required disabled={isSubmitting} />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" placeholder="Phone Number" required disabled={isSubmitting} />
            </div>
            <div className="form-group">
              <textarea name="message" rows="4" placeholder="Tell us about your project..." required disabled={isSubmitting}></textarea>
            </div>
            
            {/* Status Message (Success/Error) */}
            {statusMessage.text && (
              <div style={{ 
                marginBottom: '15px', 
                padding: '10px', 
                borderRadius: '8px', 
                fontSize: '14px',
                backgroundColor: statusMessage.type === 'success' ? '#d4edda' : '#f8d7da',
                color: statusMessage.type === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${statusMessage.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
              }}>
                {statusMessage.text}
              </div>
            )}

            <button type="submit" className="btn" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
              {isSubmitting ? 'Sending...' : 'Send Message'} 
              <div className="btn-icon" style={{ background: 'var(--accent)', color: '#000' }}>
                {isSubmitting ? '⏳' : '↗'}
              </div>
            </button>
          </form>
        </div>
        </FadeIn>
        
      </div>
    </section>
  );
}