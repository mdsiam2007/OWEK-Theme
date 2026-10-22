import React, { useState } from 'react';

export default function CtaSection({ onWaitlistSuccess }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    if (onWaitlistSuccess) {
      onWaitlistSuccess(email);
    }
  };

  return (
    <section className="cta-banner-section" id="waitlist">
      {/* Content Container (Centers copy on max-width 1600px grid) */}
      <div className="cta-banner-container">
        <div className="cta-content-col">
          <div className="cta-headings">
            <span className="cta-due-now-text">Due now?</span>
            <h2 className="cta-heading-main">
              More opportunities ahead.
            </h2>
          </div>

          <div className="cta-action-group">
            <form onSubmit={handleSubmit} className="cta-email-form">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                required 
                className="cta-input"
              />
              <button type="submit" className="cta-submit-btn">
                <span>{submitted ? 'Joined!' : 'Join the waitlist'}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="cta-btn-arrow">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>

            <p className="cta-helper-text">
              Join the waitlist. Be the first to know when OweK launches.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image: Covers the entire rest of the right side with a smooth convex curve */}
      <div className="cta-image-wrapper">
        <img 
          src="/assets/010820_oranje-marketing-66.png_a52411e7.png" 
          alt="Students with backpacks on university campus" 
          className="cta-banner-image"
        />
      </div>

      <style>{`
        .cta-banner-section {
          background-color: #8B72F5;
          width: 100%;
          position: relative;
          overflow: hidden;
          min-height: 465px;
          display: flex;
          align-items: center;
        }

        .cta-banner-container {
          max-width: 1600px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding-left: 100px;
          padding-right: 40px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }

        /* Left Column Content */
        .cta-content-col {
          display: flex;
          flex-direction: column;
          gap: 32px;
          max-width: 662px;
          width: 100%;
          padding: 60px 0;
          box-sizing: border-box;
        }

        .cta-headings {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        /* "Due now?" styled with Wild Youth font */
        .cta-due-now-text {
          font-family: 'Wild Youth', cursive, sans-serif;
          font-size: 60px;
          font-weight: 400;
          line-height: 1.25;
          color: #FFFFFF;
          display: block;
          margin-bottom: 2px;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .cta-heading-main {
          font-family: var(--font-heading);
          font-size: 52px;
          font-weight: 700;
          line-height: 1.25;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.5px;
          white-space: nowrap;
        }

        /* Form & Helper Text Group */
        .cta-action-group {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
          max-width: 662px;
        }

        .cta-email-form {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFFFFF;
          border-radius: 9999px;
          height: 74px;
          padding: 9px 9px 9px 24px;
          box-sizing: border-box;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
          transition: box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-email-form:focus-within {
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.4), 0 16px 45px rgba(0, 0, 0, 0.18);
          transform: translateY(-1px);
        }

        .cta-input {
          flex: 1;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-family: var(--font-body);
          font-size: 20px;
          line-height: 28px;
          color: #111318;
          padding: 0 12px 0 0;
          -webkit-appearance: none;
          appearance: none;
        }

        .cta-input::placeholder {
          color: #6F6B65;
          opacity: 1;
        }

        .cta-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          height: 56px;
          padding: 16px 26px;
          background-color: #111318;
          color: #FFFFFF;
          border: none;
          border-radius: 9999px;
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.18s ease;
          box-sizing: border-box;
        }

        .cta-submit-btn:hover {
          background-color: #23262D;
          transform: translateY(-1px);
        }

        .cta-submit-btn:hover .cta-btn-arrow {
          transform: translateX(3px);
        }

        .cta-btn-arrow {
          transition: transform 0.2s ease;
        }

        .cta-helper-text {
          font-family: var(--font-body);
          font-size: 20px;
          line-height: 28px;
          color: #FFFFFF;
          margin: 0;
          padding-left: 4px;
        }

        /* Right Image: Extends all the way to the far right screen edge */
        .cta-image-wrapper {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          left: calc(50% + 33px);
          height: 100%;
          overflow: hidden;
          border-top-left-radius: 1000px;
          border-bottom-left-radius: 1000px;
          z-index: 1;
        }

        .cta-banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1400px) {
          .cta-banner-container {
            padding-left: 60px;
          }
          .cta-due-now-text {
            font-size: 50px;
          }
          .cta-heading-main {
            font-size: 42px;
          }
          .cta-image-wrapper {
            left: calc(50% + 60px);
          }
          .cta-email-form {
            height: 68px;
          }
          .cta-submit-btn {
            height: 52px;
            font-size: 16px;
            padding: 14px 22px;
          }
        }

        @media (max-width: 860px) {
          .cta-banner-section {
            flex-direction: column;
            padding-top: 50px;
            min-height: auto;
          }
          .cta-banner-container {
            padding: 0 20px;
            justify-content: center;
          }
          .cta-content-col {
            max-width: 100%;
            align-items: center;
            text-align: center;
            padding: 0 0 36px 0;
            gap: 28px;
          }
          .cta-headings {
            align-items: center;
            gap: 2px;
          }
          .cta-due-now-text {
            font-size: 40px;
            line-height: 56px;
          }
          .cta-heading-main {
            font-size: 36px;
            line-height: 43px;
            white-space: normal;
          }
          .cta-action-group {
            max-width: 440px;
            width: 100%;
            gap: 16px;
          }
          .cta-email-form,
          .cta-email-form:focus-within {
            display: flex;
            flex-direction: column;
            height: auto;
            background: transparent;
            box-shadow: none !important;
            padding: 0;
            gap: 16px;
            width: 100%;
            border-radius: 0;
          }
          .cta-input {
            width: 100%;
            height: 56px;
            min-height: 56px;
            max-height: 56px;
            flex: none;
            background: #FFFFFF;
            border-radius: 9999px;
            padding: 0 24px;
            font-size: 16px;
            text-align: left;
            box-sizing: border-box;
            color: #111318;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
            border: 1.5px solid transparent;
            outline: none;
            -webkit-appearance: none;
            appearance: none;
            display: block;
            transition: border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .cta-input:focus {
            border-color: #5B3FE0;
            box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.5), 0 12px 35px rgba(0, 0, 0, 0.15);
            transform: translateY(-1px);
            outline: none;
          }
          .cta-submit-btn {
            width: 100%;
            height: 57px;
            min-height: 57px;
            max-height: 57px;
            flex: none;
            border-radius: 9999px;
            font-size: 18px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            box-sizing: border-box;
            border: none;
            cursor: pointer;
          }
          .cta-helper-text {
            font-size: 16px;
            line-height: 22.4px;
            text-align: center;
            padding-left: 0;
            margin-top: 4px;
          }
          .cta-image-wrapper {
            position: relative;
            left: 0;
            right: 0;
            top: auto;
            bottom: auto;
            width: 100%;
            height: 406px;
            border-top-left-radius: 1000px;
            border-top-right-radius: 1000px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
        }

        @media (max-width: 440px) {
          .cta-heading-main {
            font-size: 32px;
            line-height: 40px;
          }
          .cta-image-wrapper {
            height: 340px;
          }
        }
      `}</style>
    </section>
  );
}
