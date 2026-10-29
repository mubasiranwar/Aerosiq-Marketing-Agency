// src/components/Hero.jsx
import { motion } from 'framer-motion';

export default function Hero() {
  // Animation variants for the graph bars
  const barVariants = {
    hidden: { height: 0 },
    visible: (customHeight) => ({
      height: customHeight,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 }
    })
  };

  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        {/* Left Text - Slides in from left */}
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>We Build <br /><span className="serif-italic text-accent">Brands</span> that<br />Stand Out</h1>
          <p>Easily connect your SEO-optimized content to your marketing efforts — helping you stay consistent, save time, and grow faster across all digital platforms.</p>
          <a href="#services" className="btn">Explore Services <div className="btn-icon">↗</div></a>
        </motion.div>
        
        {/* Right Graph - Slides in from right */}
        <motion.div 
          className="hero-graph-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="graph-card">
            <div className="graph-top">
              <span className="graph-title">Campaign growth</span>
              <span className="graph-badge">+400% ROI</span>
            </div>
            
            <div className="graph-bars">
              <motion.div className="bar" custom="40px" variants={barVariants} initial="hidden" animate="visible"></motion.div>
              <motion.div className="bar" custom="80px" variants={barVariants} initial="hidden" animate="visible"></motion.div>
              <motion.div className="bar" custom="100px" variants={barVariants} initial="hidden" animate="visible"></motion.div>
              <motion.div className="bar" custom="130px" variants={barVariants} initial="hidden" animate="visible"></motion.div>
              <motion.div className="bar bar-accent" custom="200px" variants={barVariants} initial="hidden" animate="visible"></motion.div>
            </div>
            
            <div className="graph-bottom">Strategy → Content → Convert</div>
            
            {/* Pop in experience circle */}
            <motion.div 
              className="graph-experience-circle"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
            >
              <h3>3+</h3>
              <p>years of<br />experience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}