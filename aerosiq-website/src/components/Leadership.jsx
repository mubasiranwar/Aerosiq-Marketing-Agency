
import React from 'react';
import { motion } from 'framer-motion';
import salmanImg from '../assets/images/salman.png';
import naseerImg from '../assets/images/naseer.png';

export default function Leadership() {
  const leaders = [
    {
      name: 'Mr. Salman Zaman',
      role: 'CEO & Founder',
      image: salmanImg,
      alt: 'Mr. Salman Zaman - CEO',
      number: '01',
      quote:
        '"Our job is to make your brand impossible to ignore and easy to trust. That means sharp positioning, consistent storytelling, and performance systems that compound over time. If you are ready to stand out with intention, we are ready to build with you."',
    },
    {
      name: 'Naseer Zaman',
      role: 'Co-Founder & COO',
      image: naseerImg,
      alt: 'Naseer Zaman - Co-Founder',
      number: '02',
      quote:
        '"Execution is where strategy meets reality. We don\'t just plan campaigns; we build scalable digital ecosystems that drive measurable growth. Our focus is on creating seamless experiences for your customers that turn traffic into loyal advocates for your brand."',
    },
  ];

  const wordContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.15,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="leadership" className="leadership-section">
      <div className="leadership-container">

        {/* Section Heading */}
        <motion.div
          className="leadership-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="leadership-eyebrow">
            <span className="leadership-dot" />
            THE PEOPLE BEHIND AEROSIQ
          </span>

          <div className="leadership-heading-content">
            <h2>
              Leadership with
              <span className="leadership-serif"> vision & purpose.</span>
            </h2>

            <p>
              Great work starts with great leadership. Meet the people
              shaping our vision and driving every project forward.
            </p>
          </div>
        </motion.div>

        {/* Leadership Cards */}
        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <motion.article
              className="leader-card"
              key={leader.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              {/* Profile Header */}
              <div className="leader-info">
                <div className="leader-profile">
                  <motion.div
                    className="leader-image-wrap"
                    initial={{ scale: 0.75, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 180,
                      damping: 16,
                      delay: 0.2 + index * 0.15,
                    }}
                  >
                    <img
                      src={leader.image}
                      alt={leader.alt}
                      className="leader-img"
                      loading="lazy"
                    />
                  </motion.div>

                  <div className="leader-identity">
                    <h3 className="leader-name">{leader.name}</h3>
                    <span className="leader-role">{leader.role}</span>
                  </div>
                </div>

                <span className="leader-number">
                  {leader.number}
                </span>
              </div>

              {/* Quote */}
              <div className="leader-message">
                <span className="leader-quote-icon">“</span>

                <motion.p
                  variants={wordContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {leader.quote.split(' ').map((word, wordIndex) => (
                    <motion.span
                      variants={wordAnimation}
                      key={wordIndex}
                      className="leader-word"
                    >
                      {word}{' '}
                    </motion.span>
                  ))}
                </motion.p>

                <div className="leader-message-footer">
                  <span className="leader-footer-line" />
                  <span>AEROSIQ LEADERSHIP</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      <style>{`
        .leadership-section {
          --leadership-accent: var(--accent, #ed941c);
          --leadership-text: var(--text-color, #191919);
          --leadership-muted: var(--muted-color, #77736d);
          --leadership-border: var(--border-color, #e9e5dd);
          --leadership-card: var(--card-bg, #ffffff);

          width: 100%;
          padding: 100px 24px;
          background: var(--bg-color, #faf9f6);
          border-top: 1px solid var(--leadership-border);
          overflow: hidden;
        }

        .leadership-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Heading */

        .leadership-heading {
          margin-bottom: 55px;
        }

        .leadership-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--leadership-accent);
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .leadership-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--leadership-accent);
          box-shadow: 0 0 0 4px rgba(237, 148, 28, 0.12);
        }

        .leadership-heading-content {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 35px;
        }

        .leadership-heading h2 {
          max-width: 700px;
          margin: 0;
          color: var(--leadership-text);
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 650;
          line-height: 1.13;
          letter-spacing: -2px;
        }

        .leadership-serif {
          color: var(--leadership-accent);
          font-family: Georgia, serif;
          font-weight: 400;
          font-style: italic;
        }

        .leadership-heading-content > p {
          max-width: 310px;
          margin: 0 0 5px;
          color: var(--leadership-muted);
          font-size: 14px;
          line-height: 1.8;
        }

        /* Cards Grid */

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 25px;
          align-items: stretch;
        }

        .leader-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          height: 100%;
          background: var(--leadership-card);
          border: 1px solid var(--leadership-border);
          border-radius: 18px;
          overflow: hidden;
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .leader-card:hover {
          transform: translateY(-6px);
          border-color: rgba(237, 148, 28, 0.45);
          box-shadow: 0 18px 45px rgba(25, 25, 25, 0.07);
        }

        /* Profile */

        .leader-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 27px 25px;
          border-bottom: 1px solid var(--leadership-border);
        }

        .leader-profile {
          display: flex;
          align-items: center;
          gap: 19px;
          min-width: 0;
        }

        .leader-image-wrap {
          position: relative;
          width: 100px;
          height: 100px;
          flex-shrink: 0;
          padding: 4px;
          border-radius: 50%;
          background: var(--leadership-card);
          border: 2px solid var(--leadership-accent);
          box-shadow: 0 5px 18px rgba(237, 148, 28, 0.12);
          overflow: hidden;
        }

        .leader-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          border-radius: 50%;
          transition: transform 0.5s ease;
        }

        .leader-card:hover .leader-img {
          transform: scale(1.08);
        }

        .leader-identity {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .leader-name {
          margin: 0;
          color: var(--leadership-text);
          font-size: 19px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .leader-role {
          color: var(--leadership-accent);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .leader-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border: 1px solid rgba(237, 148, 28, 0.25);
          border-radius: 50%;
          color: var(--leadership-accent);
          background: rgba(237, 148, 28, 0.07);
          font-size: 11px;
          font-weight: 750;
        }

        /* Message */

        .leader-message {
          position: relative;
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 30px 28px 24px;
        }

        .leader-quote-icon {
          display: block;
          height: 45px;
          color: var(--leadership-accent);
          font-family: Georgia, serif;
          font-size: 65px;
          line-height: 1;
          opacity: 0.85;
        }

        .leader-message > p {
          margin: 12px 0 30px;
          color: var(--leadership-muted);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.95;
        }

        .leader-word {
          display: inline;
        }

        .leader-message-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
          padding-top: 18px;
          border-top: 1px solid var(--leadership-border);
          color: var(--leadership-muted);
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 1.7px;
        }

        .leader-footer-line {
          width: 23px;
          height: 2px;
          background: var(--leadership-accent);
        }

        /* Responsive */

        @media (max-width: 900px) {
          .leadership-section {
            padding: 80px 22px;
          }

          .leadership-heading-content {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .leadership-heading-content > p {
            max-width: 500px;
          }

          .leadership-grid {
            gap: 18px;
          }

          .leader-info {
            padding: 22px 18px;
          }

          .leader-profile {
            gap: 13px;
          }

          .leader-image-wrap {
            width: 85px;
            height: 85px;
          }

          .leader-name {
            font-size: 16px;
          }

          .leader-message {
            padding: 25px 20px 20px;
          }
        }

        @media (max-width: 650px) {
          .leadership-section {
            padding: 65px 18px;
          }

          .leadership-heading {
            margin-bottom: 35px;
          }

          .leadership-heading h2 {
            font-size: clamp(30px, 8vw, 40px);
            letter-spacing: -1.3px;
          }

          .leadership-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .leader-info {
            padding: 22px;
          }

          .leader-image-wrap {
            width: 92px;
            height: 92px;
          }

          .leader-name {
            font-size: 18px;
          }

          .leader-message {
            padding: 25px 24px 22px;
          }

          .leader-message > p {
            font-size: 13px;
            line-height: 1.9;
          }
        }

        @media (max-width: 380px) {
          .leadership-section {
            padding-right: 14px;
            padding-left: 14px;
          }

          .leader-info {
            padding: 18px 14px;
          }

          .leader-image-wrap {
            width: 76px;
            height: 76px;
          }

          .leader-profile {
            gap: 12px;
          }

          .leader-name {
            font-size: 15px;
          }

          .leader-role {
            font-size: 9px;
            letter-spacing: 1px;
          }

          .leader-message {
            padding: 22px 17px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .leader-card,
          .leader-img {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
