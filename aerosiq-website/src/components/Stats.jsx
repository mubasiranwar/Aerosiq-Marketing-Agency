
import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const stats = [
  {
    value: '4x',
    description:
      '4x meeting booked with our strategic funnel systems.',
  },
  {
    value: '2x',
    description:
      '2x increase in email open rates through targeted campaigns.',
  },
  {
    value: '400%',
    description:
      'Average return on investment across our digital ad spend.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(5px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Stats() {
  return (
    <>
      <style>{`
        /* =================================
           PREMIUM STATS SECTION
        ================================= */

        .stats-section {
          position: relative;
          width: 100%;
          padding: 75px 5%;
          background: #ffffff;
          overflow: hidden;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        .stats-container {
          width: 100%;
          max-width: 1370px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: stretch;
          gap: 25px;
        }

        /* STAT CARD */

        .stat-box {
          position: relative;
          padding: 35px 32px;
          background: #ffffff;
          border: 1px solid #eeeeee;
          border-radius: 14px;
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .stat-box::before {
          content: "";
          position: absolute;
          top: 0;
          left: 32px;
          width: 38px;
          height: 3px;
          border-radius: 0 0 5px 5px;
          background: #ff9900;
          transition: width 0.4s ease;
        }

        .stat-box:hover {
          transform: translateY(-7px);
          border-color: #e9e9e9;
          box-shadow: 0 18px 45px rgba(16, 24, 32, 0.07);
        }

        .stat-box:hover::before {
          width: 65px;
        }

        /* NUMBER */

        .stat-box h2 {
          margin: 0 0 15px !important;
          color: #101820;
          font-size: clamp(42px, 4vw, 58px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -2px;
          transition: color 0.35s ease;
        }

        .stat-box:hover h2 {
          color: #ff9900;
        }

        /* DESCRIPTION */

        .stat-box p {
          max-width: 290px;
          margin: 0 !important;
          color: #687078;
          font-size: 14px;
          line-height: 1.85;
          font-weight: 400;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .stats-section {
            padding: 60px 5%;
          }

          .stats-grid {
            gap: 18px;
          }

          .stat-box {
            padding: 28px 24px;
          }

          .stat-box h2 {
            font-size: 46px;
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .stat-box {
            padding: 30px;
          }

          .stat-box p {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .stats-section {
            padding: 45px 5%;
          }

          .stat-box {
            padding: 27px 23px;
            border-radius: 12px;
          }

          .stat-box h2 {
            font-size: 42px;
          }

          .stat-box p {
            font-size: 13px;
          }
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .stat-box,
          .stat-box::before,
          .stat-box h2 {
            transition: none !important;
          }
        }
      `}</style>

      <section className="stats-section">
        <div className="stats-container">
          <motion.div
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <div className="stat-box">
                  <h2>{stat.value}</h2>
                  <p>{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
