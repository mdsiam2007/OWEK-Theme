import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import FeatureComparison from './components/FeatureComparison';
import HowItWorks from './components/HowItWorks';
import Ecosystem from './components/Ecosystem';
import Faq from './components/Faq';
import ContactUs from './components/ContactUs';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import SuccessModal from './components/SuccessModal';
import ProjectInfoModal from './components/ProjectInfoModal';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWaitlistClick = () => {
    scrollToSection('about');
  };

  const handlePartnerClick = () => {
    scrollToSection('contact');
  };

  const handleWaitlistSuccess = (email) => {
    setSuccessModalOpen(true);
  };

  const handleContactSuccess = (formData) => {
    setSuccessModalOpen(true);
  };

  return (
    <div className="app-root">
      {/* Navbar Header */}
      <Navbar 
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        onWaitlistClick={handleWaitlistClick}
      />

      {/* Slide-out Mobile Menu Drawer */}
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onWaitlistClick={handleWaitlistClick}
      />

      <main>
        {/* Section 1: Hero */}
        <Hero onWaitlistSuccess={handleWaitlistSuccess} />

        {/* Section 2: Before/After Comparison & 3 Feature Rows */}
        <FeatureComparison 
          onWaitlistClick={handleWaitlistClick}
          onPartnerClick={handlePartnerClick}
        />

        {/* Section 3: How OweK Works (3 Step Cards) */}
        <HowItWorks />

        {/* Section 4: Institution & Ecosystem Satellite Network */}
        <Ecosystem onPartnerClick={handlePartnerClick} />

        {/* Section 5: Frequently Asked Questions */}
        <Faq />

        {/* Section 6: Contact Us Form */}
        <ContactUs onSuccessModalOpen={handleContactSuccess} />

        {/* Section 7: Final CTA Banner & Footer */}
        <CtaSection onWaitlistSuccess={handleWaitlistSuccess} />
        <Footer />
      </main>

      {/* Contact Form / Waitlist Success Modal */}
      <SuccessModal 
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
      />

      {/* Visitor Welcome & Multi-Platform Information Modal */}
      <ProjectInfoModal />
    </div>
  );
}
