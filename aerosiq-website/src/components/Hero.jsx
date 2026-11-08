
import React from 'react';
import { motion } from 'framer-motion';
import { ExportOutlined, RiseOutlined } from '@ant-design/icons';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const bars = [35, 48, 42, 67, 57, 76, 69, 92];

  return (
    <>
      <style>{`
        /* =================================
           PREMIUM WHITE HERO SECTION
        ================================= */

        .premium-hero {
          position: relative;
          width: 100%;
          min-height: 690px;
          overflow: hidden;
          background:
            radial-gradient(
              ellipse at 85% 45%,
              rgba(255, 173, 66, 0.055),
              transparent 38%
            ),
            #ffffff;
          color: #101820;
          display: flex;
          align-items: center;
          padding: 85px 5%;
          isolation: isolate;
        }

        .premium-hero::before {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          border: 1px solid rgba(16, 24, 32, 0.035);
          top: -240px;
          right: 10%;
          z-index: -1;
        }

        .premium-hero::after {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          border: 1px solid rgba(16, 24, 32, 0.035);
          bottom: -220px;
          left: -100px;
          z-index: -1;
        }

        .premium-hero-inner {
          width: 100%;
          max-width: 1370px;
          margin: 0 auto;
        }

        .premium-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 85px;
        }

        /* LEFT CONTENT */

        .premium-hero-text {
          max-width: 650px;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 15px;
          border: 1px solid #e9e9e9;
          border-radius: 50px;
          background: #fafafa;
          color: #505860;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .hero-eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff9900;
          box-shadow: 0 0 0 4px rgba(255,153,0,0.12);
        }

        .premium-hero-heading {
          margin: 0 !important;
          color: #101820;
          font-size: clamp(48px, 5.6vw, 78px);
          line-height: 1.07;
          font-weight: 800;
          letter-spacing: -4px;
        }

        .premium-hero-heading .hero-highlight {
          display: inline-block;
          position: relative;
          color: #ff9900;
        }

        .premium-hero-heading .hero-highlight::after {
          content: "";
          position: absolute;
          height: 5px;
          bottom: -5px;
          left: 0;
          width: 100%;
          border-radius: 10px;
          background: linear-gradient(
            90deg,
            #ff9900,
            rgba(255,153,0,0.12)
          );
        }

        .premium-hero-description {
          max-width: 530px;
          margin: 30px 0 34px !important;
          color: #687078;
          font-size: 16px;
          line-height: 1.9;
          font-weight: 400;
        }

        /* BUTTON */

        .premium-hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          height: 55px;
          padding: 0 25px;
          border-radius: 7px;
          background: #101820;
          color: #ffffff !important;
          text-decoration: none !important;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.2px;
          box-shadow: 0 8px 20px rgba(16,24,32,0.12);
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .premium-hero-button:hover {
          background: #ff9900;
          color: #101820 !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(255,153,0,0.18);
        }

        .premium-hero-button-icon {
          width: 27px;
          height: 27px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          font-size: 13px;
          transition: transform 0.35s ease;
        }

        .premium-hero-button:hover .premium-hero-button-icon {
          transform: translate(3px, -2px);
        }

        /* RIGHT ANALYTICS CARD */

        .premium-hero-visual {
          position: relative;
          perspective: 1200px;
        }

        .premium-graph-card {
          position: relative;
          min-height: 430px;
          padding: 32px;
          border: 1px solid #e9e9e9;
          border-radius: 20px;
          background: linear-gradient(
            145deg,
            #ffffff,
            #f9fafb
          );
          box-shadow:
            0 25px 70px rgba(16,24,32,0.07),
            0 4px 12px rgba(16,24,32,0.025);
          transition:
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .premium-graph-card:hover {
          border-color: #e2e2e2;
          box-shadow:
            0 30px 80px rgba(16,24,32,0.10),
            0 5px 15px rgba(16,24,32,0.035);
        }

        .premium-graph-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .premium-graph-title {
          color: #101820;
          font-size: 17px;
          font-weight: 750;
        }

        .premium-graph-subtitle {
          display: block;
          margin-top: 6px;
          color: #92999f;
          font-size: 12px;
        }

        .premium-graph-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 9px 12px;
          border-radius: 7px;
          background: #fff4e5;
          color: #c47700;
          font-size: 12px;
          font-weight: 800;
          white-space: nowrap;
        }

        /* GRAPH */

        .premium-graph-area {
          position: relative;
          height: 230px;
          margin-top: 35px;
          padding: 0 5px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 13px;
          border-bottom: 1px solid #e9ecef;
          background: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 56px,
            #edf0f2 57px,
            transparent 58px
          );
        }

        .premium-graph-bar {
          position: relative;
          flex: 1;
          max-width: 42px;
          min-width: 12px;
          border-radius: 6px 6px 0 0;
          background: linear-gradient(
            to top,
            #d8dde1,
            #aeb7be
          );
          transform-origin: bottom;
          transition:
            background 0.35s ease,
            transform 0.35s ease;
        }

        .premium-graph-bar:hover {
          background: linear-gradient(
            to top,
            #ff9900,
            #ffc36d
          );
          transform: scaleX(1.08);
        }

        .premium-graph-bar.accent {
          background: linear-gradient(
            to top,
            #e88900,
            #ffbd61
          );
        }

        .premium-graph-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
          color: #9aa1a7;
          font-size: 11px;
        }

        /* CARD BOTTOM */

        .premium-graph-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 27px;
          padding-top: 20px;
          border-top: 1px solid #eceff1;
          color: #747d84;
          font-size: 12px;
          font-weight: 600;
        }

        .premium-graph-status {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #545e66;
        }

        .premium-graph-status span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff9900;
        }

        /* EXPERIENCE FLOATING CARD */

        .premium-experience-card {
          position: absolute;
          left: -48px;
          bottom: 40px;
          width: 145px;
          padding: 20px;
          border-radius: 13px;
          background: #101820;
          color: #fff;
          box-shadow: 0 15px 35px rgba(16,24,32,0.2);
        }

        .premium-experience-card h3 {
          margin: 0;
          color: #ffad42;
          font-size: 38px;
          font-weight: 800;
          line-height: 1.1;
        }

        .premium-experience-card p {
          margin: 7px 0 0;
          color: #c3cbd1;
          font-size: 12px;
          line-height: 1.5;
        }

        /* DECORATIVE CIRCLE */

        .premium-floating-icon {
          position: absolute;
          top: -24px;
          right: -20px;
          width: 58px;
          height: 58px;
          border: 1px solid #ececec;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          color: #ff9900;
          font-size: 24px;
          box-shadow: 0 10px 30px rgba(16,24,32,0.08);
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .premium-hero {
            padding: 75px 5%;
          }

          .premium-hero-grid {
            gap: 55px;
          }

          .premium-hero-heading {
            font-size: clamp(48px, 6vw, 65px);
          }

          .premium-experience-card {
            left: -25px;
          }
        }

        @media (max-width: 768px) {
          .premium-hero {
            min-height: auto;
            padding: 75px 6% 100px;
          }

          .premium-hero-grid {
            grid-template-columns: 1fr;
            gap: 75px;
          }

          .premium-hero-text {
            max-width: 100%;
          }

          .premium-hero-heading {
            font-size: clamp(46px, 9vw, 68px);
            letter-spacing: -2.5px;
          }

          .premium-hero-description {
            font-size: 15px;
          }

          .premium-hero-visual {
            margin: 0 12px;
          }

          .premium-graph-card {
            min-height: 390px;
            padding: 25px;
          }

          .premium-graph-area {
            height: 195px;
          }

          .premium-experience-card {
            left: -15px;
            bottom: -40px;
          }
        }

        @media (max-width: 480px) {
          .premium-hero {
            padding: 60px 5% 90px;
          }

          .premium-hero-grid {
            gap: 65px;
          }

          .premium-hero-heading {
            font-size: 45px;
            letter-spacing: -2px;
          }

          .hero-eyebrow {
            font-size: 10px;
            margin-bottom: 23px;
          }

          .premium-hero-description {
            font-size: 14px;
            line-height: 1.8;
            margin: 24px 0 28px !important;
          }

          .premium-hero-button {
            height: 50px;
            padding: 0 18px;
          }

          .premium-graph-card {
            padding: 20px;
            min-height: 350px;
            border-radius: 15px;
          }

          .premium-graph-title {
            font-size: 14px;
          }

          .premium-graph-badge {
            padding: 7px 9px;
            font-size: 10px;
          }

          .premium-graph-area {
            height: 165px;
            gap: 8px;
            margin-top: 25px;
          }

          .premium-graph-bottom {
            font-size: 10px;
          }

          .premium-experience-card {
            width: 125px;
            padding: 16px;
          }

          .premium-experience-card h3 {
            font-size: 32px;
          }

          .premium-floating-icon {
            width: 45px;
            height: 45px;
            font-size: 20px;
            right: -12px;
          }
        }

        /* ACCESSIBILITY: REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .premium-hero *,
          .premium-hero *::before,
          .premium-hero *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <section id="home" className="premium-hero">
        <div className="premium-hero-inner">
          <div className="premium-hero-grid">

            {/* LEFT CONTENT */}

            <motion.div
              className="premium-hero-text"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="hero-eyebrow"
                variants={itemVariants}
              >
                <span className="hero-eyebrow-dot" />
                Creative Digital Solutions
              </motion.div>

              <motion.h1
                className="premium-hero-heading"
                variants={itemVariants}
              >
                We Build <br />
                <span className="hero-highlight">Brands</span> that
                <br />
                Stand Out
              </motion.h1>

              <motion.p
                className="premium-hero-description"
                variants={itemVariants}
              >
                Easily connect your SEO-optimized content to your
                marketing efforts — helping you stay consistent,
                save time, and grow faster across all digital platforms.
              </motion.p>

              <motion.a
                href="#services"
                className="premium-hero-button"
                variants={itemVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.25 },
                }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Services

                <span className="premium-hero-button-icon">
                  <ExportOutlined />
                </span>
              </motion.a>
            </motion.div>

            {/* RIGHT ANALYTICS CARD */}

            <motion.div
              className="premium-hero-visual"
              initial={{
                opacity: 0,
                x: 60,
                rotateY: -12,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotateY: 0,
              }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.35,
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.35 },
              }}
            >
              <div className="premium-graph-card">

                <div className="premium-graph-top">
                  <div>
                    <div className="premium-graph-title">
                      Campaign growth
                    </div>
                    <span className="premium-graph-subtitle">
                      Performance overview
                    </span>
                  </div>

                  <motion.div
                    className="premium-graph-badge"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 250,
                      damping: 18,
                      delay: 1,
                    }}
                  >
                    <RiseOutlined />
                    +400% ROI
                  </motion.div>
                </div>

                {/* GRAPH BARS */}

                <div className="premium-graph-area">
                  {bars.map((height, index) => (
                    <motion.div
                      key={index}
                      className={`premium-graph-bar ${
                        index === 7 ? 'accent' : ''
                      }`}
                      initial={{
                        scaleY: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scaleY: 1,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.65 + index * 0.09,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        height: `${height}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="premium-graph-labels">
                  <span>Week 01</span>
                  <span>Week 02</span>
                  <span>Week 03</span>
                  <span>Week 04</span>
                </div>

                <div className="premium-graph-bottom">
                  <span>Strategy → Content → Convert</span>

                  <span className="premium-graph-status">
                    <span />
                    Growing
                  </span>
                </div>

              </div>

              {/* EXPERIENCE FLOATING CARD */}

              <motion.div
                className="premium-experience-card"
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 18,
                  delay: 1.15,
                }}
                whileHover={{
                  scale: 1.06,
                  rotate: -2,
                  transition: { duration: 0.25 },
                }}
              >
                <h3>3+</h3>
                <p>
                  years of
                  <br />
                  experience
                </p>
              </motion.div>

              {/* FLOATING ICON */}

              <motion.div
                className="premium-floating-icon"
                initial={{
                  opacity: 0,
                  rotate: -30,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 1.3,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <RiseOutlined />
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
