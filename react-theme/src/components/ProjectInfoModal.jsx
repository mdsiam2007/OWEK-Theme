import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Sparkles, Layers, Globe, ShoppingBag, ArrowRight } from 'lucide-react';
import './ProjectInfoModal.css';

export default function ProjectInfoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show popup on visit after short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setIsDismissed(true);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating Trigger Button (visible when modal is closed) */}
      {!isOpen && (
        <button
          type="button"
          onClick={handleOpen}
          className="pim-floating-trigger"
          title="View Project Summary & GitHub Repository"
          aria-label="Open Project Information Modal"
        >
          <span className="pulsing-dot" style={{ width: '8px', height: '8px' }}></span>
          <span>Project Info & GitHub</span>
          <ExternalLink size={14} style={{ opacity: 0.8 }} />
        </button>
      )}

      {/* Modal Overlay & Card */}
      {isOpen && (
        <div 
          className="pim-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <div className="pim-card" role="dialog" aria-modal="true">
            {/* Close Button */}
            <button 
              type="button" 
              onClick={handleClose} 
              className="pim-close-btn"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Badge */}
            <div className="pim-badge">
              <Sparkles size={14} />
              <span>Multi-Platform Theme Suite</span>
            </div>

            {/* Title & Tagline */}
            <h2 className="pim-title">OWEK Theme Ecosystem</h2>
            <p className="pim-description">
              Welcome to the live interactive preview! This project was engineered in <strong>React 19</strong> and has been fully converted into production-ready <strong>WordPress (Elementor Child)</strong> and <strong>Shopify (Online Store 2.0)</strong> themes with 100% design fidelity.
            </p>

            {/* 3 Platforms Grid */}
            <div className="pim-platforms-grid">
              <div className="pim-platform-card">
                <h4>
                  <span style={{ color: '#61DAFB' }}>⚛️</span> React 19
                </h4>
                <p>Vite 6 + JSX component architecture powering this live demo.</p>
              </div>

              <div className="pim-platform-card">
                <h4>
                  <span style={{ color: '#38BDF8' }}>🌐</span> WordPress
                </h4>
                <p>Hello Elementor child theme with customizer controls & PHP parts.</p>
              </div>

              <div className="pim-platform-card">
                <h4>
                  <span style={{ color: '#10B981' }}>🛍️</span> Shopify OS 2.0
                </h4>
                <p>Modular Liquid sections, JSON templates & schema settings.</p>
              </div>
            </div>

            {/* Actions */}
            <div className="pim-actions">
              <a
                href="https://github.com/mdsiam2007/OWEK-Theme"
                target="_blank"
                rel="noopener noreferrer"
                className="pim-btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View on GitHub</span>
                <ExternalLink size={16} />
              </a>

              <button
                type="button"
                onClick={handleClose}
                className="pim-btn-secondary"
              >
                <span>Explore Live Site</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
