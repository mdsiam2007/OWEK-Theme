import React from 'react';

export default function FeatureComparison({ onWaitlistClick, onPartnerClick }) {
  return (
    <section className="features-section" id="for-families">
      <div className="container features-container">
        {/* ================= CARD 1: Before & After Tuition Comparison ================= */}
        <div className="feature-block-card card-cream">
          <div className="card-two-col card-1-grid">
            {/* Left Column: Visual comparison */}
            <div className="comparison-visual-area">
              <div className="comparison-cards-flow">
                {/* Tuition Due White Card */}
                <div className="tuition-due-card">
                  <span className="badge-pill-tuition">Tuition Due</span>
                  <div className="amount-headline dark">$32,000</div>
                  <div className="due-subtext">Due Aug 1</div>
                </div>

                {/* Arrow Pill (48x32 with stroke #111318) */}
                <div className="comparison-arrow-pill">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>

                {/* With Owek Purple Card */}
                <div className="with-owek-card">
                  <span className="badge-pill-owek">With Owek</span>
                  <div className="amount-headline white">
                    <span className="amount-main">$2,667/</span>
                    <span className="amount-unit"> mo*</span>
                  </div>
                  <div className="owek-subtext">12 monthly paymets</div>
                </div>
              </div>

              <p className="comparison-footnote">
                *Illustrative example only. Actual payment amounts, terms, rates and eligibility will vary and are subject to the financing options available at launch.
              </p>
            </div>

            {/* Right Column: Copy & Link */}
            <div className="card-copy-content">
              <div className="pill-row">
                <span className="badge-pill yellow">Same Education</span>
                <span className="badge-pill purple-outline">A More Flexible Way to Pay.</span>
              </div>

              <h2 className="block-title">
                From one big bill to a brighter future.
              </h2>

              <p className="block-description">
                Turn today’s tuition into manageable monthly payments — so your family can say yes to what matters.
              </p>

              <div>
                <a href="#how-it-works" className="purple-underlined-link">
                  <span className="link-text-underline">See how it works</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B72F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="link-arrow-icon">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CARD 2: For Families ================= */}
        <div className="feature-block-card card-white" id="families-detail">
          <div className="card-two-col card-2-grid">
            {/* Left: Copy */}
            <div className="card-copy-content card-2-copy">
              <span className="badge-pill yellow badge-fit">For Families</span>
              <h2 className="block-title">Say yes to what matters.</h2>
              <p className="block-description">
                More flexibility for private school tuition and summer camp costs.
              </p>
              <div>
                <button type="button" onClick={onWaitlistClick} className="purple-underlined-link btn-as-link">
                  <span className="link-text-underline">Join the family waitlist</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B72F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="link-arrow-icon">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="card-media-wrap">
              <img
                src="/assets/rectangle_6161_90731233.png"
                alt="Mother helping daughter with backpack at home"
                className="card-feature-image"
              />
            </div>
          </div>
        </div>

        {/* ================= CARD 3: For Private Schools ================= */}
        <div className="feature-block-card card-cream" id="for-schools">
          <div className="card-two-col card-3-grid">
            {/* Left: Image */}
            <div className="card-media-wrap">
              <img
                src="/assets/rectangle_6161_7a2b3074.png"
                alt="Two students with backpacks walking on school campus"
                className="card-feature-image"
              />
            </div>

            {/* Right: Copy */}
            <div className="card-copy-content card-3-copy">
              <span className="badge-pill yellow badge-fit">For Private Schools</span>
              <h2 className="block-title">Give families more ways to stay.</h2>
              <p className="block-description">
                Offer eligible families more flexibility around tuition while supporting enrollment and retention.
              </p>
              <div>
                <button type="button" onClick={onPartnerClick} className="purple-underlined-link btn-as-link">
                  <span className="link-text-underline">Become a launch partner</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B72F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="link-arrow-icon">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CARD 4: For Summer Camps ================= */}
        <div className="feature-block-card card-white">
          <div className="camps-vertical-content">
            {/* Centered Copy */}
            <div className="camps-center-header">
              <span className="badge-pill yellow badge-fit">For Summer Camps</span>
              <h2 className="block-title text-center">Make another summer possible.</h2>
              <p className="block-description text-center">
                Give families more flexibility to manage camp tuition while keeping enrollment within reach.
              </p>
              <div>
                <button type="button" onClick={onPartnerClick} className="purple-underlined-link btn-as-link">
                  <span className="link-text-underline">Become a launch partner</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B72F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="link-arrow-icon">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* 4-Image Horizontal Row (in Figma order) */}
            <div className="camps-four-images-row">
              <div className="camp-photo-box">
                <img
                  src="/assets/rectangle_6162_ae4de748.png"
                  alt="Girl riding horse through forest trail"
                  className="camp-photo-img"
                />
              </div>
              <div className="camp-photo-box">
                <img
                  src="/assets/rectangle_6163_f3532683.png"
                  alt="Family kayaking on summer lake"
                  className="camp-photo-img"
                />
              </div>
              <div className="camp-photo-box">
                <img
                  src="/assets/rectangle_6164_7f3c59cf.png"
                  alt="Kids playing limbo game outdoors at camp"
                  className="camp-photo-img"
                />
              </div>
              <div className="camp-photo-box">
                <img
                  src="/assets/rectangle_6161_e093b55d.png"
                  alt="Boy laughing joyfully in water splash"
                  className="camp-photo-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .features-section {
          background-color: #FFFFFF;
          padding: 60px 0 90px 0;
        }

        .features-container {
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        /* Large Card Common Styles */
        .feature-block-card {
          border-radius: 40px;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          box-shadow: 0 10px 50px rgba(72, 80, 88, 0.10);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .feature-block-card:hover {
          box-shadow: 0 15px 55px rgba(72, 80, 88, 0.14);
        }

        .feature-block-card.card-cream {
          background-color: #FFF9F2;
          border: 1px solid #DDD8CF;
        }

        .feature-block-card.card-white {
          background-color: #FFFFFF;
          border: 1px solid #E2E2E2;
        }

        /* 2-Column Card Grid */
        .card-two-col {
          display: grid;
          align-items: center;
          min-height: 352px;
          box-sizing: border-box;
        }

        /* Card 1: Visual Left, Copy Right */
        .card-1-grid {
          grid-template-columns: 535px 1fr;
          gap: 60px;
          padding: 30px 44px;
        }

        /* Card 2: Copy Left, Media Right */
        .card-2-grid {
          grid-template-columns: 1fr 535px;
          gap: 40px;
          padding: 1px 1px 1px 70px;
        }

        /* Card 3: Media Left, Copy Right */
        .card-3-grid {
          grid-template-columns: 535px 1fr;
          gap: 40px;
          padding: 1px 70px 1px 1px;
        }

        /* Media wrapper for Cards 2 and 3 */
        .card-media-wrap {
          width: 535px;
          height: 350px;
          border-radius: 40px;
          overflow: hidden;
          display: flex;
        }

        .card-feature-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 40px;
          transition: transform 0.4s ease;
        }

        .card-media-wrap:hover .card-feature-image {
          transform: scale(1.03);
        }

        /* Copy Content */
        .card-copy-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          max-width: 653px;
        }

        .card-2-copy {
          padding: 30px 0;
        }

        .card-3-copy {
          padding: 30px 0;
        }

        .badge-fit {
          align-self: flex-start !important;
          width: fit-content !important;
          max-width: fit-content !important;
        }

        .pill-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .block-title {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 700;
          line-height: 1.2;
          color: #111318;
          letter-spacing: -0.5px;
          margin: 0;
        }

        .block-description {
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.5;
          color: #383A3A;
          margin: 0;
          max-width: 580px;
        }

        /* Purple Underlined Action Link */
        .purple-underlined-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          cursor: pointer;
          background: transparent;
          border: none;
          padding: 0;
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 600;
          color: #111318;
          transition: all 0.2s ease;
          margin-top: 6px;
        }

        .link-text-underline {
          border-bottom: 1.5px solid #8B72F5;
          padding-bottom: 2px;
          transition: border-color 0.2s ease;
        }

        .link-arrow-icon {
          stroke: #8B72F5;
          transition: transform 0.2s ease;
        }

        .purple-underlined-link:hover .link-arrow-icon {
          transform: translateX(4px);
        }

        .btn-as-link {
          cursor: pointer;
        }

        /* Left Visual Comparison in Card 1 */
        .comparison-visual-area {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 480px;
        }

        .comparison-cards-flow {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tuition-due-card {
          background: #FFFFFF;
          border-radius: 30px;
          padding: 20px;
          width: 205px;
          height: 165px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          box-shadow: 0 10px 50px rgba(72, 80, 88, 0.10);
        }

        .with-owek-card {
          background: #8B72F5;
          border-radius: 30px;
          padding: 20px;
          width: 205px;
          height: 195px;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          box-shadow: 0 10px 50px rgba(72, 80, 88, 0.10);
        }

        .badge-pill-tuition {
          display: inline-block;
          background: #F6F4EE;
          color: #111318;
          font-family: var(--font-brand);
          font-size: 14px;
          font-weight: 500;
          padding: 6px 16px;
          border-radius: 90px;
          align-self: flex-start;
          width: fit-content;
        }

        .badge-pill-owek {
          display: inline-block;
          background: #FFFFFF;
          color: #111318;
          font-family: var(--font-brand);
          font-size: 14px;
          font-weight: 500;
          padding: 6px 16px;
          border-radius: 90px;
          align-self: flex-start;
          width: fit-content;
        }

        .amount-headline {
          font-family: var(--font-body);
          font-weight: 700;
          line-height: 1.1;
        }

        .amount-headline.dark {
          font-size: 34px;
          color: #111318;
          letter-spacing: -0.5px;
        }

        .amount-headline.white {
          color: #FFFFFF;
          display: flex;
          align-items: baseline;
          letter-spacing: -0.5px;
        }

        .amount-main {
          font-size: 30px;
          font-weight: 700;
        }

        .amount-unit {
          font-size: 20px;
          font-weight: 400;
          opacity: 0.95;
        }

        .due-subtext {
          font-family: var(--font-body);
          font-size: 16px;
          color: #111318;
          font-weight: 400;
        }

        .owek-subtext {
          font-family: var(--font-body);
          font-size: 16px;
          color: #FFFFFF;
          font-weight: 400;
        }

        .comparison-arrow-pill {
          width: 48px;
          height: 32px;
          border-radius: 50px;
          border: 1px solid #111318;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: transparent;
        }

        .comparison-footnote {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 20px;
          color: #383A3A;
          max-width: 430px;
          margin: 0;
        }

        /* Card 4: Camps Vertical Layout */
        .camps-vertical-content {
          padding: 44px;
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
          box-sizing: border-box;
        }

        .camps-center-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          max-width: 650px;
        }

        .camps-center-header .badge-fit {
          align-self: center !important;
        }

        .text-center {
          text-align: center;
        }

        .camps-four-images-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
        }

        .camp-photo-box {
          height: 350px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
        }

        .camp-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 24px;
          transition: transform 0.4s ease;
        }

        .camp-photo-box:hover .camp-photo-img {
          transform: scale(1.04);
        }

        @media (max-width: 1200px) and (min-width: 992px) {
          .card-1-grid {
            grid-template-columns: 460px 1fr;
            gap: 40px;
            padding: 30px 36px;
          }
          .card-2-grid {
            grid-template-columns: 1fr 460px;
            gap: 30px;
            padding: 1px 1px 1px 40px;
          }
          .card-3-grid {
            grid-template-columns: 460px 1fr;
            gap: 30px;
            padding: 1px 40px 1px 1px;
          }
          .card-media-wrap {
            width: 460px;
            height: 320px;
          }
          .camps-four-images-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .camp-photo-box {
            height: 260px;
          }
        }

        /* Mobile Responsive Viewports (<= 991px) matching user reference image */
        @media (max-width: 991px) {
          .features-section {
            padding: 40px 0 60px 0;
            overflow-x: hidden;
          }

          .features-container {
            padding: 0 16px;
            gap: 20px;
            max-width: 440px;
            margin: 0 auto;
            box-sizing: border-box;
            width: 100%;
          }

          .feature-block-card {
            border-radius: 28px;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
            box-shadow: 0 4px 25px rgba(0, 0, 0, 0.06);
          }

          /* ================= CARD 1 ================= */
          .card-1-grid {
            display: flex;
            flex-direction: column;
            padding: 40px 10px 44px 10px;
            gap: 36px;
            width: 100%;
            box-sizing: border-box;
          }

          .comparison-visual-area {
            order: -1;
            width: 100%;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
          }

          .comparison-cards-flow {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            max-width: 360px;
            margin: 0 auto;
            box-sizing: border-box;
          }

          .tuition-due-card {
            flex: 1;
            min-width: 0;
            max-width: 154px;
            height: 150px;
            padding: 16px 14px;
            border-radius: 22px;
            background: #FFFFFF;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            box-shadow: 0 8px 26px rgba(72, 80, 88, 0.08);
          }

          .with-owek-card {
            flex: 1;
            min-width: 0;
            max-width: 154px;
            height: 168px;
            padding: 16px 14px;
            border-radius: 22px;
            background: #7C5CFC;
            color: #FFFFFF;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            box-shadow: 0 8px 28px rgba(124, 92, 252, 0.28);
          }

          .badge-pill-tuition {
            font-size: 13px;
            font-weight: 600;
            padding: 4px 12px;
            border-radius: 9999px;
            background: #F3EFEA;
            color: #191B1B;
            align-self: flex-start;
            white-space: nowrap;
          }

          .badge-pill-owek {
            font-size: 13px;
            font-weight: 600;
            padding: 4px 12px;
            border-radius: 9999px;
            background: #FFFFFF;
            color: #191B1B;
            align-self: flex-start;
            white-space: nowrap;
          }

          .amount-headline.dark {
            font-size: 26px;
            line-height: 1.1;
            font-weight: 700;
            letter-spacing: -0.5px;
            color: #111318;
          }

          .amount-headline.white {
            font-size: 26px;
            line-height: 1.1;
            letter-spacing: -0.5px;
            display: flex;
            align-items: baseline;
            flex-wrap: nowrap;
            color: #FFFFFF;
          }

          .amount-main {
            font-size: 26px;
            font-weight: 700;
          }

          .amount-unit {
            font-size: 16px;
            font-weight: 400;
            opacity: 0.95;
          }

          .due-subtext {
            font-size: 12px;
            color: #111318;
            line-height: 1.2;
            font-weight: 400;
            white-space: nowrap;
          }

          .owek-subtext {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.2;
            font-weight: 400;
            white-space: nowrap;
          }

          .comparison-arrow-pill {
            width: 36px;
            height: 24px;
            min-width: 36px;
            border-radius: 9999px;
            border: 1px solid #111318;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #FFFFFF;
            flex-shrink: 0;
            box-sizing: border-box;
          }

          .comparison-arrow-pill svg {
            width: 14px;
            height: 14px;
          }

          .comparison-footnote {
            text-align: center;
            font-size: 12px;
            line-height: 1.45;
            color: #585D64;
            margin-top: 18px;
            max-width: 330px;
            padding: 0 4px;
            box-sizing: border-box;
          }

          .card-copy-content {
            width: 100%;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 16px;
            padding: 0;
            box-sizing: border-box;
          }

          .pill-row {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
          }

          .badge-pill.yellow {
            background-color: #FFE897;
            color: #111318;
            font-size: 15px;
            font-weight: 600;
            padding: 7px 24px;
            border-radius: 9999px;
            white-space: nowrap;
          }

          .badge-pill.purple-outline {
            background-color: #FFFFFF;
            border: 1.5px solid #8B72F5;
            color: #111318;
            font-size: 15px;
            font-weight: 600;
            padding: 7px 24px;
            border-radius: 9999px;
            white-space: nowrap;
          }

          .block-title {
            font-size: 32px;
            line-height: 38px;
            font-weight: 700;
            text-align: center;
            letter-spacing: -0.6px;
            margin: 0;
            max-width: 320px;
            color: #111318;
          }

          .block-description {
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #4B5563;
            max-width: 330px;
            margin: 0;
          }

          .purple-underlined-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 18px;
            font-weight: 600;
            color: #111318;
            margin-top: 6px;
          }

          .link-text-underline {
            border-bottom: 2px solid #8B72F5;
            padding-bottom: 2px;
          }

          /* ================= CARDS 2 & 3 ================= */
          .card-2-grid,
          .card-3-grid {
            display: flex;
            flex-direction: column;
            padding: 0;
            gap: 0;
            width: 100%;
          }

          .card-media-wrap {
            order: -1;
            width: 100%;
            height: 280px;
            border-radius: 28px 28px 0 0;
            overflow: hidden;
          }

          .card-feature-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 28px 28px 0 0;
          }

          .card-2-copy,
          .card-3-copy {
            padding: 24px 16px 36px 16px;
            align-items: center;
            text-align: center;
            gap: 14px;
            box-sizing: border-box;
            width: 100%;
          }

          .badge-fit {
            align-self: center !important;
          }

          /* ================= CARD 4 ================= */
          .camps-vertical-content {
            padding: 20px 16px 36px 16px;
            gap: 24px;
            box-sizing: border-box;
            width: 100%;
            align-items: center;
          }

          .camps-four-images-row {
            order: -1;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            width: 100%;
          }

          .camp-photo-box {
            height: 140px;
            border-radius: 16px;
          }

          .camp-photo-img {
            border-radius: 16px;
          }

          .camps-center-header {
            order: 1;
            padding: 0;
            align-items: center;
            text-align: center;
            gap: 14px;
          }
        }

        @media (max-width: 380px) {
          .tuition-due-card {
            padding: 12px 10px;
            height: 140px;
          }
          .with-owek-card {
            padding: 12px 10px;
            height: 156px;
          }
          .amount-headline.dark, .amount-main {
            font-size: 22px;
          }
          .comparison-footnote {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}
