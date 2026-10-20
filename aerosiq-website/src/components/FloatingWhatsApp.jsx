import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../data/siteData';

export default function FloatingWhatsApp() {
  return (
    <a 
      href={`https://wa.me/${siteConfig.whatsappRaw}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp" 
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}