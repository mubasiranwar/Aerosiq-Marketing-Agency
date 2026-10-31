import { motion } from 'framer-motion';
import salmanImg from '../assets/images/salman.png';
import naseerImg from '../assets/images/naseer.png';

export default function Leadership() {
  
  // Animation for the text to fade in smoothly word by word
  const textContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const textWord = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="leadership" className="section-padding container" style={{ borderTop: '1px solid var(--border-color)' }}>
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="services-header"
        style={{ marginBottom: '60px' }}
      >
        <div className="text-accent" style={{ marginBottom: '10px', fontSize: '12px', letterSpacing: '2px' }}>• LEADERSHIP</div>
        <h2>A message from our <span className="serif-italic">Co-Founder & CEO</span></h2>
      </motion.div>

      <div className="leadership-grid">
        
        {/* Founder Section */}
        <motion.div 
          className="leader-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="leader-info">
            {/* Image pops in */}
            <motion.img 
              src={salmanImg} 
              alt="Mr. Salman Zaman - CEO" 
              className="leader-img"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            />
            <div>
              <h3 className="leader-name">Mr. Salman Zaman</h3>
              <p className="leader-role">CEO & Founder</p>
            </div>
          </div>
          
          <div className="leader-message">
            <motion.p
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* We split the text into words to animate them individually */}
              {`"Our job is to make your brand impossible to ignore  and easy to trust. That means sharp positioning, consistent storytelling, and performance systems that compound over time. If you are ready to stand out with intention, we are ready to build with you."`.split(" ").map((word, index) => (
                <motion.span variants={textWord} key={index} style={{ display: "inline-block", marginRight: "5px" }}>
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </motion.div>

        {/* Co-Founder Section */}
        <motion.div 
          className="leader-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="leader-info">
            <motion.img 
              src={naseerImg} 
              alt="Naseer Zaman - Co-Founder" 
              className="leader-img naseer-img"
              initial={{ scale: 0, rotate: 10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
            />
            <div>
              <h3 className="leader-name">Naseer Zaman</h3>
              <p className="leader-role">Co-Founder & COO</p>
            </div>
          </div>
          
          <div className="leader-message">
            <motion.p
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {`"Execution is where strategy meets reality. We don't just plan campaigns; we build scalable digital ecosystems that drive measurable growth. Our focus is on creating seamless experiences for your customers that turn traffic into loyal advocates for your brand."`.split(" ").map((word, index) => (
                <motion.span variants={textWord} key={index} style={{ display: "inline-block", marginRight: "5px" }}>
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}