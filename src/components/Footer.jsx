import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Top: Centered Social Icons (Instagram & LinkedIn matching Figma) */}
        <div className="footer-social-wrapper">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-btn" 
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-btn" 
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.24c-.88 0-1.6.72-1.6 1.6 0 .88.72 1.6 1.6 1.6.88 0 1.6-.72 1.6-1.6 0-.88-.72-1.6-1.6-1.6Z"/>
            </svg>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="footer-nav">
          <a href="#about" className="footer-nav-link">About</a>
          <a href="#for-families" className="footer-nav-link">For Families</a>
          <a href="#for-schools" className="footer-nav-link">For Schools & Camps</a>
          <a href="#for-schools" className="footer-nav-link">Lending Partners</a>
          <a href="#faq" className="footer-nav-link">FAQ</a>
          <a href="#contact" className="footer-nav-link">Contact</a>
        </nav>

        {/* Center: Massive Watermark OweK Vector Graphic (1400x384) */}
        <div className="footer-watermark">
          <img 
            src="/assets/svg/214_481.svg" 
            alt="oweK watermark" 
            className="footer-watermark-svg" 
          />
        </div>

        {/* Bottom: Divider Line & Legal Bar */}
        <div className="footer-bottom-wrapper">
          <div className="footer-divider-line"></div>
          <div className="footer-bottom-bar">
            <p className="copyright-text">
              © 2026 OweK. All rights reserved.
            </p>
            <div className="legal-links">
              <a href="#terms" className="legal-link">Terms & Conditions</a>
              <span className="legal-divider">|</span>
              <a href="#privacy" className="legal-link">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: #141515;
          color: #FFFFFF;
          padding: 100px 0 34px 0;
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        /* Top Social Buttons */
        .footer-social-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 50px;
        }

        .footer-social-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #252727;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .footer-social-btn:hover {
          background-color: #353838;
          transform: translateY(-2px);
        }

        /* Navigation Links */
        .footer-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 34px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        .footer-nav-link {
          font-family: var(--font-brand);
          font-size: 18px;
          font-weight: 500;
          line-height: 27px;
          color: #FFFFFF;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.15s ease;
          white-space: nowrap;
        }

        .footer-nav-link:hover {
          color: #8B72F5;
        }

        /* Large Watermark Wordmark */
        .footer-watermark {
          width: 100%;
          max-width: 1400px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 50px;
          user-select: none;
          pointer-events: none;
        }

        .footer-watermark-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Bottom Legal & Copyright Area */
        .footer-bottom-wrapper {
          width: 100%;
          max-width: 1400px;
          display: flex;
          flex-direction: column;
          gap: 34px;
        }

        .footer-divider-line {
          width: 100%;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.12);
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          box-sizing: border-box;
        }

        .copyright-text {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #FFFFFF;
          margin: 0;
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .legal-link {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #FFFFFF;
          text-decoration: none;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .legal-link:hover {
          color: #8B72F5;
        }

        .legal-divider {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          line-height: 20px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 860px) {
          .footer-section {
            padding: 50px 0 32px 0;
          }
          .footer-container {
            padding: 0 20px;
          }
          .footer-social-wrapper {
            margin-bottom: 50px;
            gap: 20px;
          }
          .footer-social-btn {
            width: 60px;
            height: 60px;
          }
          .footer-nav {
            flex-direction: column;
            align-items: center;
            gap: 34px;
            margin-bottom: 50px;
          }
          .footer-nav-link {
            font-size: 18px;
            line-height: 27px;
          }
          .footer-watermark {
            max-width: 400px;
            margin-bottom: 50px;
          }
          .footer-bottom-wrapper {
            gap: 34px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 20px;
            align-items: center;
            text-align: center;
          }
          .legal-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
