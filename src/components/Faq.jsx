import React, { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      q: "What is OweK?",
      a: "OweK is a financing platform for private school and camp tuition. Instead of paying the full bill at once, families can split tuition into manageable monthly payments — while the school or camp gets paid in full, upfront."
    },
    {
      q: "Is OweK a lender?",
      a: "OweK isn’t a lender. We partner with a licensed financial institution that provides the financing, while OweK handles the application, plan options, and payments. (Adjust this once your actual bank partner and structure are finalized — this needs to match your real legal relationship exactly.)"
    },
    {
      q: "How much will I be able to finance?",
      a: "The amount you’re eligible to finance depends on your application and is generally based on your tuition or camp fee. You’ll see your specific options after applying — there’s no cost or commitment to check."
    },
    {
      q: "Will checking my options affect my credit?",
      a: "No. Checking your eligibility uses a soft check that does not affect your credit score."
    },
    {
      q: "When will OweK launch?",
      a: "We’re building now and onboarding our first school and camp partners. Join the waitlist to be the first to know when OweK is available in your area."
    },
    {
      q: "Can my school or camp offer OweK?",
      a: "Yes. Schools and camps can partner with OweK to offer flexible payment options to families at no cost to enroll as a partner. Reach out through “Become a launch partner” to learn more."
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">
        {/* Left Column: Heading & Intro */}
        <div className="faq-intro-col">
          <div className="faq-badge-pill">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="faq-title">
            You have questions.<br />We’ve got answers.
          </h2>
          <p className="faq-description">
            We’re building OweK with transparency, so you can make the best decision for your family or your school.
          </p>
        </div>

        {/* Right Column: Accordion List with Smooth CSS Grid Animation */}
        <div className="faq-list-col">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-card ${isOpen ? 'open' : ''}`}
                onClick={() => toggle(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(idx);
                  }
                }}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question-text">{faq.q}</h3>
                  <div className="faq-icon-action" aria-label={isOpen ? "Collapse answer" : "Expand answer"}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111318" strokeWidth="2" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" className="icon-line-horiz"></line>
                      <line x1="12" y1="5" x2="12" y2="19" className="icon-line-vert"></line>
                    </svg>
                  </div>
                </div>

                {/* Collapsible Answer Container */}
                <div className="faq-answer-collapse">
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: #FFFFFF;
          padding: 100px 0 140px 0;
        }

        .faq-container {
          display: grid;
          grid-template-columns: 506px 746px;
          gap: 148px;
          align-items: flex-start;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Left Column */
        .faq-intro-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          position: sticky;
          top: 120px;
        }

        .faq-badge-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          border-radius: 90px;
          border: 1px solid #969FB7;
          background: transparent;
          font-family: var(--font-brand);
          font-size: 16px;
          font-weight: 500;
          line-height: 1.4;
          color: #585D64;
          white-space: nowrap;
        }

        .faq-title {
          font-family: var(--font-heading);
          font-size: 52px;
          font-weight: 700;
          line-height: 1.25;
          color: #2F2F2F;
          letter-spacing: -0.8px;
          margin: 0;
        }

        .faq-description {
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.65;
          color: #6F6B65;
          margin: 0;
          max-width: 480px;
        }

        /* Right Column: Accordion */
        .faq-list-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        /* FAQ Card with exact Figma Drop Shadow & Smooth Transition */
        .faq-card {
          background: #FFFFFF;
          border: 1px solid #DDD8CF;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 50px rgba(72, 80, 88, 0.10);
          cursor: pointer;
          box-sizing: border-box;
          user-select: none;
          transition: border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.25s ease;
        }

        .faq-card:hover {
          box-shadow: 0 15px 55px rgba(72, 80, 88, 0.14);
          transform: translateY(-2px);
        }

        /* Open State: Purple Outline Border */
        .faq-card.open {
          border: 1px solid #8B72F5;
          background: #FFFFFF;
        }

        .faq-question-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          width: 100%;
        }

        .faq-question-text {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: #111318;
          line-height: 1.3;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .faq-icon-action {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Smooth Icon Morphing Animation between + and - */
        .icon-line-horiz {
          transition: transform 0.3s ease;
        }

        .icon-line-vert {
          transform-origin: 12px 12px;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
        }

        .faq-card.open .icon-line-vert {
          transform: rotate(90deg) scaleY(0);
          opacity: 0;
        }

        /* Silky Smooth Accordion Height Animation via CSS Grid */
        .faq-answer-collapse {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                      opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-card.open .faq-answer-collapse {
          grid-template-rows: 1fr;
          opacity: 1;
          transition: grid-template-rows 0.38s cubic-bezier(0.16, 1, 0.3, 1), 
                      opacity 0.32s cubic-bezier(0.16, 1, 0.3, 1) 0.05s;
        }

        .faq-answer-inner {
          overflow: hidden;
        }

        .faq-answer-text {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.55;
          color: rgba(21, 19, 19, 0.70);
          margin: 0;
          padding-top: 16px;
        }

        @media (max-width: 1200px) {
          .faq-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .faq-intro-col {
            position: static;
          }
          .faq-title {
            font-size: 40px;
          }
        }

        @media (max-width: 860px) {
          .faq-section {
            padding: 50px 0 60px 0;
          }
          .faq-container {
            padding: 0 20px;
            gap: 30px;
          }
          .faq-intro-col {
            align-items: center;
            text-align: center;
          }
          .faq-title {
            font-size: 32px;
            line-height: 42px;
          }
          .faq-description {
            font-size: 16px;
            line-height: 22px;
            text-align: center;
            max-width: 400px;
          }
          .faq-card {
            border-radius: 16px;
            padding: 16px 14px;
          }
          .faq-accordion-list {
            gap: 12px;
          }
          .faq-question-text {
            font-size: 18px;
            line-height: 24px;
          }
          .faq-answer-text {
            font-size: 16px;
            line-height: 22px;
          }
        }
      `}</style>
    </section>
  );
}
