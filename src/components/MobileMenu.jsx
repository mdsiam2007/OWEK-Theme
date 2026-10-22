import React, { useEffect, useState } from 'react';
import Logo from './Logo';

export default function MobileMenu({ isOpen, onClose }) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';
      // Gentle 40ms buffer before triggering entrance ensures GPU compositing layer is ready
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 40);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      document.body.style.overflow = '';
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 420);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSmoothClose = (e) => {
    if (e) e.preventDefault();
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  const handleLinkClick = (e, targetId) => {
    if (e) e.preventDefault();
    setIsVisible(false);
    setTimeout(() => {
      onClose();
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  if (!shouldRender) return null;

  return (
    <div className={`full-mobile-menu ${isVisible ? 'menu-visible' : 'menu-hidden'}`}>
      {/* Top Header matching Figma Frame 1982250901 */}
      <div className="mobile-menu-header">
        <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="menu-logo-link">
          <Logo size={42} />
        </a>
        <button 
          type="button" 
          className="mobile-menu-close" 
          onClick={handleSmoothClose} 
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Navigation Links List matching Figma Frame 1982250903 */}
      <nav className="mobile-menu-nav">
        <div className="mobile-nav-item">
          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="mobile-nav-link">About</a>
        </div>
        <div className="mobile-nav-item">
          <a href="#for-families" onClick={(e) => handleLinkClick(e, '#for-families')} className="mobile-nav-link">For Families</a>
        </div>
        <div className="mobile-nav-item">
          <a href="#for-schools" onClick={(e) => handleLinkClick(e, '#for-schools')} className="mobile-nav-link">For Schools & Camps</a>
        </div>
        <div className="mobile-nav-item">
          <a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')} className="mobile-nav-link">FAQ</a>
        </div>
        <div className="mobile-nav-item">
          <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="mobile-nav-link">Contact Us</a>
        </div>
      </nav>

      <style>{`
        .full-mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background-color: #FFFFFF;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          padding: 20px 20px 20px 20px;
          box-sizing: border-box;
          will-change: transform;
          transition: transform 0.46s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .full-mobile-menu.menu-hidden {
          transform: translateX(100%);
          pointer-events: none;
        }

        .full-mobile-menu.menu-visible {
          transform: translateX(0);
          pointer-events: auto;
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 53px;
          margin-bottom: 50px;
          box-sizing: border-box;
          opacity: 0;
          transform: translateX(16px);
          transition: opacity 0.38s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: 0.10s;
        }

        .full-mobile-menu.menu-visible .mobile-menu-header {
          opacity: 1;
          transform: translateX(0);
        }

        .menu-logo-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .mobile-menu-close {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform 0.2s ease;
        }

        .mobile-menu-close:hover {
          transform: scale(1.1);
        }

        .mobile-menu-nav {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          box-sizing: border-box;
        }

        .mobile-nav-item {
          height: 45px;
          display: flex;
          align-items: center;
          width: 100%;
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .full-mobile-menu.menu-visible .mobile-nav-item {
          opacity: 1;
          transform: translateX(0);
        }

        /* Smooth staggered cascading entrance for navigation items */
        .full-mobile-menu.menu-visible .mobile-nav-item:nth-child(1) { transition-delay: 0.16s; }
        .full-mobile-menu.menu-visible .mobile-nav-item:nth-child(2) { transition-delay: 0.22s; }
        .full-mobile-menu.menu-visible .mobile-nav-item:nth-child(3) { transition-delay: 0.28s; }
        .full-mobile-menu.menu-visible .mobile-nav-item:nth-child(4) { transition-delay: 0.34s; }
        .full-mobile-menu.menu-visible .mobile-nav-item:nth-child(5) { transition-delay: 0.40s; }

        .mobile-nav-link {
          font-family: var(--font-body);
          font-size: 20px;
          font-weight: 500;
          line-height: 28px;
          color: #111318;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
          width: 100%;
        }

        .mobile-nav-link:hover {
          color: #8B72F5;
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}
