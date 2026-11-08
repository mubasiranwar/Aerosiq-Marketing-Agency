
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/siteData';

/* =========================================
   DEDICATED IMAGE FOR EVERY SERVICE
========================================= */

const serviceImages = {
  'restaurants & street food':
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=90',

  'real estate':
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=90',

  'construction':
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=90',

  'schools & colleges':
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=90',

  'fitness & wellness':
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=90',

  'hospitality & tourism':
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90',

  'auto & motorcycle showrooms':
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=90',

  'beauty & aesthetics':
    'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1600&q=90',

  'hair salons':
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1600&q=90',

  'shopify (local & international)':
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=90',

  'web customization service':
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=90',

  default:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=90',
};

/* =========================================
   IMAGE SELECTION
========================================= */

const getServiceImage = (service) => {
  if (service.image) return service.image;

  const normalizedTitle = service.title
    ?.trim()
    .toLowerCase();

  return serviceImages[normalizedTitle] || serviceImages.default;
};

/* =========================================
   MAIN COMPONENT
========================================= */

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const activeService = servicesData[activeIndex];

  if (!activeService) return null;

  const activeImage = imageErrors[activeIndex]
    ? serviceImages.default
    : getServiceImage(activeService);

  const handleServiceChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section id="services" className="services-section">
        <div className="services-container">

          {/* SECTION HEADING */}

          <motion.div
            className="services-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="services-eyebrow">
              <span className="eyebrow-dot" />
              WHAT WE DO
            </span>

            <h2>
              We Deliver
              <span className="serif-italic"> — </span>
              Comprehensive Solutions to Help Businesses Grow and Thrive.
            </h2>

            <p className="services-intro">
              Industry-focused digital solutions that help businesses
              build their presence, attract customers and grow.
            </p>
          </motion.div>

          {/* MAIN SERVICES LAYOUT */}

          <div className="services-layout">

            {/* LEFT: SERVICES LIST */}

            <div className="services-accordion">

              {servicesData.map((service, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={service.id}
                    className={`service-accordion-item ${
                      isActive ? 'is-active' : ''
                    }`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.035,
                    }}
                    onMouseEnter={() => handleServiceChange(index)}
                  >

                    {/* SERVICE TRIGGER */}

                    <button
                      type="button"
                      className="service-accordion-trigger"
                      aria-expanded={isActive}
                      onFocus={() => handleServiceChange(index)}
                      onClick={() => handleServiceChange(index)}
                    >
                      <span className="service-index">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="service-name">
                        {service.title}
                      </span>

                      <motion.span
                        className="service-toggle"
                        animate={{
                          rotate: isActive ? 45 : 0,
                          color: isActive ? '#ed941c' : '#8a9095',
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        +
                      </motion.span>
                    </button>

                    {/* EXPANDED DESCRIPTION */}

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          className="service-accordion-content"
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            height: {
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            },
                            opacity: {
                              duration: 0.25,
                            },
                          }}
                        >
                          <div className="service-content-inner">

                            <p className="service-description">
                              {service.desc}
                            </p>

                            {service.tags?.length > 0 && (
                              <div className="service-tags">
                                {service.tags.map((tag, tagIndex) => (
                                  <span key={tagIndex}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                );
              })}

            </div>

            {/* RIGHT: IMAGE PREVIEW */}

            <div className="services-image-column">

              <div className="services-image-frame">

                {/* DYNAMIC IMAGE */}

                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeService.id}
                    src={activeImage}
                    alt={`${activeService.title} - Our Services`}
                    className="services-preview-image"
                    initial={{
                      opacity: 0,
                      scale: 1.06,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut',
                    }}
                    onError={() => {
                      setImageErrors((previous) => ({
                        ...previous,
                        [activeIndex]: true,
                      }));
                    }}
                  />
                </AnimatePresence>

                {/* IMAGE OVERLAY */}

                <div className="services-image-shade" />

                {/* TOP LABEL */}

                <div className="image-top-label">
                  <span />
                  OUR EXPERTISE
                </div>

                {/* IMAGE CONTENT */}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    className="image-bottom-content"
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 15,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <span className="image-service-number">
                      SERVICE {String(activeIndex + 1).padStart(2, '0')}
                    </span>

                    <h3>{activeService.title}</h3>

                    <p>{activeService.desc}</p>

                    <div className="image-content-line" />
                  </motion.div>
                </AnimatePresence>

                {/* DECORATIVE ICON */}

                <div className="image-decoration">
                  ↗
                </div>

                {/* IMAGE COUNTER */}

                <div className="image-counter">
                  <span>
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="counter-divider">/</span>
                  <span>
                    {String(servicesData.length).padStart(2, '0')}
                  </span>
                </div>

              </div>

              {/* IMAGE FOOTER */}

              <div className="image-footer">
                <span>CREATIVE. STRATEGIC. EFFECTIVE.</span>
                <span>BUILT FOR GROWTH.</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          ALL CSS IN THIS SAME FILE
      ========================================= */}

      <style>{`

        /* MAIN SECTION */

        .services-section {
          width: 100%;
          padding: 110px 24px;
          background: #ffffff;
          color: #101820;
          overflow: hidden;
        }

        .services-container {
          max-width: 1370px;
          margin: 0 auto;
        }

        /* HEADING */

        .services-heading {
          max-width: 900px;
          margin-bottom: 55px;
        }

        .services-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          color: #ed941c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ed941c;
        }

        .services-heading h2 {
          margin: 0;
          color: #101820;
          font-size: clamp(36px, 4.5vw, 58px);
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -2px;
        }

        .serif-italic {
          color: #ed941c;
          font-family: Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }

        .services-intro {
          max-width: 620px;
          margin-top: 20px;
          color: #858b91;
          font-size: 14px;
          line-height: 1.8;
        }

        /* MAIN GRID */

        .services-layout {
          display: grid;
          grid-template-columns: 1fr 0.95fr;
          align-items: stretch;
          gap: 60px;
        }

        /* ACCORDION */

        .services-accordion {
          width: 100%;
          height: 680px;
          min-height: 0;
          display: flex;
          flex-direction: column;
          border-top: 1px solid #e9ebed;
          border-bottom: 1px solid #e9ebed;
        }

        .service-accordion-item {
          position: relative;
          display: flex;
          flex-direction: column;
          flex: 1 1 0;
          min-height: 0;
          overflow: hidden;
          border-bottom: 1px solid #e9ebed;
          background: #ffffff;

          transition:
            flex 0.45s cubic-bezier(.22, 1, .36, 1),
            background 0.3s ease;
        }

        .service-accordion-item:last-child {
          border-bottom: none;
        }

        .service-accordion-item.is-active {
          flex: 2.5 1 0;
          background: #fafafa;
        }

        /* TRIGGER */

        .service-accordion-trigger {
          width: 100%;
          min-height: 52px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          gap: 18px;

          padding: 10px 17px;

          border: none;
          background: transparent;

          color: #101820;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }

        .service-index {
          width: 28px;
          flex-shrink: 0;
          color: #a2a7ac;
          font-size: 11px;
          font-weight: 700;
          transition: color 0.3s ease;
        }

        .is-active .service-index {
          color: #ed941c;
        }

        .service-name {
          flex: 1;
          min-width: 0;

          color: #17212a;
          font-size: clamp(15px, 1.5vw, 19px);
          font-weight: 650;
          letter-spacing: -0.4px;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .is-active .service-name {
          color: #ed941c;
          transform: translateX(5px);
        }

        /* TOGGLE */

        .service-toggle {
          width: 29px;
          height: 29px;
          flex-shrink: 0;

          display: grid;
          place-items: center;

          border: 1px solid #e6e8e9;
          border-radius: 50%;

          font-size: 21px;
          font-weight: 300;
          line-height: 1;
        }

        .is-active .service-toggle {
          border-color: #ed941c;
          background: #fff4e5;
        }

        /* DESCRIPTION */

        .service-accordion-content {
          overflow: hidden;
        }

        .service-content-inner {
          padding: 0 45px 18px 63px;
        }

        .service-description {
          max-width: 460px;
          margin: 0 0 14px;

          color: #737b82;
          font-size: 12px;
          line-height: 1.8;
        }

        /* TAGS */

        .service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .service-tags span {
          padding: 6px 10px;

          border: 1px solid #e8eaec;
          border-radius: 30px;

          background: #ffffff;
          color: #626b72;

          font-size: 10px;
          font-weight: 500;
        }

        /* IMAGE COLUMN */

        .services-image-column {
          position: relative;
          height: 680px;
          min-width: 0;

          display: flex;
          flex-direction: column;
        }

        .services-image-frame {
          position: relative;
          width: 100%;
          height: 100%;

          flex: 1;
          min-height: 0;

          overflow: hidden;
          isolation: isolate;

          border-radius: 14px;
          background: #e9ebed;
        }

        .services-preview-image {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          display: block;
          object-fit: cover;
          object-position: center;
        }

        /* IMAGE SHADE */

        .services-image-shade {
          position: absolute;
          inset: 0;
          z-index: 1;

          pointer-events: none;

          background: linear-gradient(
            180deg,
            rgba(16, 24, 32, 0.10) 0%,
            rgba(16, 24, 32, 0.02) 35%,
            rgba(16, 24, 32, 0.88) 100%
          );
        }

        /* TOP LABEL */

        .image-top-label {
          position: absolute;
          top: 25px;
          left: 25px;
          z-index: 2;

          display: flex;
          align-items: center;
          gap: 10px;

          padding: 11px 15px;

          border: 1px solid rgba(255,255,255,.25);
          border-radius: 30px;

          background: rgba(16,24,32,.4);
          color: #ffffff;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;

          backdrop-filter: blur(12px);
        }

        .image-top-label span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ed941c;
        }

        /* IMAGE BOTTOM CONTENT */

        .image-bottom-content {
          position: absolute;
          z-index: 2;

          right: 35px;
          bottom: 45px;
          left: 35px;

          color: #ffffff;
        }

        .image-service-number {
          display: inline-block;
          color: #ffb13b;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .image-bottom-content h3 {
          margin: 13px 0 12px;

          color: #ffffff;

          font-size: clamp(27px, 3vw, 39px);
          font-weight: 650;
          letter-spacing: -1.2px;
          line-height: 1.15;
        }

        .image-bottom-content p {
          max-width: 500px;
          margin: 0;

          color: rgba(255,255,255,.86);

          font-size: 13px;
          line-height: 1.8;
        }

        .image-content-line {
          width: 55px;
          height: 3px;
          margin-top: 22px;
          border-radius: 5px;
          background: #ed941c;
        }

        /* DECORATIVE ICON */

        .image-decoration {
          position: absolute;
          top: 25px;
          right: 25px;
          z-index: 2;

          width: 44px;
          height: 44px;

          display: grid;
          place-items: center;

          border-radius: 50%;
          background: #ed941c;
          color: #101820;

          font-size: 22px;
        }

        /* IMAGE COUNTER */

        .image-counter {
          position: absolute;
          right: 30px;
          bottom: 30px;
          z-index: 3;

          display: flex;
          align-items: center;
          gap: 9px;

          color: rgba(255,255,255,.85);

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .image-counter span:first-child {
          color: #ffb13b;
        }

        .counter-divider {
          color: rgba(255,255,255,.45);
        }

        /* FOOTER */

        .image-footer {
          display: flex;
          justify-content: space-between;
          gap: 10px;

          padding-top: 13px;

          color: #93999e;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        /* HOVER */

        @media (hover: hover) {
          .service-accordion-item:not(.is-active):hover {
            background: #fafafa;
          }

          .service-accordion-trigger:hover .service-name {
            color: #ed941c;
          }
        }

        .service-accordion-trigger:focus-visible {
          outline: 2px solid #ed941c;
          outline-offset: -3px;
          border-radius: 4px;
        }

        /* TABLET */

        @media (max-width: 1000px) {
          .services-layout {
            gap: 30px;
          }

          .services-accordion,
          .services-image-column {
            height: 620px;
          }

          .service-accordion-trigger {
            gap: 10px;
            padding-inline: 10px;
          }

          .service-name {
            font-size: 15px;
          }

          .service-content-inner {
            padding-left: 48px;
            padding-right: 12px;
          }

          .image-bottom-content {
            left: 23px;
            right: 23px;
          }
        }

        /* MOBILE */

        @media (max-width: 768px) {
          .services-section {
            padding: 75px 22px;
          }

          .services-heading {
            margin-bottom: 35px;
          }

          .services-layout {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .services-image-column {
            grid-row: 1;
            height: 430px;
          }

          .services-accordion {
            height: 680px;
          }

          .service-accordion-trigger {
            min-height: 52px;
          }

          .service-name {
            font-size: 16px;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 480px) {
          .services-section {
            padding: 60px 16px;
          }

          .services-heading h2 {
            font-size: 34px;
            letter-spacing: -1.2px;
          }

          .services-intro {
            font-size: 13px;
          }

          .services-image-column {
            height: 350px;
          }

          .services-accordion {
            height: 680px;
          }

          .service-accordion-trigger {
            min-height: 52px;
            padding: 10px 7px;
            gap: 8px;
          }

          .service-index {
            width: 23px;
            font-size: 10px;
          }

          .service-name {
            font-size: 14px;
          }

          .service-toggle {
            width: 26px;
            height: 26px;
          }

          .service-content-inner {
            padding: 0 10px 14px 38px;
          }

          .service-description {
            font-size: 11px;
          }

          .service-tags {
            gap: 5px;
          }

          .service-tags span {
            padding: 5px 8px;
            font-size: 9px;
          }

          .image-bottom-content {
            right: 18px;
            bottom: 25px;
            left: 18px;
          }

          .image-bottom-content h3 {
            font-size: 25px;
          }

          .image-bottom-content p {
            font-size: 11px;
          }

          .image-decoration {
            top: 15px;
            right: 15px;
            width: 36px;
            height: 36px;
          }

          .image-top-label {
            top: 15px;
            left: 15px;
          }

          .image-counter {
            right: 18px;
            bottom: 14px;
            font-size: 9px;
          }

          .image-footer {
            font-size: 8px;
            letter-spacing: .5px;
          }
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .service-accordion-item,
          .service-name,
          .service-index,
          .service-toggle {
            transition: none !important;
          }
        }

      `}</style>
    </>
  );
}
