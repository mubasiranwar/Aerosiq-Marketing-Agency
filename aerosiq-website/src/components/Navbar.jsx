import { FaInstagram } from 'react-icons/fa';
import { siteConfig } from '../data/siteData';

export default function Navbar() {
  return (
    <header>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <div className="logo-mark"></div> {siteConfig.name}
        </a>
        <nav>
          <ul>
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="nav-cta">
         
          <a href="#contact" className="btn">Let's Talk <div className="btn-icon">↗</div></a>
        </div>
      </div>
    </header>
  );
}