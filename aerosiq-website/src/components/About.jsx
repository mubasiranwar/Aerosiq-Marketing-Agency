
import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const aboutImage =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Section Header */}
        <FadeIn direction="up">
          <div className="about-heading">
            <span className="about-eyebrow">
              <span className="eyebrow-dot" />
              ABOUT AEROSIQ
            </span>

            <h2>
              More Than An Agency.
              <br />
              <span className="about-heading-accent">
                Your Digital Growth Partners.
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Main Content */}
        <div className="about-grid">

          {/* Left Content */}
          <FadeIn direction="right">
            <div className="about-content">

              <div className="about-intro">
                <span className="about-number">01 / WHO WE ARE</span>

                <h3>
                  We turn ambitious ideas into
                  <span> meaningful digital experiences.</span>
                </h3>
              </div>

              <p>
                Aerosiq Marketing Agency is a results-driven digital
                marketing firm dedicated to elevating brands. We don't
                just run campaigns; we engineer digital experiences
                that connect, convert, and scale.
              </p>

              <p>
                From the culinary world to real estate, automotive,
                education, and beyond, we understand that every
                industry has its own audience, challenges, and
                opportunities. That's why we create strategies
                tailored to your business.
              </p>

              <p>
                By combining data-driven insights, creative thinking,
                and modern technology, we help brands build a stronger
                presence and stand out in an increasingly competitive
                digital landscape.
              </p>

              {/* Highlights */}
              <div className="about-highlights">
                <div className="about-highlight">
                  <span className="highlight-icon">✳</span>
                  <div>
                    <strong>Strategy First</strong>
                    <small>Purpose-driven decisions</small>
                  </div>
                </div>

                <div className="about-highlight">
                  <span className="highlight-icon">↗</span>
                  <div>
                    <strong>Growth Focused</strong>
                    <small>Results that matter</small>
                  </div>
                </div>
              </div>

              <a href="#contact" className="about-button">
                <span>Let's Work Together</span>
                <span className="about-button-icon">↗</span>
              </a>

            </div>
          </FadeIn>

          {/* Right Image */}
          <FadeIn direction="left">
            <div className="about-visual">

              <div className="about-image-frame">
                <img
                  src={aboutImage}
                  alt="Creative team collaborating on digital marketing projects"
                  loading="lazy"
                />

                <div className="about-image-overlay" />

                <div className="image-top-label">
                  <span className="image-status-dot" />
                  CREATIVE MINDS. REAL RESULTS.
                </div>

                <div className="image-bottom-content">
                  <span>THE AEROSIQ APPROACH</span>
                  <h3>
                    Think Bold.
                    <br />
                    Create Impact.
                  </h3>
                </div>

                {/* Client Focus Badge */}
                <motion.div
                  className="about-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="badge-inner">
                    <span className="badge-percentage">100%</span>
                    <span className="badge-label">
                      CLIENT
                      <br />
                      FOCUSED
                    </span>
                  </div>
                </motion.div>
              </div>

              <div className="about-image-caption">
                <span>CREATIVITY MEETS STRATEGY</span>
                <span className="caption-line" />
                <span>AEROSIQ ©</span>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
          padding: 110px 0;
          background: var(--bg-color, #faf9f6);
          border-top: 1px solid var(--border-color, #e9e6df);
          overflow: hidden;
        }

        .about-container {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
        }

        /* Heading */

        .about-heading {
          margin-bottom: 65px;
          max-width: 850px;
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--accent, #ed941c);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent, #ed941c);
          box-shadow: 0 0 12px rgba(237, 148, 28, 0.35);
        }

        .about-heading h2 {
          margin: 0;
          color: var(--text-color, #171717);
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.12;
          letter-spacing: -2.4px;
          font-weight: 650;
        }

        .about-heading-accent {
          color: var(--accent, #ed941c);
        }

        /* Main Grid */

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 0.95fr;
          align-items: center;
          gap: 85px;
        }

        /* Left Content */

        .about-content {
          max-width: 530px;
        }

        .about-intro {
          margin-bottom: 25px;
        }

        .about-number {
          display: block;
          color: var(--accent, #ed941c);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.8px;
          margin-bottom: 17px;
        }

        .about-intro h3 {
          color: var(--text-color, #171717);
          font-size: clamp(25px, 3vw, 35px);
          line-height: 1.25;
          letter-spacing: -1.2px;
          font-weight: 600;
          margin: 0;
        }

        .about-intro h3 span {
          color: var(--accent, #ed941c);
        }

        .about-content > p {
          color: var(--muted-color, #77736d);
          font-size: 14px;
          line-height: 1.95;
          margin: 0 0 17px;
        }

        /* Highlights */

        .about-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 30px;
          padding-top: 25px;
          border-top: 1px solid var(--border-color, #e9e6df);
        }

        .about-highlight {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .highlight-icon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 11px;
          background: rgba(237, 148, 28, 0.10);
          color: var(--accent, #ed941c);
          font-size: 20px;
        }

        .about-highlight strong {
          display: block;
          color: var(--text-color, #171717);
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .about-highlight small {
          display: block;
          color: var(--muted-color, #89847d);
          font-size: 10px;
        }

        /* CTA */

        .about-button {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          margin-top: 34px;
          padding: 7px 7px 7px 20px;
          min-height: 52px;
          border: 1px solid var(--accent, #ed941c);
          border-radius: 50px;
          color: var(--accent, #ed941c);
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.2px;
          transition: background 0.3s ease, color 0.3s ease,
            transform 0.3s ease;
        }

        .about-button:hover {
          background: var(--accent, #ed941c);
          color: #171717;
          transform: translateY(-3px);
        }

        .about-button-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--accent, #ed941c);
          color: #171717;
          font-size: 17px;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .about-button:hover .about-button-icon {
          background: #171717;
          color: #fff;
        }

        /* Right Visual */

        .about-visual {
          position: relative;
          width: 100%;
          padding: 0 15px 15px 0;
        }

        .about-image-frame {
          position: relative;
          width: 100%;
          height: 560px;
          overflow: hidden;
          border-radius: 5px 65px 5px 5px;
          background: #292723;
        }

        .about-image-frame img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .about-image-frame:hover img {
          transform: scale(1.055);
        }

        .about-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.28) 0%,
            rgba(0, 0, 0, 0.03) 35%,
            rgba(0, 0, 0, 0.78) 100%
          );
        }

        .image-top-label {
          position: absolute;
          top: 27px;
          left: 27px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: #fff;
          font-size: 9px;
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        .image-status-dot {
          width: 7px;
          height: 7px;
          background: var(--accent, #ed941c);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(237, 148, 28, 0.8);
        }

        .image-bottom-content {
          position: absolute;
          left: 35px;
          bottom: 38px;
          color: #fff;
        }

        .image-bottom-content > span {
          display: block;
          color: var(--accent, #ed941c);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 13px;
        }

        .image-bottom-content h3 {
          margin: 0;
          font-size: clamp(32px, 4vw, 47px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -1.5px;
        }

        /* Floating Badge */

        .about-badge {
          position: absolute;
          right: -15px;
          bottom: 55px;
          width: 132px;
          height: 132px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--accent, #ed941c);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          z-index: 2;
        }

        .badge-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .badge-percentage {
          color: #171717;
          font-size: 31px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -1.5px;
        }

        .badge-label {
          color: #171717;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
          line-height: 1.5;
          margin-top: 7px;
        }

        /* Image Caption */

        .about-image-caption {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 17px 5px 0;
          color: var(--muted-color, #858078);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.4px;
        }

        .caption-line {
          flex: 1;
          height: 1px;
          background: var(--border-color, #e9e6df);
        }

        /* Responsive */

        @media (max-width: 1000px) {
          .about-grid {
            gap: 45px;
            grid-template-columns: 1fr 0.9fr;
          }

          .about-image-frame {
            height: 490px;
          }

          .about-badge {
            width: 110px;
            height: 110px;
          }

          .badge-percentage {
            font-size: 27px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 80px 0;
          }

          .about-container {
            width: min(100% - 40px, 560px);
          }

          .about-heading {
            margin-bottom: 40px;
          }

          .about-heading h2 {
            letter-spacing: -1.5px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .about-content {
            max-width: none;
          }

          .about-image-frame {
            height: 460px;
            border-top-right-radius: 45px;
          }

          .about-visual {
            padding-right: 10px;
          }

          .about-badge {
            right: -10px;
            bottom: 45px;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 65px 0;
          }

          .about-container {
            width: calc(100% - 36px);
          }

          .about-heading h2 {
            font-size: 34px;
          }

          .about-intro h3 {
            font-size: 27px;
          }

          .about-content > p {
            font-size: 13px;
            line-height: 1.85;
          }

          .about-highlights {
            gap: 10px;
          }

          .about-highlight {
            gap: 8px;
          }

          .highlight-icon {
            width: 34px;
            height: 34px;
          }

          .about-highlight strong {
            font-size: 11px;
          }

          .about-highlight small {
            font-size: 9px;
          }

          .about-image-frame {
            height: 390px;
          }

          .image-top-label {
            left: 20px;
            top: 22px;
            font-size: 8px;
          }

          .image-bottom-content {
            left: 23px;
            bottom: 28px;
          }

          .image-bottom-content h3 {
            font-size: 36px;
          }

          .about-badge {
            width: 95px;
            height: 95px;
            bottom: 40px;
          }

          .badge-percentage {
            font-size: 24px;
          }

          .badge-label {
            font-size: 8px;
          }

          .about-image-caption {
            font-size: 8px;
            gap: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-image-frame img,
          .about-button,
          .about-button-icon {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
