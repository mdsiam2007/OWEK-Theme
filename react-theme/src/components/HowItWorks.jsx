import React, { useRef, useState, useEffect } from 'react';

export default function HowItWorks() {
  const steps = [
    {
      step: 'STEP-1',
      title: 'Apply online',
      desc: 'A quick and secure application to see the financing options available to you.',
      svgSrc: '/assets/svg/214_285.svg'
    },
    {
      step: 'STEP-2',
      title: 'Choose a plan',
      desc: 'Select from the financing options available to you.*',
      svgSrc: '/assets/svg/214_306.svg'
    },
    {
      step: 'STEP-3',
      title: 'Get back to what matters',
      desc: 'Once approved, funds are sent directly to your school or camp.',
      svgSrc: '/assets/svg/214_343.svg'
    }
  ];

  const cardsRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const el = cardsRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }
    const ratio = Math.max(0, Math.min(1, el.scrollLeft / maxScroll));
    setScrollProgress(ratio);
  };

  const handleTrackClick = (e) => {
    const track = trackRef.current;
    const container = cardsRef.current;
    if (!track || !container) return;
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const maxScroll = container.scrollWidth - container.clientWidth;
    container.scrollTo({
      left: ratio * maxScroll,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="how-it-works-section" id="how-it-works">
      {/* Background Dark Navy Wave */}
      <div className="how-wave-bg" aria-hidden="true">
        <img 
          src="/assets/svg/214_278.svg" 
          alt="" 
          className="how-wave-img"
        />
      </div>

      <div className="how-it-works-container">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="how-badge-pill">
            <span>How oweK Works</span>
          </div>
          <h2 className="section-title">A simpler way forward.</h2>
        </div>

        {/* 3 Step Cards Grid / Mobile Horizontal Slider */}
        <div className="steps-grid" ref={cardsRef}>
          {steps.map((item, idx) => (
            <div key={idx} className="step-card">
              {/* Mockup Graphic Top Box */}
              <div className="step-graphic-box">
                <img 
                  src={item.svgSrc} 
                  alt={item.title} 
                  className="step-svg-img" 
                />
              </div>

              {/* Card Step Badge */}
              <div className="step-pill-wrapper">
                <span className="step-pill-tag">{item.step}</span>
              </div>

              {/* Card Text Content */}
              <div className="step-card-content">
                <h3 className="step-card-title">{item.title}</h3>
                <p className="step-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Progress Bar Slider */}
        <div className="how-progress-bar-wrap">
          <div 
            className="how-progress-track" 
            ref={trackRef} 
            onClick={handleTrackClick}
            role="scrollbar"
            aria-valuenow={Math.round(scrollProgress * 100)}
            aria-valuemin="0"
            aria-valuemax="100"
            title="Slide or click to view steps"
          >
            <div 
              className="how-progress-thumb"
              style={{
                left: `${scrollProgress * 58}%`
              }}
            ></div>
          </div>
        </div>

        {/* Bottom Disclaimer Pill */}
        <div className="how-disclaimer-container">
          <div className="how-disclaimer-bar">
            <p className="how-disclaimer-text">
              <span className="disclaimer-star">*</span>Final financing terms, eligibility, rates and availability will depend on OweK’s lending program and participating financial institution.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          background-color: #F8F5EE;
          position: relative;
          overflow: hidden;
          padding: 95px 0 85px 0;
        }

        /* Bottom Navy Wave Background */
        .how-wave-bg {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          min-width: 100%;
          height: 485px;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .how-wave-img {
          width: 100%;
          height: 100%;
          object-fit: fill;
          display: block;
        }

        .how-it-works-container {
          position: relative;
          z-index: 2;
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .section-header-center {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          margin-bottom: 55px;
        }

        .how-badge-pill {
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

        .section-title {
          font-family: var(--font-heading);
          font-size: 52px;
          font-weight: 700;
          line-height: 1.25;
          color: #2F2F2F;
          letter-spacing: -0.8px;
          margin: 0;
        }

        /* 3 Cards Grid */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 29px;
          max-width: 1320px;
          margin: 0 auto 48px auto;
        }

        .step-card {
          background: #FFFFFF;
          border-radius: 40px;
          padding: 24px 24px 44px 24px;
          box-shadow: 0 0 53px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
          min-height: 519px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 60px rgba(0, 0, 0, 0.10);
        }

        /* Graphic Area */
        .step-graphic-box {
          width: 100%;
          height: 250px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 24px;
        }

        .step-svg-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* Step Pill Tag */
        .step-pill-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 24px;
        }

        .step-pill-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #E9E4FF;
          color: #8B72F5;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 9999px;
          letter-spacing: 0.5px;
          line-height: 1;
        }

        /* Card Content */
        .step-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          width: 100%;
          max-width: 373px;
        }

        .step-card-title {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 700;
          color: #2F2F2F;
          line-height: 1.3;
          margin: 0;
          letter-spacing: -0.4px;
          text-align: center;
        }

        .step-card-desc {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.45;
          color: #6F6B65;
          margin: 0;
          text-align: center;
        }

        /* Bottom Disclaimer */
        .how-disclaimer-bar {
          background: #FFFFFF;
          border-radius: 40px;
          border: 1px solid #DDD8CF;
          padding: 12px 28px;
          text-align: center;
          max-width: 1162px;
          width: 92%;
          margin: 0 auto;
          box-sizing: border-box;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .how-disclaimer-text {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 500;
          color: #111318;
          line-height: 1.45;
          margin: 0;
        }

        .disclaimer-star {
          color: #F34B58;
          font-weight: 700;
          margin-right: 2px;
        }

        /* Progress Bar (Mobile) */
        .how-progress-bar-wrap {
          display: none;
        }

        @media (max-width: 1100px) {
          .section-title {
            font-size: 38px;
          }
          .how-wave-bg {
            min-width: 100%;
          }
          .how-disclaimer-text {
            font-size: 15px;
          }
        }

        /* Mobile Responsive Viewports (<= 991px) matching user reference screenshot */
        @media (max-width: 991px) {
          .how-it-works-section {
            padding: 50px 0 55px 0;
            background-color: #F8F5EE;
            overflow-x: hidden;
          }

          .how-it-works-container {
            padding: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
          }

          .how-wave-bg {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            min-width: 100%;
            height: 380px;
            transform: none;
            background-color: #000C2A;
            z-index: 1;
          }

          .how-wave-img {
            display: none;
          }

          .section-header-center {
            padding: 0 20px;
            margin-bottom: 28px;
            gap: 14px;
          }

          .section-title {
            font-size: 34px;
            line-height: 42px;
            color: #111318;
          }

          /* Full Screen Width Horizontal Scroll Carousel */
          .steps-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-padding: 0 16px;
            gap: 16px;
            padding: 10px 16px 24px 16px;
            margin-bottom: 20px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            box-sizing: border-box;
            width: 100%;
          }

          .steps-grid::-webkit-scrollbar {
            display: none;
          }

          .step-card {
            flex: 0 0 calc(100vw - 32px);
            width: calc(100vw - 32px);
            min-width: calc(100vw - 32px);
            max-width: calc(100vw - 32px);
            scroll-snap-align: center;
            border-radius: 36px;
            background: #FFFFFF;
            padding: 24px 20px 36px 20px;
            box-sizing: border-box;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            min-height: 500px;
          }

          .step-graphic-box {
            width: 100%;
            height: 240px;
            border-radius: 24px;
            background: linear-gradient(180deg, #F6F2FF 0%, #FFFFFF 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px;
            box-sizing: border-box;
            margin-bottom: 20px;
          }

          .step-pill-wrapper {
            margin-bottom: 14px;
          }

          .step-pill-tag {
            background: #EDE8FF;
            color: #8B72F5;
            font-size: 13px;
            font-weight: 600;
            padding: 5px 16px;
            border-radius: 9999px;
          }

          .step-card-title {
            font-size: 24px;
            line-height: 30px;
            color: #111318;
            margin: 0;
          }

          .step-card-desc {
            font-size: 15px;
            line-height: 22px;
            color: #4B5563;
            max-width: 290px;
            margin: 0 auto;
          }

          /* Progress Bar Slider */
          .how-progress-bar-wrap {
            display: flex;
            justify-content: center;
            padding: 0 20px;
            margin-bottom: 24px;
            width: 100%;
            box-sizing: border-box;
          }

          .how-progress-track {
            width: 100%;
            max-width: 360px;
            height: 8px;
            background: rgba(255, 255, 255, 0.25);
            border-radius: 9999px;
            position: relative;
            cursor: pointer;
            box-sizing: border-box;
          }

          .how-progress-thumb {
            width: 42%;
            height: 100%;
            background: #FFFFFF;
            border-radius: 9999px;
            position: absolute;
            top: 0;
            pointer-events: none;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            transition: left 0.1s ease-out;
          }

          /* Bottom Disclaimer Pill */
          .how-disclaimer-container {
            padding: 0 20px;
            width: 100%;
            box-sizing: border-box;
          }

          .how-disclaimer-bar {
            background: #FFFFFF;
            border: 1px solid #DDD8CF;
            border-radius: 20px;
            padding: 16px 20px;
            max-width: 360px;
            margin: 0 auto;
            text-align: center;
            box-sizing: border-box;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
          }

          .how-disclaimer-text {
            font-size: 13px;
            line-height: 1.45;
            color: #111318;
            margin: 0;
          }
        }

        @media (max-width: 380px) {
          .step-graphic-box {
            height: 210px;
          }
        }
      `}</style>
    </section>
  );
}
