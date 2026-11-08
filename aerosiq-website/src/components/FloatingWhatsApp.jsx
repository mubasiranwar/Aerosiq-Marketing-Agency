
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '../data/siteData';

export default function FloatingWhatsApp() {
  return (
    <>
      <a
        href={`https://wa.me/${siteConfig.whatsappRaw}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <span className="whatsapp-pulse" />
        <span className="whatsapp-icon">
          <FaWhatsapp />
        </span>
        <span className="whatsapp-tooltip">
          <span>Need help?</span>
          <strong>Chat with us</strong>
        </span>
      </a>

      <style>{`
        .floating-whatsapp {
          position: fixed;
          right: 28px;
          bottom: 28px;
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #25D366;
          color: #fff;
          text-decoration: none;
          z-index: 9999;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.25);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .whatsapp-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .floating-whatsapp:hover {
          background: #1fbd5b;
          color: #fff;
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.35);
        }

        .floating-whatsapp:hover .whatsapp-icon {
          transform: scale(1.1) rotate(-8deg);
        }

        /* Soft pulse around the button */
        .whatsapp-pulse {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(37, 211, 102, 0.55);
          border-radius: 50%;
          animation: whatsappPulse 2.5s ease-out infinite;
          pointer-events: none;
        }

        @keyframes whatsappPulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.65);
            opacity: 0;
          }
        }

        /* Hover label */
        .whatsapp-tooltip {
          position: absolute;
          right: 76px;
          top: 50%;
          transform: translate(8px, -50%);
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 11px 16px;
          min-width: 132px;
          background: #20201e;
          color: #fff;
          border-radius: 9px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: all 0.25s ease;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        }

        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 12px;
          height: 12px;
          background: #20201e;
        }

        .whatsapp-tooltip span {
          color: #c8c5bf;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        .whatsapp-tooltip strong {
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .floating-whatsapp:hover .whatsapp-tooltip,
        .floating-whatsapp:focus-visible .whatsapp-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translate(0, -50%);
        }

        .floating-whatsapp:focus-visible {
          outline: 3px solid #ed941c;
          outline-offset: 5px;
        }

        @media (max-width: 600px) {
          .floating-whatsapp {
            width: 54px;
            height: 54px;
            right: 18px;
            bottom: 18px;
          }

          .whatsapp-icon {
            font-size: 28px;
          }

          .whatsapp-tooltip {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .whatsapp-pulse {
            animation: none;
          }

          .floating-whatsapp,
          .whatsapp-icon,
          .whatsapp-tooltip {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
