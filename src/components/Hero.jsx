import React, { useState } from 'react';

export default function Hero({ onWaitlistSuccess }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    if (onWaitlistSuccess) onWaitlistSuccess(email);
  };

  return (
    <section className="hero-section" id="about">
      <div className="hero-split-container">
        {/* Left Column: Dark Content */}
        <div className="hero-content-col">
          <div className="hero-inner-content">
            {/* Top Pill Badge matching Figma 214:21 / 242:3815 */}
            <div className="hero-badge-container">
              <div className="hero-badge-pill">
                <span className="hero-badge-text">Opportunity Shouldn’t Wait.</span>
              </div>
            </div>

            {/* Headline: Exactly 3 lines on mobile matching Figma 248:4374 and media_1792505765330.png */}
            <h1 className="hero-title">
              <span className="hero-title-line line-1">
                Your kid’s <span className="opportunity-badge">opportunity</span>
              </span>
              <span className="hero-title-line line-2">shouldn’t depend on</span>
              <span className="hero-title-line line-3">when tuition is due</span>
            </h1>

            {/* Description matching Figma 242:3821 */}
            <p className="hero-description">
              OweK is building flexible financing for private school and camp tuition, giving families more time to pay for what matters now.
            </p>

            {/* Waitlist Form matching Figma 242:3822 */}
            <div className="hero-form-wrapper">
              <form onSubmit={handleSubmit} className="hero-waitlist-form">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required 
                  className="hero-email-input"
                />
                <button type="submit" className="hero-submit-btn">
                  <span>{submitted ? 'Joined!' : 'Join the waitlist'}</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="hero-btn-arrow">
                    <path d="M5 12H19" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 6L19 12L13 18" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>

              <div className="hero-subtext">
                <span>Launching soon. Join for early access.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Students on Campus Image */}
        <div className="hero-image-col">
          <img 
            src="/assets/rectangle_23113_1e59be39.png" 
            alt="Students with backpacks walking down university campus stairs" 
            className="hero-campus-image"
          />
        </div>
      </div>

      <style>{`
        .hero-section {
          background-color: #000C2A;
          position: relative;
          width: 100%;
          min-height: 729px;
          display: flex;
          align-items: stretch;
          overflow: hidden;
        }

        .hero-split-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          min-height: 729px;
        }

        .hero-content-col {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 80px 60px 80px 40px;
          background-color: #000C2A;
        }

        .hero-inner-content {
          max-width: 620px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* Figma Hero Badge Pill */
        .hero-badge-container {
          display: inline-flex;
          align-self: flex-start;
          user-select: none;
        }

        .hero-badge-pill {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          padding: 0 24px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-badge-pill::before {
          content: '';
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%) rotate(40deg);
          width: 48px;
          height: 52px;
          border-radius: 50%;
          background: #A524EF;
          filter: blur(14px);
          pointer-events: none;
        }

        .hero-badge-text {
          position: relative;
          z-index: 1;
          color: #FFFFFF;
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 500;
          white-space: nowrap;
          letter-spacing: -0.2px;
        }

        /* Headline */
        .hero-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 56px;
          line-height: 1.15;
          letter-spacing: -1.5px;
          color: #FFFFFF;
          margin: 0;
        }

        .hero-title-line {
          display: block;
        }

        .hero-title-line.line-1 {
          white-space: nowrap;
        }

        .opportunity-badge {
          display: inline-block;
          background-color: #8B72F5;
          color: #FFFFFF;
          padding: 2px 14px;
          border-radius: 6px;
          margin: 0 4px;
          line-height: 1.15;
        }

        /* Description */
        .hero-description {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.75);
          max-width: 540px;
          margin: 0;
        }

        /* Form */
        .hero-form-wrapper {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 8px;
        }

        .hero-waitlist-form {
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border-radius: var(--radius-pill);
          padding: 6px 6px 6px 24px;
          max-width: 560px;
          height: 64px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
          transition: box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }

        .hero-waitlist-form:focus-within {
          box-shadow: 0 0 0 4px rgba(139, 114, 245, 0.3), 0 16px 45px rgba(0, 0, 0, 0.35);
          transform: translateY(-1px);
        }

        .hero-email-input {
          flex: 1;
          height: 100%;
          border: none;
          background: transparent;
          font-size: 16px;
          color: var(--color-dark);
          padding-right: 12px;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
        }

        .hero-email-input::placeholder {
          color: #8E8A84;
        }

        .hero-submit-btn {
          height: 52px;
          padding: 0 28px;
          font-size: 16px;
          font-weight: 600;
          white-space: nowrap;
          border-radius: var(--radius-pill);
          background-color: #8B72F5;
          color: #FFFFFF;
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.18s ease;
        }

        .hero-submit-btn:hover {
          background-color: #7B62E5;
          transform: translateY(-1px);
        }

        .hero-btn-arrow {
          transition: transform 0.2s ease;
        }

        .hero-submit-btn:hover .hero-btn-arrow {
          transform: translateX(4px);
        }

        .hero-subtext {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.7);
          padding-left: 6px;
        }

        /* Right Image Column */
        .hero-image-col {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 729px;
          background-color: #000C2A;
        }

        .hero-campus-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        @media (max-width: 1280px) {
          .hero-title {
            font-size: 46px;
          }
          .hero-content-col {
            padding: 60px 40px;
          }
        }

        /* Mobile Layout matching media_1792505765330.png and Figma 242:3813 */
        @media (max-width: 860px) {
          .hero-section {
            min-height: auto;
          }
          .hero-split-container {
            display: flex;
            flex-direction: column;
            min-height: auto;
          }
          .hero-image-col {
            order: -1;
            width: 100%;
            height: 350px;
            min-height: 350px;
            max-height: 350px;
          }
          .hero-content-col {
            padding: 30px 20px 50px 20px;
            width: 100%;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            background-color: #000C2A;
          }
          .hero-inner-content {
            max-width: 400px;
            width: 100%;
            margin: 0 auto;
            gap: 30px;
          }
          .hero-badge-container {
            margin-bottom: 0;
          }
          .hero-badge-pill {
            height: 38px;
            padding: 0 18px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .hero-badge-pill::before {
            left: -10px;
            width: 44px;
            height: 48px;
            filter: blur(12px);
          }
          .hero-badge-text {
            font-size: 16px;
            font-weight: 400;
            line-height: 22.4px;
          }
          .hero-title {
            font-size: clamp(28px, 8.4vw, 40px);
            line-height: 1.2;
            letter-spacing: -0.8px;
            margin: 0;
          }
          .hero-title-line {
            display: block;
          }
          .hero-title-line.line-1 {
            white-space: nowrap;
          }
          .opportunity-badge {
            padding: 2px 8px;
            border-radius: 5px;
            margin-left: 6px;
            margin-right: 0;
            line-height: 1.15;
          }
          .hero-description {
            font-size: 16px;
            line-height: 22.4px;
            color: rgba(255, 255, 255, 0.75);
            max-width: 400px;
          }
          .hero-form-wrapper {
            margin-top: 0;
            width: 100%;
            max-width: 400px;
            gap: 0;
          }
          .hero-waitlist-form,
          .hero-waitlist-form:focus-within {
            display: flex;
            flex-direction: column;
            background: transparent;
            padding: 0;
            box-shadow: none !important;
            gap: 16px;
            width: 100%;
            max-width: 100%;
            height: auto;
            border-radius: 0;
          }
          .hero-email-input {
            width: 100%;
            height: 56px;
            min-height: 56px;
            max-height: 56px;
            flex: none;
            background: #FFFFFF;
            border-radius: 9999px;
            padding: 0 24px;
            font-size: 16px;
            box-sizing: border-box;
            color: #111318;
            box-shadow: 0 10px 40px rgba(72, 80, 88, 0.1);
            border: 1.5px solid transparent;
            outline: none;
            -webkit-appearance: none;
            appearance: none;
            display: block;
            transition: border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .hero-email-input:focus {
            border-color: #8B72F5;
            box-shadow: 0 0 0 4px rgba(139, 114, 245, 0.3), 0 12px 35px rgba(139, 114, 245, 0.2);
            transform: translateY(-1px);
            outline: none;
          }
          .hero-email-input::placeholder {
            color: #6F6B65;
          }
          .hero-submit-btn {
            width: 100%;
            height: 57px;
            min-height: 57px;
            max-height: 57px;
            flex: none;
            border-radius: 9999px;
            background-color: #8B72F5;
            color: #FFFFFF;
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
          .hero-subtext {
            text-align: center;
            font-size: 16px;
            line-height: 22.4px;
            color: rgba(255, 255, 255, 0.7);
            padding: 0;
            margin-top: 16px;
          }
        }
      `}</style>
    </section>
  );
}
