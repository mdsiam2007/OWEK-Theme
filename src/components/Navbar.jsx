import React from 'react';

export default function Navbar({ onOpenMobileMenu, onWaitlistClick }) {
  return (
    <header className="navbar-header">
      <div className="navbar-inner">
        {/* Brand Logo directly from Figma Vector SVG */}
        <a href="#" className="navbar-brand-link">
          <img 
            src="/assets/svg/214_8.svg" 
            alt="oweK" 
            className="navbar-brand-logo"
            width="140"
            height="39"
          />
        </a>

        {/* Centered Navigation Links */}
        <nav className="navbar-center-nav desktop-only">
          <a href="#about" className="nav-item-link">About</a>
          <a href="#for-families" className="nav-item-link">For Families</a>
          <a href="#for-schools" className="nav-item-link">For Schools & Camps</a>
          <a href="#faq" className="nav-item-link">FAQ</a>
          <a href="#contact" className="nav-item-link">Contact Us</a>
        </nav>

        {/* Right CTA Button matching Frame 1413374311 */}
        <div className="navbar-action-col desktop-only">
          <button 
            type="button" 
            onClick={onWaitlistClick}
            className="navbar-waitlist-btn"
          >
            <span>Join the waitlist</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="nav-btn-arrow">
              <path d="M5.25 12H18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12.75 6L18.75 12L12.75 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          type="button" 
          className="mobile-menu-toggle mobile-only" 
          onClick={onOpenMobileMenu}
          aria-label="Open menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      <style>{`
        .navbar-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          height: 105px;
          background: #FFFFFF;
          z-index: 1000;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }

        .navbar-inner {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .navbar-brand-logo {
          width: 140px;
          height: 39px;
          display: block;
        }

        .navbar-center-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex: 1;
        }

        .nav-item-link {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 18px;
          line-height: 25px;
          color: #25262A;
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-item-link:hover {
          color: var(--color-primary);
        }

        .navbar-action-col {
          flex-shrink: 0;
        }

        /* Exact Figma Dark Pill Button (Frame 1413374311) */
        .navbar-waitlist-btn {
          height: 56px;
          padding: 0 24px;
          background-color: #111318;
          color: #FFFFFF;
          border-radius: 1000px;
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .navbar-waitlist-btn:hover {
          background-color: #222630;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(17, 19, 24, 0.2);
        }

        .nav-btn-arrow {
          width: 24px;
          height: 24px;
          display: block;
          transition: transform 0.2s ease;
        }

        .navbar-waitlist-btn:hover .nav-btn-arrow {
          transform: translateX(4px);
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 1400px) {
          .navbar-inner {
            padding: 0 40px;
          }
          .navbar-center-nav {
            gap: 24px;
          }
          .nav-item-link {
            font-size: 16px;
          }
          .navbar-waitlist-btn {
            font-size: 16px;
            height: 50px;
            padding: 0 20px;
          }
        }

        @media (max-width: 1024px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }
          .navbar-header {
            height: 80px;
          }
          .navbar-inner {
            padding: 0 24px;
          }
          .mobile-menu-toggle {
            padding: 8px;
            cursor: pointer;
            background: transparent;
            border: none;
          }
        }
      `}</style>
    </header>
  );
}
