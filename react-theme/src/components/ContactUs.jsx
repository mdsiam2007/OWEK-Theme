import React, { useState } from 'react';

export default function ContactUs({ onSuccessModalOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Parent or Family Member',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    if (onSuccessModalOpen) {
      onSuccessModalOpen(formData);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">
        {/* Left Column: Heading & Description */}
        <div className="contact-intro-col">
          <div className="contact-badge-pill">
            <span>Contact Us</span>
          </div>
          <h2 className="contact-title">Questions? Let’s talk.</h2>
          <p className="contact-description">
            Whether you’re exploring tuition financing or interested in partnering with OweK, we’d love to hear from you.
          </p>
        </div>

        {/* Right Column: Contact Form Card matching Figma Frame 214:409 */}
        <div className="contact-form-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row-2col">
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label">Full name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe" 
                  required 
                  className="form-input"
                />
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label className="form-label">Your email address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com" 
                  required 
                  className="form-input"
                />
              </div>
            </div>

            {/* Role Select */}
            <div className="form-group">
              <label className="form-label">I am a...</label>
              <div className="select-wrapper">
                <select 
                  name="role" 
                  value={formData.role} 
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Parent or Family Member">Parent or Family Member</option>
                  <option value="School Administrator">School Administrator</option>
                  <option value="Camp Director">Camp Director</option>
                  <option value="Financial Institution or Lending Partner">Financial Institution or Lending Partner</option>
                  <option value="Other">Other</option>
                </select>
                <div className="select-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6F6B65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="form-group">
              <label className="form-label">How can we help?</label>
              <textarea 
                name="message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us a little bit about your tuition financing needs or partnership interest..." 
                required 
                className="form-textarea"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-submit-row">
              <button type="submit" className="contact-submit-btn">
                <span>Send message</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow-icon">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: #F8F5EE;
          padding: 96px 0;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 514px 746px;
          gap: 140px;
          align-items: flex-start;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Left Column */
        .contact-intro-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          padding-top: 10px;
        }

        .contact-badge-pill {
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

        .contact-title {
          font-family: var(--font-heading);
          font-size: 52px;
          font-weight: 700;
          line-height: 1.25;
          color: #111827;
          letter-spacing: -0.8px;
          margin: 0;
          white-space: nowrap;
        }

        .contact-description {
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.55;
          color: #4B5563;
          margin: 0;
          max-width: 460px;
        }

        .contact-description {
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.65;
          color: #4B5563;
          margin: 0;
          max-width: 480px;
        }

        /* Right Column: Contact Form Card matching Figma */
        .contact-form-card {
          background: #FFFFFF;
          border: 1px solid #DDD8CF;
          border-radius: 40px;
          padding: 40px;
          box-shadow: 0 10px 50px rgba(72, 80, 88, 0.10);
          box-sizing: border-box;
          transition: box-shadow 0.25s ease;
        }

        .contact-form-card:hover {
          box-shadow: 0 15px 55px rgba(72, 80, 88, 0.14);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 500;
          color: #111318;
          line-height: 1.4;
        }

        .form-input {
          width: 100%;
          height: 53px;
          border: 1px solid #E5E7EB;
          border-radius: 32px;
          padding: 13px 20px;
          font-family: var(--font-body);
          font-size: 15px;
          color: #111318;
          background: #FFFFFF;
          box-sizing: border-box;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input:focus, .form-textarea:focus, .form-select:focus {
          border-color: #8B72F5;
          box-shadow: 0 0 0 3px rgba(139, 114, 245, 0.15);
          outline: none;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #9CA3AF;
        }

        .select-wrapper {
          position: relative;
          width: 100%;
        }

        .form-select {
          width: 100%;
          height: 51px;
          appearance: none;
          border: 1px solid #E5E7EB;
          border-radius: 32px;
          padding: 12px 44px 12px 20px;
          font-family: var(--font-body);
          font-size: 15px;
          color: #111318;
          background: #FFFFFF;
          cursor: pointer;
          box-sizing: border-box;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .select-arrow {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-textarea {
          width: 100%;
          min-height: 136px;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 14px 20px;
          font-family: var(--font-body);
          font-size: 15px;
          color: #111318;
          background: #FFFFFF;
          box-sizing: border-box;
          resize: vertical;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-submit-row {
          margin-top: 4px;
        }

        /* Pill Submit Button matching Figma Frame 1413374313 */
        .contact-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          height: 56px;
          padding: 16px 28px;
          background-color: #8B72F5;
          color: #FFFFFF;
          border: none;
          border-radius: 9999px;
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .contact-submit-btn:hover {
          background-color: #7B62E5;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 114, 245, 0.35);
        }

        .contact-submit-btn:hover .btn-arrow-icon {
          transform: translateX(3px);
        }

        .btn-arrow-icon {
          transition: transform 0.2s ease;
        }

        @media (max-width: 1200px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-title {
            font-size: 40px;
          }
        }

        @media (max-width: 860px) {
          .contact-section {
            padding: 50px 0;
          }
          .contact-container {
            padding: 0 20px;
            gap: 30px;
          }
          .contact-intro-col {
            align-items: center;
            text-align: center;
            padding-top: 0;
          }
          .contact-title {
            font-size: 32px;
            line-height: 42px;
            white-space: normal;
          }
          .contact-description {
            text-align: center;
            font-size: 16px;
            line-height: 22px;
            max-width: 400px;
          }
          .contact-form-card {
            border-radius: 16px;
            padding: 20px;
          }
          .contact-form {
            gap: 12px;
          }
          .form-row-2col {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .form-input, .form-select {
            height: 51px;
          }
          .form-textarea {
            min-height: 140px;
          }
          .contact-submit-btn {
            width: 100%;
            height: 56px;
          }
        }
      `}</style>
    </section>
  );
}
