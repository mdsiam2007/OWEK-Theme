import React, { useEffect } from 'react';

export default function SuccessModal({ isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button matching Figma Button - Close dialog */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close dialog"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Inner Body matching Figma Frame 1982250921 */}
        <div className="modal-inner">
          <div className="modal-icon-container">
            <img 
              src="/assets/image_1_16a6ff7d.png" 
              alt="Success Checkmark" 
              className="modal-success-icon" 
            />
          </div>

          <h3 className="modal-title">Thank you!</h3>

          <p className="modal-message">
            We've received your query. A member of the OweK team will review your inquiry and get back to you within 24–48 hours.
          </p>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          z-index: 9999;
          animation: modalFadeIn 0.25s ease-out;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content-card {
          width: 100%;
          max-width: 580px;
          background: #FFFFFF;
          border-radius: 28px;
          padding: 64px 44px;
          position: relative;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.22);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          animation: modalScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalScaleUp {
          from { 
            opacity: 0;
            transform: scale(0.92) translateY(12px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #F5F5F5;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .modal-close-btn:hover {
          background: #EBEBEB;
          transform: rotate(90deg);
        }

        .modal-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 480px;
        }

        .modal-icon-container {
          width: 130px;
          height: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .modal-success-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .modal-title {
          font-family: var(--font-heading);
          font-size: 44px;
          font-weight: 700;
          color: #171717;
          line-height: 1.2;
          margin: 0 0 16px 0;
          letter-spacing: -0.6px;
        }

        .modal-message {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.6;
          color: #525252;
          margin: 0;
        }

        @media (max-width: 640px) {
          .modal-content-card {
            padding: 48px 24px 40px 24px;
            border-radius: 20px;
          }
          .modal-close-btn {
            top: 16px;
            right: 16px;
            width: 40px;
            height: 40px;
          }
          .modal-title {
            font-size: 32px;
          }
          .modal-message {
            font-size: 16px;
          }
          .modal-icon-container {
            width: 100px;
            height: 100px;
            margin-bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
}
