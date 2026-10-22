import React from 'react';

export default function Ecosystem({ onPartnerClick }) {
  return (
    <section className="ecosystem-section" id="for-schools">
      <div className="container ecosystem-container">
        {/* Large Cream Block Card */}
        <div className="ecosystem-block-card">
          {/* Section Header */}
          <div className="ecosystem-header">
            <span className="badge-pill yellow badge-fit">For Institution</span>
            <h2 className="ecosystem-title">
              Financial institution or<br className="desktop-break" /> lending partner?
            </h2>
            <div>
              <button type="button" onClick={onPartnerClick} className="purple-underlined-link btn-as-link">
                <span className="link-text-underline">Partner with OweK</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B72F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="link-arrow-icon">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {/* Ecosystem Network Diagram */}
          <div className="ecosystem-network">
            {/* Mobile Connecting SVG Vector Curves (Tree / Branches) matching Figma Vector 6, 8, 7, 9 */}
            <svg 
              viewBox="0 0 358 484" 
              fill="none" 
              className="mobile-connectors-svg"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Top Right curve into Families (Vector 6) */}
              <path 
                d="M 179 86 L 179 218 A 50 50 0 0 0 229 268 L 258 268" 
                stroke="#DDD8CF" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                vectorEffect="non-scaling-stroke" 
              />
              {/* Top Left curve into Lending Partners (Vector 8) */}
              <path 
                d="M 179 86 L 179 218 A 50 50 0 0 1 129 268 L 100 268" 
                stroke="#DDD8CF" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                vectorEffect="non-scaling-stroke" 
              />
              {/* Bottom Right curve into Students (Vector 7) */}
              <path 
                d="M 179 86 L 179 410 A 50 50 0 0 0 229 460 L 258 460" 
                stroke="#DDD8CF" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                vectorEffect="non-scaling-stroke" 
              />
              {/* Bottom Left curve into Schools & Camps (Vector 9) */}
              <path 
                d="M 179 86 L 179 410 A 50 50 0 0 1 129 460 L 100 460" 
                stroke="#DDD8CF" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                vectorEffect="non-scaling-stroke" 
              />
            </svg>

            {/* Left Column Satellite Cards (440px wide on desktop, left grid cell on mobile) */}
            <div className="satellite-col left-col">
              {/* Card 1: Lending Partners */}
              <div className="satellite-card">
                <div className="satellite-icon-circle">
                  <img src="/assets/svg/214_649.svg" alt="" className="satellite-icon-img" />
                </div>
                <div className="satellite-info">
                  <h4 className="satellite-title">Lending Partners</h4>
                  <p className="satellite-desc">Provide the capital and infrastructure</p>
                </div>
              </div>

              {/* Card 2: Schools & Camps */}
              <div className="satellite-card">
                <div className="satellite-icon-circle">
                  <img src="/assets/svg/214_658.svg" alt="" className="satellite-icon-img" />
                </div>
                <div className="satellite-info">
                  <h4 className="satellite-title">Schools & Camps</h4>
                  <p className="satellite-desc">Offer flexible payments to your families</p>
                </div>
              </div>
            </div>

            {/* Connecting SVG Vector Curves Area (Desktop) & Center Hub Capsule */}
            <div className="network-connectors-area">
              <svg 
                viewBox="0 0 318 373" 
                fill="none" 
                className="connectors-svg desktop-connectors"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {/* Top Curve: Connects Lending Partners to Families via oweK Hub */}
                <path 
                  d="M0 63.5H33.0952C49.6638 63.5 63.0952 76.9315 63.0952 93.5V144.5C63.0952 161.069 76.5267 174.5 93.0952 174.5H225.41C241.978 174.5 255.41 161.069 255.41 144.5V93.5C255.41 76.9315 268.841 63.5 285.41 63.5H318" 
                  stroke="#DDD8CF" 
                  strokeWidth="2" 
                />
                {/* Bottom Curve: Connects Schools & Camps to Students via oweK Hub */}
                <path 
                  d="M0 309.5H33.0952C49.6638 309.5 63.0952 296.069 63.0952 279.5V228.5C63.0952 211.931 76.5267 198.5 93.0952 198.5H225.41C241.978 198.5 255.41 211.931 255.41 228.5V279.5C255.41 296.069 268.841 309.5 285.41 309.5H318" 
                  stroke="#DDD8CF" 
                  strokeWidth="2" 
                />
              </svg>

              {/* Center Hub: oweK (146x92px capsule) */}
              <div className="hub-center-capsule">
                <span className="hub-brand-owe">owe</span>
                <span className="hub-brand-k">K</span>
              </div>
            </div>

            {/* Right Column Satellite Cards (440px wide on desktop, right grid cell on mobile) */}
            <div className="satellite-col right-col">
              {/* Card 3: Families */}
              <div className="satellite-card">
                <div className="satellite-icon-circle">
                  <img src="/assets/svg/214_673.svg" alt="" className="satellite-icon-img" />
                </div>
                <div className="satellite-info">
                  <h4 className="satellite-title">Families</h4>
                  <p className="satellite-desc">More opportunities within reach</p>
                </div>
              </div>

              {/* Card 4: Students */}
              <div className="satellite-card">
                <div className="satellite-icon-circle">
                  <img src="/assets/svg/214_683.svg" alt="" className="satellite-icon-img" />
                </div>
                <div className="satellite-info">
                  <h4 className="satellite-title">Students</h4>
                  <p className="satellite-desc">A brighter tomorrow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ecosystem-section {
          background-color: #FFFFFF;
          padding: 60px 0 90px 0;
        }

        .ecosystem-container {
          max-width: 1360px;
          margin: 0 auto;
        }

        /* Large Cream Card with Figma Box Shadow */
        .ecosystem-block-card {
          background-color: #FFF9F2;
          border: 1px solid #DDD8CF;
          border-radius: 40px;
          box-shadow: 0 10px 50px rgba(72, 80, 88, 0.10);
          padding: 44px 40px 48px 40px;
          box-sizing: border-box;
          transition: box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .ecosystem-block-card:hover {
          box-shadow: 0 15px 55px rgba(72, 80, 88, 0.14);
        }

        /* Centered Header */
        .ecosystem-header {
          order: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-bottom: 44px;
        }

        .desktop-break {
          display: block;
        }

        .badge-fit {
          align-self: center !important;
          width: fit-content !important;
        }

        .ecosystem-title {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 700;
          color: #191B1B;
          line-height: 1.25;
          letter-spacing: -0.5px;
          margin: 0;
          text-align: center;
        }

        /* Purple Underlined Link */
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
          margin-top: 4px;
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

        /* Ecosystem Network Diagram */
        .ecosystem-network {
          order: 2;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1200px;
          min-height: 373px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .mobile-connectors-svg {
          display: none;
        }

        /* Satellite Columns (440px wide on desktop) */
        .satellite-col {
          display: flex;
          flex-direction: column;
          gap: 119px;
          width: 440px;
          flex-shrink: 0;
          z-index: 2;
          box-sizing: border-box;
        }

        .satellite-card {
          background: #FFFFFF;
          border: 1px solid #DDD8CF;
          border-radius: 24px;
          padding: 24px 28px;
          height: 127px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-sizing: border-box;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .satellite-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .satellite-icon-circle {
          width: 69px;
          height: 69px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .satellite-icon-img {
          width: 69px;
          height: 69px;
          display: block;
        }

        .satellite-info {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .satellite-title {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.25;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .satellite-desc {
          font-family: var(--font-body);
          font-size: 16px;
          color: #111318;
          line-height: 1.4;
          margin: 0;
        }

        /* Center Connectors & Hub Area */
        .network-connectors-area {
          position: relative;
          flex: 1;
          height: 373px;
          margin: 0 -1px;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .desktop-connectors {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Center Hub Capsule */
        .hub-center-capsule {
          position: relative;
          z-index: 3;
          width: 146px;
          height: 92px;
          background: #FFFFFF;
          border-radius: 119px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease;
        }

        .hub-center-capsule:hover {
          transform: scale(1.05);
        }

        .hub-brand-owe {
          font-family: var(--font-brand);
          font-weight: 700;
          font-size: 37px;
          letter-spacing: -2.2px;
          color: #111318;
          line-height: 1;
        }

        .hub-brand-k {
          font-family: var(--font-brand);
          font-weight: 700;
          font-size: 37px;
          letter-spacing: -2.2px;
          color: #8B72F5;
          line-height: 1;
        }

        @media (max-width: 1200px) {
          .ecosystem-block-card {
            padding: 36px 28px;
          }
          .satellite-col {
            width: 380px;
            gap: 119px;
          }
          .satellite-card {
            padding: 20px 22px;
            height: 127px;
          }
          .satellite-title {
            font-size: 21px;
          }
          .satellite-desc {
            font-size: 14px;
          }
        }

        /* Mobile Viewport (<= 991px) matching Figma frame 242:3262 precisely */
        @media (max-width: 991px) {
          .ecosystem-section {
            padding: 30px 0 40px 0;
            background-color: #FFFFFF;
          }

          .ecosystem-container {
            padding: 0 16px;
            width: 100%;
            box-sizing: border-box;
          }

          .ecosystem-block-card {
            padding: 44px 16px 40px 16px;
            border-radius: 20px;
            background-color: #FFF9F2;
            border: 1px solid #DDD8CF;
            box-shadow: 0 4px 20px rgba(72, 80, 88, 0.05);
            display: flex;
            flex-direction: column;
          }

          /* REORDER: Network diagram to the TOP, Header & CTA to the BOTTOM using CSS Grid */
          .ecosystem-network {
            order: 1;
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            grid-template-areas:
              "hub hub"
              "left right" !important;
            column-gap: 16px !important;
            row-gap: 26px !important;
            position: relative !important;
            padding: 0 !important;
            margin: 0 auto !important;
            width: 100% !important;
            max-width: 380px !important;
            min-height: auto !important;
            align-items: start !important;
            justify-items: stretch !important;
          }

          .ecosystem-header {
            order: 2;
            align-items: center;
            text-align: center;
            margin-top: 36px;
            margin-bottom: 0;
            gap: 14px;
          }

          .desktop-break {
            display: none;
          }

          .ecosystem-title {
            font-size: 28px;
            line-height: 36px;
            font-weight: 700;
            color: #111318;
            margin: 0;
            letter-spacing: -0.5px;
            text-align: center;
          }

          .purple-underlined-link {
            font-size: 18px;
            font-weight: 600;
            color: #111318;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 4px;
          }

          .link-text-underline {
            border-bottom: 1.5px solid #8B72F5;
            padding-bottom: 2px;
          }

          .link-arrow-icon {
            width: 20px;
            height: 20px;
            stroke: #8B72F5;
          }

          /* Mobile Hub Capsule in Grid Area 'hub' (Top Row spanning both columns) */
          .network-connectors-area {
            grid-area: hub !important;
            width: 100% !important;
            height: auto !important;
            position: relative !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            margin: 0 !important;
            z-index: 3 !important;
            flex: none !important;
          }

          .desktop-connectors {
            display: none !important;
          }

          .hub-center-capsule {
            position: relative;
            z-index: 3;
            width: 146px;
            height: 86px;
            background: #FFFFFF;
            border-radius: 119px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            transition: transform 0.2s ease;
            margin: 0 auto;
          }

          .hub-brand-owe {
            font-family: var(--font-brand);
            font-weight: 700;
            font-size: 36px;
            letter-spacing: -2px;
            color: #111318;
            line-height: 1;
          }

          .hub-brand-k {
            font-family: var(--font-brand);
            font-weight: 700;
            font-size: 36px;
            letter-spacing: -2px;
            color: #8B72F5;
            line-height: 1;
          }

          /* Mobile SVG Connector Lines matching exact Figma curved stems */
          .mobile-connectors-svg {
            display: block;
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
          }

          /* Left Column Cards in Grid Area 'left' */
          .satellite-col.left-col {
            grid-area: left !important;
            width: 100% !important;
            max-width: 100% !important;
            flex: none !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            z-index: 2 !important;
            box-sizing: border-box !important;
            margin: 0 !important;
          }

          /* Right Column Cards in Grid Area 'right' */
          .satellite-col.right-col {
            grid-area: right !important;
            width: 100% !important;
            max-width: 100% !important;
            flex: none !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            z-index: 2 !important;
            box-sizing: border-box !important;
            margin: 0 !important;
          }

          .satellite-card {
            background: #FFFFFF;
            border: 1px solid #ECE6DC;
            border-radius: 24px;
            padding: 16px 14px 18px 14px;
            height: 180px;
            min-height: 180px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 14px;
            box-sizing: border-box;
            box-shadow: none;
            transition: transform 0.2s ease;
          }

          .satellite-icon-circle {
            width: 44px;
            height: 44px;
            min-width: 44px;
            min-height: 44px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .satellite-icon-img {
            width: 44px;
            height: 44px;
            display: block;
          }

          .satellite-info {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .satellite-title {
            font-family: var(--font-heading);
            font-size: 16px;
            line-height: 1.25;
            font-weight: 600;
            color: #111318;
            margin: 0;
          }

          .satellite-desc {
            font-family: var(--font-body);
            font-size: 12px;
            line-height: 1.35;
            font-weight: 400;
            color: #585D64;
            margin: 0;
          }
        }
      `}</style>
    </section>
  );
}
