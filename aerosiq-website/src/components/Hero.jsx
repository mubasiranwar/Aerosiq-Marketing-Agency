import { motion } from 'framer-motion';

export default function Hero() {
  // Animation for the text
  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 } 
    }
  };

  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
        
        {/* Left Side - Text Animations */}
        <motion.div 
          className="hero-text"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={textVariants}>
            We Build <br />
            <span className="shimmer-text">Brands</span> that<br />
            Stand Out
          </motion.h1>
          <motion.p variants={textVariants}>
            Easily connect your SEO-optimized content to your marketing efforts — helping you stay consistent, save time, and grow faster across all digital platforms.
          </motion.p>
          <motion.a 
            href="#services" 
            className="btn"
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services <div className="btn-icon">↗</div>
          </motion.a>
        </motion.div>
        
        {/* Right Side - Graph Animation */}
        <motion.div 
          className="hero-graph-container"
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.02, rotateY: 5, boxShadow: "0 20px 40px rgba(212, 255, 0, 0.1)" }}
        >
          <div className="graph-card">
            <div className="graph-top">
              <span className="graph-title">Campaign growth</span>
              <motion.span 
                className="graph-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 1 }}
              >
                +400% ROI
              </motion.span>
            </div>
            
            {/* The Bars - Now controlled entirely by CSS for the continuous loop */}
            <div className="graph-bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar bar-accent"></div>
            </div>
            
            <motion.div 
              className="graph-bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Strategy → Content → Convert
            </motion.div>
            
            {/* The 3+ Circle springs in */}
            <motion.div 
              className="graph-experience-circle"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.2 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
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